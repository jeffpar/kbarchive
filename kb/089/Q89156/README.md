---
layout: page
title: "Q89156: PRB: &quot;File Access Denied&quot; Error Message When Writing to File"
permalink: kb/089/Q89156/
---

## Q89156: PRB: &quot;File Access Denied&quot; Error Message When Writing to File

	Article: Q89156
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50x 2.60 2.60a | 2.50x 2.
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to write to a file, the action fails and a "File Access Denied"
	(error 1705) error message is displayed.
	
	RESOLUTION
	==========
	
	The steps you must use to resolve this problem depends on the network product
	you are using.
	
	For a LANtastic network, do the following:
	
	1. Check the files and locks on the SHARE command in the AUTOEXEC.BAT file. The
	  following are the recommended settings:
	
	        share /f:5120 /l:500
	
	2. Verify that the .EXE, .RSC, and .OVL files are marked as read- only. If
	  necessary, change the security using the MS-DOS ATTRIB command (for example,
	  ATTRIB +R <filename>).
	
	3. Ensure that the CONFIG.FP file on the server redirects the OVERLAY= to a
	  directory other than the directory containing the FOXPRO.EXE file.
	
	For a Novell network, do the following:
	
	1. Check the user's privileges.
	
	2. Have the user log in as a supervisor and repeat the operation.
	
	3. Ensure that the .EXE, .ESO and .ESL files are marked as read-only. If
	  necessary, change the security using the MS-DOS ATTRIB command (ATTRIB +R
	  <filename>).
	
	LANtastic is manufactured by Artisoft, Inc. and Novell products by Novell, Inc.,
	both vendors independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: VFoxWin FoxWin FoxDos 2.50 2.50a 2.50b novel
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP500
	Version           : 2.00 2.50x 2.60 2.60a | 2.50x 2.
	
	=============================================================================
	
