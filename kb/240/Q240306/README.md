---
layout: page
title: "Q240306: BUG: MSDN Library Setup Error in the Registration Database"
permalink: /kb/240/Q240306/
---

## Q240306: BUG: MSDN Library Setup Error in the Registration Database

	Article: Q240306
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:; winnt:
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbOSWin2000bug kbDSupport kbGrpDSTools
	Last Modified: 25-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an MSDN Library CD-ROM begins to automatically run Setup on a computer
	running Windows 2000, the following error may occur:
	
	  Setup Initialization Error: Setup has encountered an error in the
	  Registration Database.
	
	CAUSE
	=====
	
	This error occurs when Setup is run by a member of the Users group on Windows
	2000. Users do not have the necessary permissions to access the registry during
	setup. MSDN Library Setup attempts to access the registry before it determines
	that the user running Setup does not have administrator privileges.
	
	RESOLUTION
	==========
	
	An administrator of the computer must log on and install the MSDN Library for
	the user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Administrative privileges are required to install the MSDN Library. The limited
	access that a user has to the registry is by design.
	
	
	REFERENCES
	==========
	
	For additional information about problems that members of the Users group may
	have with MSDN, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q240307 BUG: Unable to Change Preferred Help Collection on Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbOSWin2000bug kbDSupport kbGrpDSTools 
	Technology        : kbOSWin2000 kbOSWinSearch kbMSDNSearch kbZNotKeyword2
	Version           : WINDOWS:; winnt:
	Issue type        : kbbug
	
	=============================================================================
	
