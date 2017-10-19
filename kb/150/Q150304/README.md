---
layout: page
title: "Q150304: SNA Server Admin Application Exception When Use Banyan Vines"
permalink: /kb/150/Q150304/
---

## Q150304: SNA Server Admin Application Exception When Use Banyan Vines

	Article: Q150304
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbnetserv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you exit the SNA Server Admin, you may get an application exception if the
	SNA Server is installed on a Microsoft Windows NT Server running the Banyan
	Vines version 5.56(30) redirector. The application exception is similar to the
	following:
	
	  snaadmin.exe - application error
	
	  The instruction at "0x77f8d637" referenced memory at "0x00000010". The memory
	  could not be "written".
	
	  Click OK to terminate the application.
	
	In addition, SNA Server logs the following message in the Application Event log:
	
	  Event ID: 560
	  Source: SNA Base Service
	  Description: Read from mailslot failed, rc = 165
	
	CAUSE
	=====
	
	The application exception occurs when SNA Server Admin tries to close a Vines
	socket from the Client/Server interface's detach entry point.
	
	The Event 560 message is caused because the 5.56(30) version of the Banyan Vines
	redirector returns a different error code on the VnsSocketReceive() API than
	earlier versions when the socket is closed.
	
	These two problems did not occur with previous versions of the Banyan Vines
	redirector.
	
	
	RESOLUTION
	==========
	
	Snadmod.dll and Snabv.dll have been updated so that the Vines socket is closed
	before the Client/Server interface's detach entry point is called.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11,
	and 2.11.sp1. This problem was corrected in the latest Microsoft SNA Server 2.11
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna trap drwtsn32
	
	======================================================================
	Keywords          : kbnetwork kbnetserv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
