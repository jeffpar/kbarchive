---
layout: page
title: "Q226908: SMS: Distribute Software Wizard GPF in particular Internal Envir"
permalink: /kb/226/Q226908/
---

## Q226908: SMS: Distribute Software Wizard GPF in particular Internal Envir

{% raw %}

	Article: Q226908
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While using the Systems Management Server Distribute Software Wizard it is
	possible for an error to be generated similar to the following:
	
	  Wizard internal error: invalid WBEM ExecMethod result. Please exit the
	  Wizard.
	
	The following error message displays next:
	
	  Win32 Exception in MMC Admin UI! WIN32 Exception : ACCESS_VIOLATION
	  Description : The thread tried to read from or write to a virtual address for
	  which it does not have the appropriate access. Entry Point : CWnd::WindowProc
	  Operation : WM_NOTIFY Command Line: C:\WINNT\System32\mmc.exe
	  "D:\SMS\bin\i386\sms.msc" "mmc.exe "%1" "%2" "%3" "%4" "%5" "%6" "%7" "%8" _"
	  "" "" "" "" "" "" "" Trace : MMF Build Info : SMS 2.0 Beta (1239)
	
	Select OK. The following error message appears:
	
	  Win32 Exception in MMC Admin UI! WIN32 Exception : ACCESS_VIOLATION
	  Description : The thread tried to read from or write to a virtual address for
	  which it does not have the appropriate access. Entry Point :
	  CComponentDataImp::Command Operation : Command Line:
	  C:\WINNT\System32\mmc.exe "D:\SMS\bin\i386\sms.msc" "mmc.exe "%1" "%2" "%3"
	  "%4" "%5" "%6" "%7" "%8" _" "" "" "" "" "" "" "" Trace : MMF Build Info : SMS
	  2.0 Beta (1239)
	
	An error similar to the following may also be generated and the Microsoft
	Management Console (MMC) must be shutdown:
	
	  The instruction at "0x203a3754" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms advertisement package program collection gpf crash exit
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
