---
layout: page
title: "Q178208: CrashOnAuditFail with Logon/Logoff Auditing Causes Blue Screen"
permalink: kb/178/Q178208/
---

## Q178208: CrashOnAuditFail with Logon/Logoff Auditing Causes Blue Screen

	Article: Q178208
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you shut down your computer, the computer may stop responding (hang), and
	you may receive the following error message on a blue screen:
	
	  STOP 0xC0000244
	  An attempt to generate a security audit failed
	
	This behavior may occur even if the audit log is not full.
	
	CAUSE
	=====
	
	Windows NT attempts to report a logoff audit in the event log after the event
	log has shut down. As this audit attempt fails and CrashOnAuditFail is enabled,
	the system displays a blue screen error message that reports an audit failure.
	
	RESOLUTION
	==========
	
	You can work around this problem by disabling logon/logoff auditing.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	In some instances, the server may not bugcheck, but may instead run very slowly
	after administrator logon. The system may also report continuous RPC errors
	after logon. Non-administrators will not be able to log on as a result of the
	CrashOnAuditFail key being set to 0x1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
