---
layout: page
title: "Q176187: XCLN: BCC Recipients Not Shown in Sent Items Folder"
permalink: kb/176/Q176187/
---

## Q176187: XCLN: BCC Recipients Not Shown in Sent Items Folder

	Article: Q176187
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Outlook Express version 4.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange and Outlook clients allow you to blind carbon copy (BCC)
	recipients on messages. When you blind carbon copy recipients on a message, send
	the message, and then read the copy of the message in your Sent Items folder,
	you will not see who was BCC'ed on the message.
	
	CAUSE
	=====
	
	This is by product design.
	
	
	RESOLUTION
	==========
	
	Obtain the following fix or wait for the next Microsoft Exchange Server release
	to obtain the new Microsoft Exchange and Outlook Clients.
	
	This fix should have the following timestamp for Windows NT Intel:
	
	  09/16/97  12:08p               128,272 emsui32.dll
	  09/16/97  11:02a             1,209,104 wmsui32.dll
	
	This fix should have the following timestamp for Windows NT Alpha:
	
	  09/16/97  12:10p               176,400 emsui32.dll
	  09/16/97  11:01a             1,652,496 wmsui32.dll
	
	This fix should have the following timestamp for Windows 95:
	
	  09/16/97  11:03a             1,078,032 wmsui32.dll
	
	This fix should have the following timestamp for Windows 3.1:
	
	  09/16/97  12:08p               145,120 emsui.dll
	  09/16/97  11:04a             1,268,608 wmsui.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: bcc
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbOutlookExpressSearch kbZNotKeyword3 kbOutlookExpressNT400Search kbExchange500NT kbOutlookExpress400NT400
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
