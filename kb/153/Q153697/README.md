---
layout: page
title: "Q153697: Installing Office 95 with resource kit utility CPS"
permalink: /kb/153/Q153697/
---

## Q153697: Installing Office 95 with resource kit utility CPS

{% raw %}

	Article: Q153697
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51; :3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Uplodprf.exe (part of the Computer Profile Setup utility, or CPS)
	to upload a profile of a workstation that has Office 95 installed, Uplodprf.exe
	does not complete.
	
	CAUSE
	=====
	
	Uplodprf.exe does not profile long file names. (This is documented in the
	Windows NT Resource Kit in the document Cps_faq.txt, found in the Reskit\Cps
	directory.) The reason is that downloading the profile uses Winntp.exe, which is
	an MS- DOS application and does not understand long file names. Winntp.exe is
	similar to Winnt /b in that an MS-DOS partition must be present. This is because
	the Windows NT FAT file system (which can use long file names) is not installed
	until the GUI portion of Windows NT setup is entered.
	
	WORKAROUND
	==========
	
	To work around this problem, configure the master system to support only file
	names in the 8.3 format (that is, xxxxxxxx.xxx). To do this, use the following
	procedure:
	
	1. Install Windows NT on the master system with the FAT file system (for an
	  explanation of CPS, please see volume 1 of the Windows NT Resource Kit).
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	2. Run the Registry Editor(Regedt32.exe).
	
	3. Under the subtree HKEY_LOCAL_MACHINE, go to the following subkey:
	
	  \System\CurrentControlSet\Control\Filesystem
	
	4. Double-click on Win31Filesystem: Reg_Dword 0x0.
	
	5. Set this value to 1 (0 = off, 1 = on).
	
	6. Quit Regedt32.exe.
	
	7. Install Office 95. The setup program checks the operating system
	  configuration and finds that it does not support long file names and instead
	  uses the 8.3 file-naming convention.
	
	8. Run Uplodprf.exe and be sure to specify the MSOFFICE directory, for example:
	
	  Uplodprf /s:\\server\sharename -i:profile.ini /msoffice ......
	
	9. Continue on with Winntp as directed.
	
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : winnt:3.5,3.51; :3.51
	
	=============================================================================
	

{% endraw %}
