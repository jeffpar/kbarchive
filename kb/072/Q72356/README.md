---
layout: page
title: "Q72356: Windows Err Msg: Cannot Find the Specified File..."
permalink: /kb/072/Q72356/
---

## Q72356: Windows Err Msg: Cannot Find the Specified File...

	Article: Q72356
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You attempt to run non-Windows applications from the File Manager or Program
	Manager and the following error message is displayed:
	
	  Cannot find the specified file; check to ensure the path and filename are
	  correct.
	
	You check your path statement in Program Item Properties (as the message
	instructs you to do), and it is correct. If you attempt to run non-Windows
	applications from the MS-DOS Executive, Windows does not respond.
	
	This error occurs in enhanced mode only. You can run the application(s) in
	standard and real modes.
	
	CAUSE
	=====
	
	The number of FILES= handles in your CONFIG.SYS file is less than 17.
	
	WORKAROUND
	==========
	
	To solve the problem, in the CONFIG.SYS file, set FILES=30. You can use Notepad
	or any ASCII text editor to edit the CONFIG.SYS file.
	
	Additional query words: 3.00 3.0 err msg 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
