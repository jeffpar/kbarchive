---
layout: page
title: "Q132589: Open Network Files Do Not Appear in Net Watcher"
permalink: /kb/132/Q132589/
---

## Q132589: Open Network Files Do Not Appear in Net Watcher

	Article: Q132589
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Files that are opened by a client computer may not show up immediately or at all
	when you are running the Net Watcher tool on a server.
	
	CAUSE
	=====
	
	There is no file system notification, so Net Watcher periodically refreshes the
	list of open files. The refresh interval is 60 seconds, so there could be a
	delay of up to 60 seconds until open files appear in the list.
	
	Additionally, some programs are written to open a file, read the contents into
	memory, and close the file. When the file is saved, the program opens the file
	again and writes the modified contents into the file. Since these files do not
	remain open on the server, they do not appear in Net Watcher's list of open
	files.
	
	RESOLUTION
	==========
	
	Press the F5 key in Net Watcher to refresh the list of open files. Use caution
	with programs that do not hold their files open when modifying files on a
	server, because they do not enforce exclusive access.
	
	Additional query words: netwatch.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
