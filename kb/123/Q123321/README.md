---
layout: page
title: "Q123321: PC Win: Old MMF File Not Deleted from Server"
permalink: /kb/123/Q123321/
---

## Q123321: PC Win: Old MMF File Not Deleted from Server

{% raw %}

	Article: Q123321
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When moving the mail message file (MMF) from the server to the local hard disk.
	The following error message is displayed:
	
	  Your message file was moved successfully, but the old file was not deleted.
	
	CAUSE
	=====
	
	The network user does not have erase or delete rights to the MMF subdirectory of
	the mail database. The file will be moved, but the old MMF file will still
	reside in the MMF subdirectory of the mail database.
	
	RESOLUTION
	==========
	
	Grant erase to the network user via the necessary utilities in the network
	operating system.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
