---
layout: page
title: "Q260962: PC MMTA: Error Message: A Critical Error Has Occurred"
permalink: /kb/260/Q260962/
---

## Q260962: PC MMTA: Error Message: A Critical Error Has Occurred

	Article: Q260962
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.0,2.0a,2.1,2.1a,2.1b,2.1c,2.1d,2.1e,2.1x,2.x,3.0,3.0a,3.0b,3.1,3.1a,3.2,3.2a,3.5,3.x
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.0, 2.0a, 2.1, 2.1a, 2.1b, 2.1c, 2.1d, 2.1e, 2.1x, 2.x, 3.0, 3.0a, 3.0b, 3.1, 3.1a, 3.2, 3.2a, 3.5, 3.x, PO2PO 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the message transfer agent (MTA) attempts to move mail between postoffices,
	you may receive the following error message:
	
	  A Critical Error has occurred Error Code=19FE Device Error=000D
	
	CAUSE
	=====
	
	This issue can occur if the MTA attempts to modify a file and cannot.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Determine which file is the problem file:
	
	  a. In the session log, find the error message.
	
	  b. One line above the error, the drive that the error occurred on and the
	     file that the MTA was attempting to modify should be displayed. If the
	     error is not displayed or there is no logging, stop the MTA.
	
	  c. Turn up logging by adding -q135z -v and -l.
	
	  d. Start the MTA and let it run until the error occurs again.
	
	  e. Stop the MTA and open the log.
	
	  f. Find the error message. Above the error message, the file that the MTA was
	     trying to open is displayed.
	
	2. Try to rename the problem file to see if the file is corrupted or locked
	  open. If you can rename the file, the file is corrupted and needs to be
	  replaced or repaired, depending on the file. If the file is locked, you need
	  to break the lock.
	
	3. After you complete step 2, restart the MTA and make sure that the error
	  message is gone.
	
	4. If the error message does not reoccur, stop the MTA and remove the additional
	  logging to prevent the session log from growing to large.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbPTProdChange kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300a kbMailPCN310 kbMailPCN310a kbMailPCN300b kbMailPCN350 kbMailPCN210 kbMailPCN210a kbMailPCN210b kbMailPCN210c kbMailPCN210d kbMailPCN210e kbMailPCN200a kbMailPCN200 kbMailPCN2xSearch kbMailPCN3xSearch kbMailPCN21xSearch
	Version           : :2.0,2.0a,2.1,2.1a,2.1b,2.1c,2.1d,2.1e,2.1x,2.x,3.0,3.0a,3.0b,3.1,3.1a,3.2,3.2a,3.5,3.x,PO2PO
	Issue type        : kbprb
	
	=============================================================================
	
