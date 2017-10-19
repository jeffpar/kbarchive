---
layout: page
title: "Q177806: DHCP Server with Superscope Stops Assigning Addresses"
permalink: /kb/177/Q177806/
---

## Q177806: DHCP Server with Superscope Stops Assigning Addresses

	Article: Q177806
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Microsoft Windows NT Dynamic Host Configuration Protocol (DHCP) server,
	which is configured with one or more Superscopes, may stop responding to DHCP
	requests from DHCP Clients with no errors or event log messages indicating that
	there is a problem.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q161571
	TITLE : Using DHCP "Superscopes" to Serve Multiple Logical Networks
	
	CAUSE
	=====
	
	One or more of the child scopes within a Superscope is deactivated. This issue
	occurs most commonly when the primary child scope has been deactivated.
	
	RESOLUTION
	==========
	
	If you have one or more Superscopes configured and you need to remove a series
	of addresses from use, exclude all the addresses within a scope rather than
	deactivating the scope.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
