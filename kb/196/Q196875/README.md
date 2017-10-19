---
layout: page
title: "Q196875: Error When EMS Memory Is Configured for MS-DOS App in .pif File"
permalink: /kb/196/Q196875/
---

## Q196875: Error When EMS Memory Is Configured for MS-DOS App in .pif File

	Article: Q196875
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message after you modify the custom
	configuration settings for an MS-DOS or Win16 application:
	
	  %systemroot%\System32\Config.Nt. The system file is not suitable for
	  running MS-DOS and MS Windows applications.
	
	This error occurs when a .pif file is used to establish EMS memory and a custom
	Config.nt and Autoexec.nt are specified in the PIF file. Either the application
	will use the default configuration files in the %SystemRoot%\System32 folder, if
	they exist, or it will generate the error message listed above. Settings in the
	custom configuration files in a folder other than %SystemRoot%\System32 will not
	be used if EMS is specified in the .pif settings.
	
	CAUSE
	=====
	
	The location of the custom configuration files is lost when EMS memory is
	established. The default configuration file location is used.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT version 4.0 Service Pack 5.
	
	Additional query words: default.pif
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
