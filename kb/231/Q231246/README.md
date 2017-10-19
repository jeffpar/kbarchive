---
layout: page
title: "Q231246: SMS: Custom DLL Causes SMS Installer to Stop Responding"
permalink: /kb/231/Q231246/
---

## Q231246: SMS: Custom DLL Causes SMS Installer to Stop Responding

	Article: Q231246
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbsms200 kbsms200bug kbsmsInst kbsmsUtil
	Last Modified: 01-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Call DLL Function feature in Microsoft Systems Management
	Server (SMS) Installer, which calls a certain function in a specified DLL, the
	script may fail or cause the SMS Installer to stop responding (hang).
	
	CAUSE
	=====
	
	All DLL functions called by the SMS Installer script must be declared as
	CALLBACK functions; otherwise, the Setup program may stop responding. Previous
	versions of SMS Installer tolerated DLL functions that were not called as
	CALLBACK functions. Therefore, it is possible that DLL functions that worked
	correctly with previous versions of SMS Installer may not work correctly in the
	current version of SMS Installer.
	
	RESOLUTION
	==========
	
	Declare all DLL calls as CALLBACK functions in the DLL code, as in the following
	sample:
	
	  BOOL CALLBACK MyFunction(lpDllParams DLL32CALLPARAMS);
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbsms200 kbsms200bug kbsmsInst kbsmsUtil 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
