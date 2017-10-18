---
layout: page
title: "Q135902: PC Ext: Err Msg: Sending File xxxxxxxx.P1 Failed"
permalink: kb/135/Q135902/
---

## Q135902: PC Ext: Err Msg: Sending File xxxxxxxx.P1 Failed

	Article: Q135902
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message via the MS-DOS External (MTA) Mail program, it may fail,
	and you will get the following error message in the SESSION.LOG:
	
	  Sending File xxxxxxxx.P1 failed
	
	The SYSTEM.LOG will also display:
	
	  [005] Mail retry count exceeded sending to:
	  <network name> /<postoffice name>
	
	CAUSE
	=====
	
	The above error occurs when the MTA is not able to write to either the P1
	subdirectory or the INQUEUE3.MBG or INQUEUE3.KEY file at the destination
	postoffice.
	
	RESOLUTION
	==========
	
	Log in as the MTA network user account; make sure the MTA user account can read
	and write to the MAILDATA \MBG and \KEY subdirectories.
	
	At the destination postoffice MAILDATA subdirectory:
	
	1. Ensure the P1 subdirectory exists. If it is missing, create the subdirectory.
	  Copy POPULATE.MSM from another postoffice subdirectory, and make this file
	  read only.
	
	2. Ensure there are no *.OLK files dated earlier than the current date and time.
	  If a file exists, remove the lock, and delete the file.
	
	3. Ensure the INQUEUE3.MBG and INQUEUE3.KEY files exist and are not corrupted or
	  locked.
	
	Other factors that may contribute to this error are low memory or insufficient
	disk space at the destination postoffice.
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
