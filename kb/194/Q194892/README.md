---
layout: page
title: "Q194892: Load-Balanced Application Does Not Work Properly Using WLBS"
permalink: /kb/194/Q194892/
---

## Q194892: Load-Balanced Application Does Not Work Properly Using WLBS

{% raw %}

	Article: Q194892
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application that is load balanced does not appear to work correctly when
	running Windows NT Load Balancing Service (WLBS).
	
	- All of the application's ports are not being load balanced. Some applications
	  require multiple ports to perform their functions. For example, FTP uses
	  ports 20 and 21. If both ports are not load balanced (usually with one port
	  rule), the application will not work correctly. Check that the applicable
	  port rule covers all ports used by the application and be sure to enable
	  client affinity (single or Class C).
	
	- The application is not started on all cluster hosts. WLBS does not start or
	  control applications. You should check that the application has been started
	  on every cluster host. If an application fails, you can disable its
	  associated port range using the wlbs disable command.
	
	- The application should not be load balanced. Applications that update a file
	  on the local cluster host may not work correctly when load balanced because
	  multiple instances of the application may conflict when attempting to update
	  a common file. For example, e-mail, groupware, and database servers often
	  have this problem. Do not load balance an application until its data sharing
	  requirements are thoroughly understood and met.
	
	- The application is not a TCP/IP service. WLBS load balances applications by
	  distributing incoming client requests among the cluster hosts. If a server
	  application is not structured as a TCP/IP service that receives client
	  requests, it will not benefit from using WLBS, and you will not observe load
	  balancing.
	
	- Your firewall is proxying client traffic and making it appear as if all
	  connections are originating from the same client IP address. If the load
	  balancing rule is configured with Single affinity, all traffic will be
	  handled by the same cluster host. Turn off address translation (proxying) on
	  the firewall or change affinity from Single to None.
	
	  NOTE: You may need Single affinity to provide session support.
	
	Additional query words: WLBS Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
