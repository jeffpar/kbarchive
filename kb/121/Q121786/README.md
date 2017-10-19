---
layout: page
title: "Q121786: LPR and LPD Registry Entries for TCP/IP Printing"
permalink: /kb/121/Q121786/
---

## Q121786: LPR and LPD Registry Entries for TCP/IP Printing

	Article: Q121786
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50 3.51
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Registry entries can be used to configure printing through LPR/LPD
	in Windows NT version 3.51:
	
	- LPR Print Monitor
	
	- LPDSVC
	
	MORE INFORMATION
	================
	
	LPR Print Monitor
	-----------------
	
	One parameter under:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Monitors\ LPR
	Port\Ports\<portname>
	
	  PrintSwitch: REG_SZ
	
	This specifies the format control character that the LPR Print Monitor should
	send to the print server through the control file. By default, this parameter
	doesn't exist in the Registry, and "l" (lowercase L) is sent as the control
	character. This can be set to any string. If set, the first letter of the string
	is taken (the rest of the string is ignored) as the format control character and
	sent to the print server. Some situations may need 'f' to be used instead of
	'l', and this parameter can then be used.
	
	LPDSVC
	------
	
	Three parameters under:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LPDSVC\Parameters
	
	  AllowJobRemoval: REG_DWORD: 0x1
	
	Setting this parameter to 0 disables job removal (that is, once submitted, the
	job cannot be removed using LPRM, no matter who submitted it originally). If for
	any reason it is required that LPDSVC not delete a job from the queue once
	submitted, this parameter should be set to 0. Default is 1 (that is, allow a job
	to be removed--if request to remove is from the computer that submitted it
	originally).
	
	  AllowPrinterResume: REG_DWORD: 0x1
	
	If a printer is paused, by default anyone can cause it to be resumed by sending
	the appropriate LPR command. If this parameter is set to 0, request from anyone
	to resume printer is ignored. Default is 1 (that is, honor any request to resume
	printing).
	
	  MaxConcurrentUsers: REG_DWORD: 0x64
	
	This parameter specifies how many users can concurrently send a job to LPDSVC.
	Default is 100.
	
	Additional query words: prodnt bsd
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
