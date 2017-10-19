---
layout: page
title: "Q30491: Structures and Segment Overrides"
permalink: /kb/030/Q30491/
---

## Q30491: Structures and Segment Overrides

	Article: Q30491
	Product(s): See article
	Version(s): 4.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist4.00 | mspl13_masm
	Last Modified: 17-JUN-1988
	
	Problem:
	   When I do a segment override, using structures, I get an "Invalid
	Object Module" error when I link.
	
	Response:
	   This is a known problem in Version 4.00 of MASM. This problem was
	corrected in Version 5.10.
	   The following example illustrates the problem:
	
	;
	; This is broken under 4.00 w\link 3.x.
	;
	NODE struc
	     integer  dw ?
	     next     dw ?
	NODE ends
	;
	;
	_DATA  segment
	_DATA  ends
	;
	;
	_TEXT segment
	      mov si, offset _DATA:next ;   IT WORKS with ds:next
	      mov ax, 4C00h             ;   Exit to DOS
	      int 21h
	_TEXT ends
	      end
