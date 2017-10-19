---
layout: page
title: "Q307986: SMS: Can't Install Virtual and Mouse Remote Control Is Stuck"
permalink: /kb/307/Q307986/
---

## Q307986: SMS: Can't Install Virtual and Mouse Remote Control Is Stuck

	Article: Q307986
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to remotely control a Systems Management Server (SMS) client, you
	may be unable to successfully use the mouse in the session, or you may be unable
	to remotely control the computer at all. The client
	%windir%\MS\SMS\Logs\Remctrl.log file may contain the following entry:
	
	  
	
	  ...
	  ********** RCSvcs - Starting Remote Control Services Manager **********  >
	  RCSvcs:  Commanded to Install NT5 Device Drivers. Loaded SetupAPI.DLL and
	  all function pointers to NT 5.0 DDK Setup API.  
	  RCSvcs - Installation of NT 5.0 device drivers starting.  
	  RCSvcs - Could not create new Device Info Structure. Not installing Mouse device driver.  
	  Creating and Starting Win32 Remote Control Agent Service.
	  ...
	
	NOTE: In some cases, the Remote Control component may display an Installed or
	Repair Pending status. The key indicator to determine if you have this problem
	is to review the Remctrl.log file.
	
	CAUSE
	=====
	
	This issue can be caused by either of the following conditions:
	
	- The "Load and Unload Device Drivers" user right has not been granted to the
	  SMSCliToknAcct (for member servers or workstations) or the
	  SMS&_<domain controller name> account on domain controllers.
	
	- Some of the rights and permissions were not migrated to a Microsoft Windows
	  2000 Group Policy during the upgrade process.
	
	WORKAROUND
	==========
	
	To work around this issue, use the appropriate method.
	
	Add User Rights
	---------------
	
	- If the affected client is on a Microsoft Windows NT-based computer, ensure
	  that SMSCliToknAcct has the "Load and Unload Device Drivers" right in User
	  Manager.
	
	- If the affected client is on a Windows 2000-based computer, review Group
	  Policy settings, and ensure that SMSCliToknAcct is defined as a user that has
	  the right to "Load and Unload Device Drivers". Alternatively, you could set
	  the Group Policies back to the default setting of "Not defined" for the "Load
	  and Unload Device Drivers" user right which would also allow SMSCliToknAcct
	  to install the SMS virtual mouse.
	
	NOTE: If you are attempting to install the SMS client on domain controllers,
	substitute SMSCliToknAcct with SMS&_<domain controller name> in the
	previous steps. Also, note that both the SMSCliToknAcct and SMS&_<domain
	controller name> accounts are members of the SMSInternalCliGrp. As such, the
	option of granting rights to the SMSInternalCliGrp instead of individual
	accounts is available.
	
	Permissions Not Migrated
	------------------------
	
	For additional information about how to resolve this issue, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q296812 Error Message Appears When You Try to Add Drivers After Upgrade
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
