---
layout: page
title: "Q139150: PPT7: PowerPoint Missing Features Under Windows NT"
permalink: kb/139/Q139150/
---

## Q139150: PPT7: PowerPoint Missing Features Under Windows NT

	Article: Q139150
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbinterop kbdta
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you run Microsoft PowerPoint for Windows 95 on a multi-user Windows NT
	computer, you may not be able to use the following features:
	
	- The graphic import filters
	
	- The text converters
	
	- The AutoCorrect feature
	
	- The spelling checker
	
	This problem is related to access permissions to the Windows NT registry.
	
	NOTE: If the problem only occurs in Clipart Gallery, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q26885 PT95: Clipart Gallery 2.0a Update for Windows NT Users
	
	CAUSE
	=====
	
	Under a Typical installation of Windows NT workstation, users have limited
	rights to the Windows NT registry. Only administrators and owners (those who
	install particular programs) have full access to the registry.
	
	This problem occurs with PowerPoint 7.0 because Powerpnt.exe in version 7.0 sends
	a request to the Windows NT registry for full access (note that PowerPoint 7.0b
	does not make this request). Users rights are restricted on multi-user
	workstations and the request for full access is denied. If you are logged on as
	a user with limited rights, this request may be denied under PowerPoint 7.0.
	Because the request is denied, the features mentioned at the beginning of this
	article may not work as expected.
	
	This problem occurs in PowerPoint 7.0 under the following circumstances:
	
	- The installation was performed by an administrator (who is then the owner)
	
	- A single user installs PowerPoint (and then becomes the owner) and other
	  users attempt to use PowerPoint features.
	
	RESOLUTION
	==========
	
	To gain access to these features, use any of the following methods.
	
	Method 1: Update the PowerPoint installation to version 7.0b
	------------------------------------------------------------
	
	Method 2: Make the User an Administrator
	----------------------------------------
	
	Add each user account that will be using PowerPoint to the Administrators group.
	
	NOTE: This is not the best alternative as it gives potentially unskilled users
	the ability to alter user rights, change permissions, and delete essential
	operating system files.
	
	Method 3: Grant Full Permission to Registry Keys
	------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	Edit the Windows NT Registry and grant selected users full permission to the
	necessary keys.
	
	1. Log on as an administrator and run REGEDT32.EXE
	
	2. Go to each location below:
	
	     \\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools
	        \AutoCorrect
	        \Graphics Filters
	        \Proofing Tools
	        \Text Converters
	
	3. Click Security. Click Permissions.
	
	4. Click Add , click Show Users, and add the appropriate users.
	
	5. Assign each user Full Permission to the keys involved.
	
	6. Click OK and indicate that you are changing permission on the subkeys.
	
	7. Click OK again and confirm that you want to replace Permissions (this will
	  not necessarily fix the problem with PowerPoint Help.)
	
	  NOTE: As an alternative, you may create a new group with full access to these
	  keys and add each user to the new group. If you later install PowerPoint
	  7.0b, you can delete this group or remove the users from it (the group is no
	  longer necessary).
	
	Method 4: If the Problem Occurs on a Non-Multi-User Workstation
	---------------------------------------------------------------
	
	If you are experiencing this problem on a Windows NT Workstation that is not a
	multi-user workstation, the problem stems from having installed PowerPoint as an
	Administrator and attempting to use its features as a user with lesser rights.
	In this case, run PowerPoint Setup and log in as the user rather than as the
	administrator. This will ensure that the user is registered to use all the
	features. This will have minimal or no effect on system-level administrative
	issues.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: ppt7 ppt95 NT 3.51 Speller AutoCorrect Graphics filters proofing help w_powerpt pp7 pp95 powerpnt spell check
	
	======================================================================
	Keywords          : kbenv kberrmsg kbinterop kbdta 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
