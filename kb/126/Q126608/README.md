---
layout: page
title: "Q126608: Uni to Multiprocessor Utility Fails to Update System"
permalink: /kb/126/Q126608/
---

## Q126608: Uni to Multiprocessor Utility Fails to Update System

{% raw %}

	Article: Q126608
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Uni to Multiprocessor upgrade utility (UPTOMP.EXE) for Windows NT may fail
	and display the following error message:
	
	  Processor Upgrade Utility - Error
	
	  Your system has not been upgraded because the utility was unable to save the
	  xxxxxxxx system files. Check the files in the system32 directory and the
	  "save" directory, delete the "save" directory if necessary then re-run this
	  utility.
	
	where xxxxxxxx represents the currently installed system files (uniprocessor or
	multiprocessor).
	
	CAUSE
	=====
	
	The error message above appears when there is a %SYSTEMROOT%\SYSTEM32\UPTOMP.OLD
	directory. UPTOMP.EXE copies the currently installed HAL.DLL, KERNEL32.DLL,
	NTDLL.DLL, NTOSKRNL.EXE, and WINSRV.DLL files to the UPTOMP.OLD directory before
	installing the new versions of the files.
	
	WORKAROUND
	==========
	
	To work around this problem, delete or rename the UPTOMP.OLD directory and
	re-run UPTOMP.EXE.
	
	Additional query words: mps prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
