---
layout: page
title: "Q148778: Mastering VB ErrMsg: Insufficient Memory to Run"
permalink: kb/148/Q148778/
---

## Q148778: Mastering VB ErrMsg: Insufficient Memory to Run

	Article: Q148778
	Product(s): Microsoft Mastering Series
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbmm kbusage
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual Basic 4.0 ISBN 1-55615-913-7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Form containing the DBGRID Control in Mastering Visual Basic
	during or after Lab 5, you receive the following Run-Time error message:
	
	  Insufficient Memory to run operation
	
	After you receive the error, you are unable to restart Mastering Visual Basic
	4.0. If you attempt to restart the program, you receive a General Protection
	Fault in modules:
	
	  DAO2516.DLL
	
	  -or-
	
	  VB 40016.DLL.
	
	Rebooting the system does not fix the problem.
	
	CAUSE
	=====
	
	
	WORKAROUND
	==========
	
	Use the steps below to edit the Mseries.ini:
	
	1. Using a text editor,such as NotePad, open the file Mseries.ini located in the
	  Windows folder.
	
	2. Search for and remove the line:
	
	  Last Item=L05_2004
	
	3. Save the edited Mseries.ini file.
	
	4. Exit Windows and restart the computer.
	
	To prevent this problem from occurring, close Mastering Visual Basic 4.0 before
	starting Lab 5.
	
	MORE INFORMATION
	================
	
	An adverse interaction exists between the Mastering Visual Basic 4.0 VB
	application using a Data Access Object and Visual Basic when the DBGRID control
	is present.
	
	Additional query words: kbvbp400 masters multimedia developer visual basic
	
	======================================================================
	Keywords          : kbenv kbmm kbusage 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	
	=============================================================================
	
