---
layout: page
title: "Q221963: PC DB: Recovering Messages in the Inqueue3 and P1 Folder"
permalink: /kb/221/Q221963/
---

## Q221963: PC DB: Recovering Messages in the Inqueue3 and P1 Folder

	Article: Q221963
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reset the Inqueue3.key and Inqueue3.mbg files
	without losing the messages in the P1 folder.
	
	MORE INFORMATION
	================
	
	To reset the Inqueue3.key and Inqueue3.mbg files without losing the messages in
	the P1 folder:
	
	1. Create a temporary newly defined external postoffice, and then determine the
	  hexadecimal ID of this postoffice by using the Netdump utility.
	
	2. Copy the Inqueue3.key and Inqueue3.mbg files to the hexadecimal ID of new
	  postoffice (which you determined in step 1).
	
	3. Start the Administrator program on this postoffice, and check the queue.
	  Locate the newly defined postoffice, and then return all messages in the
	  queue.
	
	4. Back up the Inqueue3.key and Inqueue3.mbg files, and then reset the
	  Inqueue3.key and Inqueue3.mbg files by using the Mailq16 utility.
	
	5. Remove all files from the P1 folder other than the Populate.msm file.
	
	6. Log back on to the Administrator program and delete the temporary postoffice.
	
	The messages are returned to the original senders and can now be resent.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	Issue type        : kbhowto
	
	=============================================================================
	
