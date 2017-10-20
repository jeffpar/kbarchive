---
layout: page
title: "Q112212: PC Win: Err Msg: Unable to Access Server Files"
permalink: /kb/112/Q112212/
---

## Q112212: PC Win: Err Msg: Unable to Access Server Files

{% raw %}

	Article: Q112212
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, when you access
	user details (by choosing the Address button, selecting an address, and then
	choosing Details), the following error message may be displayed:
	
	  Unable to access server files
	
	This error can also occur when you try to add an address to the personal address
	book (PAB) and also when Alias.tpl is locked open.
	
	CAUSE
	=====
	
	The TPL subdirectory or the ADMIN.INF file is missing or invalid. This error can
	also occur if the extended information file (XXXXXXXX.INF) corresponding to an
	external postoffice is missing.
	
	RESOLUTION
	==========
	
	If either the TPL subdirectory or the ADMIN.INF file is missing, restore it from
	a copy or a backup.
	
	To find out if the information in the .INF file is invalid, convert the .INF file
	to a text file using steps 1 and 2 on page 155 of the Microsoft Mail for PC
	Networks version 3.2 "Administrator's Guide." Compare each record in this text
	file for the exact number of fields that match the corresponding .TPL file.
	
	Additional query words: 3.00 3.00b 3.20 inf maildata template
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
