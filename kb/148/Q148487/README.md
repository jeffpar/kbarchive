---
layout: page
title: "Q148487: MS-DOS &quot;For&quot; Command Fails when Run Against an FPNW Server"
permalink: /kb/148/Q148487/
---

## Q148487: MS-DOS &quot;For&quot; Command Fails when Run Against an FPNW Server

{% raw %}

	Article: Q148487
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 18-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your computer running Windows with the NetWare NETX.COM redirector installed,
	when you run the For command (which is an internal COMMAND.COM command) against
	a File and Print Services for NetWare (FPNW) server, the command fails after the
	first pass. For example, the following command only lists the first file and
	then quits:
	
	  for %f in (*.*) do dir %f /b
	
	CAUSE
	=====
	
	The NetWare NETX.EXE redirector causes it to get the task numbers mixed up. The
	server closes all open file searches when the client sends an EndOfJob request
	after the first For-loop executes. The For command fails when the client asks
	for more files on a search that the client had just implicitily closed.
	
	WORKAROUND
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	To work around this problem, obtain the fix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest U.S. Service Pack
	for Windows NT Workstation or Server version 3.51. For information on obtaining
	this update, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
