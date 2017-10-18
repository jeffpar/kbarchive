---
layout: page
title: "Q127736: PC Win : Err Msg: Microsoft Tutorial - File Error"
permalink: kb/127/Q127736/
---

## Q127736: PC Win : Err Msg: Microsoft Tutorial - File Error

	Article: Q127736
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the demonstration program in versions 3.2 and 3.2a of Microsoft Mail
	for Windows, you may get the following error message:
	
	  Microsoft Tutorial - File Error
	
	RESOLUTION
	==========
	
	NOTE: Running the demo does not require an existing postoffice installation.
	
	If you receive the above error message, follow these steps:
	
	1. Make sure that you are running PLAY.EXE from the MAILEXE directory.
	
	2. If the error still occurs, you will need to create a separate directory and
	  copy the following files from the MAILEXE directory into the new directory:
	
	  PLAY.EXE
	  MSMAIL.LES
	  CBTLIB3.DLL
	  CLKLIB.DEX
	
	  NOTE: If CLKLIB.DEX is not present, an out of memory error will occur.
	
	MORE INFORMATION
	================
	
	In order to run the demonstration program, do the following steps:
	
	- From the Help Menu, choose Demos,
	
	-or-
	
	- Start File Manager. From the File menu, choose Run. Type PLAY MSMAIL.LES in
	  the Command Line box.
	
	  NOTE: You must be in the MAILEXE directory. PLAY.EXE is a file that ships with
	  Microsoft Mail and is used for running the Mail demo program and must be run
	  under Windows.
	
	
	Additional query words: 3.20 3.20a mail demo error
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
