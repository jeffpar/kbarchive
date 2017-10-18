---
layout: page
title: "Q216867: Corrupted User Profiles Can Cause New Local Default to be Lost"
permalink: kb/216/Q216867/
---

## Q216867: Corrupted User Profiles Can Cause New Local Default to be Lost

	Article: Q216867
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a corrupted profile on the central server is downloaded, an error 1009 is
	logged to the Windows NT event system log. A new local profile is created from
	the local default. After you restart, however, the system will not reference the
	new local profile and will begin the cycle of pulling down the corrupted profile
	from the server again.
	
	The following error is displayed:
	
	  The system cannot find the drive specified.
	
	CAUSE
	=====
	
	When Windows NT detects a certain type of profile corruption, a flag is set,
	causing the reference to the newly created user profile not to be saved in the
	registry. The user is given a new copy of the local default profile and can make
	changes to it which are saved to the hard disk. When the system is restarted, it
	looks for the local version to check the time stamp versus the server version.
	This check is made ONLY against profiles listed in the registry (not against the
	physical files in the profile directory) and, thus, the recently created local
	copy is ignored. The system then repeats the process of downloading the server
	copy (which is still corrupted) and the cycle repeats.
	
	WORKAROUND
	==========
	
	To work around this problem, after the user logs on and creates the file copies
	of the new local profile, manually copy these file copies to the profile server.
	They will be downloaded the next time the computer is restarted and should work
	fine from then on.
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q196284 Controlling Default Behavior for Roaming User Profiles
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
