import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import * as strings from '../constants/Strings';

class MovieForm extends Component {
    constructor() {
        super();
        this.state = this.getInitialState();
    }

    getInitialState = () => {
        return {
            title: '',
            year: '',
            director: '',
            genre: '',
            runtime: ''
        };
    };

    componentDidMount = () => {
        if (this.props.movieToEdit) {
            const { title, year, director, genre, runtime } = this.props.movieToEdit;
            this.setState({ title, year, director, genre, runtime });
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.movieToEdit) {
            this.props.updateMovie(this.state, this.props.movieToEdit.id);
        }
        else {
            this.props.addMovie(this.state);
        }
        this.setState(this.getInitialState());
        this.props.toggle();
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="title">{strings.FORM_LABEL_TITLE}</Label>
                    <Input type="text" name="title" id="title" placeholder={strings.FORM_LABEL_TITLE} onChange={this.handleChange} value={this.state.title} />
                </FormGroup>
                <FormGroup>
                    <Label for="year">{strings.FORM_LABEL_YEAR}</Label>
                    <Input type="text" name="year" id="year" placeholder={strings.FORM_LABEL_YEAR} onChange={this.handleChange} value={this.state.year} />
                </FormGroup>
                <FormGroup>
                    <Label for="director">{strings.FORM_LABEL_DIRECTOR}</Label>
                    <Input type="text" name="director" id="director" placeholder={strings.FORM_LABEL_DIRECTOR} onChange={this.handleChange} value={this.state.director} />
                </FormGroup>
                <FormGroup>
                    <Label for="genre">{strings.FORM_LABEL_GENRE}</Label>
                    <Input type="text" name="genre" id="genre" placeholder={strings.FORM_LABEL_GENRE} onChange={this.handleChange} value={this.state.genre} />
                </FormGroup>
                <FormGroup>
                    <Label for="runtime">{strings.FORM_LABEL_RUNTIME}</Label>
                    <Input type="text" name="runtime" id="runtime" placeholder={strings.FORM_LABEL_RUNTIME} onChange={this.handleChange} value={this.state.runtime} />
                </FormGroup>
                <Button color="primary" type="submit">{this.props.buttonLabel}</Button>
            </Form>
        );
    }
}

export default MovieForm;