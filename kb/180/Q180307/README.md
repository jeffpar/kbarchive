---
layout: page
title: "Q180307: FP: &quot;FrontPage 98 Setup Has Updated a Shared System File&quot;"
permalink: kb/180/Q180307/
---

## Q180307: FP: &quot;FrontPage 98 Setup Has Updated a Shared System File&quot;

	Article: Q180307
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbdta
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the FrontPage Setup program, you receive the following message:
	
	  FrontPage 98 setup has updated a shared system file to a more recent version.
	  This newer version is required to install FrontPage. To complete the
	  installation of this file, please restart your computer and then restart
	  FrontPage 98 setup.
	
	When you click OK, your computer restarts. When you restart the FrontPage Setup
	program, the same message reappears.
	
	CAUSE
	=====
	
	This behavior occurs if either of the following conditions is true:
	
	- You are not logged on as an administrator when you attempt to install
	  FrontPage.
	
	-or-
	
	- Version 4.2.6068 of the Mfc42.dll file is installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps.
	
	Resolution 1: For Microsoft Windows NT
	--------------------------------------
	
	If your computer is running Microsoft Windows NT, log on to the computer using an
	account with administrator permissions, and then attempt to install FrontPage.
	If the installation is successful, you do not need to continue with Resolution
	2.
	
	Resolution 2: For all Microsoft Windows Versions
	------------------------------------------------
	
	NOTE: If your computer is running Microsoft Windows NT, you must be logged on to
	an account with administrator permissions in order to rename these system
	files.
	
	1. Click Start, point to Find, and then click Files or Folders.
	
	  NOTE: Because there are several versions of Windows, the following steps may
	  be different on your computer. If they are, please consult your product
	  documentation to complete these steps.
	
	2. In the Named box, type "MFC42.dll" (without the quotation marks) and then
	  click Find Now.
	
	3. Select the MFC42.dll file in the Search Results section of the Find dialog
	  box.
	
	4. On the File menu, click Rename.
	
	5. Type "MFC42.old" (without the quotation marks) and then press ENTER.
	
	6. Repeat steps 3 through 5 for each copy of the MFC42.dll file that appears in
	  the search results.
	
	7. Start the FrontPage 98 Setup program. Follow the instructions on your screen.
	
	
	Additional query words: system file update Loop reboot front page
	
	======================================================================
	Keywords          : kbsetup kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage2000Search kbFrontPage98Search kbZNotKeyword3 kbZNotKeyword5
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
