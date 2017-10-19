---
layout: page
title: "Q119311: CA-dBFast Installation Fails to Create Group Folder"
permalink: /kb/119/Q119311/
---

## Q119311: CA-dBFast Installation Fails to Create Group Folder

	Article: Q119311
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of Computer Associates CA-dBFast, the installation
	program pauses while attempting to create the program group and displays the
	following error:
	
	  Installation program cannot communicate with Program Manager. <OK>
	
	Clicking OK results in an "installation successful" dialog box. CA-dBFast does
	function correctly; however, the program group folder is not created.
	
	CAUSE
	=====
	
	The CA-dBFast version 1.7c and 2.0 installation programs do not issue the
	correct instructions for Windows 95 to create the group folder and icons.
	
	RESOLUTION
	==========
	
	Run CA-dBFast from My Computer or Windows Explorer, or manually create a
	shortcut icon for CA-dBFast. To create a shortcut icon for CA-dBFast on the
	desktop, do the following:
	
	1. Click the Start button, point to Find, click File Or Folders.
	
	2. Search for files named "dbfast" (without the quotation marks).
	
	3. In the search list, use the right (secondary) mouse button to click the
	  dbfast folder.
	
	4. Click Create Shortcut.
	
	MORE INFORMATION
	================
	
	CA-dBFast is manufactured by Computer Associates, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
