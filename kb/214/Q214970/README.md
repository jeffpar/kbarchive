---
layout: page
title: "Q214970: WMI Error Message: Installation Aborted! Internal Error"
permalink: /kb/214/Q214970/
---

## Q214970: WMI Error Message: Installation Aborted! Internal Error

	Article: Q214970
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows Management Instrumentation (WMI) core component
	installation program (Wbemsdk.exe), you may receive the following error
	message:
	
	  Installation Aborted! Internal Error.
	
	CAUSE
	=====
	
	This issue can occur if the Temp folder is not available on the computer or the
	TEMP environment variable is not configured correctly.
	
	Wbemsdk.exe uses the Temp folder to temporarily store the WMI setup files.
	
	WORKAROUND
	==========
	
	To work around this issue, configure the TEMP environment variable to point to
	an existing Temp folder. If you are using Microsoft Windows 95/98, you place a
	SET command in the Autoexec.bat file. If you use Microsoft Windows NT, you
	configure the TEMP environment variable in the System tool in Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	When Wbemsdk.exe does not install the WMI components correctly, the Systems
	Management Server Setup also fails and you receive the following error message:
	
	  Could not compile MOF.
	
	The Systems Management Server Hardware Inventory Client Agent installation also
	fails when it attempts to install WMI components.
	
	You can type the SET command at a command prompt to identify all the environment
	variables currently configured on your computer.
	
	Additional query words: prodsms WBEM installation smscli smsinst smssetup environment variable webm
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
