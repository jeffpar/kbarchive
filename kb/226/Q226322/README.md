---
layout: page
title: "Q226322: How to Use RRAS DOD w/Third-Party Unnumbered Connections"
permalink: /kb/226/Q226322/
---

## Q226322: How to Use RRAS DOD w/Third-Party Unnumbered Connections

{% raw %}

	Article: Q226322
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Dial on Demand (DoD) in Routing and Remote Access Service (RRAS) is used to
	connect to a terminal server, the terminal server may give out an IP address on
	the same subnet as the LAN that the RRAS server is connected to. As a result,
	the clients on the local LAN and the remote side of RRAS server fall within the
	same IP network.
	
	A number of hardware routers/terminal servers allow you to do this with
	"Unnumbered connections". RRAS can be configured to work with these kinds of
	routers, so that you do not have to subnet the range of IPs that you have been
	given from an Internet Service Provider (ISP).
	
	MORE INFORMATION
	================
	
	In RRAS, when dialing a third-party terminal server or router that supports
	unnumbered connections, configure the following:
	
	- Use an arbitrary static pool. An example of an arbitrary static pool to use
	  would be 10.0.0.248/29.
	
	- Create the DoD connection. Configure the DoD connection to dial into a
	  "non-Windows NT router" that expects you to know your IP address.
	
	- Add a static route. When connecting your LAN clients to the Internet, the
	  typical entry would be a default gateway route. This default gateway route is
	  associated with the DoD connection to the ISP. This can also be a specific
	  route for remote networks.
	
	- On the DoD connection, prerequest the IP the router wants to give you. Do not
	  use "server assigned" address. In order for unnumbered connections to work,
	  it is important to know the IP address that will be assigned by the
	  router/terminal server
	
	- Change the IP on the LAN network card so that it is not the same as the IP
	  you are requesting from the DoD (this is important - routers that support
	  unnumbered connections seem to want these to be the same, but RRAS does not.
	  So make sure the IP bound to the network adapter is not the same as the one
	  you are prerequesting, although it does have to be the same Network ID). For
	  example, if the IP assigned by the dial-up device was always going to be
	  131.107.0.1, then the IP assigned to the network adapter could be
	  131.107.0.2. This would work well.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
