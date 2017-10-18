---
layout: page
title: "Q164657: SMS: Pcmwin32.exe Prevents PCM Service from Running Package"
permalink: kb/164/Q164657/
---

## Q164657: SMS: Pcmwin32.exe Prevents PCM Service from Running Package

	Article: Q164657
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcmkbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Package Command Manager (PCM) service (Pcmsvc32.exe) fails to run a
	mandatory or background package if the PCM Client (Pcmwin32.exe) is also
	running.
	
	CAUSE
	=====
	
	When you first run Pcmwin32.exe, it loads itself into memory. Closing the PCM
	Client does not stop it running or unload it from memory. Removing Pcmwin32.exe
	from memory requires a modification to the Smsrun32.ini and a subsequent log off
	and log on.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Configure the site properties so that the PCM Client does not automatically
	  run when a user logs in. Doing this ensures that the PCM service runs the
	  package when the job's mandatory time has been reached.
	
	  -or-
	
	- On the individual client, remark out the load line for Pcmwin32.exe in the
	  Smsrun32.ini file, to ensure that this application does not run when a user
	  logs in. This file is located in the Ms\Sms\Data directory. Make the
	  following change:
	
	        [startup]
	        ;load=C:\MS\SMS\BIN\pcmwin32.exe
	
	  Note that this manual modification of the Smsrun32.ini file will be
	  overwritten if the Systems Management Server client is upgraded (for example,
	  by applying a Systems Management Server service pack).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the original released versions of Pcmsvc32.exe and Pcmwin32.exe, this
	functionality was by product design. However, the updated PCM service (dated
	12/20/96) and PCM Client (dated 11/15/96) that are available on the Internet (at
	http://www.microsoft.com/) are not supposed to exhibit this behavior. When this
	problem is resolved, the new versions of these files will be posted to the
	Internet web site.
	
	Additional query words: prodsms pcmsvc pcmsvc32
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
