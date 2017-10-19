---
layout: page
title: "Q189590: SMSINST: Uninstal.exe Does Not Find Install.log File"
permalink: /kb/189/Q189590/
---

## Q189590: SMSINST: Uninstal.exe Does Not Find Install.log File

	Article: Q189590
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsetup smssetup smsappscripts kbSMSAppScripts
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the removal of a Systems Management Server Installer package you may
	receive the following error:
	
	  Could not open INSTALL.LOG file.
	
	This error message indicates that the installation log file could not be opened.
	
	CAUSE
	=====
	
	The uninstallation programs included with SMS Installer do not recognize
	installation logs that have a space in their file names.
	
	WORKAROUND
	==========
	
	To work around this problem, only use logs that do not have a space in their
	file names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem occurs with the Uninstal.exe file, as well as Uninst32.exe.
	
	Additional query words: uninstall deinstall deinstallation filename filenames
	
	======================================================================
	Keywords          : kbsetup smssetup smsappscripts kbSMSAppScripts 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
