---
layout: page
title: "Q234760: Cannot Telnet into a Sun Solaris or HP-UX Server"
permalink: /kb/234/Q234760/
---

## Q234760: Cannot Telnet into a Sun Solaris or HP-UX Server

{% raw %}

	Article: Q234760
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbtool
	Last Modified: 17-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, used with:
	   - Microsoft Windows NT Services for UNIX Add-On Pack 
	- Microsoft Windows NT Workstation version 4.0, used with:
	   - Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to Telnet to a Sun Solaris or Hewlett-Packard HP-UX server
	using the Microsoft Services for Unix console client with the preferred terminal
	type configured as VTNT, you are unable to initiate a communication session
	between the client and host computers.
	
	CAUSE
	=====
	
	The problem occurs during the negotiation of the terminal type between the
	Telnet client and the Solaris or HP-UX server. Both Solaris and HP-UX accept the
	VTNT terminal type, but cannot send VTNT information back to the client during
	the negotiation phase, which results in an incomplete connection attempt.
	
	RESOLUTION
	==========
	
	In resolve this problem, set the preferred terminal type on the Telnet client to
	either ANSI or VT100.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Services
	for Unix Add-On Pack.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
