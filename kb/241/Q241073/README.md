---
layout: page
title: "Q241073: Error Message After Upgrading SBS 4.5 to BackOffice 4.5"
permalink: kb/241/Q241073/
---

## Q241073: Error Message After Upgrading SBS 4.5 to BackOffice 4.5

	Article: Q241073
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): smallbiz
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your computer after you upgrade your Microsoft Small Business
	Server-based computer to the full installation of BackOffice Server version 4.5,
	you may receive an error message stating that some Dynamic Link Library (DLL)
	files are mismatched.
	
	CAUSE
	=====
	
	This problem occurs because BackOffice Server version 4.5 includes Service Pack
	1, but Small Business Server applies service pack 4 files when it is installed.
	When the BackOffice 4.5 setup process runs, it attempts to install older dlls,
	which are different from the Service Pack 4 DLL files and this conflict is
	created.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, run the Setup.exe program located on the
	Windows BackOffice CD-ROM.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : smallbiz 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
