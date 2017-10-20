---
layout: page
title: "Q133384: Event ID 2019: Nonpaged Memory Pool Empty"
permalink: /kb/133/Q133384/
---

## Q133384: Event ID 2019: Nonpaged Memory Pool Empty

{% raw %}

	Article: Q133384
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a TCP/IP sockets based program on a Windows NT computer a non-
	paged pool memory leak occurs. When the memory leak occurs for a while it causes
	Windows NT to malfunction and the following out of memory error appears in the
	system log:
	
	  Event ID 2019
	
	  Description:
	  The server was unable to allocate from the system nonpaged pool because the
	  pool was empty.
	
	To determine that there is a memory leak:
	
	1. Run Performance Monitor.
	
	2. From the Edit menu, choose Add To Chart.
	
	3. In the Object field, select Memory.
	
	4. In the Counter field:
	
	  a. Select Pool Nonpaged Bytes and choose Add.
	
	  b. Select Pool Paged Bytes and choose Add.
	
	5. Choose Done and watch Performance Monitor in Chart view mode.
	
	  If the Nonpaged value rises rapidly while the TCP/IP sockets program is
	  running then you may be experiencing this problem.
	
	Example configurations under which this problem may occur:
	
	- Systems Management Server needs to communicate with an SQL server.
	
	- A SQL default client is configured for sockets - not Named Pipes.
	
	- TCP/IP is installed on the server, but SQL Server is not set up to use it.
	  SQL Server is designed to use Named Pipes only.
	
	- Systems Management Server uses the default SQL client configuration for
	  sockets.
	
	- Systems Management Server attempts to access SQL using sockets repeatedly.
	
	CAUSE
	=====
	
	This problem can be caused by a TCP/IP sockets program that continuously
	attempts to open a socket port that does not exist.
	
	
	RESOLUTION
	==========
	
	To work around this problem, correct your TCP/IP sockets program so that it does
	not attempt to open the unsupported socket port.
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt tcp ip udp pmon perfmon listen bind
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
