---
layout: page
title: "Q238182: BUG: GET on a Pinned and Labeled File Gets Wrong Version"
permalink: /kb/238/Q238182/
---

## Q238182: BUG: GET on a Pinned and Labeled File Gets Wrong Version

{% raw %}

	Article: Q238182
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600bug kbDSupport kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a file was pinned when a label was applied to its parent project, and you GET
	the file at that label after it has been unpinned, you will not get the pinned
	version.
	
	RESOLUTION
	==========
	
	If you GET the parent project at the label, the correct version of the file is
	retrieved.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	1. Create a new project. (for example, $/myproj).
	
	2. Set a working folder for the project. (for example, C:\Myproj)
	
	3. Add a file to the project. (for example, Myfile.txt)
	
	4. Check out, modify, and check in the Myfile.txt so that there are two
	  versions.
	
	5. Pin Myfile.txt at version one.
	
	6. Select the $/myproj project.
	
	7. Label $/myproj with the label "test".
	
	8. Unpin Myfile.txt
	
	9. Show the history of Myfile.txt and select the version that displays the label
	
	10. Get the labeled version.
	
	Note that you will get a copy of version two of the file, where you might have
	expected version one, which was the the version it was pinned to when the label
	was applied.
	If you perform a GET on the same label from the command line:
	
	     ss get $/myproj/myfile.txt -VLtest
	
	- If the database has been updated to the Visual SourceSafe 6.0 format, you
	  will see the behavior described in the SYMPTOMS section.
	
	- If the database has not been updated to the Visual SourceSafe 6.0 format,
	  version one will be retrieved.
	
	REFERENCES
	==========
	
	Additional information can be found in the Visual SourceSafe product
	documentation by searching for these titles:
	
	-pin, how-to
	-get latest version command
	
	Additional query words: pin unpin
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600bug kbDSupport kbBug kbISS 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
