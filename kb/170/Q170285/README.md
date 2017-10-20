---
layout: page
title: "Q170285: SNA Server APPC Activation Fails With Event 18, Sense = 0877000E"
permalink: /kb/170/Q170285/
---

## Q170285: SNA Server APPC Activation Fails With Event 18, Sense = 0877000E

{% raw %}

	Article: Q170285
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While attempting to activate an independent LU6.2 session with a host system to
	support a conversation between APPC or CPIC applications, the host rejects the
	SNA Server BIND attempt with sense code 0877000E, causing the following error to
	be logged by SNA Server:
	
	  Event ID: 18
	  APPC session activation failure: BIND negative response or UNBIND
	  request received
	
	  Sense data = 0877000E
	  Connection = <connection name>
	  LU alias = <Local LU alias>
	  PLU alias = <Remote LU alias>
	  Mode name = <APPC mode name>
	
	According to the IBM SNA Formats Guide (IBM document GA27-3136), this sense code
	indicates the following error:
	
	  
	
	  0877000E: Resource mismatch: The sending SSCP and the receiving T4 node
	         have conflicting system definitions. A BIND has been received
	         for an independent LU, but the LU specified is not a T2.1 node.
	
	This error may occur under various configuration problems as described in the
	MORE INFORMATION section.
	
	MORE INFORMATION
	================
	
	The following configuration settings should be confirmed within the host or
	router configuration:
	
	1. Confirm VTAM PU definitions for PUTYPE and XID.
	
	  When connecting over a non-switched line, such as an SDLC leased line, the PU
	  definition in VTAM must have the following entries to support independent
	  LU6.2 sessions:
	
	  PUTYPE=2
	  XID=YES
	
	2. Confirm the Local APPC LU network name.
	
	  Within VTAM, the PU definition may contain a "NETID" parameter, which must
	  match the Local APPC LU network name in the SNA Server configuration:
	
	  NETID=<network name>
	
	  Note that the NETID parameter may not appear in the PU description. This
	  parameter is normally found in the VTAM start list member of SYS1.VTAMLST.
	  Look for a member named ATCSTRxx, where xx is 00 or TS.
	
	3. Confirm the Local APPC LU name.
	
	  Within VTAM, the LU macro name must match the Local APPC LU name. Also, the
	  LOCADDR parameter must be set to "0" for independent LU 6.2 LU's. In
	  addition, when connecting to CICS, the CICS "Netaddr" parameter within the
	  CICS region definition must also match this same VTAM LU name.
	
	4. When connecting over an SDLC leased line through a Cisco synchronous router
	  connected via frame relay to the host:
	
	  The port settings in the Cisco synchronous router must be configured to
	  support a PU2.1 capable device attached via the SDLC leased line. To support
	  PU2.1 and independent LU6.2, Format 3 SNA XID's must be used during link
	  connection establishment. If the Cisco port is not configured to support a
	  PU2.1 capable device, it may indicate a Format 0 XID to the host system
	  during connection startup, preventing the use of independent LU6.2 sessions.
	  At the time this article was written, the specific Cisco configuration
	  setting was still being researched. This article will be updated with this
	  information once the information is confirmed.
	
	For information about the above VTAM parameters, see the IBM VTAM Resource
	Definition Reference. For example:
	
	- VTAM V3: IBM document number SC31-6438
	
	- VTAM V4R2: IBM document number SC31-6498
	
	- VTAM V4R3: IBM document number SC31-6552
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
