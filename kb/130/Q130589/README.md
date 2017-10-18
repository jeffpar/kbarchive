---
layout: page
title: "Q130589: Error Message &quot;Access Is Denied&quot; Renaming Directory"
permalink: kb/130/Q130589/
---

## Q130589: Error Message &quot;Access Is Denied&quot; Renaming Directory

	Article: Q130589
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you rename a directory on a Microsoft Windows NT server or work- station
	from a Windows 95 client, you may receive the following error message:
	
	  Error Renaming File
	
	  Cannot rename <directory name>: Access is denied. Make sure the disk is
	  not full or write-protected and that the file is not currently in use.
	
	-or-
	
	  Cannot rename <directory name>: There has been a sharing violation. The
	  source or destination file may be in use.
	
	The directory is correctly renamed even though you receive this error message.
	
	CAUSE
	=====
	
	This error message is generated if there is an open file in the directory you
	are trying to rename. The server is holding on to the open file's handle, in
	case the file needs to be opened again shortly. You receive an error message
	because the file appears to be in use.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : msnets diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
