---
layout: page
title: "Q111328: DosReadMailslot Reads Incorrect Data Under Stress"
permalink: /kb/111/Q111328/
---

## Q111328: DosReadMailslot Reads Incorrect Data Under Stress

{% raw %}

	Article: Q111328
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	
	An application can fail because DosReadMailslot sometimes returns a message that
	was not addressed to it. Generally this occurs when mailslot traffic is heavy.
	
	CAUSE
	=====
	
	The code used when writing mailslot data to a local mailslot is not being marked
	as busy early enough in the routine to keep other mailslot datagrams from
	affecting the data.
	
	RESOLUTION
	==========
	
	A fix for the LAN Manager MS-DOS redirector corrects this problem and is
	available as CSD00.079.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LAN Manager version 2.2. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.20 2.2 mailslot
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
