---
layout: page
title: "Q126885: PC Win: Message Finder Does Not Search Shared or Group Folders"
permalink: /kb/126/Q126885/
---

## Q126885: PC Win: Message Finder Does Not Search Shared or Group Folders

{% raw %}

	Article: Q126885
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Message Finder option under the File menu will not work on shared or group
	folders.
	
	CAUSE
	=====
	
	The Message Finder is designed to work on the mail message file (MMF) structure.
	Because shared or group folders are stored under the \MAILDATA\FOLDERS
	directory, the Mail for Windows will not find the messages.
	
	RESOLUTION
	==========
	
	1. Create a private folder.
	
	2. Copy the contents of the shared folder to the private folder.
	
	3. Run the Message Finder.
	
	
	Additional query words: 3.00 3.00b 3.20 3.20a search find locate
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
