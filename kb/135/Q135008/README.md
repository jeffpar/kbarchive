---
layout: page
title: "Q135008: SMS NetMon Counters for Network Segment Object Show Wrong Info"
permalink: /kb/135/Q135008/
---

## Q135008: SMS NetMon Counters for Network Segment Object Show Wrong Info

{% raw %}

	Article: Q135008
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the Network Monitor Agent installed, you can gather performance data using
	Performance Monitor, which has the following counters, on the network segment
	object:
	
	- Percent Multicast Frames
	
	- Percent Network Utilization
	
	- Broadcast Frames Received/second
	
	- Multicast Frames Received/second
	
	- Total Bytes Received/Second
	
	- Total Frames Received/Second
	
	However, if you are running Network Monitor version 1.1 (included in Systems
	Management Server 1.1) on Windows NT versions 3.1 or 3.5, the information shown
	in these counters may be incorrect.
	
	
	CAUSE
	=====
	
	Network Monitor 1.1 uses counters types that are only correct for Windows NT
	version 3.51.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the Network Monitor 1.1 Agent and re-
	install the Network Monitor 1.0 Agent.
	
	Additional query words: prodsms sms hound BH
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbWinNTAdvSerSearch kbSMSSearch kbPocketIE110 kbSSafe310UNIX kbMailPCN350 kbMPTMathopolis
	Version           : winnt:1.0,1.1,3.5
	
	=============================================================================
	

{% endraw %}
