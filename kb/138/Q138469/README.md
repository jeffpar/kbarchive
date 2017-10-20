---
layout: page
title: "Q138469: SNA Server Support for ACTPU (ERP) and ACTLU (ERP)"
permalink: /kb/138/Q138469/
---

## Q138469: SNA Server Support for ACTPU (ERP) and ACTLU (ERP)

{% raw %}

	Article: Q138469
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have more than one mainframe attached to your Front End Processor (FEP)
	with Network Control Program (NCP) running, the IBM SNA "error recovery
	protocol" (ERP) can be used. This can be used for ownership takeover without
	interrupting the active LU-LU session. For example, if the owning Service
	Control Point (SSCP) of PU/LU is down, the LU without active session becomes
	inactive. The other SSCP/mainframe can take the ownership of PU/LU without
	resetting the active LU-LU session by ACTPU(ERP) and ACTLU (ERP). And the other
	LU can now be activated by the new SSCP.
	
	SNA Server supports the recovery of PLU-SLU sessions after receiving an ACTPU
	(ERP) and ACTLU (ERP) command. However, ACTPU (ERP) recovery requires that the
	SNA Server connection is not dropped. SNA Server reports connection failures by
	logging Event 23 in the Windows NT application event log. If the SNA Server
	connection to the FEP is lost, PLU-SLU session recovery is not possible.
	
	MORE INFORMATION
	================
	
	SNA Server handles session recovery as follows, when receiving ACTPU and ACTLU
	commands:
	
	- When receiving an ACTLU (cold) command, SNA Server resets the SSCP-LU session
	  (which is used to carry the logon screen) and the PLU-SLU session (used for
	  applications and data transfer after the user has logged on to an
	  application) if the PLU-SLU session is active.
	
	- When receiving an ACTLU (ERP) command, SNA Server resets the SSCP-LU session.
	  If there is an active PLU-SLU session, this session is left active.
	
	- The ACTLU (ERP) command is used in conjunction with the ACTPU (ERP) command.
	  As for ACTLUs, if a cold ACTPU is issued by the host, SNA Server resets all
	  the sessions using that PU, which is all the 3270 sessions.
	
	- If an ACTPU (ERP) command is issued by the host, SNA Server only resets the
	  PU-SSCP session.
	
	The SNA Server will send back an ACTPU (ERP) +RSP if all of the following are
	true:
	
	- An ACTPU (ERP) request was received.
	
	- The ACTPU (ERP) was received when the PU-SSCP session was already active.
	
	- The ACTPUERP Registry entry is defined.
	
	NOTE: Starting with SNA Server 2.11 Service Pack 2, the default behavior for SNA
	Server was changed so that ACTPU (ERP) support is not enabled by default. For
	more information on why the default behavior was changed, see the following
	Microsoft Knowledge Base article:
	
	  Q153253 SNA Server 3270 Sessions Not Recovered with Eicon WAN Server
	
	Add the following Registry Entry to enable ACTPU (ERP) support in SNA Server:
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaServr\Parameters
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	  "Value Name: ACTPUERP
	  Data Type: REG_SZ" (without the quotation marks)
	
	4. Click OK.
	
	5. In the String field, input the string TRUE and then click OK. (Actually, any
	  value can be entered for the String to enable ACTPU (ERP) support.)
	
	6. Exit the Registry Editor.
	
	7. Stop and restart the SNA Server service.
	
	If the ACTPUERP registry entry is not set, SNA Server treats all ACTPU requests
	as ACTPU (Cold) requests.
	
	SNA Server 4.0 and later
	------------------------
	
	A change was incoporated in SNA Server 4.0 that changed the default behavior in
	SNA Server so that ACTPU(ERP) support is enabled by default like it was prior to
	SNA Server 2.11 SP2. With SNA Server 4.0 and later, ACTPU(ERP) support is
	disabled by adding the ACTPUERP registry and setting its Value to NO, 0, OFF, or
	FALSE. These values are not case sensitive so they may be entered in lower case
	as well.
	
	
	NOTE: For information describing the ACTPU and ACTLU message formats, see the IBM
	SNA Formats Guide (IBM p/n# GA27-3136), Chapter 5, "Request/Response Units
	(RUs)".
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
