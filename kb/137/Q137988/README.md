---
layout: page
title: "Q137988: &quot;Final SQL Operations Failure&quot; Error when Upgrading to SMS 1.1"
permalink: /kb/137/Q137988/
---

## Q137988: &quot;Final SQL Operations Failure&quot; Error when Upgrading to SMS 1.1

	Article: Q137988
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade Systems Management Server from version 1.0 to
	version 1.1, the following error message appears:
	
	  Final SQL Operations failure
	
	CAUSE
	=====
	
	
	You may find the cause of this error in the bottom section of the C:\SMSSETUP.LOG
	file. Frequently, the file contains the cause of the failed SQL operations, or
	the cause may be in the SQL registry key: SMSVersion.
	
	
	RESOLUTION
	==========
	
	To correct this problem, modify the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SOFTWARE\Microsoft\SMS\Setup
	
	3. Select Version.
	
	4. From the Edit menu, choose String.
	
	5. If the value is 692, change the value to 600.
	
	6. Choose OK and quit the Registry Editor.
	
	7. Shut down and restart Windows NT.
	
	8. Run the upgrade program again to upgrade to Systems Management Server 1.1.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
