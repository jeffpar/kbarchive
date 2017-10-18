---
layout: page
title: "Q145663: PC NTMMTA: Using the NT MMTA and RAS on the Same Server"
permalink: kb/145/Q145663/
---

## Q145663: PC NTMMTA: Using the NT MMTA and RAS on the Same Server

	Article: Q145663
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5; :3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can run both Remote Access Server (RAS) and the Multitasking MTA for Windows
	NT (NT MMTA) from the same Microsoft Windows NT version 3.51 server, using
	asynchronous communication, RAS for network connections, and the NT MMTA for
	Mail delivery.
	
	MORE INFORMATION
	================
	
	When you configure a Windows NT version 3.51 Server as a RAS server, the COM
	ports that the RAS server will be using are configured through Networks under
	the Control Panel.
	
	The COM ports that the NT MMTA will be using are set, during the configuration,
	by the AsyncCommPort parameter of the EXTERNAL.INI file. The /AsyncCommPort
	parameter will be read by the MMTA application when it runs as a service or from
	the CDM line. For example,
	
	EXTERNAL.INI
	------------
	
	  [External - Async1]
	  AsyncCommPort=Com2
	
	Command line
	------------
	
	  EXTERNAL -Dm /AsyncCommPort=Com2
	
	Notes:
	
	- Additional EXTERNAL.INI parameters and External command line options are
	  required. Refer to Appendix A "External Program Options" in the Multitasking
	  MTA for Windows NT "Administrator's Guide" for more information.
	
	- The RAS server and the NT MMTA can not specify the same COM ports. For
	  example, if you are using RAS on COM1, you would specify COM2 for the NT
	  MMTA.
	
	
	When the NTMMTA starts as a service or as an application from the CMD line, both
	of its instances (Services) will start, and data will be transfered. The
	starting of the services occures regardless of being set up as automatic or
	manual startup, or the order of the services.
	
	Additional query words: 3.50 us
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN350 kbMailMMTA350NT
	Version           : WINDOWS:3.5; :3.5
	
	=============================================================================
	
