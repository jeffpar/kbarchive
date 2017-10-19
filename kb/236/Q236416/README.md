---
layout: page
title: "Q236416: XADM: Event 114: Unable to Read Configuration File &#91;&#93;"
permalink: /kb/236/Q236416/
---

## Q236416: XADM: Event 114: Unable to Read Configuration File &#91;&#93;

	Article: Q236416
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2
	Last Modified: 06-AUG-2002
	
	This article discusses a Beta release of a Microsoft product. The information in this article is provided as-is and is subject to change without notice.
	
	No formal product support is available from Microsoft for this Beta product. For information about how to obtain support for a Beta release, see the documentation that is included with the Beta product files, or check the Web location from which you downloaded the release.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Server Replication Service
	after you configure the Interorg Replication Utility, you may receive the
	following error message:
	
	  Could not start the Exchange Replication Service service on
	  \\<Server>.
	
	  Error 2140: An internal Windows NT error occurred.
	
	The following event is also logged in the Windows NT application log:
	
	  Event ID: 114
	  Source: Exchsync
	  Type: Error
	  Description: Unable to read configuration file [], not a valid configuration
	  file or file is corrupted.
	
	CAUSE
	=====
	
	This problem occurs because the installer creates an Exchsync.ini file, and when
	a computer has Terminal Services installed, this file is placed in the Windows
	folder in the currently logged on user's Profile folder.
	
	RESOLUTION
	==========
	
	This problem is known to occur when the computer on which the Exchange Server
	Replication Service has been installed is also running Terminal Services.
	
	The Exchange Server Replication Service must be installed using the installation
	mode in Terminal Services.
	
	WORKAROUND
	==========
	
	If the Exchange Server Replication Service has been installed, perform the
	following to remove it:
	
	  Open Exssrv.exe on the computer where the Exchange Server Replication Service
	  is installed, and click Remove to uninstall the service.
	
	To install using the Terminal Server installation mode, install the application
	using one of the following methods:
	
	- In Control Panel, double-click Add/Remove Programs and ensure that the "All
	  users begin with common application settings" option is selected in the
	  Installation wizard.
	
	-or-
	
	- Type a "Change User /Install" (without the quotation marks) command at an
	  MS-DOS command prompt.
	
	  NOTE: The command should return "User session is ready to install
	  applications."
	
	  1. Run Exssrv.exe again, and click Install to reinstall the service.
	
	  2. After installation has completed, run the following command at the command
	     prompt:
	
	  "Change User /Execute" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	For additional information about installing applications or services on a
	computer running Terminal Server, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q186515 Do Not Run Terminal Server in Installation Mode
	
	  Q186531 Error Message: Cannot find *.ini. Please Re-run Setup
	
	For additional information about the Interorg Replication Utility, please see the
	release notes for Exchange Server 5.5, Service Pack 2.
	
	Additional query words: public folder free/busy
	
	======================================================================
	Keywords          : exc55sp2 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : WINDOWS:2000; winnt:5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
