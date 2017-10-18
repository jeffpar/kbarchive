---
layout: page
title: "Q129625: SNA Server: Event 18 Includes Sense Data = 00320008"
permalink: kb/129/Q129625/
---

## Q129625: SNA Server: Event 18 Includes Sense Data = 00320008

	Article: Q129625
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the host sends an UNBIND in response to an SNA Server BIND attempt to
	activate independent LU6.2 sessions, SNA Server logs the following event into
	the Windows NT application event log:
	
	  Event: 18
	  Description: APPC session activation failure: BIND negative response
	  or UNBIND request received:
	
	  Sense data = 0032xxxx
	  Connection = <connection name>
	  LU alias = <local LU name>
	  PLU alias = <remote LU name>
	  Mode name = < SNASVCMG or LU6.2 mode name>
	
	where 0032 means UNBIND, and xxxx is the unbind type. Under SNA Server 2.1, the
	"unbind type" is converted internally as follows:
	
	Event log    Actual UNBIND type
	-------------------------------
	0007          FE   session failure
	0008          0F   cleanup
	0009          06   invalid session parameters
	0010          0C   unrecoverable LU failure
	
	Under SNA Server 2.11 or 3.0, the actual unbind type is logged in the "sense
	data" field in Event 18.
	
	Note that 0032xxxx is not SNA Sense data.
	
	NOTE: Chapter 5 of the "IBM SNA Formats Guide" lists all unbind types and their
	format. The most common unbind type logged during session activation is:
	
	  Sense data = 00320008
	
	This indicates the route extension used by the LU-LU session has become
	inoperative, thus forcing the deactivation of the identified LU-LU session.
	
	NOTE: The Sense data field includes an SNA sense code if the host responds with
	SNA sense data instead of an UNBIND. SNA sense data codes are listed in Chapter
	9 of the "IBM SNA Formats Guide".
	
	CAUSE
	=====
	
	This situation can occur when there is a configuration mismatch between SNA
	Server and the host system (for example, VTAM or CICS), or when the CICS region
	(matching the SNA Server Remote APPC LU name) is not running.
	
	RESOLUTION
	==========
	
	To correct this problem, correct the configuration mismatch or ensure the CICS
	region (matching the SNA Server Remote APPC LU name) is running. The SNA Server
	2.1 and 3.0 Administrator's Guide includes sample VTAM and CICS parameters for
	independent LU6.2 (see page 111-116 in the 2.1 Admin Guide). Follow this sample
	configuration to check for configuration mismatches between SNA Server and the
	host.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
