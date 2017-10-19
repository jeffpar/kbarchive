---
layout: page
title: "Q162117: Identical Documents May Print Differently from Win 95 Clients"
permalink: /kb/162/Q162117/
---

## Q162117: Identical Documents May Print Differently from Win 95 Clients

	Article: Q162117
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Font sizes may appear to be slightly different on Windows 95 workstations
	printing the same document to the same postscript printer that was created
	through Point and Print from a computer running Windows NT Server.
	
	CAUSE
	=====
	
	Point and Print will only create a Fonts.mfd file on a Windows 95 client if no
	Fonts.mfd already exists. If there is another postscript printer or postscript
	software is already installed on the computer running Windows 95, Fonts.mfd is
	not modified by Point and Print.
	
	This file is modified if a postscript printer is created and the driver is
	installed by using the Windows 95 CD-ROM. The file is also modified if a test
	page is printed while creating the printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: cross platform win95
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
