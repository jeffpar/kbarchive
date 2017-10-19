---
layout: page
title: "Q149687: MSN Error Message: The MAPI Spooler Has Unexpectedly Exited"
permalink: /kb/149/Q149687/
---

## Q149687: MSN Error Message: The MAPI Spooler Has Unexpectedly Exited

	Article: Q149687
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5,95
	Operating System(s): 
	Keyword(s): kberrmsg kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Exchange, you may receive the following error message:
	
	  The MAPI spooler has unexpectedly exited.
	
	This error message occurs only if the The Microsoft Network Online Service
	information service is installed in your profile.
	
	CAUSE
	=====
	
	This error can occur if your Remote Mail headers file is damaged.
	
	RESOLUTION
	==========
	
	Use Windows Explorer or My Computer to delete your Remote Mail headers file. The
	file should be in the Windows folder, with the file name
	
	      MOS<user name>.rhc
	
	where <user name> is your Windows 95 user name.
	
	After you delete this file, it is automatically rebuilt.
	
	MORE INFORMATION
	================
	
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kberrmsg kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5,95
	Issue type        : kbprb
	
	=============================================================================
	
