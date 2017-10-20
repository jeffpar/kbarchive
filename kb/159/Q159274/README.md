---
layout: page
title: "Q159274: TN3270E Does Not Support RTM"
permalink: /kb/159/Q159274/
---

## Q159274: TN3270E Does Not Support RTM

{% raw %}

	Article: Q159274
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft TN3270/TN3270E server does not provide support for response time
	monitor (RTM) performance data.
	
	MORE INFORMATION
	================
	
	RTM is used by the local node to maintain statistics on host response times.
	This is the time it takes for the host to respond after a 3270 user presses
	ENTER or the AID key to send data to the host. These statistics can then be sent
	to the host for analysis.
	
	REFERENCES
	==========
	
	For related information regarding SNA Server support for 3270 RTM data, see the
	following
	
	- SNA Server 3270 Emulator Interface Specification (included with SNA Server),
	  Section 3.2.4 (RTM Parameters) and 3.3.15 (Response Time Monitor Data).
	
	as well as the following Knowledge Base article:
	
	  Q148312 No RTM Data Generated if 3270 Session Uses Exception Response
	
	Additional query words: prodsna OLE
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
