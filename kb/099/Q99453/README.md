---
layout: page
title: "Q99453: NET COPY Gives Moved Files New Directory's Permissions"
permalink: kb/099/Q99453/
---

## Q99453: NET COPY Gives Moved Files New Directory's Permissions

	Article: Q99453
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you are in File Manager and drag a Word or Excel file from one directory on a
	LAN Manager server to another directory on the server, the file does not inherit
	the permissions of the new directory. Dragging files is equivalent to doing a
	NET MOVE, which moves the old permissions along with the file.
	
	To move a file and give it the permissions of its new directory, use the NET COPY
	command found on the File menu in File Manager.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
