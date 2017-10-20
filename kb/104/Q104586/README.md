---
layout: page
title: "Q104586: PC DB: Quick Check for Enhanced Security"
permalink: /kb/104/Q104586/
---

## Q104586: PC DB: Quick Check for Enhanced Security

{% raw %}

	Article: Q104586
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Installation of older gateways, such as Microsoft Mail Connection for PC and
	AppleTalk Networks, frequently requires that Enhanced Security be off in
	versions 3.0 and 3.2 of Microsoft Mail for PC Networks.
	
	The following is a quick method for verifying whether Enhanced Security is on at
	a postoffice.
	
	  Copy MASTER.GLB MASTER.TMP
	
	  Debug MASTER.TMP
	  -d194
	  -q
	
	If the first displayed byte is 01, then Enhanced security is on. If it is 00,
	then Enhanced security is off.
	
	To turn it off, run UPDATE.EXE for version 3.0x or SETUP.EXE for version 3.2.
	
	
	Additional query words: 3.00 3.00a 3.00b 3.20 test
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN300b
	Version           : WINDOWS:3.0,3.0a,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
