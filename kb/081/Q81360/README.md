---
layout: page
title: "Q81360: MS-DOS EDIT and QBASIC Command Line Switches"
permalink: /kb/081/Q81360/
---

## Q81360: MS-DOS EDIT and QBASIC Command Line Switches

{% raw %}

	Article: Q81360
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the command line switches you can use to enhance or
	modify the performance of the MS-DOS Editor and QBasic utilities.
	
	MORE INFORMATION
	================
	
	Editor is a full screen text editor. QBasic is a program that reads instructions
	written in Basic and interprets them into executable computer code.
	
	The EDIT command starts Editor from the command prompt. QBASIC starts the QBasic
	Interpreter from the command prompt. Both Editor and QBasic may be executed with
	a switch or combination of switches to enhance or modify their performance. The
	following is a description of the switches available and how they affect Editor
	and QBasic:
	
	   Switch   Description
	  ------   -----------
	
	  /B       Displays Editor or QBasic in black and white. This switch
	           should be used to run Editor or QBasic on a monochrome
	           monitor with a color graphics card. If the Editor or
	           QBasic pull-down menus do not show the short cut keys on a
	           CGA monitor, then use the /B switch when starting Editor
	           or QBasic.
	
	  /G       Use this switch with a CGA monitor to provide the fastest
	           screen updating.
	
	  /H       Use this switch to display the maximum number of lines on
	           the screen that the monitor supports.
	
	  /NOHI    Editor and QBasic are designed for 16 color monitors, but
	           this switch allows Editor or QBasic to function on an
	           eight color monitor. If Editor or QBasic pull-down menus
	           do not show the short cut keys on a system that does not
	           support bold characters, use the /NOHI switch when
	           starting Editor or QBasic.
	
	The following switches may be used only with QBasic:
	
	  Switch     Description
	  ------     -----------
	
	  /EDITOR    Invokes Editor.
	
	  /MBF       Converts the built-in functions MKS$,MKD$,CVS$, and CVD
	             to MKSMBF$, MKDMBF$, CVSMBF, and CVDMBF, respectively.
	
	  /RUN       Runs a specified Basic program before displaying it.
	
	To start Editor with the /NOHI switch, type the following command at the command
	prompt:
	
	  " edit /nohi " (without the quotation marks)
	
	To start QBasic and run the program MYPROG.BAS, type the following at the command
	prompt:
	
	  " qbasic /run myprog.bas " (without the quotation marks)
	
	Reference(s):
	
	"MS-DOS User's Guide and Reference," versions 5.0 and 5.0a, pages 459, 547
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 EDIT.COM QBASIC.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
