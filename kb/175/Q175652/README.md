---
layout: page
title: "Q175652: SMS: PCM May Not Change the Status of Executed Package Commands"
permalink: /kb/175/Q175652/
---

## Q175652: SMS: PCM May Not Change the Status of Executed Package Commands

{% raw %}

	Article: Q175652
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server Package Command Manager (PCM) may fail to change the
	completion status of a package command when the command executed causes a system
	shutdown.
	
	CAUSE
	=====
	
	Systems Management Server PCM changes package command completion status when the
	command has completed execution. PCM determines that a command has executed by
	periodically checking the process handle from the command executed until it is
	no longer running. If the system is shut down before the process handle can be
	checked, PCM updates the completion status after receiving the WM_ENDSESSION
	message that was sent to all applications that were running during a "graceful"
	shutdown.
	
	Systems Management Server PCM will fail to change the completion status of an
	executed job if the application installed issues a "harsh" system shutdown.
	Applications that use the ExitWindowsEX() call with the EWX_REBOOT and EWX_FORCE
	flags issue a "harsh" system shutdown.
	
	The reason Systems Management Server PCM cannot change the job status during a
	"harsh" shutdown is that the EWX_FORCE flag does not send the windows messages
	WM_QUERYENDSESSION and WM_ENDSESSION, to applications that are running. Without
	the WM_ENDSESSION message, Systems Management Server PCM does not detect that it
	is about to be terminated. Because Systems Management Server PCM relies on the
	WM_ENDSESSION message to detect termination and change the package command
	completion status, the status is never changed from pending to executed.
	
	RESOLUTION
	==========
	
	Systems Management Server PCM was modified to change the job completion status
	when an application that requires a system shutdown has been successfully
	started. This change requires that packages must be created on the server using
	a package definition file (PDF) with the entry
	SynchronousSystemExitRequired=TRUE.
	
	For information about how to create PDF files and use the
	SynchronousSystemExitRequired entry, refer to the Microsoft BackOffice Resource
	Kit, Microsoft Systems Management Server Resource Guide, Chapter 4.
	
	For information about installing PDF files, see your Microsoft Systems Management
	Server documentation.
	
	An example PDF file is included below:
	
	Example.pdf
	-----------
	
	  [PDF]
	  Version=1.0
	
	  [Package Definition]
	  Product=Example
	  Version=1.0
	  Comment=PDF Example
	  SetupVariations=Typical
	
	  [Typical Setup]
	  CommandLine=Setup.exe
	  CommandName=Typical
	  UserInputRequired=FALSE
	  SynchronousSystemExitRequired=TRUE
	  SupportedPlatforms=Windows95
	
	Obtain one of the following files, as appropriate for the version of the
	operating system that you are running, or you can wait for the next Systems
	Management Server service pack. To ensure that you have the correct version of
	the file, make sure that the files have the following timestamps:
	
	  Pcmwin16.exe  12/04/97  04:04
	  Pcmwin32.exe  12/04/97  04:03
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
