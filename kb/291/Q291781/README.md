---
layout: page
title: "Q291781: &quot;Stop 0x50&quot; in IopReportResourceUsage"
permalink: /kb/291/Q291781/
---

## Q291781: &quot;Stop 0x50&quot; in IopReportResourceUsage

	Article: Q291781
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP5,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP5, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Windows startup, a "Stop 0x00000050" (e1400004,0,0,2) error may occur.
	This problem is known to occur on Compaq Proliant DL580 multiple-processor
	computers in the early stages of startup when loading the Compaq Sysmgmt.sys
	driver. At this stage, no memory dump is generated; a live debug session is
	required to clearly identify this problem. The problem occurs only when the
	Sysmgmt.sys Startup mode is "system" (the default), and is intermittent (about 1
	in 10 tries). If Sysmgmt.sys is started in "automatic" mode, the problem does
	not occur.
	
	CAUSE
	=====
	
	Resource lists (CM_RESOURCE_LIST) that are provided by Sysmgmt.sys are parsed
	incorrectly in IopReportResourceUsage. Therefore, the parser may address a
	non-mapped area of memory, generating the problem.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size       File name     Platform
	  -------------------------------------------------------------
	  03/15/2001  05:36p    957,120  Ntkrnlmp.exe  Intel
	  03/15/2001  05:36p    936,768  Ntoskrnl.exe  Intel
	  03/15/2001  05:32p  1,403,200  Ntkrnlmp.exe  Alpha
	  03/15/2001  05:32p  1,375,104  Ntoskrnl.exe  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Windows NT 4.0 Service
	Pack 6a (SP6a).
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: sysmgmt.sys DL580 IopReportResourceUsage 0x50 blue screen bluescreen
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP5,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
