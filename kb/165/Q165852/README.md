---
layout: page
title: "Q165852: Windows 3.x App Can't Find SNA Server When Started Second Time"
permalink: /kb/165/Q165852/
---

## Q165852: Windows 3.x App Can't Find SNA Server When Started Second Time

{% raw %}

	Article: Q165852
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
	
	An SNA Server Windows 3.x application (for example, the 3270 applet) can't
	connect to SNA Server over TCP/IP sockets or IPX/SPX when started a second time.
	
	CAUSE
	=====
	
	This problem may occur on a Windows for Workgroups (WFW) 3.11 client if WFW
	password caching is disabled and an old cached password file containing the
	incorrect password still exists for the user.
	
	The SNA Server Windows 3.x client (Wnap.exe) attempts to use a cached WFW
	password, if one exists on the computer, instead of sending a NULL password set
	by the user in the SNA client logon dialog.
	
	
	RESOLUTION
	==========
	
	A fix to SNA Server 3.0 is available for this problem.
	
	
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
