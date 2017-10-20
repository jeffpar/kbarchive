---
layout: page
title: "Q103317: NetBEUI Trapping in DrainLink Function"
permalink: /kb/103/Q103317/
---

## Q103317: NetBEUI Trapping in DrainLink Function

{% raw %}

	Article: Q103317
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	A trap D occurs in NetBEUI's DrainLink function identified by CSLIM = 8A1E and
	IP = 5D52 on the trap screen. This problem has been seen on both Ethernet and
	token ring networks.
	
	CAUSE
	=====
	
	These are relatively infrequent errors--seen only on networks with a variety of
	hardware problems--indicating that NetBEUI disabled interrupts during a portion
	of its code requiring critical data handling, or that it restored registers
	improperly during unusual interrupt routines.
	
	RESOLUTION
	==========
	
	Fixes for this and other DrainLink problems were included in the Lan Manager
	2.2b Patch.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
