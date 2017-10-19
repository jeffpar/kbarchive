---
layout: page
title: "Q234334: SMSINST: System32 Directory Remains Open After User Login"
permalink: /kb/234/Q234334/
---

## Q234334: SMSINST: System32 Directory Remains Open After User Login

	Article: Q234334
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbConfig kbsms200 kbsms120 kbsms120bug kbPackage kbsmsInst kbSoftwareD
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the O2KSetup or IESetup Installer script to deploy Office 2000 or
	Internet Explorer 5.0, you may notice that the System32 directory window opens
	after each log on. This window keeps appearing even if the you close the window
	and log on again.
	
	CAUSE
	=====
	
	This is caused by a command in the Installer script leaving a blank entry in the
	Run section of the registry. The script can be easily modified to fix this by
	following the instructions in the MORE INFORMATION section.
	
	WORKAROUND
	==========
	
	To prevent the \System32 window from appearing after each user log on, follow
	these steps:
	
	1. Open Regedit or Regedt32
	
	2. Navigate to HKLM\Software\Microsoft\Windows\CurrentVersion\Run
	
	3. Delete either the string value OFF2KNT_RUN or IENT_RUN.
	
	OFF2KNT_RUN will be present if you are deploying Office 2000, IENT_RUN will be
	present if you are deploying Internet Explorer 5.0.
	
	MORE INFORMATION
	================
	
	The Installer Script can be modified to prevent this blank value in the registry
	by following the steps below.
	
	1. Open the appropriate script in Systems Management Server (SMS) Installer
	  build 1.0.45.00 or later.
	
	2. Navigate to the last phase in the script.
	
	3. Double-click the line Registry Key
	  SOFTWARE\Microsoft\Windows\CurrentVersion\Run=".
	
	4. Change the operation from Create/update key and value to Remove Key and Value
	  Only.
	
	  NOTE: If you are using build 64 or later of the installer, change the
	  operation from Create/update key and value to Remove Value Only.
	
	5. Select OK and then recompile the script.
	
	
	Additional query words: prodsms unattended ie50 silent
	
	======================================================================
	Keywords          : kbsetup kbClient kbConfig kbsms200 kbsms120 kbsms120bug kbPackage kbsmsInst kbSoftwareDist smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
