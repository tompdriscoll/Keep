import React, { useState } from 'react';

export function Nav(){

    return (
        <div id='nav-wrapper'>
            <div id='nav-contents'>
                <div id='nav-left'>
                <svg class='nav-svg'><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                <img class="nav-icon" src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" />
                <span id='keep-text'>Keep</span>
                </div>
                <div id='nav-search'>
                    <div id='search-box'>
                        
                    </div>
                </div>
                <div id='nav-right'>
                    
                </div>
            </div>
        </div>
    )
}