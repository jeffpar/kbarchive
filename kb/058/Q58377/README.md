---
layout: page
title: "Q58377: File Manager Directory Window Not Updating"
permalink: /kb/058/Q58377/
---

## Q58377: File Manager Directory Window Not Updating

	Article: Q58377
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.00 3.00a
	
	WINDOWS
	
	kbtool kbdisplay
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses some common File Manager usage problems in Microsoft
	Windows 3.0.
	
	MORE INFORMATION
	================
	
	When File Manager Updates Its Display
	-------------------------------------
	
	Windows File Manager's directory list window updates automatically when files are
	changed, added, or deleted under the following circumstances only:
	
	- If a Windows-based application makes the change and uses proper Windows calls
	  to do so
	
	- If an MS-DOS-based application running under Windows in 386 enhanced mode
	  makes the change, and the SYSTEM.INI setting FileSysChange is set to YES (the
	  default):
	
	  FileSysChange=yes
	
	  Files changed by MS-DOS-based applications running from Windows in real or
	  standard mode will not update File Manager. To update the directory list
	  display, choose Refresh from the Windows menu, or press F5.
	
	Search Window Not Updated
	-------------------------
	
	If you move, delete, or rename a file from the File Manager Search window with
	the mouse, the Search window is correctly updated. However, if you move, delete,
	or rename a file by choosing Move from the File menu, the Search window isn't
	updated.
	
	Microsoft has confirmed this to be a problem in Windows versions 3.0 and 3.0a.
	This problem was corrected in Windows version 3.1.
	
	Network Drives Not Updated
	--------------------------
	
	File Manager's active drive listing includes any network drives to which a
	connection has been established prior to running Microsoft Windows.
	
	Additional drives may be added by choosing the Connect Net Drive command from the
	Disk menu. If a third-party utility is used to establish network connections,
	File Manager's drive list does not update, and the drives are not available in
	File Manager. The only way to update the drive list without closing and
	restarting File Manager is to connect to or disconnect from a network drive
	through File Manager, at which point File Manager rereads and updates the drive
	list.
	
	If a third-party utility establishes or removes network connections, connecting
	or disconnecting a drive through File Manager forces File Manager to update its
	drive list, which will then include all changes made by the third-party network
	utility.
	
	Note that the Refresh command on the Window menu only refreshes the directory
	tree -- not the drive list. Choosing this command does not make the network
	drives available.
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
