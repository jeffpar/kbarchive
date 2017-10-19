---
layout: page
title: "Q148599: Dependent LU6.2 Session Fails With Event ID 14: INITSELF"
permalink: /kb/148/Q148599/
---

## Q148599: Dependent LU6.2 Session Fails With Event ID 14: INITSELF

	Article: Q148599
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an SNA Server starts a dependent LU6.2 session to a host system, the SNA
	Server sends an INITSELF command to solicit a BIND command from the host. If
	there is a configuration mismatch between the SNA Server and the host (VTAM and
	subsystem, such as CICS) or if the host application is temporarily unavailable,
	then the host sends a negative response to the INITSELF command and the SNA
	Server logs a sense code in the Windows NT application event log:
	
	  Event ID: 14
	  Description: APPC session activation failure: INITSELF negative response
	  received.
	
	     Sense data   = <sense code>
	     Connection   = <connection name>
	     LU alias     = <Local LU alias>
	     PLU alias    = <Remote LU alias>
	     Mode name    = <mode name>
	     LU address   = <Locaddr of Local LU>
	
	NOTE: This event may start occurring after applying SNA Server 2.11 Service Pack
	1 due to a change in the BIND verification for dependent APPC LU sessions. See
	below for more information.
	
	CAUSE
	=====
	
	An APPC session fails to start because the host has rejected the SNA INITSELF
	request sent to initiate the session. The data contains more information about
	the reason for the rejection. A common sense code which may be returned if a
	configuration mismatch exists is "1003xxxx", where 1003 indicates "Function Not
	Supported" and xxxx subcode indicates the sense code specific information.
	
	Under SNA Server versions 2.0, 2.1 and 2.11, SNA Server does not check the local
	dependent APPC LU name received in a host BIND command. Under these versions,
	SNA Server simply checks if the host BIND contains the same User Request
	Correlation (URC) field that SNA Server specified in the preceding INIT-SELF
	command. However, to correct an SNA Server Admin problem which this caused (see
	KB article Q140835), the SNA Server 2.11 Service Pack 1 version will now reject
	a host BIND request on a dependent APPC LU session if the Local APPC LU name
	does not match the SLU name received in the BIND. This change in behavior will
	only be seen if the local APPC LU name is misconfigured (i.e. if it does not
	match the VTAM LU macro name for the dependent APPC LU).
	
	RESOLUTION
	==========
	
	To correct this problem, do the following (assuming that CICS is being used):
	
	1. The SNA Server Local APPC LU name must match the VTAM LU macro name (the LU
	  name configured in the VTAMLST) and the CICS "Netname."
	
	2. The SNA Server Local APPC LU network name must match the VTAM NETID.
	
	3. The SNA Server Local APPC LU address (which is between 01-255 for dependent
	  APPC LU's) must match the VTAM LU LOCADDR parameter.
	
	4. The SNA Server APPC mode name must match the VTAM LU DLOGMOD name.
	
	5. The SNA Server Remote APPC LU name and Uninterpreted LU name must match the
	  CICS APPLID and VTAM APPLID (or ACBNAME).
	
	6. The SNA Server Remote APPC LU network name must match the VTAM NETID where
	  CICS is running.
	
	NOTE: The Local and Remote APPC LU alias names are only used by local APPC or
	CPIC applications (alias names are not sent between systems).
	
	MORE INFORMATION
	================
	
	All the Sense Codes are listed in Chapter 9 of the IBM SNA Formats Guide (IBM
	document GA27-3136).
	
	For more information in configuring independent and dependent LU6.2 and APPC for
	different IBM platforms (including CICS, AS/400, APPC/MVS, and APPC/VM), see the
	Multi-Platform APPC Configuration Guide (IBM document SV40-0089). This document
	is available on the APPC Forum (GO APPC) in CompuServe as MPCONT.ZIP.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11 SP1,3.0
	Issue type        : kbprb
	
	=============================================================================
	
