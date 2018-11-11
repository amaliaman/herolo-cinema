import React from 'react';
import { Button, FormGroup, Label, Row } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import * as strings from '../constants/Strings';
import AlertMessage from './AlertMessage';

const MovieSchema = yup.object().shape({
    title: yup
        .string()
        .required(strings.VALIDATION.REQUIRED),
    year: yup
        .number()
        .required(strings.VALIDATION.REQUIRED)
        .min(1800, strings.VALIDATION.YEAR)
        .max(9999, strings.VALIDATION.YEAR)
        .integer(),
    director: yup
        .string()
        .required(strings.VALIDATION.REQUIRED),
    genre: yup
        .string()
        .required(strings.VALIDATION.REQUIRED),
    runtime: yup
        .string()
        .required(strings.VALIDATION.REQUIRED)
});

const MovieForm = ({ movieToEdit, updateMovie, addMovie, toggle, buttonLabel, errorMessage }) =>
    <Formik
        initialValues={{
            title: movieToEdit ? movieToEdit.title : '',
            year: movieToEdit ? movieToEdit.year : '',
            director: movieToEdit ? movieToEdit.director : '',
            genre: movieToEdit ? movieToEdit.genre : '',
            runtime: movieToEdit ? movieToEdit.runtime : ''
        }}
        validationSchema={MovieSchema}
        onSubmit={values => {
            if (movieToEdit) {
                updateMovie(values, movieToEdit.id);
            }
            else {
                addMovie(values);
            }
        }}
    >
        {({ errors, touched }) => (
            <Form>
                <FormGroup>
                    <Label for="title">{strings.FORM_LABEL_TITLE}</Label>
                    <Field name="title" id="title" placeholder={strings.FORM_LABEL_TITLE} className="form-control" type='text' />
                    {errors.title && <div className='validation-error'>{errors.title}</div>}
                </FormGroup>
                <FormGroup>
                    <Label for="year">{strings.FORM_LABEL_YEAR}</Label>
                    <Field name="year" id="year" placeholder={strings.FORM_LABEL_YEAR} className="form-control" type='number' />
                    {errors.year && <div className='validation-error'>{errors.year}</div>}
                </FormGroup>
                <FormGroup>
                    <Label for="director">{strings.FORM_LABEL_DIRECTOR}</Label>
                    <Field name="director" id="director" placeholder={strings.FORM_LABEL_DIRECTOR} className="form-control" type='text' />
                    {errors.director && <div className='validation-error'>{errors.director}</div>}
                </FormGroup>
                <FormGroup>
                    <Label for="genre">{strings.FORM_LABEL_GENRE}</Label>
                    <Field name="genre" id="genre" placeholder={strings.FORM_LABEL_GENRE} className="form-control" type='text' />
                    {errors.genre && <div className='validation-error'>{errors.genre}</div>}
                </FormGroup>
                <FormGroup>
                    <Label for="runtime">{strings.FORM_LABEL_RUNTIME}</Label>
                    <Field name="runtime" id="runtime" placeholder={strings.FORM_LABEL_RUNTIME} className="form-control" type='text' />
                    {errors.runtime && <div className='validation-error'>{errors.runtime}</div>}
                </FormGroup>

                <Button color={strings.COLORS.INFO} type="submit">{buttonLabel}</Button>
                <Button outline color={strings.COLORS.SECONDARY} type="button" onClick={toggle}>{strings.CANCEL_BUTTON}</Button>

                {errorMessage &&
                    <Row form>
                        <AlertMessage message={errorMessage} color={strings.COLORS.DANGER} />
                    </Row>}
            </Form>
        )}
    </Formik>;

export default MovieForm;