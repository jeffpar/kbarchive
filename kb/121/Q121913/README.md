---
layout: page
title: "Q121913: Err Msg: Error 59: An Unexpected Network Error Has Occurred"
permalink: /kb/121/Q121913/
---

## Q121913: Err Msg: Error 59: An Unexpected Network Error Has Occurred

	Article: Q121913
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NET USE command to a server and share that does not exist, the
	following error message may appear:
	
	  Error 59: An Unexpected Network Error Has Occurred
	
	In addition, attempting to connect to a nonexistent server and share using File
	Manager causes the system to stop responding (hang). To quit Windows for
	Workgroups version 3.11 and reboot the computer, press CTRL+ALT+DEL and press
	ENTER when the blue screen appears.
	
	CAUSE
	=====
	
	This problem occurs if the "DNS for Windows Name Resolution" option is enabled
	and the IP address for a DNS server is not specified in the DNS Server search
	list.
	
	RESOLUTION
	==========
	
	If a DNS Server is not available, disable the "DNS for Windows Name Resolution"
	option under Windows Networking Parameters in the Advanced Microsoft TCP/IP
	Configuration dialog box. If a DNS Server is available, make sure that its IP
	address is added to the DNS Server search list in the Microsoft TCP/IP -
	Connectivity Configuration dialog box.
	
	MORE INFORMATION
	================
	
	When you attempt to connect to a nonexistent network server and share using the
	NET USE command, the expected error message is "Error 53: The computer name
	specified in the network path cannot be located." If the same operation is
	performed in File Manager, the same error message should appear in a STOP
	message dialog box without "Error 53."
	
	Additional query words: prodtcp32 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
