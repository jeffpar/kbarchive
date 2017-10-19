---
layout: page
title: "Q239016: SMS: WBEM May Not Install on Windows 95"
permalink: /kb/239/Q239016/
---

## Q239016: SMS: WBEM May Not Install on Windows 95

	Article: Q239016
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:95; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup win95 kbsms200 kbsms200bug
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) 2.0 client may not be completely installed
	on Windows 95 clients if the latest version of Distributed Component Object
	Model (DCOM) is not installed on the client computer. The most common symptom is
	that the hardware inventory does not run, so the client record may never show up
	in the all systems collection or may never be displayed as installed.
	
	CAUSE
	=====
	
	This behavior occurs if any hotfix versions of Wbemsdk.exe or SMS 2.0 Service
	Pack 1 is installed on the SMS site server (the original version of Wbemsdk.exe
	is not DCOM-dependent, and any later version is).
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. Install the latest version DCOM on the client. You can download the latest
	  version from the following Microsoft Web site:
	
	  http://www.microsoft.com/com/tech/dcom.asp
	
	2. Click the Windows Management component, and then click Repair Installation.
	
	Web Based Enterprise Management (WBEM) should be installed, and hardware
	inventory runs.
	
	NOTE: If you install Microsoft Internet Explorer 4.0 or later on your computer, a
	compliant version of DCOM is also installed on the client computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The following error message is displayed in the Inhinv.log file on the client:
	
	  Verify WBEM installation ... ERROR - WBEM Install Directory not found. Exit
	  Setup !!!
	
	After further investigation, the WBEM folder is not created in the Windows
	folder. The Systems Management tool in Control Panel shows that Windows
	Management component is installed, but the version is not listed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup win95 kbsms200 kbsms200bug 
	Technology        : kbHWMAC kbOSMAC kbSMSSearch kbHomeProdSearch kbWin95search kbWorksMacSearch kbWinCEServices210 kbWin95 kbMSN250 kbFunImagination200
	Version           : WINDOWS:95; winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
