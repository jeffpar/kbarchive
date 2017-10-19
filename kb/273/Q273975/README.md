---
layout: page
title: "Q273975: Opening Multiple SLI Sessions May Cause Some to Stop Responding"
permalink: /kb/273/Q273975/
---

## Q273975: Opening Multiple SLI Sessions May Cause Some to Stop Responding

	Article: Q273975
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Win32 SNA Server application opens multiple logical unit (LU) sessions at
	the same time by calling SLI_OPEN, some SLI_OPEN requests may stop responding
	(hang) and never complete. SNA Application LUA API tracing shows that the
	underlying RUI_INIT is completed for every SLI_OPEN that was issued, but one or
	more SLI_OPEN requests may fail to complete.
	
	CAUSE
	=====
	
	A timing window within the Winsli32.dll code can result in SLI_OPEN hanging if
	the RUI_INIT callback happens before the verb returns control.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	Reduce the number of SLI_OPEN requests that are issued at the same time, or
	serialize all SLI_OPEN requests.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
