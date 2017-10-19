---
layout: page
title: "Q262844: PRB: Error -2147024893 When You Try to Start IIS Admin Service"
permalink: /kb/262/Q262844/
---

## Q262844: PRB: Error -2147024893 When You Try to Start IIS Admin Service

	Article: Q262844
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400
	Last Modified: 09-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the IIS Admin service, you may receive the following error
	message:
	
	  Unable to connect to active server object -2147024893
	
	CAUSE
	=====
	
	This problem occurs when the Iischema.dll file has become corrupt or
	unregistered.
	
	RESOLUTION
	==========
	
	To resolve this problem, re-register Iischema.dll. To do this, type the
	following command at a command prompt:
	
	  "regsvr32 iischema.dll" (without the quotation marks)
	
	Note Iischema.dll is usually located in the Winnt/System32/Inetsrv folder.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	At a command prompt, type the following command to unregister Iischema.dll:
	
	  "regsvr32 iischema.dll /u" (without the quotation marks)
	
	
	Additional query words: -2147024893
	
	======================================================================
	Keywords          : kbDSupport kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
