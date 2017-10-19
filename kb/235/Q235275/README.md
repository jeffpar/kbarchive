---
layout: page
title: "Q235275: INF:Sample TCP/IP CICS Concurrent Server Program Writes Log Data"
permalink: /kb/235/Q235275/
---

## Q235275: INF:Sample TCP/IP CICS Concurrent Server Program Writes Log Data

	Article: Q235275
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Cicscs.cbl, Imsexpl.cbl, and Mscmtics.cbl comprise a set of sample COBOL
	programs supplied with COM Transaction Integrator for CICS and IMS (COMTI). By
	default, they are found in the following directory:
	
	  ...\Program Files\SNA\Comti\SampleCode\ProgrammingSpecifics\TCP
	
	There is one additional sample in that directory, Imsimpl.cbl, to which this
	article does not apply.
	
	You may modify these samples as necessary and use them if you want when TCP/IP is
	the protocol for mainframe connectivity. The programs are capable of writing
	status entries, including error information, to a log, but logging is disabled
	by default. To enable logging, the sample code must be changed, and the program
	recompiled and linkage edited.
	
	MORE INFORMATION
	================
	
	For the CICS programs, Cicscs.cbl and Mscmtics.cbl, when logging is enabled,
	data is written to the standard IBM Customer Information Control System (CICS)
	Transient Data queue named CSMT. The CICS task number is logged in addition to
	the status or error information.
	
	For the IMS program, Imsexpl.cbl, when logging is enabled, the status or error
	information is written to the Job Entry Subsystem (JES) log of the Information
	Management System (IMS) Message Processing Region (MPR) in which the program
	executes.
	
	To enable logging, change the source code to initialize the ENABLE-LOGGING
	variable to 'Y' instead of 'N'. Find the line
	
	  01 ENABLE-LOGGING PIC X VALUE 'N'
	
	and change it to
	
	  01 ENABLE-LOGGING PIC X VALUE 'Y'
	
	Then compile and link the program.
	
	Note that there may be additional administrative steps necessary on the mainframe
	to actually implement the new versions of the programs in either CICS or IMS.
	For that, the appropriate mainframe administrative personnel should be
	contacted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	
