---
layout: page
title: "Q237966: VSS Explorer Closes with Rename"
permalink: /kb/237/Q237966/
---

## Q237966: VSS Explorer Closes with Rename

{% raw %}

	Article: Q237966
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe600 kbSSafe600bug _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to delete and purge without destroy permission, SourceSafe
	Explorer will close when you attempt to rename the file. Also, after you attempt
	to delete and purge the file, the view file selection in the drop-down menu does
	not work.
	
	RESOLUTION
	==========
	
	After you attempt to destroy a file that you do not have the correct permissions
	to, select another project and then go back to the previous project. This
	refreshes the internal structure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to reproduce this issue:
	------------------------------
	
	Scenario 1:
	
	1. Assign yourself delete permissions but not destroy permissions.
	2. Delete a file and select destroy permanently.
	3. When prompted by a dialog box to destroy the file, click Yes. Visual
	  SourceSafe (VSS) displays a message saying that you do not have the correct
	  permissions.
	4. Right-click on the file and select "Rename".
	
	Scenario 2:
	
	1. Assign yourself delete permissions but not destroy permissions.
	2. Delete a file.
	3. Re-add the file (do not recover previously deleted one).
	4. Delete the file. If prompted to delete all specified items, click Yes. (This
	  is the second delete on the same file.)
	5. When prompted by a dialog box to purge the previous file and delete this one,
	  click Yes All. VSS displays a message saying that you do not have the correct
	  permissions.
	6. Right-click on the file, and select "Rename".
	
	Expected results:
	
	The file gets renamed.
	
	Actual results:
	
	The following dialog box appears:
	
	  The instruction at "0x6001da9a" referenced memory at "0x0000000. The memory
	  could not be read. Click OK to terminate the application. Click on CANCEL to
	  debug the application."
	
	Selecting OK on the prior dialog box results in the following dialog box:
	
	  "The instruction at "0x5f4012a1" referenced memory at 0x00000004. The memory
	  could not be read. Click OK to terminate the application."
	
	If you click OK, the application is closed.
	
	If you click Cancel instead, a debug window opens with the the following error
	message:
	
	  "Unhandled exception in SSEXP.EXE (SSAPI.DLL): 0xc0000005: Access Violation."
	
	Additional query words: violation Dr. Watson exception
	
	======================================================================
	Keywords          : kbSSafe600 kbSSafe600bug _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
