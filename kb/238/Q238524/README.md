---
layout: page
title: "Q238524: Using Cache Array Routing Protocol with WLBS"
permalink: kb/238/Q238524/
---

## Q238524: Using Cache Array Routing Protocol with WLBS

	Article: Q238524
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can integrate Microsoft Proxy Server 2.0 Cache Array Routing Protocol (CARP)
	with Windows NT Load Balancing Service (WLBS). If you want to use both CARP and
	WLBS to handle HTTP or Web traffic, carefully analyze your Proxy Server array
	architecture.
	
	The primary advantage of combining WLBS and CARP is realized when you use CARP to
	load balance HTTP or Web proxy client requests and WLBS to handle Winsock proxy
	client requests.
	
	MORE INFORMATION
	================
	
	Definition of WLBS
	------------------
	
	WLBS is a generic TCP/IP load balancer. WLBS cluster hosts listen on the same
	virtual IP (VIP) address and partition the client address space among them.
	Although all hosts receive the same requests, the hosts detect which host should
	service a request, based on the client's IP address (and source port number if
	you not using Affinity).
	
	Definition of CARP
	------------------
	
	CARP provides seamless scaling and extreme efficiency when you have multiple
	proxy servers arrayed as a single logical cache. CARP uses hash-based routing to
	provide a deterministic request resolution path through an array of proxies. The
	request resolution path, based on a hashing of proxy array member identities and
	uniform resource locators (URLs), means that for any given URL request, the
	client (browser or downstream proxy server) knows exactly what proxy server in
	the array the information will be stored - whether already cached from a
	previous request, or making a first Internet hit for delivery and caching. You
	can use CARP for load balancing, performance, scalability, and failover services
	for the Web Proxy service. CARP does not affect the Winsock proxy component.
	
	Proxy Server 2.0 uses Array Manager to maintain a current list of the members of
	a particular proxy array. This list is available to other systems that request
	it (for example, downstream clients and proxies). A proxy within an array
	watches all HTTP requests to any array member to determine the status of that
	member. If a request is unsuccessful, the local proxy marks that proxy member as
	unavailable in its table for a given time-to-live (TTL) period. The local proxy
	does not forward requests to that member until the TTL expires and the next
	table query shows the proxy member as available.
	
	Remote procedure call (RPC) interfaces are used to handle modifications to the
	array table (for example, membership, status, and parameters). Typically, a
	proxy server has two interfaces. There is an external interface that provides
	connectivity to the Internet or an upstream proxy server, and an internal
	interface to provide connectivity to the proxy clients in an intranet. The
	internal interface is used for the RPC traffic needed by CARP to maintain an
	array list.
	
	CARP Routing Options
	--------------------
	
	The CARP algorithm provides the following routing options:
	
	- Hierarchical: This option forwards requests from a single client (browser or
	  proxy) to an array of upstream proxies. The client is capable of processing
	  CARP hashing functions.
	
	- Distributed: This option resolves requests received by one member of the
	  array from another member of the same array. Distributed routing extends the
	  benefits of CARP to legacy downstream clients that are not capable of
	  implementing CARP.
	
	Distributed CARP Functionality:
	
	The following example shows how distributed CARP works.
	
	NOTE: In this example, Proxy3 owns the requested URL. There are three proxy
	servers in the array (Proxy1, Proxy2, and Proxy3). The client is not CARP aware
	and is configured to send proxy requests to ProxyArray, which DNS resolves by
	providing a list of three IP addresses (one for each proxy server).
	
	1. The client sends a URL request to Proxy2.
	
	2. Proxy2 performs a CARP hash function and determines that Proxy3 should have
	  the specific URL cached. Proxy2 then sends the request (as a client) to
	  Proxy3.
	
	3. Proxy3 performs a hash function and determines that it owns the URL. Proxy3
	  obtains the page from cache (or from the Internet), caches the page, and then
	  forwards the page to the requesting client (Proxy2).
	
	4. Proxy2 forwards the page to its client; it does not cache it.
	
	If the client sends the request to Proxy3 in step 1, then only step 3 is
	performed, and Proxy3 sends the page directly to the client.
	
	If Proxy2 is unavailable, the client still sends the request to Proxy2. The
	request times out and (depending on the type of client) the client may resend
	the query to the second IP address in the list returned by DNS. Using Array
	Manager, Proxy1 and Proxy3 detect that Proxy2 is unavailable and all URLs are
	owned by them.
	
	Hierarchical CARP Functionality:
	
	The following example shows how hierarchical CARP works.
	
	NOTE: In this example, Proxy3 owns the requested URL. The client needs to send a
	request for a URL. The client performs a hash function and determines that if
	the URL is cached, it must exist in Proxy3.
	
	1. The client sends a URL request to Proxy3.
	
	2. Proxy3 performs a hash function and determines that it has the URL cached.
	  Proxy3 obtains a page from cache (or the Internet), caches the page, and then
	  sends the page to the client.
	
	CARP detects an unavailable proxy server when its TTL expires in Array Manager or
	when the unavailable server does not respond to HTTP requests. The server is
	then removed from the array membership table. If the browser client does not
	have an array membership table, the client issues the following HTTP command to
	obtain one:
	
	  http://ProxyArray/array.dll?Get.Routing.Script
	
	The unavailable server is missing from the list and the browser client cannot
	send a query to it.
	
	If the browser client already has a membership list that does not reflect the
	unavailable server, the client may still send a query to the unavailable server
	if the server is first in the list after the client performed a hash function
	for a specific URL. If the client receives no response, it resends the query to
	the proxy server that is second in the list after the client performed the hash
	function.
	
	Integration of WLBS and CARP
	----------------------------
	
	You can use WLBS to load balance Web proxy requests, as well as Winsock proxy
	requests from clients. WLBS provides failover services, but it does not provide
	caching services.
	
	To use WLBS to load balance proxy client requests, you need to configure the VIP
	address on the internal interface of the proxy servers in the array. If you use
	WLBS in unicast mode, the virtual media access control address overwrites the
	network adapter's media access control address through the registry. This
	prevents the CARP RPC traffic from traveling through the network adapters,
	because the destination media access control address is its own media access
	control address. To solve this problem, you can either use WLBS in multicast
	mode (which adds a virtual media access control address to the network adapter
	instead of overwriting it), or use an additional network adapter on the intranet
	network for the RPC traffic needed by CARP.
	
	Using Distributed CARP with WLBS:
	
	The following example shows how distributed CARP works with WLBS to load balance
	HTTP traffic.
	
	NOTE: In this example, Proxy3 owns the requested URL. Three proxy servers are in
	the array (Proxy1, Proxy2, and Proxy3). Each proxy server runs WLBS, which is
	configured to load balance port 80 on the VIP. The client is not CARP aware and
	is configured to send proxy requests to ProxyArray (which DNS resolves to the
	VIP).
	
	1. The client sends a URL request.
	
	2. All proxy servers receive the request.
	
	3. Depending on the client's IP address (and port if you are not using
	  Affinity), one of the proxy servers sends the request to the IP stack. The
	  other two servers discard the request (because they are not supposed to
	  service a request from client's IP address and/or port).
	
	   - If Proxy3 passes the URL request to the IP stack:
	
	     a. The server performs a hash function and determines that the URL is
	        supposed to be cached by itself.
	
	     b. Proxy3 replies to the client from cache or after obtaining the URL
	        request from the Internet.
	
	   - If Proxy1 or Proxy2 passes the URL request to the IP stack:
	
	     a. The server performs a hash function and determines that Proxy3 has that
	        URL cached.
	
	     b. Proxy2 (as a client) sends a request for the URL to Proxy3.
	
	     c. Proxy3 performs a hash and determines that the URL should be cached by
	        itself. It obtains the page from cache (or from the Internet), caches
	        the page, and then sends the page to Proxy1 or Proxy2.
	
	     d. Proxy1 or Proxy2 then returns the page to the browser client (without
	        caching the page).
	
	In this situation, WLBS does not provide any load balancing advantage.
	
	If a proxy server does not work, the WLBS cluster converges with just two
	servers. Depending on the client's IP address (and port if you are not using
	Affinity), one of the two remaining proxy servers sends the request to the IP
	stack. Then step 3 above applies, replacing Proxy3 with any of the two surviving
	proxy servers.
	
	In this situation, WLBS provides a minor advantage. The client does not time out
	and the query is resent to the second IP address provided by DNS.
	
	If the publishing service (Internet Information Server) does not work, WLBS does
	not detect this on its own and client still times out if WLBS sends the query to
	the IP stack on the computer where the service is not working. There are some
	third-party software programs that you can use to monitor the availability of
	services.
	
	In this situation, WLBS does not provide any failover advantage.
	
	Using Hierarchical CARP with WLBS:
	
	The following example shows how hierarchical CARP works with WLBS load balancing
	HTTP traffic.
	
	NOTE: In this example, Proxy3 owns the requested URL. Three proxy servers are in
	the array (Proxy1, Proxy2, and Proxy3). Each server runs WLBS, which is
	configured to load balance port 80 on the VIP. The client is configured to send
	proxy requests to ProxyArray (which DNS resolves to the VIP).
	
	If the CARP-aware client does not have the routing script, it sends the following
	query:
	
	  http://ProxyArray/array.dll?Get.Routing.Script
	
	The WLBS host in charge of the client's IP address (and port if you are not using
	Affinity) returns the script containing the list of proxy servers in the proxy
	array. This allows the client to resolve each server's name to its
	individual/dedicated IP address.
	
	In this example, the client needs to send a request for a URL. The client
	performs a hash function and determines that Proxy3 owns the URL.
	
	1. The client sends a URL request to Proxy3.
	
	2. Proxy3 performs a hash function and determines that it has the URL cached.
	  Proxy3 obtains the page from cache (or the Internet), caches the page, and
	  then sends the page to the client.
	
	In this situation, WLBS is bypassed and does not provide any load balancing
	advantage.
	
	If the server is unavailable, WLBS converges with the surviving cluster hosts.
	This means the client is still able to obtain a list of the proxy servers in the
	array (if the client does not already have the list). If the client obtains a
	new list, CARP may or may not have removed the unavailable server from the array
	list.
	
	If the client still has the unavailable server in the array list, the server may
	be selected when the client performs the hash function. If the unavailable
	server is first in the list after the client performs the hash function, the
	client sends the query to the unavailable server. The request times out and the
	client resends the query to the server that is second in the list after the
	client performed the hash.
	
	In this situation, WLBS does not provide any failover advantage.
	
	Using CARP to Load Balance Web Traffic and WLBS for Winsock Traffic
	-------------------------------------------------------------------
	
	You can use CARP to load balance HTTP proxy traffic and WLBS to load balance
	Winsock proxy traffic. To do this, configure the WLBS hosts with the following
	port rule:
	
	  Protocol: Both (TCP and UDP)
	  Port range: 1024-5000
	  Affinity: single
	
	When you configure this rule, WLBS provides the advantage of load balancing
	Winsock proxy traffic.
	
	REFERENCES
	==========
	
	For more information about CARP, please see the CARP white paper at the
	following Microsoft Web site:
	
	  http://go.microsoft.com/fwlink/?LinkID=661
	
	For more information about WLBS, please see the WLBS white paper at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/ntserver/ntserverenterprise/exec/feature/WLBS/default.asp
	
	Additional query words: mac nic iis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
