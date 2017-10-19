---
layout: page
title: "Q239650: XFOR: Migration Wizard for Lotus Notes May Stop Responding"
permalink: /kb/239/Q239650/
---

## Q239650: XFOR: Migration Wizard for Lotus Notes May Stop Responding

	Article: Q239650
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Migration Wizard for Lotus Notes may not work after
	entering the path to the Notes.ini file, the Lotus Notes user ID, and password.
	The Migration Wizard may generate an Application Exception.
	
	CAUSE
	=====
	
	There are two potential causes for this issue:
	
	- The Notes folder is not in the system path.
	
	- There may be multiple copies of the Nnotes.dll file.
	
	RESOLUTION
	==========
	
	If you determine which above potential cause is the culpret then follow one of
	the following correcting actions.
	
	Adding the Notes Folder to the System Path
	------------------------------------------
	
	To Add the Notes Folder to the System Path on a Windows NT Server 4.0:
	
	1. Open the System Control Panel, and then click the Environment tab.
	
	2. Select the Path variable in the System Variables window.
	
	3. Add the path to the Notes folder in the Value field. For example, if the path
	  to the Notes folder is "C:\Notes" (without the quotation marks), add the
	  following to the end of the path in the Value field:
	
	  ;C:\Notes
	
	4. After you enter the information, you need to restart the system.
	
	To Add the Notes Folder to the System Path on a Windows 2000 Server:
	
	1. Open the System Control Panel, click the Advanced tab, and then click
	  Environment Variables.
	
	2. Select the Path entry in the System Variables window, and then click Edit.
	
	3. Add the path to the Notes folder in the Value field. For example, if the path
	  to the Notes folder is "C:\Notes" (without the quotation marks), then add the
	  following to the end of the path in the Value field:
	
	  ;C:\Notes
	
	4. After you enter the information, you need to restart the system.
	
	Removing Redundant Copies of the Nnotes.dll File
	------------------------------------------------
	
	If you find more than one copy of the Nnotes.dll file, keep only the one located
	in the Notes folder and delete all the other copies.
	
	
	Additional query words: notes client dr. watson quincy
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
