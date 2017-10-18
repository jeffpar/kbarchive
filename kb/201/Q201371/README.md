---
layout: page
title: "Q201371: How to Reset License Information in License Manager"
permalink: kb/201/Q201371/
---

## Q201371: How to Reset License Information in License Manager

	Article: Q201371
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reset the information displayed by Terminal Server
	License Manager.
	
	MORE INFORMATION
	================
	
	To reset the information:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click Terminal Server Licensing, and then click Stop.
	
	3. Using Windows NT Explorer, open the <Wtsrv>\System32\Lserver folder,
	  where <Wtsrv> is the folder in which Terminal Server is installed.
	
	4. Rename the Hydra.mdb file to Hydra.old.
	
	5. Expand the Hyrda.md_ file from the Terminal Server CD-ROM to Hydra.mdb in the
	  Lserver folder.
	
	  For example, use the following command to expand the file
	
	  expand <CD-ROM>:\i386\hydra.md_ c:\wtsrv\system32\lserver\hydra.mdb
	
	where <CD-ROM> is the CD-ROM drive letter.
	
	6. Start the Terminal Server Licensing service. The Terminal Server Licensing
	  database is blank.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q187614 Removing Terminal Server Licenses from an RDP Client
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
