---
layout: page
title: "Q165849: SNA Manager Improvements When Many 3270 LUs Are Configured"
permalink: /kb/165/Q165849/
---

## Q165849: SNA Manager Improvements When Many 3270 LUs Are Configured

{% raw %}

	Article: Q165849
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Manager performance is slow when there are a large number of 3270 LUs
	configured. Also, if the connection or active users window is not being viewed,
	the client session counts may be incorrect.
	
	CAUSE
	=====
	
	SNA Server Manager was recounting active sessions when a 3270 LU was opened or
	closed. Also, if 3270 LUs aren't viewed in Manager, status information wasn't
	being received for these LUs, causing client session counting to be incorrect.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. To resolve
	this problem, obtain the hotfix mentioned below.
	
	The session counting is now done on the server in a thread which activates every
	15 seconds. It sends updated counts to Manager if counts have changed. This
	means that session count updates in Manager may be delayed by as much as 15
	seconds.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
