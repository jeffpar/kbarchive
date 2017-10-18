---
layout: page
title: "Q172158: PRB: Setup Error: &quot;You must have NT administrative privileges&quot;"
permalink: kb/172/Q172158/
---

## Q172158: PRB: Setup Error: &quot;You must have NT administrative privileges&quot;

	Article: Q172158
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you run Visual SourceSafe setup you may receive the following error
	message:
	
	  You must have NT administrative privileges in order to run setup
	
	CAUSE
	=====
	
	There are two possible reasons this message may appear:
	
	CASE #1: You are running setup on a Windows 95 computer.
	
	There is a registry entry indicating that this is a Windows NT computer.
	
	CASE #2: You are running Netsetup on a Windows NT client computer.
	
	Visual SourceSafe expects, by design, that anyone installing Visual SourceSafe on
	a Windows NT computer has administrative privileges.
	
	WORKAROUND
	==========
	
	CASE #1:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Run Regedit and delete the subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ProductOptions
	
	CASE #2:
	
	Edit the <VSS server dir>\netsetup\Setup32.stf file using the following
	step-by-step instructions:
	
	WARNING: Please make a backup of the Setup32.stf file before continuing.
	
	1. Shut down all instances of Netsetup.
	
	2. Open the <VSS server dir>\netsetup\Setup32.stf in Notepad. On the Edit
	  menu, make sure that the Word Wrap check box is not selected.
	
	3. Note that the 17th line starts with "ObjId", and that the lines underneath
	  line 17 are numbered sequentially.
	
	4. On the lines numbered 9, 10, and 11, delete the number 26. (These lines
	  should correspond to Floppy Mode, Batch Mode, and Maintenance Mode underneath
	  the "STANDARD" heading.
	
	5. Save and Close the file.
	
	6. Run Netsetup from the Windows NT client.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	
