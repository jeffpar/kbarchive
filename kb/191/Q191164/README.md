---
layout: page
title: "Q191164: XCLN: Outlook Fails to Connect, Causes AE at Emsui32.dll"
permalink: /kb/191/Q191164/
---

## Q191164: XCLN: Outlook Fails to Connect, Causes AE at Emsui32.dll

	Article: Q191164
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Outlook may cause an access violation if it fails to make a remote procedure
	call (RPC) connection and the password has changed during the RPC connection
	failure.
	
	CAUSE
	=====
	
	The function that handles RPC connection errors passes a NULL pointer to other
	functions that do not have a NULL check.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Outlook versions listed
	above.
	
	Additional query words: watson 97
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
