---
layout: page
title: "Q216071: SYSPREP: Incorrect Shutdown Leaves Message in Event Log"
permalink: /kb/216/Q216071/
---

## Q216071: SYSPREP: Incorrect Shutdown Leaves Message in Event Log

	Article: Q216071
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SYSPREP utility does not shut down the system gracefully and leaves
	unexpected shutdown message (Event 6008) in the system event log. For additional
	information, please see the following article(s) in the Microsoft Knowledge
	Base:
	
	  Q195446 How Customers Can Obtain System Preparation Tool for WinNT 4.0
	
	For more information about Event 6008, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q196452 Why WinNT Reports 6005, 6006, 6008, and 6009 Event Log Entries
	
	CAUSE
	=====
	
	This problem occurs because the SYSPREP utility does not shut down the system
	gracefully after completing the mini setup.
	
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
	
	Microsoft has confirmed this to be a problem in the Windows NT 4.0 System
	Preparation tool. This problem was first corrected in Windows NT version 4.0
	Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
