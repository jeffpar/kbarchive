---
layout: page
title: "Q187187: Extra ClipArt Preview Files Unavailable for Multiple Users"
permalink: kb/187/Q187187/
---

## Q187187: Extra ClipArt Preview Files Unavailable for Multiple Users

	Article: Q187187
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple users attempt to access the same file by using the Clip Gallery
	tool, they may receive the following error message:
	
	  Clip Gallery cannot open the previews file \\Server\Share\Folder\File
	  Name.cag. That file is on a network. The file may have been removed or the
	  network server may not be available.
	
	CAUSE
	=====
	
	When you set up Microsoft Office 97, Setup does not copy all of the multimedia
	files on to the computer. Instead, Clip Gallery references the files in the
	original location. These files cannot be shared by multiple users.
	
	RESOLUTION
	==========
	
	To avoid each user from having to connect to the Office 97 server, install the
	extra clipart files on the local Windows NT Terminal Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0, Terminal Server Edition.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
