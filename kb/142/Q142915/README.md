---
layout: page
title: "Q142915: Unattended Installation of Windows NT 3.51 Service Pack 3"
permalink: /kb/142/Q142915/
---

## Q142915: Unattended Installation of Windows NT 3.51 Service Pack 3

	Article: Q142915
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The installation of the Windows NT 3.51 Service Pack 3 requires manual input. To
	perform an unattended installation of the Service Pack, you must modify the
	Service Pack information (.INF) file.
	
	MORE INFORMATION
	================
	
	To perform an unattended installation of the Windows NT 3.51 Service Pack 3,
	close all applications and do the following:
	
	
	NOTE: Specific line changes to the files below are valid only for Windows NT 3.51
	Service Pack 3. The changes described in this article are intended to be used as
	a starting point, and deal only with the initial and final dialog messages. If
	other errors are encountered during the update process, such as low disk space
	or incorrect Windows NT version, additional dialog messages may appear.
	
	1. Copy all Service Pack files to a working directory. For example, create a
	  directory called NT351SP3 on Drive C.
	
	2. In the working directory, copy UPDATE.INF to a new file. For example:
	
	  COPY UPDATE.INF SP3QUIET.INF.
	
	3. Using a text editor, edit the SP3QUIET.INF file. Comment out, by placing a
	  semi-colon (;) in front of, the six lines that start at line 403 (SHELL
	  through ENDIF). For example:
	
	  ; shell "" QueryOkCancel $(String9)
	  ; ifstr(i) $($R1) == "OK"
	  ; else
	  ; set String = $(String12)
	  ; goto finish2
	  ; endif
	
	  This suppresses the initial dialog box requesting the installation of the
	  service pack.
	
	4. Comment out, with a semi-colon, three lines starting at line 578 (UI START
	  through UI POP 1) and the four lines starting at line 582. For example:
	
	  ; ui start "SetupDone"
	  ; ifstr(i) $(DLGEVENT) == "CONTINUE"
	  ; ui pop 1
	  goto rebootend
	  ; else
	  ; ui pop 1
	  ; goto finish1
	  ; endif
	
	  This suppresses the dialog box that prompts users to allow the system to be
	  restarted. The system will reboot automatically.
	
	5. The following line used in either a batch file or at a command prompt
	  installs Windows NT Service Pack 3:
	
	  setup.exe /s C:\NT351SP3 /i C:\NT351SP3\sp3quiet.inf
	
	If you want to implement the steps above for a Microsoft Systems Management
	Server 1.1, please see the following article(s) in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q135584
	  TITLE : Unattended Installation of Windows NT 3.51 Service Pack 1
	
	NOTE: You may also modify UPDATE.INF for Windows NT 3.51 Service Pack 3, save the
	file back as UPDATE.INF and run UPDATE.EXE from the working directory.
	
	Additional query words: 3.50 prodnt sms
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
