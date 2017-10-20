---
layout: page
title: "Q219353: RRAS PPP Connections May Time-out on Slow or Delayed Links"
permalink: /kb/219/Q219353/
---

## Q219353: RRAS PPP Connections May Time-out on Slow or Delayed Links

{% raw %}

	Article: Q219353
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have Routing and Remote Access Service (RRAS) installed on a computer
	running Windows NT Server and you attempt to dial out to establish a PPP
	connection with a remote RAS server, the PPP connection may not successfully
	complete at times. The inability to connect is most likely to occur on a slow or
	delayed link in which the round-trip delay for a PPP negotiation packet is
	approximately 1 second or greater. Also, the following error message may be
	displayed in the graphical user interface of the dialing computer:
	
	  Error 718 - Timeout while waiting for valid response from remote peer.
	
	CAUSE
	=====
	
	The initial phases of starting a PPP link involve negotiating the Link Control
	Protocol (LCP) layer of the connection. LCP itself has a time-out function when
	waiting for a response to a configuration request from its PPP peer. If the
	sending side does not receive a configuration acknowledgement in time (that is,
	in less than 1 second), then the sending side times out and sends a second
	configuration request. In the meantime, the receiving end of the PPP connection
	receives a second configuration request, which results in a restart of LCP and
	the timeout counter is reset to zero. This scenario repeats in a "round-robin"
	fashion between the two PPP peers. The ultimate result is that negotiation of
	the LCP layer never completes.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
