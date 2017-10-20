---
layout: page
title: "Q164448: Error Message: Load Needed DLLs for Kernel"
permalink: /kb/164/Q164448/
---

## Q164448: Error Message: Load Needed DLLs for Kernel

{% raw %}

	Article: Q164448
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT, you may receive the following error message:
	
	  Windows NT could not start because of an error in the software.
	  Please report this problem as :
	  load needed DLLs for kernel.
	  Please contact your support person to report this problem.
	
	CAUSE
	=====
	
	The Hal.dll and Ntoskrnl.exe files are mismatched.
	
	RESOLUTION
	==========
	
	Use the ERD disk and repair the installation. Choose to replace all files, and
	then replace only the Hal.dll and Ntoskrnl.exe files.
	
	If you can start another installation of Windows NT on the same computer, you can
	expand the correct Hal.dll and Ntoskrnl.exe files from the Windows NT CD-ROM. To
	do so, follow these steps:
	
	1. Boot to the working version of Windows NT.
	
	2. Start a command prompt.
	
	3. Change to the CD-ROM drive.
	
	4. Change to the appropriate folder on the CD-ROM (for example, I386 for
	  Intel-based computers).
	
	5. Type "expand hal.dl_ <systemroot>\system32" (without the quotation
	  marks) where <systemroot> is the path of the non-functioning Windows NT
	  folder.
	
	6. Type "expand ntoskrnl.ex_ <systemroot>\system32" (without the quotation
	  marks).
	
	7. Restart the computer into the other Windows NT installation.
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
