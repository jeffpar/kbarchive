---
layout: page
title: "Q139212: Memory Leak in TN3270 Server if RU Sizes Exceed TN3270 Defaults"
permalink: /kb/139/Q139212/
---

## Q139212: Memory Leak in TN3270 Server if RU Sizes Exceed TN3270 Defaults

{% raw %}

	Article: Q139212
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the TN3270 server runs for many days or weeks, server performance becomes
	sluggish and Windows NT eventually runs out of virtual memory. Also, Windows NT
	performance monitor shows paged pool bytes to be steadily increasing for the
	TN3SERVR process.
	
	CAUSE
	=====
	
	The TN3270 server initially allocates inbound and outbound buffers when a TN3270
	client connects to the server, using the inbound and outbound "Default RU sizes"
	configured in the TN3270 Admin Options dialog.
	
	However, if the TN3270 client's BIND request negotiates to larger RU sizes than
	these defaults, the TN3270 server allocates new inbound and outbound buffers
	though never frees the previously acquired buffers.
	
	
	RESOLUTION
	==========
	
	To workaround this problem, increase the Inbound and/or Outbound default RU
	sizes within the TN3270 Server Admin Options dialog to accommodate the largest
	RU sizes that will be requested by the TN3270 client users.
	
	To correct this problem, install the update to the SNA Server 2.11 TN3270 service
	mentioned below. Microsoft has updated the file <ntroot>\TN3SERVR.EXE to
	correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 3.50 3.51
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
