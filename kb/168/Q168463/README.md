---
layout: page
title: "Q168463: SMS: PCM Service Keeps Client Components From Getting Updated"
permalink: /kb/168/Q168463/
---

## Q168463: SMS: PCM Service Keeps Client Components From Getting Updated

	Article: Q168463
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbPCM smssetup smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade client components on a client computer running
	Windows NT, the client components are not updated if both of the following
	conditions are true:
	
	- The Package Command Manager (PCM) service is installed in the Ms\Sms\Bin
	  directory.
	
	  -and-
	
	- The PCM service is set to start automatically.
	
	This problem only applies to installations of Systems Management Server where the
	Package Command Manager has been implemented as service on client computers
	running Windows NT.
	
	CAUSE
	=====
	
	The application is reported as being an active client application, and the
	downloading of the updated client files is delayed.
	
	WORKAROUND
	==========
	
	To work around this problem, set the PCM service to manual and restart the
	client computer running Windows NT. The next time SMSRUN32 runs, the updated
	client components will be downloaded from the logon server as expected.
	
	A more permanent solution is to reinstall the PCM service to a directory other
	than Ms\Sms\Bin.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	If you run Upgrade.bat on a Systems Management Server logon server to update
	some of the Systems Management Server client components, you must restart the
	system for the updates to be downloaded. When the system restarts, Smsrun32.exe
	is called from the LOAD statement in the registry. This application first checks
	to see if any of the applications in the Ms\Sms\Bin directory are running before
	attempting to download any files. If any applications are currently running,
	Smsrun32.exe postpones the update.
	
	Running Smsrun32.exe /V shows the following information:
	
	  Reading configuration...
	  Client executable active: pcmsvc32.exe
	  Warning: Client component in use.
	  Client component files will not be overwritten or removed.
	  Verifying Microsoft Systems Management Server client installation.
	
	This may keep clients from upgrading their components if Systems Management
	Server is upgraded or a service pack is applied.
	
	
	Additional query words: prodsms rservice sms
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbPCM smssetup smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
