---
layout: page
title: "Q161576: PRB: Cannot Checkout a File When Multiple Checkouts are Enabled"
permalink: kb/161/Q161576/
---

## Q161576: PRB: Cannot Checkout a File When Multiple Checkouts are Enabled

	Article: Q161576
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to check out a file that is already checked out, the following
	error occurs:
	
	  The file <filename> is already checked out by <username>
	
	and the check out is canceled.
	
	RESOLUTION
	==========
	
	Steps to resolve the problem:
	
	1. Exit the Visual SourceSafe Explorer.
	
	2. Open the Visual SourceSafe Administrator and enable multiple check outs if
	  they are not already enabled.
	
	3. Load the Visual SourceSafe Explorer as either the user who has the file
	  checked out, or as Admin.
	
	4. Check in or undo the check out for the previously checked-out files.
	
	5. Check out the files.
	
	At this point the files can be checked out by multiple users as long as the files
	are not saved as a binary type.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Disable multiple check outs in the Visual SourceSafe Administrator.
	
	2. Restart the Visual SourceSafe Explorer.
	
	3. Check out a file in the Visual SourceSafe Explorer.
	
	4. Enable multiple check outs in the Visual SourceSafe Administrator.
	
	5. Restart the Visual SourceSafe Explorer as a different user from the one in
	  step 2.
	
	6. Attempt to check out the file.
	
	7. The following error appears in the results pane if it is visible, or in its
	  own window:
	
	  The file <filename> is already checked out by <username>
	
	  even though multiple check outs are enabled in the advanced section of the
	  check out dialog box.
	
	(c) Microsoft Corporation 1996, All Rights Reserved. Contributions by Brian
	Matsik, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	
