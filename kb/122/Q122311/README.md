---
layout: page
title: "Q122311: Using Rumba with TCP/IP-32"
permalink: /kb/122/Q122311/
---

## Q122311: Using Rumba with TCP/IP-32

	Article: Q122311
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Rumba Mainframe version 4.1 works with Microsoft TCP/IP-32. You can obtain a
	patch from Wall Data to use the other versions of Rumba with TCP/IP-32.
	
	MORE INFORMATION
	================
	
	The following are the current versions of Rumba:
	
	  Rumba Office 1.0
	  Rumba Mainframe 4.1
	  Rumba AS/400 2.0
	  Rumba VAX 1.0 update 02
	
	Rumba Mainframe version 4.1 works with TCP/IP-32. All of the other versions of
	Rumba require a patch from Wall Data to allow you to configure Rumba for Windows
	Sockets version 1.1, which is required to run Rumba with TCP/IP-32.
	
	If you are using another version of Rumba without the patch, there is no option
	to configure Rumba for Windows Sockets within the Rumba interface. Once you
	apply the patch, there is an option to configure Rumba for Windows Sockets on
	the Options menu, by choosing Interface and then Configure.
	
	To obtain the patch, call Wall Data at (206) 814-9255.
	
	The Rumba products discussed here are manufactured by Wall Data, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: wfw wfwg prodtcp32 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
