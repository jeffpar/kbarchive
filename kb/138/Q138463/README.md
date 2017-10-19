---
layout: page
title: "Q138463: Upgrade Site Option Not Available in SMS 1.1 Setup"
permalink: /kb/138/Q138463/
---

## Q138463: Upgrade Site Option Not Available in SMS 1.1 Setup

	Article: Q138463
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run System Management Server 1.1 Setup on a Windows NT 3.5 Service Pack
	3 computer, the Upgrade Site option in the Site Operations dialog box is not
	available.
	
	This problem occurs if the Windows NT 3.5 CSDVersion is Service Pack 3. Systems
	Management Server 1.1 Setup only allows you to upgrade your site if the
	CSDVersion is Service Pack 2 or less.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SOFTWARE\Microsoft\Windows NT\CurrentVersion
	
	3. Select the CSDVersion entry.
	
	4. From the Edit menu, select String. Change the String to the following and
	  choose OK:
	
	     Service Pack 2
	
	5. Quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	7. Run Systems Management Server 1.1 Setup and upgrade your site.
	
	8. After the upgrade, change CSDVersion back to the following using the Registry
	  Editor:
	
	     Service Pack 3
	
	Additional query words: prodsms gray grey grayed out dim
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
