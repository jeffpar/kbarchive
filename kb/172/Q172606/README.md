---
layout: page
title: "Q172606: SNA Server Access Violation When Receiving Invalid XID Frames"
permalink: kb/172/Q172606/
---

## Q172606: SNA Server Access Violation When Receiving Invalid XID Frames

	Article: Q172606
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server may encounter access violations or hard-coded break points within
	Snaservr.exe in an environment where corrupt 802.2 frames are being sent as a
	result of a bad network card or network card driver. The failures result in a
	Drwtsn32.log that may show the following type of failures:
	
	  Application exception occurred:
	  App: snalink.DBG (pid=216)
	  When: 7/22/1997 @ 13:53:4.828
	  Exception number: 80000003 (hardcoded breakpoint)
	
	In the Windows NT Application log the following event will be logged with the
	same timestamp as the hard-coded break point:
	
	  
	
	  Event ID : 686
	  Source: DLC Link Service
	  Time:14:53:4
	  Type: Error
	  Category: None
	  Description: SNA Server Internal buffer pool error.
	     Reason  = Invalid Owner Id
	     Module  = D:\sna\system\SNALINK.EXE
	     Process = 216
	     Pool    = TRUSTED ELTS
	     Details = Current Owner Id D8H, Correct ID 1BF801EEH
	     EXPLANATION - While processing a buffer pool request, it was noticed
	     that the buffer pool had been corrupted.
	
	SNA traces of the failures may show corrupted XID frames or terminate during the
	processing of an XID.
	
	CAUSE
	=====
	
	If an XID is received with an incorrect length field, the SNA Server XID parsing
	code fails to handle the processing of the frame correctly.
	
	Please refer to the IBM SNA Formats Guide (GA27-3136) for more information on XID
	formats.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the XID parsing behavior of SNA Server correctly handles
	XIDs with invalid length fields.
	
	
	Additional query words: EventID 686 Hardcoded
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
