---
layout: page
title: "Q83051: Maintaining OLE Functionality when Reinstalling Windows 3.1"
permalink: /kb/083/Q83051/
---

## Q83051: Maintaining OLE Functionality when Reinstalling Windows 3.1

{% raw %}

	Article: Q83051
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A lot of time may be spent setting up object-linking-and-embeding (OLE)
	information in the Registration database, especially if the only way to
	reregister an application is to run its Setup program again.
	
	It is necessary to preserve OLE information when reinstalling the Microsoft
	Windows operating system version 3.1. A new directory should be created to
	install Windows 3.1 into, and the current REG.DAT file should be copied into
	this directory before installing Windows.
	
	MORE INFORMATION
	================
	
	All OLE registration information is stored in the file REG.DAT in the Windows
	directory. Link information is stored with individual documents that reference
	information in the Registration database.
	
	If Windows 3.1 is installed over Windows 3.0 or Windows 3.1, then the REG.DAT
	file is preserved and OLE and shell registration information for the Windows 3.1
	programs packaged with Windows are added to the database.
	
	The same is true if Windows 3.1 is installed to a directory that already has a
	REG.DAT file in it. Therefore, if you set up a new installation of Windows 3.1
	(rather than an upgrade), a new directory should be created to install Windows
	3.1 into, and the current REG.DAT file should be copied into this directory
	before installing Windows.
	
	If Windows 3.1 has already been installed into a new directory, you can copy the
	REG.DAT file from the old Windows directory to the new Windows directory. Be
	sure Windows is not running when you copy the REG.DAT file. Then use the
	following steps to update the REG.DAT file:
	
	1. Start Windows.
	
	2. From the File menu, choose Run.
	
	3. Type the following command in the Command Line text box:
	
	  REGEDIT SETUP.REG
	
	4. Choose OK.
	
	If there are more .REG files to merge into the database, use File Manager to
	search for them and either double-click each one (press ENTER), or drag and drop
	all of them (at one time or individually) onto the REGEDIT window.
	
	Until Windows 3.1 is reinstalled with OLE information, the old Windows 3.1
	directory and all subdirectories should not be deleted because applications are
	installing OLE servers in the Windows directory tree. In addition, shared DLL
	files may be in the SYSTEM directory.
	
	Additional query words: 3.10 scratch
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
