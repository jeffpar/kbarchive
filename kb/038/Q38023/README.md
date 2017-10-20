---
layout: page
title: "Q38023: Reading the ESC Key from the Keyboard with _gets"
permalink: /kb/038/Q38023/
---

## Q38023: Reading the ESC Key from the Keyboard with _gets

{% raw %}

	Article: Q38023
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 15-NOV-1988
	
	When the ESC key is pressed when entering a keyboard string to be read
	with the run-time library function _gets, it clears the keyboard
	buffer, and the only characters that are read by the _gets function
	are those pressed after the ESC key.
	
	This is a DOS command line feature. The _gets function does not
	receive the input of the command line until the ENTER key is pressed.
	Pressing the ESC key clears the keyboard buffer. If you need to accept
	the ESC key stroke, use the _getc function.

{% endraw %}
