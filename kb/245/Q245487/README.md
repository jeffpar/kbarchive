---
layout: page
title: "Q245487: APPC Program Never Retries New Local LU From Pool"
permalink: kb/245/Q245487/
---

## Q245487: APPC Program Never Retries New Local LU From Pool

	Article: Q245487
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an APPC application supplies a blank Local APPC LU alias to TP_STARTED and
	calls [MC_]ALLOCATE multiple times using rtn_ctl = AP_WHEN_SESSION_FREE (where
	all sessions on a Local APPC LU become in use), [MC_]ALLOCATE requests may start
	to fail even though other Local APPC LUs from the default pool are available.
	
	CAUSE
	=====
	
	If an APPC application calls TP_STARTED once and receives a default Local APPC
	LU, all subsequent conversations that use that tp_id will use the same Local
	APPC LU alias. The APPC DLL (WAPPC32.dll) was not written to try a different
	default Local APPC LU in this case.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	An APPC application may work around this problem by calling TP_STARTED before
	every [MC_]ALLOCATE request (and by calling TP_ENDED after each conversation is
	not allocated).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This specific problem won't occur with a CPIC application since CPIC doesn't
	support the equivalent of the APPC "AP_WHEN_SESSION_FREE" return control
	setting.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
