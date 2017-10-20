---
layout: page
title: "Q186336: INFO: Unattend.txt Options That Are Used During an Unattended Up"
permalink: /kb/186/Q186336/
---

## Q186336: INFO: Unattend.txt Options That Are Used During an Unattended Up

{% raw %}

	Article: Q186336
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An unattended upgrade from a previous version of Microsoft Windows NT to
	Microsoft Windows NT 4.0 ignores most parameters commonly set in the
	Unattend.txt answer file. The upgrade installation automatically reads the
	registry of the system being upgraded for system configuration information and
	uses those values during the upgrade. It is not possible to override or replace
	the existing system configuration information with an unattended answer file.
	
	MORE INFORMATION
	================
	
	During an unattended upgrade, only the following parameters in the unattend
	answer file are used. If NtUpgrade = yes, all other options in the answer file,
	if specified, are ignored.
	
	  [Unattended]
	  OemPreinstall = Yes
	  NoWaitAfterTextMode = 1
	  NoWaitAfterGUIMode = 1
	  NtUpgrade = Yes
	  OverwriteOemFilesOnUpgrade = Yes
	
	  [UserData]
	  ProductId = "xxx-xxxxxxx"
	
	  [GuiUnattended]
	  OemSkipWelcome = 1
	
	
	NOTE: During an upgrade installation, if OemPreinstall is set to YES, the $OEM$
	directory structure is copied to the local hard disk, but the directory
	structure is not used during the installation. Any options specified in a
	Cmdlines.txt file are ignored. Windows NT Setup recognizes and uses the $OEM$
	directory structure only if NtUpgrade is set to NO in the Unattend.txt answer
	file. Most options commonly applied with a Cmdlines.txt file can still be
	applied during the unattended upgrade by specifying the winnt/winnt32
	command-line switch /e. The /e switch allows Setup to run an external program at
	the end of GUI-mode Setup. This option can be used to apply a service pack or to
	start other custom applications during Setup. For additional information about
	the /e command-line switch, please see Chapter 5 of the Windows NT Deployment
	Guide.
	
	REFERENCES
	==========
	
	The Windows NT Deployment Guide, the Automating Windows NT Setup Deployment
	Guide, and other resources designed to aid in the deployment of Microsoft
	Windows NT are available for free download from the following Microsoft Web
	site:
	
	  http://www.microsoft.com/ntworkstation/info/deployguide.htm
	
	For additional information about unattended installations, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	  Q180647 Disabling WinNT 3.51 Video Drivers to Enable Unattended Installation
	
	Additional query words: unattend upgrade oem Setup
	
	======================================================================
	Keywords          : kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
