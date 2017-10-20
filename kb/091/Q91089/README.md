---
layout: page
title: "Q91089: Persistent Network Connections in WIN.INI Must Be Uppercase"
permalink: /kb/091/Q91089/
---

## Q91089: Persistent Network Connections in WIN.INI Must Be Uppercase

{% raw %}

	Article: Q91089
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Persistent network connections are written to the [MRU_Files] and [MRU_Printers]
	sections of the WIN.INI file. If the entries in these sections are not
	uppercase, persistent connections to Novell servers or printers are not
	reestablished.
	
	CAUSE
	=====
	
	NETWARE.DRV relies on uppercase letters for persistent network connections. If
	you have edited the WIN.INI file and changed these settings using lowercase
	characters, the connections will not be reestablished when you restart the
	system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups
	NETWARE.DRV version 3.1. This problem does not occur in later versions of the
	product.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
