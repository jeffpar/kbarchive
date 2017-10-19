---
layout: page
title: "Q301349: PRB: Cannot Install on Server Appliance Via Software Update"
permalink: /kb/301/Q301349/
---

## Q301349: PRB: Cannot Install on Server Appliance Via Software Update

	Article: Q301349
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Server Appliance Kit (SAK), version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A properly constructed setup/.msi package is created and runs normally. However,
	when packaged as part of a software update-compatible .cab file and then
	uploaded to the server appliance, the package is not installed.
	
	CAUSE
	=====
	
	When the software update is in progress on the server appliance, the entire
	process is being run under the local system account of Windows NT
	AUTHORITY\SYSTEM.
	
	This is not the case when the software update is run in interactive mode by a
	user, and as a result certain switches/parameters must be passed to MSIEXEC for
	proper operation.
	
	The software update feature is designed to be used in a headless environment in
	which a user is not capable of interacting with the setup process. Therefore,
	any part of a software update process that requires interaction from the user
	during installation will cause the setup to stop responding ("hang").
	
	RESOLUTION
	==========
	
	In the software update .inf file, it is important to specify launch conditions
	for the .msi package being used. Specifically, the installation should be run in
	one of the following ways:
	
	- Run the setup in quiet mode. Do not request user input or show pop-up dialog
	  boxes. This can be accomplished by passing the /qn switch to the input. For
	  example:
	
	   - For InstallShield Setup.exe: Setup.exe /V"/qn"
	
	   - For MSIExec .msi files: Msiexec.exe /i default.msi /qn
	
	- Run the setup such that all package information is stored at the system
	  level, rather then a per-user level. This can be done by passing the MSI
	  directive: ALLUSERS = 1. For example:
	
	   - For InstallShield Setup.Exe: Setup.exe /V"ALLUSERS=1"
	
	   - For MSIExec .msi files: Msiexec.exe /i ALLUSERS=1
	
	MORE INFORMATION
	================
	
	The following example is the recommended way to set up the Info.inf file
	included in the software update .cab so that it will work in quiet mode, and
	specify ALLUSERS=1. The example uses an InstallShield-built Setup.exe:
	
	  InstallCommand="<setup.exe> /V""ALLUSERS=1 /qn"""
	
	  where <setup.exe> is the name of the setup executable file being used.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q227091 Command-Line Switches for the Microsoft Windows Installer Tool
	
	Additional query words: sak server appliance kit ALLUSERS
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbSAK200 kbAudDeveloper kbSAKSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
