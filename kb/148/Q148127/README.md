---
layout: page
title: "Q148127: DocErr: ConnectTimeout and Default Time-out Are Incorrect"
permalink: /kb/148/Q148127/
---

## Q148127: DocErr: ConnectTimeout and Default Time-out Are Incorrect

	Article: Q148127
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.5 
	-------------------------------------------------------------------------------
	
	
	Page 520, Volume 1, of the Windows NT 3.5 Resource Guide lists and
	describes the Redirector (Rdr) Service Registry entries. The maximum amount
	of time the redirector waits for a connect or disconnect to complete is
	specified in the following registry subkey and value name of the
	HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\Rdr\Parameters
	
	  Value Name: ConnectTimeout
	  Data Type:  REG_DWORD
	  Data:       <Number of seconds>
	
	  Default Time-out: 300 seconds (5 minutes)
	
	The value name and default time-out period mentioned above are incorrect.
	
	The correct information is as follows:
	
	  Value Name: ConnectMaxTimeout
	  Data Type:  REG_DWORD
	  Data:       <Number of seconds>
	
	  Default Time-out: 45 seconds
	
	
	Additional query words: 3.51 prodnt docerr timeout
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbMSPressSearch kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.5
	
	=============================================================================
	
