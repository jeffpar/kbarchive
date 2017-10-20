---
layout: page
title: "Q170252: XCON: How to Configure Dynamic RAS Using IPX"
permalink: /kb/170/Q170252/
---

## Q170252: XCON: How to Configure Dynamic RAS Using IPX

{% raw %}

	Article: Q170252
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Dynamic RAS connector can be configured to use IPX but
	there are a few details that must be configured for it to work properly.
	
	MORE INFORMATION
	================
	
	If there are no Novell Netware servers on the LAN segment, it will be necessary
	to specify the Internal Network number for the IPX protocol in the Protocol
	section of Control Panel. The valid range is 0x1 thru 0xffffffff. In addition,
	in the RAS service, select the Network configuration and configure IPX to
	Allocate Network Numbers and specify the network number. Ensure that the
	internal network and network numbers are unique within your network. All other
	settings may be left at the default. Also, add the NetBeui protocol to provide
	netbios name resolution. This configuration was tested with RAS and the RAS
	function of Routing and Remote Access Update for Windows NT 4.0.
	
	Additional query words: Dynamic RAS IPX DRAS
	
	======================================================================
	Keywords          : kbsetup kbtshoot exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
