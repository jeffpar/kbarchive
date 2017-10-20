---
layout: page
title: "Q291428: ICA Clients Cannot Map Drives After Installing ZAK"
permalink: /kb/291/Q291428/
---

## Q291428: ICA Clients Cannot Map Drives After Installing ZAK

{% raw %}

	Article: Q291428
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Zero Administration Kit on a computer that runs Windows NT
	Server 4.0, Terminal Server Edition, and that has Citrix Independent Computing
	Architecture (ICA) installed, the ICA clients cannot map network drives.
	
	RESOLUTION
	==========
	
	To resolve this behavior, log on to Terminal Server as the administrator, and
	then assign Read permissions to the following files:
	Loadwc.exe
	Icabar.exe
	Ctxlogon.exe
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	For information about how to contact Citrix Systems, Inc., click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
