---
layout: page
title: "Q102375: Maximum Entry of 6 for OTHERDOMAINS= in LANMAN.INI"
permalink: /kb/102/Q102375/
---

## Q102375: Maximum Entry of 6 for OTHERDOMAINS= in LANMAN.INI

{% raw %}

	Article: Q102375
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	The maximum number of domains you can monitor in the otherdomains=
	entry of the LANMAN.INI file is 6. The total is calculated this
	way:
	
	    4 x Otherdomains
	    1 x Domain
	    1 x Logon domain (net logon <username> <password>
	   ----                     /domain:<domain>)
	    6
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
