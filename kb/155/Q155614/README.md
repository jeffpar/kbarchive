---
layout: page
title: "Q155614: Unattended Installation of Microsoft Windows NT 4.0"
permalink: /kb/155/Q155614/
---

## Q155614: Unattended Installation of Microsoft Windows NT 4.0

	Article: Q155614
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetupkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses strategies and tools for performing unattended
	installations of Microsoft Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	Automating Windows NT installation is a key step in reducing the cost of
	migration. The method of Setup automation depends upon the existing network
	infrastructure, the number and variety of computers to be upgraded, the schedule
	for deployment, and other factors. Based on these criteria, the following
	options can help you smoothly deploy Windows NT Workstation:
	
	1. Use Setup Manager to create unattended answer files.
	
	  By creating an unattended answer file with predetermined answers for
	  installation questions, the installation process can run from start to finish
	  with limited or no user intervention.
	
	  For detailed information on answer file parameters and command-line syntax for
	  unattended installation, download the "Deployment Guide: Automating Windows
	  NT Setup" document from the following Microsoft Web site:
	
	  http://www.microsoft.com/ntworkstation/technical/DeploymentDocs/DepGuide.asp
	
	Or download the "Automatic Windows NT Setup Deployment Guide" document from:
	
	  http://www.microsoft.com/ntworkstation/technical/DeploymentDocs/DownGuideAutomate.asp
	
	2. Use management software such as Microsoft Systems Management Server.
	
	  With software such as Systems Management Server, you can "push" the
	  installation from the server, so that you can install Windows NT Workstation
	  4.0 on an individual personal computer without ever touching the computer.
	  This allows a small installation team to deploy Windows NT Workstation to a
	  large number of computers in a short period of time. In addition, this method
	  requires little or no work on the part of the end-users. This allows
	  end-users to stay focused on productive work for the organization, and
	  eliminates a potential source of installation errors.
	
	  This method is possible only with a system management program such as Systems
	  Management Server. If you plan to use system management soft- ware in
	  automating the installation, make sure this has been acquired and tested.
	
	  Because you can use Systems Management Server to gather detailed information
	  about the resources already in use on your network, you might want to begin
	  using it during the earliest stages of the deployment process. You can then
	  use it to simplify the pilot and final roll-out.
	
	3. Modify login scripts, or send embedded setup scripts in e-mail.
	
	  You can automate the installation process by editing the login script for the
	  user, or by sending a link in e-mail to a batch file that runs Windows NT
	  Workstation 4.0 Setup. In these cases, the user only needs to log on or
	  double-click an icon to start the installation.
	
	4. Use the Sysdiff tool.
	
	  The Sysdiff tool allows you to record the variations between a standard retail
	  installation of Windows NT Workstation and a customized version. If the
	  difference file created by Sysdiff is available during Setup, the Setup
	  program applies the differences automatically.
	
	  Use the Sysdiff tool to include programs in your customized installation of
	  Windows NT Workstation. The Sysdiff tool is discussed in Chapter 2,
	  "Customizing Windows NT Setup," in the "Windows 32-Bit Deployment Guide"
	  document available on the World Wide Web at:
	
	  http://www.microsoft.com/ntworkstation/technical/DeploymentDocs/DepGuide.asp
	
	5. Use third-party solutions (including OEM preinstallation).
	
	  Your organization may choose a third-party solution for deploying Windows NT
	  Workstation. These include custom solutions made available through a
	  Microsoft Solution Provider, or preinstallation of the operating system by an
	  OEM (original equipment manufacturer).
	
	Additional query words: ntfaqset
	
	======================================================================
	Keywords          : kbsetup kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
