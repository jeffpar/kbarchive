---
layout: page
title: "Q157716: BUG: Invalid Handle Message When Attempting a Show Diffs"
permalink: /kb/157/Q157716/
---

## Q157716: BUG: Invalid Handle Message When Attempting a Show Diffs

{% raw %}

	Article: Q157716
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the Show Differences command, you may be presented with a dialog
	box that reads "Invalid Handle."
	
	WORKAROUND
	==========
	
	The above error dialog will appear when all of the following conditions are
	met:
	
	- You selected the Show Differences command for a file.
	
	- The working directory for the selected file is set to a floppy drive.
	
	- There is no disk in the drive indicated above.
	
	To resolve this error, place the appropriate disk in the floppy drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or switch to Microsoft Visual SourceSafe version 5.0.
	
	2. With a floppy disk in drive A, select a project and set its working directory
	  to A:\.
	
	3. Remove the floppy disk from drive A.
	
	4. Right-click on any file in the project and select the "Show Differences..."
	  command. Note that the dialog box "Invalid Handle" appears.
	
	5. Close the dialog box, and select the project folder. Right-click on the
	  project folder and select the "Show Differences..." command.
	
	  NOTE: Dialog "Invalid DOS path A:\" appears. This is the message that should
	  be displayed when performing step 4 above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
