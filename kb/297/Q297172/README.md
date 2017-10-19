---
layout: page
title: "Q297172: XADM: Arcserve Backup Agent Fails with Error 301"
permalink: /kb/297/Q297172/
---

## Q297172: XADM: Arcserve Backup Agent Fails with Error 301

	Article: Q297172
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are unable to successfully perform an Exchange-aware online backup of
	Microsoft Exchange Server 5.5 by using Arcserve software from Computer
	Associates, you may encounter the following error from the Arcserve software for
	each subsequent online backup attempt:
	
	  Failed to read from database. (DBNAME=Directory, EC=Backup Agent Error --
	  (301) "Exchange Server Error. HrBackupPrepare failed. Check Backup Agent
	  Activity Log.")
	
	In addition to the Arcserve error, the Application log may contain the event IDs
	1002 and 145.
	
	MORE INFORMATION
	================
	
	This error occurs because the patch files (.pat) that were created during the
	original unsuccessful online backup still exist in the \Exchsrvr\Mdbdata
	folder.
	
	To resolve this behavior, remove the patch files:
	
	1. Stop the Information Store service.
	
	2. Remove the patch files (*.pat) from the \Exchsrvr\Mdbdata folder.
	
	3. Restart the Information Store service.
	
	4. Run the Arcserve online backup.
	
	Additional query words: arcserve, xadm, 301, HrBackupPrepare
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
