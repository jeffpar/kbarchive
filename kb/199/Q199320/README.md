---
layout: page
title: "Q199320: DNS Forwarders Disappear Even with SP3 Applied"
permalink: kb/199/Q199320/
---

## Q199320: DNS Forwarders Disappear Even with SP3 Applied

	Article: Q199320
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DNS forwarders in the DNS Manager disappear as described in the following
	Microsoft Knowledge Base article, even after Service Pack 3 for Windows NT 4.0
	is applied:
	
	  Q154620 Windows NT 4.0 DNS Server Loses the Forwarders Settings
	
	
	CAUSE
	=====
	
	This problem occurs when an old version of Dnsadmin.exe (date 8/3/96) is used.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the Windows NT 4.0 SP3 or SP4 version of
	Dnsadmin.exe, dated 5/1/97 or later.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
