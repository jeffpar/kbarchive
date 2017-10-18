---
layout: page
title: "Q148811: PC NTMMTA: Err Msg: Fatal [ 7] Error Renaming File..."
permalink: kb/148/Q148811/
---

## Q148811: PC NTMMTA: Err Msg: Fatal [ 7] Error Renaming File...

	Article: Q148811
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Import is processing updates, the following error may occur:
	
	  09/02/95 05:10:18 | Fatal [ 7] Error renaming file: B:USR\IMPORT.USR
	
	This error is followed by multiple Warning 90 messages that list the transactions
	that were not processed following the error.
	
	CAUSE
	=====
	
	This error occurs intermittently and is related to cached file closes under
	control of the Microsoft Windows NT operating system.
	
	For additional information on other causes of Fatal 7 errors, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q134228 Err Msg: Fatal [ 7] Error Renaming File
	
	RESOLUTION
	==========
	
	The following registry entry has been effective in eliminating the occurrence of
	the above errors:
	
	  HKey_Local_Machine\System\CurrentControlSet\Services\LanmanWorkstation
	  \Parameters
	  CacheFileTimeout=0
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To add this entry on the Windows NT Server where the postoffice resides:
	
	1. Click Add Value on the Edit menu (not the Add key).
	
	2. Type the Value Name of CacheFileTimeout.
	
	3. Change the data type to REG_DWORD (default is REG_SZ).
	
	4. Click the OK button. You will be prompted for the Data.
	
	5. Type "0" (without the quotation marks), and click the OK button.
	
	6. Exit the Registry editor; shutdown and restart the Microsoft Windows NT
	  computer.
	
	NOTE: This value specifies the maximum times that a file will be left in the
	cache after the application has closed the file. In this case, the parameter was
	set so that the closed files will not be cached.
	
	
	MORE INFORMATION
	================
	
	CacheFileTimeout option is not directly related to Opportunistic locking. Even
	with the CacheFileTimeout value set to 0, the redirector may still hold up the
	close of the file. The opportunistic locking has not been shown to be a cause of
	this problem and may be left enabled.
	
	For additional information on the CacheFileTimeout parameter, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q102469 How To Display Network Registry Parameters
	
	  Q102981 REG: Workstation Service Entries
	
	Additional query words: 3.50 oplocks
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
