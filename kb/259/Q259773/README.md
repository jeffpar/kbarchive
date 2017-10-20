---
layout: page
title: "Q259773: Incorrect Response to Local Procedure Call Causes &quot;Stop&quot; Error"
permalink: /kb/259/Q259773/
---

## Q259773: Incorrect Response to Local Procedure Call Causes &quot;Stop&quot; Error

{% raw %}

	Article: Q259773
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbSecurity kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT 4.0-based server attempts to use a local procedure call and the
	server process responds by using an NtReplyPort function call instead of the
	NtAcceptConnectPort and NtCompletePort function calls, the server may stop
	responding (hang) and the following error message may appear on a blue screen:
	
	  Stop 0x00000050 PAGE_FAULT_IN_NONPAGED_AREA
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the Windows NT 4.0 Security Rollup Package. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size        File name      Platform
	  -------------------------------------------------------
	  04/25/00   04:57p     954,176   Ntkrnlmp.exe   Intel
	  04/25/00   04:57p     933,760   Ntoskrnl.exe   Intel
	  04/25/00   04:56p   1,401,728   Ntkrnlmp.exe   Alpha
	  04/25/00   04:56p   1,373,632   Ntoskrnl.exe   Alpha
	
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-003.asp
	
	For additional information about local procedure calls, see pages 95 and 119 of
	the Microsoft Windows NT Workstation 4.0 Resource Kit.
	
	Additional query words: lpc security_patch
	
	======================================================================
	Keywords          : kbnetwork kbSecurity kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
