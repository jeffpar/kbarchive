---
layout: page
title: "Q150959: Preventing Repeated APPC Session Activation Failures Event 18"
permalink: /kb/150/Q150959/
---

## Q150959: Preventing Repeated APPC Session Activation Failures Event 18

{% raw %}

	Article: Q150959
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When SNA Server is configured with independent APPC LU6.2 sessions, SNA Server
	will automatically initiate LU6.2 session negotiation with the remote system for
	each configured LU/LU/mode pair when the connection is started. The independent
	LU6.2 LUs require an initial SNA Service Manager (SNASVCMG) mode BIND between
	the LUs in order for session limit (CNOS) negotiation to take place.
	
	If a BIND error is received on this mode, SNA Server will log the following Event
	18:
	
	NOTE: It will continue to retry.
	
	  Event 18
	
	  APPC session activation failure: BIND negative response or UNBIND
	  request received
	
	  Sense data = <sense data>
	  Connection = <connection name>
	  LU alias = <local LU alias>
	  PLU alias = <remote LU alias>
	  Mode name = SNASVCMG
	
	If the remote system is not currently active (for example, if the remote system
	is CICS though the CICS region has been brought down for maintenance), the Event
	18 will be logged for each BIND failure.
	
	The SNA Server NOINITCNOS registry setting can be set to prevent these repeated
	Event 18 errors.
	
	MORE INFORMATION
	================
	
	SNA Server supports a registry entry that disables automatic LU6.2 session
	negotiation using the NOINITCNOS registry setting, as documented in the SNA
	Server [ASCII 147]Reference Guide,[ASCII 148] page 195 (in Appendix C). This
	will cause SNA Server to perform LU6.2 session negotiation only when an
	application requests a conversation over an LU/LU pair.
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/Snaservr
	  /Parameters/ 
	
	  NOINITCNOS: REG_SZ: YES
	
	If this entry is not present in the registry, it defaults to No.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
