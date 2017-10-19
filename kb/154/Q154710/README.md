---
layout: page
title: "Q154710: Cannot View Long File Names on Network in 16-Bit Programs"
permalink: /kb/154/Q154710/
---

## Q154710: Cannot View Long File Names on Network in 16-Bit Programs

	Article: Q154710
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbuikbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are trying to open a file in a 16-bit program across a CSNW network
	connection, folders or file names may not appear in the dialog boxes.
	
	CAUSE
	=====
	
	16-bit programs may not be able to discern the representation of long file names
	on NetWare servers. This commonly occurs when a program uses the Commdlg.dll
	that is provided with Windows NT 4.0 for dialog boxes.
	
	RESOLUTION
	==========
	
	To access the documents, use one of the following methods:
	
	- Change the name of the folder on the NetWare server so that it does not have
	  a long directory name.
	
	- Change the name of the document to a shorter file name that uses the 8.3
	  naming convention.
	
	- Map a drive directly to the directory that contains the document.
	
	- View the documents by using My Computer or Windows NT Explorer. Double- click
	  the file you want to open.
	
	- If possible, upgrade your 16-bit program to a 32-bit version.
	
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	Q153949CSNW Does Not Support MS-DOS Name Space Correctly
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbui kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
