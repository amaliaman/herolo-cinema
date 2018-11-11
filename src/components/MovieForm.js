import React, { Component } from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import * as strings from '../constants/Strings';

const MovieSchema = yup.object().shape({
    title: yup ////////////////////unique
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

const MovieForm = ({ movieToEdit, updateMovie, addMovie, toggle, buttonLabel }) =>
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
            console.log(values);
            if (movieToEdit) {
                updateMovie(values, movieToEdit.id);
            }
            else {
                addMovie(values);
            }
            toggle();
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
            </Form>
        )}
    </Formik>;



// class MovieForm extends Component {
//     constructor() {
//         super();
//         this.state = this.getInitialState();
//     }

//     getInitialState = () => {
//         return {
//             title: '',
//             year: '',
//             director: '',
//             genre: '',
//             runtime: ''
//         };
//     };

//     componentDidMount = () => {
//         if (this.props.movieToEdit) {
//             const { title, year, director, genre, runtime } = this.props.movieToEdit;
//             this.setState({ title, year, director, genre, runtime });
//         }
//     };

//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         if (this.props.movieToEdit) {
//             this.props.updateMovie(this.state, this.props.movieToEdit.id);
//         }
//         else {
//             this.props.addMovie(this.state);
//         }
//         this.setState(this.getInitialState());
//         this.props.toggle();
//     };

//     render() {
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                 <FormGroup>
//                     <Label for="title">{strings.FORM_LABEL_TITLE}</Label>
//                     <Input type="text" name="title" id="title" placeholder={strings.FORM_LABEL_TITLE} onChange={this.handleChange} value={this.state.title} />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="year">{strings.FORM_LABEL_YEAR}</Label>
//                     <Input type="text" name="year" id="year" placeholder={strings.FORM_LABEL_YEAR} onChange={this.handleChange} value={this.state.year} />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="director">{strings.FORM_LABEL_DIRECTOR}</Label>
//                     <Input type="text" name="director" id="director" placeholder={strings.FORM_LABEL_DIRECTOR} onChange={this.handleChange} value={this.state.director} />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="genre">{strings.FORM_LABEL_GENRE}</Label>
//                     <Input type="text" name="genre" id="genre" placeholder={strings.FORM_LABEL_GENRE} onChange={this.handleChange} value={this.state.genre} />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="runtime">{strings.FORM_LABEL_RUNTIME}</Label>
//                     <Input type="text" name="runtime" id="runtime" placeholder={strings.FORM_LABEL_RUNTIME} onChange={this.handleChange} value={this.state.runtime} />
//                 </FormGroup>
//                 <Button color={strings.COLORS.INFO} type="submit">{this.props.buttonLabel}</Button>
//                 <Button outline color={strings.COLORS.SECONDARY} type="button" onClick={this.props.toggle}>{strings.CANCEL_BUTTON}</Button>
//             </Form>
//         );
//     }
// }

export default MovieForm;