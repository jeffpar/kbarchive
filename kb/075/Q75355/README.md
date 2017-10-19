---
layout: page
title: "Q75355: Automatic Exit to Command Prompt After Running QBasic Program"
permalink: /kb/075/Q75355/
---

## Q75355: Automatic Exit to Command Prompt After Running QBasic Program

	Article: Q75355
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
	
	After running a QBasic program, control is returned to the QBasic editor. To
	automatically return to the command prompt after running a QBasic program, do
	one of the following:
	
	- Add the following line to the end of the QBasic program so that the statement
	  executes at the end of the program:
	
	  " SYSTEM " (without the quotation marks)
	
	- Run the QBasic program with the "/run" option from the command prompt. For
	  example, if the QBasic program is called TEST.BAS, type the following:
	
	  " QBASIC /RUN TEST.BAS " (without the quotation marks)
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
