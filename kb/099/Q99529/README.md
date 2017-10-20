---
layout: page
title: "Q99529: NET USE Returns &quot;Error 53-The Network Path Is Not Found&quot;"
permalink: /kb/099/Q99529/
---

## Q99529: NET USE Returns &quot;Error 53-The Network Path Is Not Found&quot;

{% raw %}

	Article: Q99529
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If your network is running Hewlett-Packard (HP) LM/X and using LAN Manager 2.1,
	TCP/IP, and TCP/IP Utilities, performing a NET USE returns the MS-DOS message:
	
	  Error 53 - The network path is not found
	
	Specifying the full path does not correct this problem, but issuing a PING or
	using NetBEUI receives an immediate response.
	
	To correct this problem, set the SCOPE parameter on the LMU box to NULL.
	
	Additional query words: 2.10 2.10a
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
