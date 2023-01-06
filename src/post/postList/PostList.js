import React from 'react';

export const PostList = (props) => {
    const render = props.children || props.render;

    return (
        <section>

            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {/* si no hay TODOS ¡Crea tu primer TODO!*/}
            {(!props.loading && !props.totalPost) && props.onEmpty()}

            {(!props.loading && !props.error) && props.allPost.map(render)}

            <ul> {props.children} </ul>

        </section>
    )
}