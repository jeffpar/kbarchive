---
layout: page
title: "Q273622: Reader Error Message: StgOpenStorage Failed with 0x80030005"
permalink: kb/273/Q273622/
---

## Q273622: Reader Error Message: StgOpenStorage Failed with 0x80030005

	Article: Q273622
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader, version 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Reader, you may receive the following error message:
	
	  StgOpenStorage failed with 0x80030005
	
	  Access is Denied 0x80038005
	
	  Microsoft Reader cannot access the My Library directory. Please make sure that
	  you have read/write access to this folder.
	
	NOTE: You may receive this error message even if you attempt to open a LIT file
	to which you have write access.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- You do not have write access to the My Library folder that is installed by
	  Microsoft Reader.
	
	- The My Library folder has become corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that you have write access to the My Library
	folder.
	
	NOTE: If you use a Microsoft Windows NT 4.0-based computer, you need to log on to
	the computer with administrative rights or contact your system administrator.
	
	If the above steps do not work, perform the following steps to backup any .lit
	files, uninstall Reader, delete the My Library folder, and then reinstall
	Reader. You may need to back up any .lit files stored in your My Library folder,
	however do not backup the Litpath.lpt file.
	
	Backup .lit Files
	-----------------
	
	Backup .lit files. These files are stored in the My Library folder.
	
	1. Double-click My Computer.
	
	2. Right-click the My Library folder, and then click Copy on the menu that
	  appears.
	
	3. Close My Computer.
	
	4. Right-click the Desktop and then click Paste on the menu that appears.
	
	Uninstall Microsoft Reader
	--------------------------
	
	To uninstall Microsoft Reader:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Double-click Microsoft Reader.
	
	4. Follow the instructions on the screen to uninstall Microsoft Reader.
	
	Delete the My Library Folder
	----------------------------
	
	To delete the My Library folder:
	
	1. Double-click My Computer.
	
	2. Right-click the My Library folder, and then click Delete on the menu that
	  appears.
	
	3. Click Yes to delete this folder.
	
	Install Microsoft Reader
	------------------------
	
	Connect to the following Microsoft Web site to download and install Microsoft
	Reader:
	
	  http://www.microsoft.com/reader
	
	After you download the Microsoft Reader setup, double-click the file to install
	Microsoft Reader.
	
	Additional query words: msreader
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbReaderSearch kbReader150
	Version           : :1.5
	Issue type        : kbprb
	
	=============================================================================
	
