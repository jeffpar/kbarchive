---
layout: page
title: "Q199083: XCLN: Windows 95 Exchange Client's Message Time Stamp is One Hou"
permalink: /kb/199/Q199083/
---

## Q199083: XCLN: Windows 95 Exchange Client's Message Time Stamp is One Hou

	Article: Q199083
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Daylight Savings Time (DST) is set for manual adjustment on both the Windows
	95 Exchange Client and the Exchange Server computer, messages sent from within
	the Exchange Client will show a time stamp of one hour off.
	
	This does not affect Windows NT clients, and does not happen when you use Outlook
	on the Windows 95 clients. If the messages with the incorrect time stamp are
	viewed with the Outlook client, the correct time stamp will be displayed.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Set automatic DST adjustment on the client and/or Exchange server.
	
	- Use the Outlook client.
	
	- Use Windows NT instead of Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	versions 4.0 and 5.0, running on the Windows 95 platform.
	
	
	Additional query words: DST, win95, xcln
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
