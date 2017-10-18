---
layout: page
title: "Q245131: GSNW Shares Appear to Be Deleted After You Restart Windows NT."
permalink: kb/245/Q245131/
---

## Q245131: GSNW Shares Appear to Be Deleted After You Restart Windows NT.

	Article: Q245131
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable a gateway in Gateway Services for NetWare (GSNW) on a Microsoft
	Windows NT Server 4.0-based server and then restart the server, the shares that
	are located on a Novell NetWare server may appear to be deleted on the Windows
	NT Server 4.0-based server. When you perform a trace by using Network Monitor,
	the trace may show that the Windows NT Server 4.0-based server is sending out a
	'Find Name to servername' broadcast to the NetWare server, but is not receiving
	any response from the NetWare server.
	
	CAUSE
	=====
	
	This behavior can occur if you use a Cisco router and the Cisco router
	interferes with the request to find the NetWare server.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the router port for 'Spantree PortFast'. For
	information about Cisco routers, visit the following Cisco Web site:
	
	  http://www.cisco.com
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	If other Windows NT Server 4.0-based servers with the GSNW service installed are
	affected in the same way, the router hardware may be the cause of the problem.
	To test this, insert a hub between the Windows NT Server 4.0-based server and
	the Cisco router to see whether the problem still occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
