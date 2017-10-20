---
layout: page
title: "Q125934: PATCH.EXE Fails When Launched by PCMSVC32.EXE"
permalink: /kb/125/Q125934/
---

## Q125934: PATCH.EXE Fails When Launched by PCMSVC32.EXE

{% raw %}

	Article: Q125934
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Release Notes for Systems Management Server version 1.0 give instructions
	for using SMS to distribute updated files to Windows NT 3.5 Servers. These
	instructions include:
	
	- Creating a package using PATCH.PDF and PATCH.EXE supplied with SMS.
	
	- Setting the command line properties for the Windows NT redirector patch to
	  "System (Background) Task" and "Automated Command Line." NOTE: This implies
	  that the PCM service can execute this.
	
	- Creating a "Run Command On Workstation" job to run the executable on the
	  servers.
	
	This procedure works fine when the job is executed by PCMWIN32.EXE. However
	PATCH.EXE fails if it is executed by the Package Command Manager Service
	PCMSVC32.EXE. The PACMAN.LOG file will display something similar to the
	following.
	
	     sleeping 60 minutes
	     SMS PCM Service Started
	     CWinstService::ReadIniFile
	       ReadIniFile:  OK
	       ReadIniFile: Parsing the INI file.
	     Check current server\share
	     Results Location
	     \\CSARWEN\SMS_SHR\despoolr.box
	     SMS PCM Service Running = TRUE
	     working.................................
	      SMS PCM Service::Refresh
	       Refresh: Getting server name
	       Refresh: Looking for file:
	     \\CSARWEN\SMS_SHR\pcmins.box\YAO01000.INS
	       Refresh: Packages before filter:1
	     Begin SetRegData
	     Value = YAO000R
	     Data  = New
	     End SetRegData
	       Refresh: Packages after filter: 1
	     installing package SMS 1.0 Patch...............
	      SMS PCM Service::RunJob
	     Process died, cleaning up.
	     Begin SetRegData
	     Value = YAO000R
	     Data  = Executed
	     End SetRegData
	     Begin WriteCommissarRecord
	     Results Location is:
	     \\CSARWEN\SMS_SHR\despoolr.box
	     ISV MIF is:
	     End WriteCommissarRecord
	     sleeping 60 minutes
	
	The PCM service is limited to packages that do not require user input and do not
	display windows on the server. PATCH.EXE does not require user input, but it
	does write to the screen. If you attempt to get around this by redirecting the
	output from PATCH.EXE to a file, the PCM service will still report that the
	process died, and the file will list the following error:
	
	  PATCH: the "windir" environment variable was not set
	
	MORE INFORMATION
	================
	
	Below are excerpts from the instructions given by the Release Notes for using
	SMS to distribute Windows NT Server patches.
	
	  Patching Windows NT Server(TM) on the Site Server
	
	  For the Windows NT update, the files and the utility program PATCH.EXE
	  are located in the PATCHES\NT subdirectory of the SMS CD-ROM. For the
	  Windows for Workgroups update, the files and the utility program
	  PATCH.EXE are located in the PATCHES\WFW subdirectory of the SMS CD-ROM.
	
	  To use the PDF, perform the following steps:
	
	  1. Set up the package source directory:
	
	     a. Create a package source directory.
	
	     b. Create an NT subdirectory and a WFW subdirectory beneath the
	        package source directory.
	
	     c. Copy all the files from the PATCHES\NT directory on the SMS CD-ROM
	        to the NT subdirectory of the package source directory.
	
	     d. Copy all the files from the PATCHES\WFW directory on the SMS CD-
	        ROM to the WFW subdirectory of the package source directory.
	
	  2. Create a package. When you do so, import the PDF by choosing the
	     Import button in Package Properties, then choosing PATCHRDR.PDF from
	     the list.
	
	  3. Choose the Workstations button.
	
	  4. In the source directory box, type the path to the package source
	     directory you created in step 1.
	
	  5. Select Windows NT Patch of Redirector and choose the Properties
	     button.
	
	  6. In the Command Line Properties dialog box, select both the Automated
	     Command Line and System (Background) Task options.
	
	  7. Choose OK to close all the open dialog boxes.
	
	  8. Create Run Command On Workstation jobs to run the appropriate package
	     command on the appropriate computers.
	
	WORKAROUND
	==========
	
	Use PCMWIN32.EXE to execute the job, or run PATCH.EXE manually from the
	PATCHESNT directory on the SMS CD-ROM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
