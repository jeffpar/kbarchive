---
layout: page
title: "Q34664: Call to @Mkthread Macro Results in Phase Error"
permalink: /kb/034/Q34664/
---

## Q34664: Call to @Mkthread Macro Results in Phase Error

{% raw %}

	Article: Q34664
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist5.10 | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The program below generates a phase error on the call to the @Mkthread
	macro that only includes the line "mov cx, seg fproc". The similar
	MASM statements do not generate a phase error.
	
	The problem has nothing to do with the macro. The difference between
	the MASM statements is moving into CX versus AX.
	
	Microsoft has confirmed this to be a problem in Version 5.10. We are
	researching this problem and will post new information as it becomes
	available.
	
	To work around this problem, change the macro line to the following:
	
	MOV CX, WORD PTR (SEG PROG)
	
	The following sample code demonstrates the problem:
	
	.model large
	@mkthread    macro      prog
	             mov cx,seg prog
	             endm
	
	.code
	mov ax, seg fproc
	@mkthread fproc
	
	fproc       proc
	mov ax,seg fproc
	fproc       endp
	end

{% endraw %}
