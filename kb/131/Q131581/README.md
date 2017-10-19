---
layout: page
title: "Q131581: Aborted File Transfer Deletes File on Remote Computer"
permalink: /kb/131/Q131581/
---

## Q131581: Aborted File Transfer Deletes File on Remote Computer

	Article: Q131581
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are copying a file over the network to a directory containing a file
	with the same name, if the file transfer process is canceled or fails, the file
	being replaced is deleted.
	
	This behavior also occurs when you are using Dial-Up Networking.
	
	CAUSE
	=====
	
	During the file transfer process, the destination file (the file that is to be
	replaced) is deleted after you confirm that you want to replace a file. If the
	file transfer process is canceled or fails, the deleted destination file cannot
	be restored. The file is not moved to the Recycle Bin and cannot be recovered.
	
	RESOLUTION
	==========
	
	If the file transfer process is canceled or fails, repeat the transfer.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Recycle Bin tracks only files deleted locally using Windows Explorer, My
	Computer, or a Windows 95-compatible shell program.
	
	A file that is deleted as part of a file transfer process between two computers
	is not moved to the Recycle Bin.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
