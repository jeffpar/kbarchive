---
layout: page
title: "Q160827: ErrMsg: Failed to Purged the NBT Remote Cache Table"
permalink: /kb/160/Q160827/
---

## Q160827: ErrMsg: Failed to Purged the NBT Remote Cache Table

	Article: Q160827
	Product(s): Microsoft Windows NT
	Version(s): Win95
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you attempt to carry out the NBTSTAT -R command on a Windows 95 client,
	the following error message is displayed:
	
	  Failed to Purged the NBT Remote Cache Table
	
	CAUSE
	=====
	
	The file LMHOSTS is missing, misplaced, or misspelled.
	
	WORKAROUND
	==========
	
	The file should be found in the C:\Windows directory and should be named:
	
	  LMHOSTS
	
	There should be no trailing dot(.) or file extension on this file.
	
	If you are using Windows Explorer to find the file, perform the following steps:
	
	1. Start Windows Explorer.
	
	2. From the View menu, click Options.
	
	3. Click the Show All Files radio button, then click to clear the Hide file
	  extensions for known file types check box.
	
	Additional query words: -c netbios name cache lmhosts.txt nbtstat win95
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win95
	
	=============================================================================
	
