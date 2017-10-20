---
layout: page
title: "Q102425: WRKHEURISTICS Bit 14 Controls Raw I/O for LM MS-DOS Client"
permalink: /kb/102/Q102425/
---

## Q102425: WRKHEURISTICS Bit 14 Controls Raw I/O for LM MS-DOS Client

{% raw %}

	Article: Q102425
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	Bit 14 in WRKHEURISTICS on LAN Manager MS-DOS clients controls raw
	server message block (SMB) data transfers: 0 = raw I/O enabled.
	Whether or not you set this bit depends on your system communications
	lines and your performance criteria. On noisy lines, raw I/O can
	significantly reduce retries; on clean lines it significantly reduces
	performance. To reduce the number of calls, bit 14 is commonly set to
	1 (raw I/O disabled).
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
