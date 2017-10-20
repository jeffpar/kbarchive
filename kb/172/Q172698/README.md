---
layout: page
title: "Q172698: NTBACKUP - Verify Option Does Not Verify WinNT Registry Files"
permalink: /kb/172/Q172698/
---

## Q172698: NTBACKUP - Verify Option Does Not Verify WinNT Registry Files

{% raw %}

	Article: Q172698
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use NTBackup.exe, the verify after backup option does not verify the
	files in the %SystemRoot%\System32\Config directory on your hard drive by
	comparing them to the files in the %SystemRoot%\System32\Config directory
	against those backed up to tape.
	
	CAUSE
	=====
	
	The verify operation for the files in the %SystemRoot%\System32\Config directory
	is skipped by design. This is because this directory contains the Windows NT
	registry and event log files which are always open and continuously changing
	when Windows NT is running. It is therefore, irrelevant to perform the compare
	and report discrepancies for these files in the backup log because they are open
	during the backup process and are bound to be different by the end of the backup
	process. For example, the event log may collect several event messages and the
	Windows NT registry is dynamically changing for many reasons (for example,
	passwords between computers, user passwords, and many other processes and
	programs that store information in the registry).
	
	RESOLUTION
	==========
	
	Even though no compare is performed, all open files in
	\%SystemRoot%\System32\Config directory are backed up to tape.
	
	To ensure higher reliability of the backup data you can use a high-end tape drive
	with Error Correction Control (ECC). These drives actually verify the
	reliability of the data on the tape. Lower-end tape drives without ECC,
	typically IDE QIC157 drives or drives with only one Read/Write head, do not
	check for errors.
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
