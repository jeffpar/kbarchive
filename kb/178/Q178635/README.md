---
layout: page
title: "Q178635: Can Not Change Domain in Windows After You Use NETDOM"
permalink: kb/178/Q178635/
---

## Q178635: Can Not Change Domain in Windows After You Use NETDOM

	Article: Q178635
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 4.0 Resource Kit Supplement II includes a command line utility
	called NETDOM an administrator can use to join a domain from a command line.
	
	If you join a domain with a version of NETDOM earlier than version 1.7, when you
	change to a different domain by using the Network tool in Control Panel, you may
	be unable to do so, and you may receive the following error message:
	
	  Unable to update local security in order to join domain.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade to NETDOM version 1.7 or later.
	
	
	MORE INFORMATION
	================
	
	Windows NT maintains a list of trusted domains. For a workstation, this list
	contains only one element, the domain of which the workstation is a member.
	
	Prior to version 1.7, NETDOM was not aware of the trusted domain under a domain
	member. Thereby the GUI checks this information before changing domain.
	
	For more information about NETDOM, see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q150493
	  TITLE : How To Join a Domain From the Command Line
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
