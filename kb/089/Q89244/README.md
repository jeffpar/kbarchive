---
layout: page
title: "Q89244: Banyan VINES 4.0 Does Not Support File Manager 3.0 Drags"
permalink: kb/089/Q89244/
---

## Q89244: Banyan VINES 4.0 Does Not Support File Manager 3.0 Drags

	Article: Q89244
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Windows on Banyan VINES network version 4.0, you cannot drag and drop
	a file in File Manager into a directory. The following message occurs:
	
	  Error Copying/Moving File
	  Cannot replace <drive>:\<directory>: Access Denied
	
	where <drive> and <directory> are the drive and directory into which
	you are trying to drag and drop the file.
	
	Note: This behavior also occurs when using the keyboard to copy or move a file if
	you do not give the full path name AND filename in the To box of the Move or
	Copy dialog box.
	
	This problem is corrected by version 4.1 of Banyan VINES or Banyan VINES 4.1 path
	5 and in Windows 3.1
	
	WORKAROUND
	==========
	
	To work around this problem use the keyboard to copy or move the file, and give
	the full path name AND filename in the To box.
	
	NOTE: This will only work for individual files and not groups of files.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
