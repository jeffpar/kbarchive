---
layout: page
title: "Q32779: Illegal Instruction under CodeView"
permalink: /kb/032/Q32779/
---

## Q32779: Illegal Instruction under CodeView

	Article: Q32779
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist5.10 | mspl13_masm
	Last Modified: 19-JUL-1988
	
	When the following program is assembled with the /Zi switch,
	linked with the /CO switch, and traced under CodeView, an illegal
	instruction occurs:
	
	_text segment
	assume cs:_text
	       db 08h,0c1h
	_text ends
	end
	
	   Microsoft has confirmed this to be a problem in Version 5.10. We
	are researching this problem and will post new information as it
	becomes available.
