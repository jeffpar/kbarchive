---
layout: page
title: "Q149788: BUG: Visual SourceSafe Books Online Isn't Properly Installed"
permalink: kb/149/Q149788/
---

## Q149788: BUG: Visual SourceSafe Books Online Isn't Properly Installed

	Article: Q149788
	Product(s): Microsoft SourceSafe
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe400bug
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual SourceSafe Books Online is not properly installed.
	
	CAUSE
	=====
	
	The following lines were not included in the Infoview.ini file during the
	installation of Books Online:
	
	  [VSS.Settings]
	  licensed.name=<licensedName>
	  licensed.organization=<CompanyName>
	
	Because the floppy disks have already been used, the installation program tries
	to copy the proper settings from the Win.ini file. On this computer, there is
	nothing to copy, so the [VSS.Settings] are not included. This situation may
	occur when a computer that's running 16-bit Windows or Windows for Workgroups is
	just set up, and disks have already been used to run the Setup.exe program.
	
	RESOLUTION
	==========
	
	Add the missing lines with appropriate information to the Infoview.ini file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Modify your Win.ini file on a computer that is running Windows for
	  Workgroups. Remove any entries in the [User Info] Section of the Win.ini
	  file.
	
	2. Install Visual SourceSafe from floppy disks that have already been used to
	  install Visual SourceSafe on another computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe400bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
