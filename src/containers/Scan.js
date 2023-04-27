import React, { useCallback, useContext, useEffect, useState } from 'react';
import Scanner from '../components/Scanner/Scanner';
import { ActionsContext } from '../contexts/context';

const Scan = () => {
    const { actions, setActions } = useContext(ActionsContext);

    const scan = useCallback(async () => {
        if ('NDEFReader' in window) {
            console.log("got it")

            setActions({
                scan: 'scanned',
            });

        }
    }, [setActions]);


    useEffect(() => {
        scan();
    }, [scan]);


    return (
        <>
            {actions.scan === 'scanned' ?
                <div>
                    <p>Scanned</p>
                </div>
                : <Scanner status={actions.scan}></Scanner>}
        </>
    );
};

export default Scan;