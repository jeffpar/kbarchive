---
layout: page
title: "Q212825: SMS: GPF: &quot;Initialization of CRYPT32.DLL Failed&quot;"
permalink: kb/212/Q212825/
---

## Q212825: SMS: GPF: &quot;Initialization of CRYPT32.DLL Failed&quot;

	Article: Q212825
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbRemote kbsms200 kbsms200bug kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client computers running Microsoft Systems Management Server (SMS) 2.0 and
	Microsoft Windows NT Workstation 4.0 with Service Pack 3 (SP3) installed may
	receive the following General Protection Fault (GPF) error message in WUSER32:
	
	  Initialization of the dynamic link library C:\WINNT40\System32\CRYPT32.dll
	  failed. The process is terminating abnormally.
	
	CAUSE
	=====
	
	This behavior can occur because the Crypt32.dll file in Windows NT 4.0 SP3
	contains a subtle memory leak that eventually becomes apparent if it is loaded
	and unloaded constantly. This leak occurs because Transport Layer Security (TLS)
	is allocated when Crypt32.dll is loaded, but it is not freed when the DLL is
	unloaded.
	
	WORKAROUND
	==========
	
	To resolve this issue, apply an updated version of Crypt32.dll. This can be done
	either by upgrading the client computer to Windows NT 4.0 SP4, or by replacing
	the Crypt32.dll file with the newer version from Windows NT 4.0 SP4.
	
	STATUS
	======
	
	This problem was corrected in Windows NT 4.0 SP4.
	
	MORE INFORMATION
	================
	
	For additional information about DLL errors in Windows NT 4.0 SP3, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q174327 DLL Initialization Failure May Occur When Loading Crypt32.dll
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbRemote kbsms200 kbsms200bug kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
