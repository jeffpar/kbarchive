---
layout: page
title: "Q123615: No Network Services with DEC EtherWorks Turbo III"
permalink: /kb/123/Q123615/
---

## Q123615: No Network Services with DEC EtherWorks Turbo III

{% raw %}

	Article: Q123615
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the TCP/IP protocol in Windows NT version 3.5 with a DEC Etherworks
	Turbo III (DE205) network adapter, network services such as Netlogon and browser
	may not be operational.
	
	CAUSE
	=====
	
	This problem occurs if you are using a DEC Etherworks Turbo III network adapter
	driver other than version 2.0.
	
	RESOLUTION
	==========
	
	An updated network adapter driver (version 2.0) is available at DEC's FTP server
	(gatekeeper.dec.com) under the following directory:
	
	  \Pub\Digital\Ethernet\Ewrk3\Interim
	
	The file to download is called E3KIT226.ZIP. For additional information, contact
	DEC Technical Support at (800) 344-4825.
	
	The DEC product discussed here are manufactured by Digital Equipment Corporation,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
