---
layout: page
title: "Q105272: Problem Logging on to LM, 3COM and Novell Simultaneously"
permalink: /kb/105/Q105272/
---

## Q105272: Problem Logging on to LM, 3COM and Novell Simultaneously

{% raw %}

	Article: Q105272
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	If you try to log on to LAN Manager 2.2, 3COM and Novell on a LAN Manager
	workstation using NETBEUI, XNS and IPX respectively, you may be able to log on
	to LAN Manager and 3COM but not to Novell.
	
	CAUSE
	=====
	
	This is caused by the loading order of the protocols.
	
	RESOLUTION
	==========
	
	Rearrange the load order in AUTOEXEC.BAT as follows:
	
	LOAD XNS
	LOAD IPX
	LOAD NETBEUI
	
	Additional query words: lm2.2 xns ipx netbeui load 2.2 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
