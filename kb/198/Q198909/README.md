---
layout: page
title: "Q198909: XLN: Error Msg: Can't Open This Item. Can't Complete Operation"
permalink: /kb/198/Q198909/
---

## Q198909: XLN: Error Msg: Can't Open This Item. Can't Complete Operation

	Article: Q198909
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.5
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 24-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error may occur when you open a mail message in Microsoft
	Outlook:
	
	  Can't open this item. Could not complete the operation. One or more parameter
	  values are not valid.
	
	CAUSE
	=====
	
	One or more of the message's MAPI properties may be corrupt or invalid.
	
	RESOLUTION
	==========
	
	You may be able to view the MAPI properties of the message using the MDB Viewer
	(Mdbvu32.exe) utility, which is included on the Microsoft Exchange Server CD in
	the Support\Utils directory.
	
	By viewing the message properties, you may be able to determine the corrupt
	property, and possibly reset it to a valid value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbOutlookSearch kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:8.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
