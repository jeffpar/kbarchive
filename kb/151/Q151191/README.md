---
layout: page
title: "Q151191: PC Cillin Anti-virus Can Cause SNA Client 629 or 546 on Win 95"
permalink: /kb/151/Q151191/
---

## Q151191: PC Cillin Anti-virus Can Cause SNA Client 629 or 546 on Win 95

{% raw %}

	Article: Q151191
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Windows 95 PC Cillin anti-virus program resides in memory (TSR), on your
	Microsoft Windows 95 computer when the SNA Server client is installed, you may
	receive the following error when you try to run the 3270 applet:
	
	  WNAP not started.
	
	In addition, you may also experience a message popup with an error 629 and error
	546.
	
	WORKAROUND
	==========
	
	Reinstall the SNA Server client with the PC Cillin TSR inactive.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
