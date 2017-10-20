---
layout: page
title: "Q248498: Win32 CPIC Application May Stop Unexpectedly"
permalink: /kb/248/Q248498/
---

## Q248498: Win32 CPIC Application May Stop Unexpectedly

{% raw %}

	Article: Q248498
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Win32 CPIC application is supporting multiple conversations using
	non-blocking mode, the application may stop unexpectedly while issuing a new
	CMINIT (Initialize_Conversation).
	
	CAUSE
	=====
	
	Under certain circumstances, the Win32 CPIC and APPC libraries can get into a
	deadlock condition. Note that the CPIC library (Wcpic32.dll) communicates
	through the APPC library (Wappc32.dll). The deadlock can occur under the
	following circumstances:
	
	- When CMINIT issues a TP_STARTED while holding an internal CPIC critical
	  section. If another APPC verb completes asynchronously while the TP_STARTED
	  is running, the CPIC application may deadlock.
	
	
	- When the CPIC library calls into WinAPPCCancelConversation() while holding
	  the internal CPIC critical section. The thread that makes this call
	  immediately blocks while trying to obtain the APPC critical section, which is
	  held by the APPC callback thread, which is waiting for CPIC lock.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	Host Integration Server 2000:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Host Integration Server (HIS) 2000 Service Pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+------------------------------------+
	| File name   | Date       | Time    | 
	+------------------------------------+
	| Wcpic32.dll | 01/02/2001 | 10:06am | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration Server
	2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
