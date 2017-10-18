---
layout: page
title: "Q137004: Error Running Windows NT After Restoring From Backup"
permalink: kb/137/Q137004/
---

## Q137004: Error Running Windows NT After Restoring From Backup

	Article: Q137004
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	After you restore Windows NT from a tape backup, the following error
	message appears:
	
	  <File Name> Entry point not found. The procedure (<function>)
	  could not be located in the DLL <DLL File Name>.
	
	  <File Name> Application did not initialize properly. (0xC0000039)
	
	In the Event Viewer, the following description for a system event appears:
	
	  Not enough server storage available to process this request.
	
	NOTE: The Event ID varies for the description.
	
	CAUSE
	=====
	
	This problem occurs when some Windows NT system files were not replaced because
	they were open or locked during the tape restore operation.
	
	RESOLUTION
	==========
	
	To correct this problem, ensure that you have plenty of hard disk space (over 90
	MB) and perform the following:
	
	1. Install a temporary installation of Windows NT to a separate directory.
	
	  This ensures that none of the original Windows NT system files are locked or
	  open.
	
	2. Restore all backed up files from the tape to the original Windows NT
	  directory.
	
	3. Shutdown the temporary installation of Windows NT and restart the original
	  installation of Windows NT.
	
	4. Either remove the temporary installation of Windows NT or change the default
	  operating system in Control Panel System to the original installation of
	  Windows NT.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
