---
layout: page
title: "Q181683: Project SBS Page xxii: Setup Directions Do Not Work"
permalink: kb/181/Q181683/
---

## Q181683: Project SBS Page xxii: Setup Directions Do Not Work

	Article: Q181683
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Project 98 Step by Step ISBN 1-57231-605-5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to perform step 8 on page xxii, or attempt to perform step 2 on
	page xxiii, you will receive the following error message:
	
	  File Not Found.
	
	CAUSE
	=====
	
	All of the files on the Microsoft Project 98 Step by Step CD-ROM are found in
	the "Project CD" folder. This folder must be added to the path for the files to
	work correctly.
	
	
	WORKAROUND
	==========
	
	On page xxiii, replace "d:\setup" with "d:\Project CD\setup".
	
	NOTE: If you are using Windows 95 with MS-DOS CD-ROM drivers, this command may
	not work. The \Project CD folder may appear in a shortened form, such as
	\Projec~9. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q181682 Project SBS: Cannot Find Installation Folder On CD-ROM
	
	On page xxiii, replace "d:\msn\msnstart.exe" with "d:\Project
	CD\msn\msnstart.exe."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in "Microsoft Project 98 Step by
	Step."
	
	
	Additional query words: press ms_press 1-57231-605-5
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
