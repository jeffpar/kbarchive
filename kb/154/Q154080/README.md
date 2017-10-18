---
layout: page
title: "Q154080: PRB: Visual SourceSafe Journal File Not Updated"
permalink: kb/154/Q154080/
---

## Q154080: PRB: Visual SourceSafe Journal File Not Updated

	Article: Q154080
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbSSafe400
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, the Visual SourceSafe Journal File may not be
	updated properly. This will occur if multiple users attempt an action
	simultaneously that would modify the Journal File, such as Checking in,
	Updating, or Checking out a file.
	
	RESOLUTION
	==========
	
	If you are presented with a dialog box that indicates the Journal File is
	locked, you can ensure that a Journal Entry is made by repeating the current
	action until the dialog no longer appears. For example, if you are Checking in a
	file and you get the aforementioned dialog box, check the file back out and
	check it in again.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When multiple users attempt to write to the Journal File at the same time, one
	user will be given a lock on the file. The others will be presented with a
	dialog box indicating that the Journal File is in use. This dialog box contains
	OK and Help Command buttons. Choosing OK will cause the requested action to take
	place without updating the Journal File. This causes entries to be missing from
	the Journal File.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open or switch to the Microsoft Visual SourceSafe Admin Utility.
	
	2. Using the Admin Utility, configure Visual SourceSafe to maintain a Journal
	  File.
	
	3. Close the Admin Utility.
	
	4. Open or switch to Microsoft Visual SourceSafe.
	
	5. From two or more workstations, have two or more users attempt to Check in,
	  Update, or Check out a file simultaneously (this does not have to be the same
	  action or the same file).
	
	6. One user should get a lock on the Journal File while the others are presented
	  with a dialog box indicating that the Journal File is locked. The users
	  presented with the latter dialog box should choose the OK command button.
	
	7. Open the Journal File. Note that the file will contain an entry describing
	  the action done by the user who was able to lock the Journal File. Check the
	  history of the files accessed by the other users. Note that the history shows
	  the requested action of the other users. The Journal File will not contain a
	  reference to this action.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
