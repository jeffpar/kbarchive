---
layout: page
title: "Q138611: Stopping SNA Server Causes Application Exception in SNALINK.EXE"
permalink: kb/138/Q138611/
---

## Q138611: Stopping SNA Server Causes Application Exception in SNALINK.EXE

	Article: Q138611
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An application exception (trap) occurs in the SNA Server 802.2 Link Service when
	you stop SNA Server version 2.11. If DRWTSN32.EXE is configured as the default
	debugger, the DRWTSN32.LOG includes an exception similar to the following:
	
	  Application exception occurred:
	  App: snalink.DBG (pid=169)
	  When: 08/2/1995 @ 1:54:25.364
	  Exception number: c0000005 (access violation)
	
	In addition, SNA Server logs Event 624 in the Windows NT Event Viewer Application
	Log when this trap occurs. The following is a detailed description of the Event
	624 that is logged when the exception occurs:
	
	Creating dump file C:\SNA\TRACES\SNADUMP.LOG for SNALINK.EXE
	
	EXPLANATION:
	
	A process (SNALINK.EXE) ended abnormally due to a protection violation or similar
	condition and a dump file SNADUMP.LOG has been created that contains information
	about the state of the process at the time of the exception. Register
	information is contained in your Windows NT root directory in the file
	DRWTSN32.LOG.
	
	CAUSE
	=====
	
	The application exception is caused when the 802.2 Link Service tries to access
	a pointer to a LCB after it has previously been freed.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the follwing files to correct this problem:
	
	  <snaroot>\SYSTEM\SNADLC.DLL
	  <snaroot>\SYSTEM\HWSETUP\SNACLASP.INF
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	KBCategory: kbnetwork kbbug2.11
	KBSubcategory: ntnetserv
	
	Additional query words: prodsna 2.11 trap admin net stop snaservr.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
