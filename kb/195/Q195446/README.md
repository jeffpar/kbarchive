---
layout: page
title: "Q195446: How to Obtain the System Preparation Tool for Windows NT 4.0"
permalink: /kb/195/Q195446/
---

## Q195446: How to Obtain the System Preparation Tool for Windows NT 4.0

	Article: Q195446
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows NT 4.0 System Preparation tool prepares the preinstalled
	hard-disk contents of a Windows NT 4.0-based computer (referred to here as the
	"source computer") for imaging and subsequent transfer to other computers
	(referred to here as "destination computers"). The System Preparation tool
	prepares the source Windows NT 4.0 computer image to run a mini-setup wizard and
	regenerate a system security identifier (SID). The result is a source computer
	system configuration that you can copy to another identically configured
	computer through the use of disk image copying tools. The mini-setup wizard
	configures some of the computer-specific or user-specific settings, including
	user name, organization, product key, computer name, and administrator password.
	When the destination computer is started, the SID is regenerated, which ensures
	that each system SID is unique and the mini-setup wizard is run. Note that most
	of the mini-setup wizard can be scripted to automate the process, which
	minimizes setup technician time.
	
	MORE INFORMATION
	================
	
	How to Obtain the New Windows Deployment Tools
	----------------------------------------------
	
	The Windows NT 4.0 Sysprep tool is available from the following Microsoft Web
	site:
	
	  http://www.microsoft.com/ntworkstation/technicalresources/deployment/DeploymentDocs/deploy/DeployTools/SysPrep.asp
	
	NOTE: These tools do not copy the image, they "prepare" a system to be copied
	through the use of a third-party tool. Microsoft currently has no plans to
	develop a disk image copying tool.
	
	Additional query words: Sysclone clone deployment win_deploy nt4prep.exe w98prep.exe preptool.exe win_deploy.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
