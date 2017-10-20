---
layout: page
title: "Q31534: MASM 5.10 EXT.DOC: ReadChar - Returns Next Raw Keystroke"
permalink: /kb/031/Q31534/
---

## Q31534: MASM 5.10 EXT.DOC: ReadChar - Returns Next Raw Keystroke

{% raw %}

	Article: Q31534
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The following information is from the MASM Version 5.10 EXT.DOC
	file.
	   Please note that numbering for both COL and LINE variables begins
	with 0.
	
	/*  ReadChar - returns next raw keystroke
	 *
	 *  The ReadChar intercepts the next keystroke from the user. No action
	 *  is taken, but information about the keystroke is passed. Once
	 *  intercepted, the keystroke cannot be placed back for execution.
	 *
	 *  returns     a long value containing information on the keystroke:
	 *
	 *              byte 0: ASCII code for character
	 *              byte 1: scan code for character
	 *              byte 2: shift info for character:
	 *                          (S)HIFT, (C)TRL, (A)LT, (N)UMLOCK
	 *                          Format is: SxCAxNxx
	 *              byte 3: 0
	 *
	 *  In the format for byte 2, each "x" indicates an unused bit. The
	 *  bits S, C, A, and N are each on or off, depending on the associated
	 *  condition. For example, if the SHIFT, CTRL, and ALT conditions are
	 *  all on, but not the NUMLOCK condition, then byte 2 will be returned as
	 *  10110000. Note: the "N" bit is always 0, unless the the key pressed
	 *  is on the numeric keypad.
	 */
	long pascal ReadChar();

{% endraw %}
