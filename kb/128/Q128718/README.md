---
layout: page
title: "Q128718: PRB: Invalid Path or File Name Error on Novell Netware"
permalink: kb/128/Q128718/
---

## Q128718: PRB: Invalid Path or File Name Error on Novell Netware

	Article: Q128718
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Visual FoxPro on a Novell Netware shell, the SET DEFAULT or CD
	commands yield an "Invalid Path or File Name" error message.
	
	CAUSE
	=====
	
	The NET.CFG or SHELL.CFG Novell Netware configuration files, do not contain a
	SHOW DOTS statement. SHOW DOTS displays "." and ".." directory listings for
	network directories and is OFF by default. As these entries represent the
	current and previous directories, navigating along the directory structure can
	be difficult if they are not available.
	
	RESOLUTION
	==========
	
	Include the following statement in your SHELL.CFG or NET.CFG:
	
	     SHOW DOTS=ON
	
	STATUS
	======
	
	The error is not a bug in Visual FoxPro; it is the result of the Novell Netware
	architecture.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	With no SHOW DOTS command or with SHOW DOTS = OFF, type the following in the
	Command window:
	
	     SET DEFA TO <valid drive letter>
	
	Then type any of the following commands:
	
	     SET DEFA TO ..
	     SET DEFA TO ..\<valid subdirectory>
	     SET DEFA TO .\<valid subdirectory>
	     SET DEFA TO \<valid subdirectory>
	
	REFERENCES
	==========
	
	For more information about the SHOW DOTS statement, refer to your Novell Netware
	documentation.
	
	Netware is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	For more information about Novell and Windows, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q81486 Novell SHELL.CFG and Windows
	
	
	Additional query words: VFoxWin novel
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	
	=============================================================================
	
