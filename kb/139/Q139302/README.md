---
layout: page
title: "Q139302: Installing Novell GroupWise Overwrites Mapi.dll File"
permalink: kb/139/Q139302/
---

## Q139302: Installing Novell GroupWise Overwrites Mapi.dll File

	Article: Q139302
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send an E-form or reply by mail from a bulletin board (BBS), you
	may receive one of the following error messages:
	
	  Bad Recipient Type
	
	  MAPI_E_FAILURE
	
	  Cannot find GroupWise
	
	CAUSE
	=====
	
	These errors can occur if you have installed Novell GroupWise. GroupWise
	overwrites the Mapi.dll file (dated 7/11/95) in the Windows\System folder with
	an older version of the file, and renames the original Mapi.dll file to
	Mapi.!ll.
	
	
	RESOLUTION
	==========
	
	To work around this problem, remove the older Mapi.dll file in the
	Windows\System folder, and then rename the Mapi.!ll file to Mapi.dll.
	
	MORE INFORMATION
	================
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 1.2 msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3
	
	=============================================================================
	
