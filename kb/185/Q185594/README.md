---
layout: page
title: "Q185594: Error Message: Access Violation in _INS0432._MP"
permalink: /kb/185/Q185594/
---

## Q185594: Error Message: Access Violation in _INS0432._MP

	Article: Q185594
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a program that uses InstallShield, the setup program may
	quit, and you may receive any of the following Dr. Watson error messages:
	
	   - Access Violation in _INS0432._MP
	
	   - Access Violation in _INS0576._MP
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Click Start, point to Find, and click Files or Folders.
	
	2. In the Named box, type "uninst.exe" (without quotation marks), type the
	  %SystemRoot% drive and folder (usually C:\Winnt) in the Look In box, and then
	  click Find Now.
	
	  NOTE: This file should be found in the %SystemRoot% folder.
	
	3. Right-click the Uninst.exe file, and then click Rename.
	
	4. Type "uninst.old" (without quotation marks), and then press ENTER.
	
	5. In the Look In box, click the drive that contains the Service Pack 3 CD-ROM,
	  and then click Find Now.
	
	  NOTE: If you do not have the Service Pack 3 CD-ROM, search for Uninst.exe on
	  the third-party software media.
	
	6. Right-click the Uninst.exe file, and then click Copy.
	
	7. Click Start, point to Programs, and then click Windows NT Explorer.
	
	8. Navigate to the %SystemRoot% folder (usually C:\Winnt), right-click this
	  folder, and then click Paste.
	
	9. Quit the Find tool, and then run Setup again.
	
	If the problem still occurs, follow steps 1-9, using "Isuninst.exe" instead of
	"Uninst.exe."
	
	MORE INFORMATION
	================
	
	The _ins0432._mp.exe file is a part of the InstallShield Setup wizard that is
	included with some third-party programs. This file should only be invoked during
	the installation of a program and usually appears in the \Temp folder.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: crash crashes quits stops stop exit exits
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
