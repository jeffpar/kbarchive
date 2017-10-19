---
layout: page
title: "Q159727: The File Drive Letter:&#92;&lt;winnt&gt;&#92;. Was Not Copied Correctly"
permalink: /kb/159/Q159727/
---

## Q159727: The File Drive Letter:&#92;&lt;winnt&gt;&#92;. Was Not Copied Correctly

	Article: Q159727
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply a service pack, you may receive the following error message with
	the path to the file in question:
	
	  An error has occurred.
	
	  The file drive_letter:\<winnt>\..... was not copied correctly or was not
	  a valid Windows NT image.
	
	You may continue by ignoring the error, retrying the operation, or exiting Setup.
	If you choose to ignore the error, Setup may not be able to completely and/or
	correctly install the software. If Ignore is selected, the file may copy but may
	still be corrupted. If you choose to exit Setup, you will have to repeat the
	setup process from the beginning.
	
	CAUSE
	=====
	
	The file may actually be corrupted, even though the file size matches what it
	should be.
	
	This corruption may be because the self extraction process did not extract the
	file properly from the compressed service pack download, or the self- extracting
	service pack file itself may be corrupted.
	
	RESOLUTION
	==========
	
	Retry the self-extraction process in a different directory, or download the
	service pack again.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
