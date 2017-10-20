---
layout: page
title: "Q97445: LAN Man Does Not Turn On WRITE-THRU by Default"
permalink: /kb/097/Q97445/
---

## Q97445: LAN Man Does Not Turn On WRITE-THRU by Default

{% raw %}

	Article: Q97445
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	LANMAN.INI simply shows an X instead of a 1 or 0 for WRITE-THRU, so it is
	difficult to tell what the setting means. Here is the information you need to
	get more safety for DB writes, as well as some processing benefits:
	
	0 - WRITE-THRU is set on all opens (and writes), server does not do lazy write.
	Performance decreased.
	
	1 - (DEFAULT) WRITE-THRU is NOT set on opens (or writes), server does lazy write.
	Performance increased.
	
	The documentation correctly states that the DEFAULT is 1, but it misleadingly
	implies that the default (1) means "turn on WRITE-THRU." LANMAN does not turn on
	WRITE-THRU by default.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
