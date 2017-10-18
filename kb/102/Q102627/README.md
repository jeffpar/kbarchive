---
layout: page
title: "Q102627: Maximum of 5 Domains Can be Viewed with LAN Manager"
permalink: kb/102/Q102627/
---

## Q102627: Maximum of 5 Domains Can be Viewed with LAN Manager

	Article: Q102627
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	
	You can monitor no more than five LAN Manager domains. Using the LAN Manager
	setup program you can specify one default (logon) domain name and four different
	entries for otherdomains.
	
	In the LANMAN.INI file you can find values for the following two keys in the
	section [workstation]:
	
	    [workstation]
	    ...
	    DOMAIN     = <default_domain_name>
	    OTHDOMAINS =
	<domain_name1>,<domain_name2>,<domain_name3>,<domain_name4>
	    ...
	
	Additional query words: 2.00 2.10 2.10a 2.20 2.0 2.1 2.1a 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
