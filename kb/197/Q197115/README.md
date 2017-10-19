---
layout: page
title: "Q197115: XFOR: PROFS Connector Sends NULL Date and Time to RSCS"
permalink: /kb/197/Q197115/
---

## Q197115: XFOR: PROFS Connector Sends NULL Date and Time to RSCS

	Article: Q197115
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange PROFS Connector sends a NULL date and time stamp on all messages
	going to the host. The message reaches the RSCS console in the following
	format:
	
	  00:39:49 DMTNHD145I Received file (0000) on link MAPLE1 to
	  MICROSFT(VMXMAIL)
	  PUN FILE 1095 SENT TO   VMXMAIL  RDR AS  0472 RECS 0032 CPY  001 A
	  NOHOLD NOKEEP
	  RDR FILE 1096 SENT FROM VMXMAIL  PUN WAS 0475 RECS 0001 CPY  001 A
	  NOHOLD NOKEEP
	  0000001 FILE  PURGED
	  00:39:54 DMTNHD144I Receiving file (0000) on link MAPLE1 from
	  MAPLEC1(GEORGEB),
	  records 0
	  00:39:54 DMTAXM104I File (0000) spooled to VMXMAIL -- origin
	  MAPLEC1(GEORGEB) 00
	  /00/00 00:00:00 0
	
	
	CAUSE
	=====
	
	The Exchange PROFS Connector did not send the correct date and time stamp for
	messages going to the host.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange PROFS Connector
	
	  File Name     Version
	  ------------------------
	  Lsdiavm.exe   5.5.2510.0
	  Lsnjec.dll    5.5.2510.0
	  Lsvmhc.dll    5.5.2510.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	This problem may be manifested in the customer's host environment by causing
	errors in the NJE backbone, specifically for JES32 nodes. The resulting error is
	a bad SMF 26 record.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
