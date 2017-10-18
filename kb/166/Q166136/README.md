---
layout: page
title: "Q166136: PRB: User Without Administrator Rights Can Edit Existing Records"
permalink: kb/166/Q166136/
---

## Q166136: PRB: User Without Administrator Rights Can Edit Existing Records

	Article: Q166136
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Anomaly Tracking System, version 1.0, included with:
	   - Microsoft Visual Studio 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When logging on to the Anomaly Tracking System (ATS), a user who does not have
	Administrator rights can make text and property changes to existing records.
	These could be records that were entered by other users.
	
	MORE INFORMATION
	================
	
	Every time a change is made to an existing record, the details of the change can
	be viewed by looking at the History tab of the record. Whenever a change is made
	to an existing record, the User ID along with the date of the change is listed
	with the description of the changes.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add a user without Administrator rights to ATS.
	
	2. Log back into ATS as the new user.
	
	3. Run the "All Issues" query.
	
	4. Open one of the existing records shown in the "All Issues" results dialog
	  box.
	
	At this point, any of the text and settings on the Detail, History, or Attributes
	tabs can be modified. Once any changes have been made, the Save option is
	enabled.
	
	Additional query words: 97 vstudio
	
	======================================================================
	Keywords          :  
	Technology        : kbVSsearch kbAudDeveloper kbVS97Search
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
