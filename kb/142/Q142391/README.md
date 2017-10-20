---
layout: page
title: "Q142391: Cannot Upgrade NFR or MSDN Windows NT 4.0 to Retail"
permalink: /kb/142/Q142391/
---

## Q142391: Cannot Upgrade NFR or MSDN Windows NT 4.0 to Retail

{% raw %}

	Article: Q142391
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Not for Resale" (NFR) version of Windows NT 4.0 is limited to five users.
	The version of Windows NT Server 4.0 that ships with Microsoft Developer Network
	(MSDN) is limited to ten users. If your environment requires more than these
	limits, you must install the retail version of Windows NT Server.
	
	MORE INFORMATION
	================
	
	It is important to note that you cannot upgrade the NFR or the MSDN version of
	Windows NT Server to the retail version. To successfully run the retail version,
	you must install the retail version in a new folder, and then re- install your
	applications.
	
	Before you install the retail version of Windows NT Server, please see the
	following articles in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q125996
	  TITLE : Saving and Restoring Existing Windows NT Shares
	
	  ARTICLE-ID: Q158388
	  TITLE : Useful Resource Kit Utilities for Domain Administrators
	
	To preserve user accounts, if the affected computer is a domain controller, you
	can install another computer as a Backup Domain Controller, promote it,
	re-install the old computer as a Backup Domain Controller, and then promote the
	newly installed computer to the Primary Domain Controller. Once this is done the
	Backup Domain Controller is no longer needed.
	
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
