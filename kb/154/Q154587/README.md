---
layout: page
title: "Q154587: XCLN: Multiple Move Rules Duplicate Messages in a PST File"
permalink: kb/154/Q154587/
---

## Q154587: XCLN: Multiple Move Rules Duplicate Messages in a PST File

	Article: Q154587
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the delivery location is set to a personal folder(PST)inbox and a single
	message matches the criteria for two or more different rules that move the mail
	to the same PST folder; the MOVETO action will create a duplicate of the message
	in the PST folder being moved to.
	
	WORKAROUND
	==========
	
	Set the delivery location to the server store inbox. Only one copy of a message
	will be moved regardless of how many rules point it to the same folder.
	
	MORE INFORMATION
	================
	
	Inconsistent results are achieved depending on the location of the MOVETO folder
	and the default delivery location of inbound mail. If the MOVETO action is for a
	server store folder, one copy of the message will be moved. If the MOVETO action
	is to a local PST store folder, two copies of the message will be moved. This
	only happens when initial delivery is set to a PST inbox. If the delivery
	location is set to the server store inbox, only one copy of a message will be
	moved regardless of how many rules point it to the same folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: Inbox Assistant
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
