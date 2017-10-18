---
layout: page
title: "Q137902: SNASERVR.EXE Traps When it Receives an Illegal SIGNAL Command"
permalink: kb/137/Q137902/
---

## Q137902: SNASERVR.EXE Traps When it Receives an Illegal SIGNAL Command

	Article: Q137902
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server generates a Dr. Watson error when it receives an illegal SIGNAL
	command from a host system. The DRWTSN32.LOG file indicates that an Application
	Exception has occurred in SNASERVR.EXE. In addition, SNA Server logs Event 624
	in the Windows NT application log when the SNASERVR.EXE trap occurs. The Event
	624 has a description similar to the following:
	
	  Creating dump file C:\SNA\traces\snadump.log for SNASERVR.EXE
	
	  EXPLANATION
	  A process (SNASERVR.EXE) ended abnormally due to a protection violation or
	  similar condition and a dump file SNADUMP.LOG has been created that contains
	  information about the state of the process at the time of the exception.
	  Register information is contained in your Windows NT root directory in the
	  file DRWTSN32.LOG.
	
	CAUSE
	=====
	
	The SIGNAL command consists of the command byte and a four-byte value, according
	to the IBM SNA Formats Guide. Therefore, any SIGNAL command that consists of
	fewer than five bytes is illegal. The SNA Server Node (SNASERVR.EXE) will trap
	as described above if it receives an illegal SIGNAL command containing fewer
	than 5 bytes. In addition, a similar trap on the receipt of an illegal LUSTAT
	command containing too few bytes is also possible.
	
	NOTE: Please refer to the RU section of the IBM SNA Formats Guide (GA27-3136) for
	more specifics on format of SNA commands.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the file SNASERVR.EXE to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	KBCategory: kbnetwork kbbug2.00 kbbug2.10 kbbug2.11
	KBSubcategory: ntnetserv
	
	MORE INFORMATION
	================
	
	This problem was encountered by a customer when sending an illegal SIGNAL
	command data message to SNA Server from a host simulator. This problem has not
	been encountered when running SNA Server against actual SNA connectivity
	products from IBM or any other vendor.
	
	Additional query words: node sig 3270 mainframe vtam prodsna event viewer
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
