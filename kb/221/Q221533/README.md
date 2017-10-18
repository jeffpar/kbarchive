---
layout: page
title: "Q221533: INF: EZY1309E IBM Runtime Error on Mainframe Using CICS MS Link"
permalink: kb/221/Q221533/
---

## Q221533: INF: EZY1309E IBM Runtime Error on Mainframe Using CICS MS Link

	Article: Q221533
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A runtime error can occur on the mainframe when one is using COMTI with the CICS
	MS Link programming model and TCP/IP data transmission to the mainframe.
	
	The error involves the IBM Listener program that runs in the CICS region. The
	following error message appears in the CICS CSMT message log:
	
	  EZY1309E mm/dd/yy hh:mm:ss GIVESOCKET FAILURE TRANS tttt TASKID= nnnn ERRNO=
	  46 INET ADDR= iii.iii.iii.iii PORT= pppp
	
	Explanation of variables:
	
	tttt: CICS transaction identifier
	nnnn: CICS task number
	iii.iii.iii.iii: IP address of the TCP/IP stack on the mainframe
	pppp: TCP port number for the IBM Listener program in the CICS region
	
	MORE INFORMATION
	================
	
	The ERRNO=46 socket error has the following explanation:
	
	EPFNOSUPPORT: The specified protocol family is not supported or the specified
	domain for the client identifier is not AF_INET=2.
	
	A customer solved this problem by applying the IBM PTF (Program Temporary Fix)
	number UQ20701 to their TCP/IP system on the mainframe. This PTF fixes a problem
	in the IBM Listener program, EZACIC02.
	
	REFERENCES
	==========
	
	Information about the error message can be found in the following two IBM
	manuals:
	
	- OS/390 eNetwork Communications Server IP Messages: Volume 3 Version 2 Release
	  7, Document Number SC31-8674-02
	
	- IBM TCP/IP for MVS CICS TCP/IP Socket Interface Guide and Reference, Document
	  Number SC31-7131-03
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
