---
layout: page
title: "Q123984: DNS Lookup Does not Check List of Domain Suffixes"
permalink: kb/123/Q123984/
---

## Q123984: DNS Lookup Does not Check List of Domain Suffixes

	Article: Q123984
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When "Enable DNS for Windows Names" is selected and you attempt to access a
	NetBIOS-based system residing in a DNS domain outside of your workstation's
	default DNS domain, the NetBIOS system is not found.
	
	For example, when you run NET VIEW SYS1 where SYS1 resides in
	DOMAIN1.COMPANYNAME.COM, while the workstation resides in
	DOMAIN2.COMPANYNAME.COM., Error 53 is returned. The trace shows that the
	workstation sent a DNS query for SYS1.DOMAIN2.COMPANYNAME.COM, but never for
	SYS1.DOMAIN1.COMPANYNAME.COM, even though DOMAIN1.COMPANYNAME.COM is in the list
	of domain suffixes.
	
	The workstation should cycle through the list of domain suffixes until it finds
	the system.
	
	When you run PING SYS1, the workstation sends out a query for
	SYS1.DOMAIN2.COMPANYNAME.COM, and then for SYS1.DOMAIN1.COMPANYNAME.COM.
	
	When you run NET VIEW \\SYS1, the workstation sends out a query for only
	SYS1.DOMAIN2.COMPANYNAME.COM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups versions 3.11 and 3.11a. This problem was corrected in TCP/IP-32 for
	Windows for Workgroups version 3.11b.
	
	TCP/IP-32 for Windows for Workgroups 3.11b is available on the Windows NT 3.51
	compact disc.
	
	Additional query words: 3.11 prodtcp32 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
