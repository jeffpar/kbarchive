---
layout: page
title: "Q264748: FP98: &quot;Server Failed to Load Application&quot; Error"
permalink: kb/264/Q264748/
---

## Q264748: FP98: &quot;Server Failed to Load Application&quot; Error

	Article: Q264748
	Product(s): Word Front Page
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows, on platform(s):
	   - Microsoft Windows NT version 4.0 Option Pack 
	   - Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Microsoft FrontPage web, you may receive the
	following error message:
	
	  Application error, an application error has occurred on the server. Check the
	  event log for more details.
	
	When you check the event log on the server, the details are as follows:
	
	  Server failed to load application <port name from FRONTPG.INI> file
	  error 80040154.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- The _vti_bin program has not yet been created.
	
	  -or-
	
	- Microsoft Transaction Server is not working as expected.
	
	RESOLUTION
	==========
	
	To resolve this issue use Method 1 as follows. If Method 1 fails to resolve the
	issue, use Method 2.
	
	Method 1: Configure _vti_bin As an Application
	----------------------------------------------
	
	1. Start the Microsoft Internet Information Services (IIS) 4.0 Microsoft
	  Management Console (MMC).
	
	2. Click the plus sign (+) next to the web.
	
	3. Right-click the _vti_bin folder.
	
	4. Click Properties on the shortcut menu.
	
	5. Click the Directory tab.
	
	6. In the Application pane, click Create.
	
	  The Create button changes to Remove, and the Application name field becomes
	  active.
	
	7. Click OK, and then quit the IIS 4.0 MMC.
	
	Method 2: Reinstall IIS 4.0
	---------------------------
	
	NOTE: IIS 4.0 is available in the Microsoft Windows NT Option Pack.
	
	1. Insert the Windows NT Option Pack compact disc and follow the wizard to
	  remove IIS 4.0.
	
	2. Restart your computer.
	
	3. Reinsert the Windows NT Option Pack compact disc if necessary, and then
	  follow the steps in the wizard to reinstall IIS 4.0.
	
	MORE INFORMATION
	================
	
	If you receive the an error message similar to the following, use Method 2:
	
	  An error occurred accessing system components in the systems package on this
	  computer. Error code was 80040154. Make sure that Microsoft Transaction
	  Server is installed correctly. If you have set a specific identity for the
	  system package, check if the user account and password is correct and the
	  user is part of the local NT group.
	
	Additional query words: front page ocsso
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
