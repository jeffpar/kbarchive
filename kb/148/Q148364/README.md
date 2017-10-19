---
layout: page
title: "Q148364: PC DirSync: Rebuild Terminating Without Status Message"
permalink: /kb/148/Q148364/
---

## Q148364: PC DirSync: Rebuild Terminating Without Status Message

	Article: Q148364
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides more information about the ending process of Rebuild and
	the entries that go into the DIRSYNC.LOG. These log messages are similar to the
	following:
	
	  07/31/95 05:03:10 | Status Microsoft(R) mail GAL Rebuild Utility V.3.2.16
	  07/31/95 05:05:18 | Status Number of entries in GAL: 954
	  07/31/95 05:06:45 | Status
	
	The last two entries and the processes that take place between them are of
	particular interest. When errors occur in these processes, the third status line
	may not appear.
	
	MORE INFORMATION
	================
	
	The Number of Entries in GAL: message is created after a temporary Global
	Address List (GAL) has been created. The number recorded as the number of
	entries in the GAL is derived from a TMP0000x.NME file (the x will be a number
	determined by the Rebuild program). The same file is later renamed to GAL.NME,
	as long as the subsequent processes are successful. The GAL.NME is renamed just
	prior to the blank status line being written to the log.
	
	If the renaming of TMP0000x.NME to GAL.NME fails, Rebuild will try to rename
	TMP0000x.NME to GAL$.NME.
	
	
	After it gives this message, Rebuild starts on the creation of the Galindex file.
	During this process failures can occur that are not reported in the log. The
	following two types of failures cause the status line to not be displayed.
	
	- Failure writing to file GALTMP.GLB
	
	- Failure writing to file GALINDE$.GLB
	
	
	If either of these failures occur, the renaming of GAL files is not tried, and no
	final status line message appears in the log. The TMP0000x.NME file will still
	be in the NME directory, and the GALTMP.GLB file is deleted.
	
	If Rebuild is being run on a Microsoft Windows NT workstation, the following
	registry entry can reduce the occurrence of this problem:
	
	  HKey_Local_Machine\System\CurrentControlSet\Services\LanmanWorkstation\
	  Parameters\CacheFileTimeout=0
	
	Notes:
	
	- Use Add Value (not add key).
	
	- Change the data type to REG_DWORD (default is REG_SZ).
	
	- Reboot the machine.
	
	The failures to write to the files can also be caused by a lack of disk space on
	the server or network problems.
	
	Generally, Rebuild failures will result in Fatal error messages being recorded in
	the Directory Synchronization (Dir-Sync) log.
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
