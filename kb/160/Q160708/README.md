---
layout: page
title: "Q160708: XCLN: Scanpst Reports Incorrect Values for Folders/Items in File"
permalink: /kb/160/Q160708/
---

## Q160708: XCLN: Scanpst Reports Incorrect Values for Folders/Items in File

{% raw %}

	Article: Q160708
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Scanpst.exe against a personal folder file (.pst) it may return
	incorrect values for "folders found in this file" or "Items found in this file."
	As a result, you may believe mail exists in your pst that you cannot access
	through the Microsoft Exchange client.
	
	MORE INFORMATION
	================
	
	If folders and\or individual mail messages are moved from the pst file to the
	server (mailbox) by means of a drag-and-drop operation, Scanpst shows the values
	for "folders found in this file" or "Items found in this file" as the values
	prior to moving the messages/folders.
	
	Note : If the messages are deleted from a pst or moved to another pst, the values
	are correctly reported by Scanpst.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
