---
layout: page
title: "Q263700: SMS: APM Can't Start Dep Program If 1st Prog Returns Non-Zero"
permalink: /kb/263/Q263700/
---

## Q263700: SMS: APM Can't Start Dep Program If 1st Prog Returns Non-Zero

{% raw %}

	Article: Q263700
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An advertised program that uses the option "Run another program first" may fail
	to run if the program that it is dependent on returns a non-zero exit code.
	
	CAUSE
	=====
	
	The program specified in "Run another program first" executes correctly and
	requires that the user restart the computer. To indicate this requirement, it
	returns a non-zero exit code. The System Management Sever (SMS) Client
	interprets this non-zero exit code as an error condition, reports a status
	message indicating such, and removes the execution of the dependent program from
	the schedule because of this perceived failure.
	
	WORKAROUND
	==========
	
	To avoid this behavior, do not use programs that return a successful non-zero
	exit code as the program specified in a dependent program's "Run another program
	first" option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Special cases have been added for the following return codes:
	
	- 3010 - ERROR_SUCCESS_REBOOT_REQUIRED
	
	- 3011 - ERROR_SUCCESS_RESTART_REQUIRED
	
	- 1641 - ERROR_SUCCESS_REBOOT_INITIATED
	
	- 1604 - ERROR_INSTALL_SUSPEND
	
	If a program returns one of these error codes, Smsapm32.exe generates a
	preliminary status message of 10022. Upon restart, Smsapm32.exe generates an
	additional standard 10008 success message to indicate completion of the
	program's requirements for a restart. At that time, a dependent program is also
	able to run. Other non-zero return codes, in the absence of a status Management
	Information Format (MIF), are still reported as a failure.
	
	This change was implemented to accommodate programs such as the installation for
	the Windows Installer service, which may require a restart to replace in-use
	files.
	
	Note: The 10022 status messages does not appear when choosing the option to Show
	Messages-->Program Success in the Advertisement Status summary. Use Show
	Messages-->All or a custom status message to view 10022 status messages.
	
	Advertise Program Manager (APM) views the MSI return code of a dependant program
	as a failure.
	
	For example:
	
	Microsoft Office 2000 SR1 ships and installs MSI 1.1 that requires a restart.
	After the installation, the following informational message appears:
	
	  The requested operation is successful. Changes will not be effective until
	  the system is rebooted.
	
	Therefore, you may want to be selective in the type of programs you distribute
	with System Management Server 2.0. Any program you create with the following
	criteria may produce the same symptoms:
	
	- Create ProgramA that restarts the computer, which, prior to the restart,
	  returns an exit code of 3010 (or any other MSI return code, as they are all
	  handled the same)
	
	- Create ProgramB which depends on ProgramA
	
	- Advertise ProgramB to the clients
	
	- Run ProgramB on the clients
	
	Additional query words: prodsms smsapm32.exe
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMS200SP1
	Version           : :1.2,2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
