---
layout: page
title: "Q33488: QuickBASIC 4.00b UPDATE.DOC: Adds ON UEVENT to Trap Events"
permalink: /kb/033/Q33488/
---

## Q33488: QuickBASIC 4.00b UPDATE.DOC: Adds ON UEVENT to Trap Events

{% raw %}

	Article: Q33488
	Product(s): See article
	Version(s): 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | B_BasicCom | mspl13_basic
	Last Modified: 16-DEC-1989
	
	The following information was taken from the QuickBASIC Version 4.00b
	UPDATE.DOC file. It describes features that have been added since
	Microsoft QuickBASIC Version 4.00 was released.
	
	This information applies to Microsoft QuickBASIC Versions 4.00b and
	4.50 for MS-DOS, to Microsoft BASIC Compiler Versions 6.00b, and to
	Microsoft BASIC PDS Version 7.00 for MS-DOS and MS OS/2.
	
	New Statement: ON UEVENT
	------------------------
	
	Action: Defines an event trap for a user-defined event
	
	Syntax: ON UEVENT GOSUB {<linenumber>|<linelabel>}
	
	Remarks:
	
	In this syntax, <linenumber> or <linelabel> specifies the number or
	label of the first line in the event-trapping subroutine. The ON
	UEVENT statement allows your program to branch to an event-trapping
	subroutine when a user-defined event occurs. ON UEVENT is unlike other
	event-trapping statements in that it allows your program, not an
	external agent, to trigger the event that you expect to trap. For
	example, assume that your system contains a data acquisition device
	that generates an interrupt when data arrives. Most of your
	application is written in QuickBASIC. The main module contains an
	event-trapping subroutine that responds to a user-defined event (in
	this case, the arrival of data from the acquisition device). The
	following three assembly-language procedures are also linked into the
	program:
	
	1. An interrupt handler that responds to the interrupt generated by
	   the acquisition device
	
	2. A routine that installs the interrupt handler in the chain of
	   interrupts
	
	3. A routine that removes the interrupt handler from the chain of
	   interrupts
	
	When the program begins, it calls the assembly-language routine that
	installs the interrupt handler. Then it executes an ON UEVENT
	statement to identify the QuickBASIC subroutine that will be executed
	when a user-defined event occurs. The final step in setting up the
	user-defined event trap is to execute a UEVENT ON statement. Once this
	is done, the BASIC program enters its main execution loop.
	
	When data arrives, the acquisition device generates an interrupt. The
	assembly-language interrupt handler, in turn, calls the routine
	SetUEvent. SetUEvent is a BASIC run-time-library routine that causes a
	user-defined event to occur in BASIC. This special routine can be
	called from any Microsoft language. References to SetUEvent are
	resolved when your program is linked with the run-time library. The
	user-defined event causes the program to branch to the QuickBASIC
	subroutine identified by the previous ON UEVENT statement. At this
	point, the event-trapping subroutine performs whatever processing is
	desired. Just before the application terminates, it calls the
	assembly-language routine that removes the interrupt handler from the
	chain of interrupts.
	
	New Statements: UEVENT ON, OFF, STOP
	------------------------------------
	
	Action: Enable, disable, or suspend event trapping for a user-defined
	        event
	
	Syntax: UEVENT ON
	        UEVENT OFF
	        UEVENT STOP
	
	Remarks:
	
	The effect of UEVENT parallels that of other event-trapping
	statements. For example, UEVENT ON enables a user-defined event trap
	that you previously set up with an ON UEVENT GOSUB statement.

{% endraw %}
