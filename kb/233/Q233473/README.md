---
layout: page
title: "Q233473: Business Planner: Files Unexpectedly Appear on Your Desktop"
permalink: kb/233/Q233473/
---

## Q233473: Business Planner: Files Unexpectedly Appear on Your Desktop

	Article: Q233473
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start Microsoft Business Planner, one or more of the following files
	may unexpectedly appear on your desktop.
	
	- Msbpart.lst
	- Msbptsk.lst
	- Msbp_pln.mdb
	- Msbp_pln.ldb
	
	If you delete these files, you delete data such as Favorites and Personal
	Interviewer information from Business Planner.
	
	CAUSE
	=====
	
	This behavior can occur if you install Business Planner on a Microsoft Windows
	95-based computer on which user profiles are not enabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Enable User Profiles
	--------------------
	
	To enable user profiles:
	
	1. Click Start, click Settings, and then click Control Panel.
	
	2. Double-click Passwords.
	
	3. Click the User Profiles tab.
	
	4. Click the following option:
	
	  Users can customize their preferences and desktop settings. Windows switches
	  to your personal settings when you log on.
	
	5. Click to clear both check boxes under User Profile Settings.
	
	6. Click OK, and then close Control Panel.
	
	7. If you are prompted to restart Windows, click Yes.
	
	Create an Msbp2000 Folder in the Profiles Folder
	------------------------------------------------
	
	To create this folder:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. In the All Folders or Folders pane, double-click the hard disk on which you
	  installed Windows.
	
	3. Double-click the Windows folder.
	
	4. Double-click the Profiles folder.
	
	5. Double-click the <username> folder, where <username> is your
	  Windows user name.
	
	6. On the File menu, point to New, and then click Folder.
	
	7. Type "Msbp2000" (without the quotation marks), and then press ENTER.
	
	Move the Files to the Msbp2000 Folder
	-------------------------------------
	
	To move the files to the Msbp2000 folder:
	
	1. In the Address box, type the following line, and then press ENTER
	
	  <drive>:\Windows\Desktop
	
	  where <drive> is the letter of the hard disk on which Windows is
	  installed.
	
	2. Scroll down the All Folders or Folders pane until you see the Profiles
	  folder.
	
	3. Click the PLUS SIGN (+) next to the Profiles folder to open the folder.
	
	  NOTE: Do not double-click the Profiles folder to open it.
	
	4. Click the PLUS SIGN (+) next to the <username> folder to open the
	  folder, where <username> is your Windows user name.
	
	  NOTE: Do not double-click the <username> folder to open it.
	
	5. In the right pane, drag all files listed in the "Symptoms" section of this
	  article to the Msbp2000 folder in the All Folders or Folders pane.
	
	6. Double-click the Msbp2000 folder in the All Folders or Folders pane to verify
	  that the files you dragged in the preceding step are contained within the
	  folder.
	
	Modify the Value Data of the CurrentProfileDir Registry Value
	-------------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To modify the value data of the CurrentProfileDir registry value:
	
	1. Start Registry Editor.
	
	2. Open the following registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\Microsoft Reference\SBB\9.0\OPTIONS
	
	3. Right-click the CurrentProfileDir value, and then click Modify.
	
	4. In the Value Data box, type the following line
	
	  C:\WINDOWS\Profiles\<username>\Personal\Msbp2000\
	
	  where <username> is your Windows user name.
	
	5. Click OK.
	
	6. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Business Planner.
	
	Additional query words: msbp extra strange icons
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
