---
layout: page
title: "Q97422: Word for Windows Setup Err: Unable to Update WWORD20.INF"
permalink: /kb/097/Q97422/
---

## Q97422: Word for Windows Setup Err: Unable to Update WWORD20.INF

	Article: Q97422
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 2.0a-CD,2.0c-CD
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows and Bookshelf, Multimedia Edition, versions 2.0a-CD, 2.0c-CD 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When trying to install the Word for Windows and Bookshelf integration from a
	networked CD-ROM, you may receive the following error message:
	
	  Unable to Update WWORD20.INF. If your disk is write-protected, remove the
	  protection from the disk.
	
	This error will cause Word for Windows setup to fail. Word for Windows with
	Bookshelf integration can only be installed from a local CD-ROM drive.
	
	MORE INFORMATION
	================
	
	Word for Windows Setup cannot run across a network CD-ROM drive. The Setup
	program does not recognize that it is being installed from a read-only device.
	Word Setup will ask for the customer and company name and then try to write this
	information to the WWORD20.INF file. Because the CD-ROM is read-only, this file
	cannot be changed; therefore, the error occurs.
	
	Additional query words: 2.00a-CD 2.00c-CD 2.0c-CD video sound 1.00 1991 1992 edition workgroups W_WinWord multimedia multi-media multi media Word/Bookshelf net install kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbBookshelfSearch kbWordBookshelf200a kbWordBookshelf200c
	Version           : :2.0a-CD,2.0c-CD
	
	=============================================================================
	
