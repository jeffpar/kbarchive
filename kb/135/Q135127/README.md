---
layout: page
title: "Q135127: Trust Relationship Confirmation Messages Different"
permalink: /kb/135/Q135127/
---

## Q135127: Trust Relationship Confirmation Messages Different

	Article: Q135127
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; Win2000:3.1; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	When you establish trust relationships between two Windows NT domain
	controllers using User Manager for Domains, the following message appears:
	
	  Trust relationship with <other domain name> successfully established.
	
	When you establish trust relationships between a Windows or Windows for
	Workgroups client computer using Windows NT 3.5 and 3.51 Server Tools and
	a Windows NT domain controller, the following message appears on the
	client computer's User Manager for Domains:
	
	  Windows NT 3.5 Server Tools
	
	  The trust relationship could not be verified at this time. If you find that
	  it was not established, contact the administrator of the <other domain
	  name> domain and verify that it has permitted <your domain name> to
	  trust.
	
	  Windows NT 3.51 Server Tools
	
	  You have changed a trust relationship between domains. This client cannot
	  verify changes to trust relationships. If you find that it was not
	  established, contact the administrator of the <other domain name>
	  domain and verify that it has permitted <your domain> to trust.
	
	The message displayed by User Manager for Domains in Windows NT 3.51 Server
	Tools explains why the trust relationship cannot be verified, whereas the
	User Manager for Domains in Windows NT 3.5 Server Tools error message does
	not.
	
	Additional query words: prodnt 3.10 3.11 srvtools
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWFW311
	Version           : WINDOWS:3.11; Win2000:3.1; winnt:3.5,3.51
	
	=============================================================================
	
