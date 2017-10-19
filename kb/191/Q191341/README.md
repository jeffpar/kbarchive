---
layout: page
title: "Q191341: How to Run a Program By Using UNC with Package Command Manager"
permalink: /kb/191/Q191341/
---

## Q191341: How to Run a Program By Using UNC with Package Command Manager

	Article: Q191341
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtool kbsms120 kbPCM kbSoftwareDist smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 1.2 Service Pack 3 introduced the ability for the SMS
	Package Command Manager tool and the SMS_PACKAGE_COMMAND_MANAGER_NT service on
	Microsoft Windows NT-based clients to run programs without requiring a mapped
	drive letter.
	
	MORE INFORMATION
	================
	
	The Package Command Manager (program or service) constructs the environment
	variable %PCMUNC% that points to the package folder on the distribution point
	with its UNC equivalent (\\SERVER\SMSPKGx\<PackageID>\). You can use the
	%PCMUNC% variable at a command prompt on the workstation or in a batch file or
	script that can read the environment table while the script is running.
	
	To use %PCMUNC% at a command prompt on the workstation, it must be preceded by
	Ntencap.exe. For example:
	
	  ProgramLine = Ntencap.exe /NTu %PCMUNC%MyApp.exe
	
	NOTE: Even though the program is executed by using UNC, Ntencap.exe is run by
	using a mapped drive letter to the package folder on the distribution server.
	To use %PCMUNC% in a batch file that is run from a command prompt on the
	workstation, use the variable as you would any other environment variable:
	
	  Rem Sample batch file
	  copy %PCMUNC%TestFile.txt C:\MyApp
	
	When you use the Package Command Manager service for software distribution, a
	drive-mapping conflict could occur if a package is running when you log on, and
	the user logon script or profile attempts to remap the drive letter that the
	Package Command Manager is using. This drive letter is unavailable until the
	Package Command Manager releases the drive letter after the package is
	completed.
	
	
	Additional query words: PCMSVC32 prodsms
	
	======================================================================
	Keywords          : kbtool kbsms120 kbPCM kbSoftwareDist smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto
	
	=============================================================================
	
