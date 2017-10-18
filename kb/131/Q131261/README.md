---
layout: page
title: "Q131261: Message Finder Does Not Search Shared or Deleted Folders"
permalink: kb/131/Q131261/
---

## Q131261: Message Finder Does Not Search Shared or Deleted Folders

	Article: Q131261
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Message Finder command from the File menu in Windows for
	Workgroups Mail, shared folders and the Deleted Mail folder are not searched
	when you choose to search all folders.
	
	CAUSE
	=====
	
	Message Finder is designed to search only the mail message (.MMF) file
	structure. Shared folders are stored on the post office in the FOLDERS\PUB
	directory, and are not searched.
	
	RESOLUTION
	==========
	
	To search a shared folder, follow these steps:
	
	1. Create a new private folder.
	
	2. Copy all the messages from the shared folder to the new private folder.
	
	3. Search the new private folder or all folders.
	
	To search the Deleted Mail folder, specifically select the Deleted Mail folder in
	Message Finder.
	
	Additional query words: 3.11 msmail
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
