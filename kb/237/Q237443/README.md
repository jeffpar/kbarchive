---
layout: page
title: "Q237443: MultinetGetConnectionPerformance() May Not Give Expected Results"
permalink: /kb/237/Q237443/
---

## Q237443: MultinetGetConnectionPerformance() May Not Give Expected Results

{% raw %}

	Article: Q237443
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming kbdocfix
	Last Modified: 13-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MultinetGetConnectionPerformance() function contained in the Win32
	Application Programming Interface (API) is designed to return an estimate of
	throughput, when using a Universal Naming Convention (UNC) or redirected driver
	letter as a parameter.
	
	The MultinetGetConnectionPerformance() function relies on the transport provider
	to provide this metric. The specific implementation of the measurement algorithm
	is protocol specific.
	
	MORE INFORMATION
	================
	
	This API returns a more reliable measurement for all protocols after data is
	transmitted through the connection. To assure realistic measurements of the
	connection's throughput, approximately 64 KB of data is passed before
	measurement. However, the measurement is only an approximation of the current
	throughput. The measurement is dependent on the transport provider, which is
	dependent on the network adapter card driver, so the accuracy of the metric
	varies with the installed protocols and network cards.
	
	TCP/IP uses a method of calculating the throughput based on the number of bytes
	transmitted on the connection. If the total number of bytes transmitted is
	relatively small when compared to the elapsed time of the established
	connection, it returns the default speed of the media, which is obtained from
	the network adapter card driver. In the case of Ethernet, this value is usually
	10,000,000 bytes, but it is driver specific. This behavior can cause unexpected
	results returned from measuring an inactive connection over TCP/IP. By passing
	about 64 KB of data across the connection, the measurement is generally within
	the expected range, rather than the default media speed.
	
	REFERENCES
	==========
	
	For additional information about the use of the
	MultinetGetConnectionPerformance() function, please see the following Microsoft
	Web sites:
	
	  http://msdn.microsoft.com/
	
	  http://msdn.microsoft.com/library/psdk/network/networks_96p1.htm
	
	  http://msdn.microsoft.com/library/ddkdoc/win95ddk/network_0851.htm
	
	  http://msdn.microsoft.com/library/psdk/network/networks_70tu.htm
	
	
	Additional query words: TDI_CONNECTION_INFO OID_GEN_LINK_SPEED GetConnectionPerformance
	
	======================================================================
	Keywords          : kbnetwork kbprogramming kbdocfix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
