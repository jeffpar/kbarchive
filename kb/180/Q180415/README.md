---
layout: page
title: "Q180415: Sense Code in FMH-7 Message Is Not Returned to APPC Application"
permalink: /kb/180/Q180415/
---

## Q180415: Sense Code in FMH-7 Message Is Not Returned to APPC Application

	Article: Q180415
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There may be certain cases where an APPC or CPI-C application does not receive
	an error message sent to it by a remote application or host. LU 6.2 errors are
	generally reported across an LU 6.2 session or conversation by FMH-7 messages.
	If the error being reported is an IBM Sense Code not defined in the FMH-7
	handling code that is part of the SNA Server APPC library, the error message
	will not be sent up to the application.
	
	In the reported instance of this problem, the host had sent an FMH-7 message to
	an application containing a sense code of X'0809'. SNA Server sent this FMH-7
	message to the client as shown here:
	
	  PVI   --------------------------------------------------------------
	  PVI   030242B2->181F0001 LU 6.2
	  PVI                      MSGID:RDAT   MSGTYP:FMH7
	  PVI
	  PVI   ---- Header  at address 01EF40A4, 1 elements ----
	  PVI   01070000 00000078 01020000 0100DC00     <.......x........>
	  PVI
	  PVI   ---- Element at address 01F73EDC, start 13, end 19 ----
	  PVI   07070809 097A80                         <.....z.         >
	
	Bytes 2 and 3 of the Element data are the bytes that contain the IBM sense code
	of X'0809'.
	
	NOTE: This message was captured in a SNA Server LU 6.2 message trace using the
	SNA Server Trace Program.
	
	The application had a RECEIVE_AND_WAIT call posted at this point. Normally, an
	error will be reported in the RECEIVE_AND_WAIT call. In this case, the
	RECEIVE_AND_WAIT never completed because the X'0809' sense code was never passed
	to the application by the APPC library.
	
	The visible symptoms of this problem may vary. If the application has a timeout,
	the application will eventually time out. If the application does not have a
	timeout, it may stop responding until it is stopped and restarted.
	
	CAUSE
	=====
	
	The FMH-7 handling code that is part of the SNA Server APPC library does not
	contain some of the more obscure IBM sense codes. If the APPC library receives
	an FMH-7 message containing one of these unrecognized sense codes, it never
	passes the error information to the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11, 2.11
	SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The fix updates the FMH-7 handling code of the APPC library to handle obscure
	sense codes by generating a protocol error that contains the sense code received
	in the FMH-7 message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
