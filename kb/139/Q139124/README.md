---
layout: page
title: "Q139124: Uplodprf Aborts When Copying CPL.CFG"
permalink: /kb/139/Q139124/
---

## Q139124: Uplodprf Aborts When Copying CPL.CFG

	Article: Q139124
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup kbtool
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You attempt to use UPLODPRF.EXE to preinstall and configure Windows NT on a
	large number of Intel-based computers. UPLODPRF.EXE aborts when it attempts to
	copy %SYSTEMROOT%\SYSTEM32\CPL.CFG. The following error then appears:
	
	  The process cannot access the file because it is in use by another process.
	
	WORKAROUND
	==========
	
	To work around this problem, stop the License Logging Service before running
	UPLODPRF.EXE.
	
	NOTE: The License Service will not be setup after running WINNTP.EXE from the
	Target system.
	
	For more information about the Windows NT 3.51 License Manager, query on the
	following words in the Microsoft Knowledge Base:
	
	  nt and license and manager
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The UPLODPRF.EXE file is part of the Windows NT Computer Profile Setup (CPS)
	utility. This utility allows you to install the same Windows NT workstation or
	Windows NT server configuration on multiple Intel architecture computers.
	
	For more information, see the "Microsoft Windows NT Resource Kit, volume 1,
	Windows NT Resource Guide," Chapter 3, Pages 101-106, Microsoft Press, 1995.
	
	Additional query words: prodnt LicenseService
	
	======================================================================
	Keywords          : kbsetup kbtool 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.51
	
	=============================================================================
	
