---
layout: page
title: "Q150241: SNAADMIN.EXE Application Exception When Deleting Users"
permalink: kb/150/Q150241/
---

## Q150241: SNAADMIN.EXE Application Exception When Deleting Users

	Article: Q150241
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbnetserv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you delete a large number of users from within the Users and Groups window
	of SNA Server Admin causes an application exception error similar to the
	following:
	
	  An application error has occurred
	  and an application error log is being generated.
	
	  snaadmin.exe
	  Exception: access violation (0xc0000005), Address: 0x00a3169c
	
	In addition, the Application Event Log will report the following error:
	
	  Event ID: 4097
	  Source: DrWatson
	  Description: The application, snaadmin.DBG, generated an application
	  error. The error occurred on 4/10/1996 @ 11:07:30.280. The exception
	  generated was c0000005 at address 00a3169c (HashRemove).
	
	  A DRWTSN32.LOG containing the details of the application exception
	  will be located in the <windir> directory.
	
	
	CAUSE
	=====
	
	The Application Exception error occurs because the HashRemove() function in SNA
	Server Admin is trying to remove an uninitialized hash entry when you delete a
	large number of users.
	
	
	RESOLUTION
	==========
	
	SNACFG.DLL has been updated to correct the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.1, 2.11, and 2.11.sp1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna trap
	
	======================================================================
	Keywords          : kbnetwork kbnetserv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
