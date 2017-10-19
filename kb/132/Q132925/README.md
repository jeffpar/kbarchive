---
layout: page
title: "Q132925: Errors When ATM Is Installed in Windows&#92;Fonts Folder"
permalink: /kb/132/Q132925/
---

## Q132925: Errors When ATM Is Installed in Windows&#92;Fonts Folder

	Article: Q132925
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Adobe Type Manager (ATM) to the Windows\Fonts folder, you will
	receive the following error message when you start the ATM Control Panel
	(Atmcntrl.exe):
	
	  Invalid Fonts Directory
	
	No fonts are displayed and you must choose another folder.
	
	CAUSE
	=====
	
	The Windows\Fonts folder is not a normal folder. This folder has a system
	attribute that cannot be modified. The ATM installation program can set up ATM
	in this folder, but ATM does not function correctly from this folder.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the ATM fonts from the Windows\Fonts folder,
	remove the Atm.ini file from the Windows folder, and then install ATM again.
	Choose a folder other than the Windows\Fonts folder for the installation.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
