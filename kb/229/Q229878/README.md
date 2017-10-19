---
layout: page
title: "Q229878: SBS DHCP Server Shutdown After Upgrade to Full Windows NT"
permalink: /kb/229/Q229878/
---

## Q229878: SBS DHCP Server Shutdown After Upgrade to Full Windows NT

	Article: Q229878
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.0 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade BackOffice Small Business Server (SBS) version 4.0 or 4.0a to
	the full Windows NT 4.0 product, the DHCP server continues to shut down when it
	detects another DHCP server on the network. However, the DHCP server from
	Windows NT does not shut down when another DHCP server is detected.
	
	CAUSE
	=====
	
	The DHCP server in Windows NT does not correctly recognize that SBS has been
	upgraded to the full retail Windows NT product.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in BackOffice Small Business
	server. This problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
