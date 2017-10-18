---
layout: page
title: "Q300685: PRB: OLEDB Err Msg: Conversation Was Deallocated with AP_ABEND"
permalink: kb/300/Q300685/
---

## Q300685: PRB: OLEDB Err Msg: Conversation Was Deallocated with AP_ABEND

	Article: Q300685
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft OLE DB Provider for AS/400 and VSAM, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "Conversation was Deallocated with AP_ABEND" occurs when you are
	running an application (or sending code from an Active Server Pages page) to
	connect via TCP/IP through SNA Server's OLEDB Provider for AS400/VSAM to an
	AS400.
	
	The application will run fine the first time. If you disconnect and rerun the
	application, the error occurs. However, if you disconnect again and rerun the
	same application another time, everything works fine. (The error occurs every
	other time.)
	
	Another symptom of the problem is an error in the AS400 QSYSOPR Log "DDM TCP/IP
	server error occurred with reason code 7". The complete error entry is as
	follows:
	
	  
	
	  Message ID . . . . . . : CPD3E33 Severity . . . . . . . : 40 
	  Message type . . . . . : Diagnostic 
	  Date sent . . . . . . : 03/06/01 Time sent . . . . . . : 07:55:37 
	  Message . . . . : DDM TCP/IP server error occurred with reason code 7. 
	  Cause . . . . . : An error with reason code 7 occurred during DRDA/DDM 
	  TCP/IP server processing. The name of the server program is QRWTLSTN. The 
	  reason codes and their meanings are as follows: 
	  1 -- Resolve to the QRWTLSTN program failed. 
	  2 -- Retrieval of the QRWTLSTN program lock failed. 
	  3 -- Submit job to start the server job failed. 
	  4 -- Allocation of the QRWTLSTN program failed. 
	  5 -- Starting of the server job failed. 
	  6 -- Ending of the server job failed. 
	  7 -- Activation of the server job failed.
	  8 -- Processing of the start server request failed.
	
	RESOLUTION
	==========
	
	The problem can be resolved by changing the "Maximum number of uses" value in
	the QRWTSRVR job to "1" (the default is 200).
	
	First verify what MAXUSE value you are currently using by performing the
	following:
	
	1. From an AS400 command prompt, type "wrksbsd (qsys/qsyswrk)" (without the
	  quotation marks) and press ENTER.
	
	2. Press DOWN ARROW to QSYSWRK and type "5" (without the quotation marks) (for
	  "Display").
	
	3. Select option 10 - Prestart Job Entries.
	
	4. Press DOWN ARROW to QRWTSRVR and type "5" (without the quotation marks)
	  (Display).
	
	5. Look at the "Maximum number of uses" value.
	
	  If the value is greater than 1, type the following at an AS400 command prompt,
	  and then press ENTER:
	
	  "CHGPJE SBSD(QSYS/QSYSWRK) PGM(QSYS/QRWTSRVR) MAXUSE(1)" (without the
	  quotation marks)
	
	This change will take effect immediately.
	
	MORE INFORMATION
	================
	
	The "Maximum number of uses" setting is for the maximum number of requests that
	can be handled by each prestart job in the pool before the job will be ended.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The problem can be reproduced using the RLIO_VB.exe sample application (which is
	included with SNA Server and Host Integration Server):
	
	1. Run RLIO_VB.exe (which is located in the <SNAROOT>\System folder.
	
	2. Click Connect, type the path for UDL to connect to AS400, and then press
	  ENTER.
	
	3. Click Open RS (Record Set), type a valid RS, and then click OK.
	
	4. Click Close RS.
	
	5. Click Disconnect.
	
	6. Try to use the same UDL file to reconnect.
	
	The error will occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbOLEDBSearch kbSNAServSearch kbHostIntegServ2000 kbOLEDBProvAS400VSAM400SP2 kbOLEDBProvAS400VSAM400SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbOLEDBProvSearch
	Version           : :4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
