---
layout: page
title: "Q201788: PC DB: Can't Send Microsoft Mail in Inbox of Outlook or Exchange"
permalink: /kb/201/Q201788/
---

## Q201788: PC DB: Can't Send Microsoft Mail in Inbox of Outlook or Exchange

	Article: Q201788
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:4.0,5.0,97; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, on platform(s):
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 2000, on platform(s):
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send e-mail by using Microsoft Mail, you may receive the
	following error message:
	
	  Transport not available.
	
	Simple Mail Transfer Protocol (SMTP) and other types of e-mail work correctly.
	
	CAUSE
	=====
	
	This problem can occur if the Network/PO option no longer exists (to find this
	option, click Services on the Tools menu, click Microsoft Mail, click
	Properties, click Delivery, and then click "Address types"). This information is
	obtained from the Master.glb file when the file loads.
	
	RESOLUTION
	==========
	
	To resolve this problem, restore the Master.glb file from a backup.
	
	WORKAROUND
	==========
	
	To work around this problem, install the postoffice to a temporary location, and
	then copy the Master.glb file from the postoffice.
	
	
	
	Additional query words: OL97, OL98, OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,97; :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
