---
layout: page
title: "Q129832: Type 20 Response Packet Causes NetWare 3.12 Server to Fail"
permalink: kb/129/Q129832/
---

## Q129832: Type 20 Response Packet Causes NetWare 3.12 Server to Fail

	Article: Q129832
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Browse Watcher in Windows for Workgroups version 3.11, a broadcast
	requesting a list of backup browsers is sent to the master browser. The Windows
	NT master browser responds with a type 20 packet. If this packet passes through
	a router, and the destination port number also matches a dynamically assigned
	port number of a NetWare 3.12 server, the NetWare server fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Obtain the file RTNTBIFX.NLM from Novell Technical Support at (800) 638-9273.
	
	-or-
	
	- Contact Microsoft Product Support Services and install the fix mentioned
	  above.
	
	Additional query words: prodnt wfw wfwg smb ncp
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5
	
	=============================================================================
	
