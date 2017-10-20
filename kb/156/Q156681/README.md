---
layout: page
title: "Q156681: Remote Access Errors 657 and 659 with Dial-Up Networking"
permalink: /kb/156/Q156681/
---

## Q156681: Remote Access Errors 657 and 659 with Dial-Up Networking

{% raw %}

	Article: Q156681
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a script to connect to a remote server with Dial-Up Networking, you
	may receive one of the following error messages:
	
	  Error 657: The device.INF file could not be opened.
	
	-OR-
	
	  Error 659: The media.INI file refers to an unknown device name.
	
	CAUSE
	=====
	
	These errors can occur if one or more of the remote access configuration files
	is missing or damaged.
	
	
	RESOLUTION
	==========
	
	WARNING: If you have modified the original configuration files for the Remote
	Access service in any way, you should back up the files before proceeding. For
	example, if you modified the Modem.inf file to add information for an
	unsupported modem, or if you modified the Switch.inf file to create a script to
	connect to your Internet service provider (ISP), make sure to back up these
	files.
	
	To resolve this issue, replace the damaged files by removing and reinstalling the
	Remote Access service.
	
	
	MORE INFORMATION
	================
	
	When you receive one of the error messages stated above, you can click Redial,
	Cancel, or More Info. If you click More Info, you see the following
	information:
	
	  One of the Remote Access configuration files probably contains invalid
	  information. The easiest way to resolve this problem is to reinstall Remote
	  Access.
	
	  If you are using a modem that is not supported by Remote Access, switch to a
	  supported modem, or see Overview of Modem Script File for information about
	  modifying the modem script file for your modem. The Remote Access script
	  files (PAD.INF, MODEM.INF, and SWITCH.INF) are in the \SYSTEM32\RAS
	  subdirectory of your Windows NT directory.
	
	
	Additional query words: prodnt dun ras
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
