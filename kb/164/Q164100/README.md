---
layout: page
title: "Q164100: Cannot Insert File w/ Link Attachment To Original File Option"
permalink: /kb/164/Q164100/
---

## Q164100: Cannot Insert File w/ Link Attachment To Original File Option

	Article: Q164100
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Exchange or Windows Messaging in Windows 95, if you
	attempt to insert a file into a new mail message with the Link Attachment As
	Original File option, you may receive the following error message:
	
	  You must enter the \\computername\sharename followed by the path and filename
	  of the file that you wish to insert as a linked attachment
	
	CAUSE
	=====
	
	This problem occurs when you select a local file that is not on a shared network
	resource without using the Universal Naming Convention (UNC) format
	(\\<computername>\<sharename>\<path>\<filename>).
	
	RESOLUTION
	==========
	
	To insert a file using the Link Attachment To Original File option, use one of
	the following methods:
	
	- In the File Name box, specify the file using the UNC format.
	
	- To access the file by browsing Network Neighborhood, follow these steps:
	
	  1. In the Look In box, click Network Neighborhood.
	
	  2. Double-click the computer you want to access, and then double-click the
	     shared folder you want.
	
	  3. Click the file you want to link, and then click OK.
	
	MORE INFORMATION
	================
	
	When you insert a file into a new message, you can use the Link Attachment As
	Original File option to insert a shortcut link to a file that will be accessed
	using the network. For other network users to access this file, the file must be
	located on a shared network resource either on the local computer or on a remote
	server that can be accessed using the UNC format.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
