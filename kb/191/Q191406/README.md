---
layout: page
title: "Q191406: Missing Appointments in Outlook Calendar When Using Schedule+"
permalink: /kb/191/Q191406/
---

## Q191406: Missing Appointments in Outlook Calendar When Using Schedule+

	Article: Q191406
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.5
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a Microsoft Outlook Calendar folder from Microsoft Schedule+ using
	the Msoutl32.dll driver, appointments may be missing.
	
	For additional information about the Outlook driver for Schedule+ 7.0, 7.5, and
	Schedule+ 95, please see the following article in the Microsoft Knowledge Base:
	
	  Q170061 XGEN: Readme.txt for Msoutl32.dll
	
	CAUSE
	=====
	
	The driver queried the Microsoft Exchange server to obtain the appointments for
	the Outlook Calendar and incorrectly determined that it had received all of the
	appointments, even if more were available.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Msoutl32.dll version
	8.2:1.4308.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: S+ ol97 ol98 missing recurring
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
