---
layout: page
title: "Q34454: MASM 5.10 MACRO.DOC: Process Control"
permalink: /kb/034/Q34454/
---

## Q34454: MASM 5.10 MACRO.DOC: Process Control

{% raw %}

	Article: Q34454
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The following information was taken from the MASM 5.10 MACRO.DOC file.
	
	PROCESS CONTROL
	
	@Exit (4Ch)
	
	Exits to DOS with return code
	
	Syntax:         @Exit [#return]
	
	Argument:       return      = 8-bit code to return to DOS; if
	                              none given, AL is used
	Return:         None
	Registers used: AX
	
	@Exec (4Bh)
	
	Executes a child process or an overlay
	
	Syntax:         @Exec path, params [,[segpath] [,[segparams]
	                [,overlay]]]
	
	Arguments:      path        = Offset of ASCIIZ filespec to be
	                              executed
	                params      = Offset of process parameter block
	                segpath     = Segment of filespec (DS if none given)
	                segparams   = Segment of parameter block (ES if none
	                              given)
	                overlay     = If not defined, normal process
	                              executed; if defined, overlay executed
	Return:         If carry set, error code
	Registers used: AX, SI, and DI; DS and ES if corresponding
	                segments given
	
	@GetRet (4Dh)
	
	Gets the return code of a child process
	
	Syntax:         @GetRet
	
	Argument:       None
	Return:         Return code in AX
	Register used:  AX
	
	@TSR (31h)
	
	Terminates a program, but leaves it resident in memory
	
	Syntax:         @TSR paragraphs [,#return]
	
	Arguments:      return      = Code to return to DOS; if none, AL
	                              used
	                paragraphs  = Memory in paragraphs (16 bytes) to
	                              allocate for resident program
	Return:         None
	Registers used: AX and DX

{% endraw %}
