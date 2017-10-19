---
layout: page
title: "Q240307: BUG: Unable to Change Preferred Help Collection on Windows 2000"
permalink: /kb/240/Q240307/
---

## Q240307: BUG: Unable to Change Preferred Help Collection on Windows 2000

	Article: Q240307
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:6.0; winnt:
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbOSWin2000bug kbVS600bug _IK kbGrpDSTools
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	- the operating system: Microsoft Windows 2000 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to change the preferred Help collection for Visual Studio may fail on
	Windows 2000. When you start the MSDN Library Collection Settings tool
	introduced by MSDN July 1999, the following error appears:
	
	  MSDN Library Collection Settings: There are no MSDN collections installed on
	  this computer.
	
	When you try to change the collection through the Visual C++ integrated
	development environment, no error message will appear but the setting does not
	change.
	
	CAUSE
	=====
	
	This problem occurs when the user attempting to change the collection settings
	is a member of the Users group on the computer running Windows 2000. Users don't
	have the permissions necessary to change the registry setting that determines
	the preferred collection.
	
	RESOLUTION
	==========
	
	An Administrator or power user needs to log on and change the collection
	settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When more than one version of the MSDN Library is installed on a computer, you
	can change the preferred collection used by Visual Studio. This determines which
	Library is displayed when you access Help from Visual Studio applications.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Log on to a Windows 2000 computer as an administrator.
	
	
	2. Install Visual Studio 6.0. Select Visual C++ as one of the products to
	  install.
	
	3. Install two versions of the MSDN Library. For example, install April 1999 and
	  July 1999.
	
	4. Log off of the computer, and then log on as a user who is a member of the
	  Users group.
	
	5. Start Visual C++.
	
	6. From the Tools menu, click Options.
	
	7. On the Help System tab, change the Preferred Collection. Click OK.
	
	8. Return to the Options dialog box and note that the Help System tab does not
	  reflect the change made in the previous step.
	
	9. Quit Visual C++.
	
	10. On the Start menu, point to Programs, and then point to Microsoft Developer
	  Network.
	
	11. Click MSDN Library - Collection Settings. The error message described above
	  appears.
	
	REFERENCES
	==========
	
	For additional information about problems that members of the Users group may
	have with MSDN, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q240307 BUG: MSDN Library Setup Error in the Registration Database
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbOSWin2000bug kbVS600bug _IK kbGrpDSTools 
	Technology        : kbVCsearch kbOSWin2000 kbVBSearch kbAudDeveloper kbOSWinSearch kbZNotKeyword6 kbMSDNSearch kbZNotKeyword2 kbVB600Search kbVB600 kbVC600 kbVC32bitSearch
	Version           : WINDOWS:6.0; winnt:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
