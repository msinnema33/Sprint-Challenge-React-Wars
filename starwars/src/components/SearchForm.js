import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const SearchForm = (props) => {
    return(
        <Form>
            <FormGroup>
                <Label for="exampleSearch">Character Search</Label>
                <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Find a character"
                />
            </FormGroup>
        </Form>


    )
}

export default SearchForm;