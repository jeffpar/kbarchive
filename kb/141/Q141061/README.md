---
layout: page
title: "Q141061: PC MAPI: How to Determine if Simple MAPI Is Available"
permalink: kb/141/Q141061/
---

## Q141061: PC MAPI: How to Determine if Simple MAPI Is Available

	Article: Q141061
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Before you start a Simple Messaging Application Programming Interface (MAPI)
	session with a MAPI application, you may need to determine if Simple MAPI is
	available on the system.
	
	One way to see if Simple MAPI is available is to check the [Mail] section in the
	WIN.INI file for the MAPI entry. This entry will have a value of 1 if Simple
	MAPI is installed; 0 if it is not installed. For example, the entry will be the
	following if Simple MAPI is available:
	
	  [Mail]
	  MAPI=1
	
	MORE INFORMATION
	================
	
	With the release of MAPI version 1.0, you should also check the MAPIX entry for
	the availability of Extended MAPI, CMC entry for Common Mail Calls, and
	OLEMessaging for OLE Messaging.
	
	For example, the following entries are for Extended MAPI:
	
	  [Mail]
	  MAPI=1
	  MAPIX=1
	  CMC=1
	  OLEMessaging=1
	
	NOTE: Microsoft Windows 95 and Microsoft Windows NT use the WIN.INI file for
	backward compatibility.
	
	Additional query words: 3.00 3.20 3.50 1.00 visual c mapi0 mapi1 kbhowto
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
