---
layout: page
title: "Q191211: SMSINST: &quot;Could Not Open Install.log File&quot;"
permalink: kb/191/Q191211/
---

## Q191211: SMSINST: &quot;Could Not Open Install.log File&quot;

	Article: Q191211
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsmsUtil smsappscripts smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Systems Management Server Installer, you may receive a dialog box
	containing the following message when you attempt to run the uninstallation:
	
	  Could not open INSTALL.LOG file.
	
	This dialog box indicates that there is a problem in opening the log specified on
	the command line used to call the uninstaller. The message is erroneous in that
	it specifically says "Could not open Install.log file" when this may not be the
	installation log file name you specified on the command line for
	uninstallation.
	
	This problem occurs with both Uninstal.exe and Uninst32.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The command line used for uninstallation from the Add/Remove Programs icon in
	Control Panel is stored in the registry at:
	
	  HKLM\Software\Microsoft\Windows\CurrentVersion\Uninstall\<Appname>
	
	Additional query words: uninstal uninst32 uninstall deinstall deinstal deinstallation filename prodsms
	
	======================================================================
	Keywords          : kbsmsUtil smsappscripts smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
