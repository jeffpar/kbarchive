---
layout: page
title: "Q154835: BUG: &quot;Project History Options&quot; Won't Search for Labels in File"
permalink: /kb/154/Q154835/
---

## Q154835: BUG: &quot;Project History Options&quot; Won't Search for Labels in File

{% raw %}

	Article: Q154835
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbSSafe600bug
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to the Online Documentation, in the "Project History Options" dialog
	box there is a "Labels Only" check box that can be used to search the current
	project for any files for a given label.
	
	Specifically, the Online Documentation describes this functionality as follows:
	
	  "Type a time, date, version, or label. Use the prefix D to indicate a date or
	  time, and the prefix L to indicate a label..."
	
	Attempting to use this dialog box to get a listing of files with a given label
	results in a SourceSafe message box that displays:
	
	  "There are no items in the list."
	
	After clicking OK on this message box, an empty "Results" window is displayed.
	
	CAUSE
	=====
	
	This function was designed for project searches only.
	
	WORKAROUND
	==========
	
	The following SourceSafe command can be used to achieve the desired result:
	
	        ss get $/*.* -r -g- -vlmylabel -oresults.txt
	
	The breakdown of the command is as follows:
	
	        <ss get>: SourceSafe command to retrieve a read-only output <$/*.*> -
	        start at project $/, and get all files (hence *.*)
	
	        <-r>: recursive - search through all files and sub-projects of
	        starting project
	
	        <-g->: don't actually place read-only files in the working directory
	
	        <-vlmylabel>: search for the label "mylabel"
	
	        <-oresults.txt>: pipe the results of the search to the named file
	
	At this point, you can look at the results.txt file to see the list of files that
	had the label in question assigned to it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project in Visual SourceSafe. Add two or more test files to the
	  project.
	
	2. In the Visual SourceSafe Explorer, highlight the first file in the right pane
	  of the Explorer window and click the mouse again. From the pop-up menu,
	  choose "Show History."
	
	3. Double-click on any version of the file. Then click the "Details" button and
	  type "mylabel" (without the quotation marks) in the text box provided for the
	  Label. Close this dialog box by choosing "Close."
	
	4. Repeat steps 1 through 3 for the second file added to the same project.
	
	5. Click the left pane of the Visual SourceSafe Explorer window (project side)
	  and highlight the project that contains the files labeled "mylabel."
	
	6. Right-click the mouse and choose "Show History" from the pop-up menu. In the
	  "Project History Options" dialog box, check "Include Files," "Recursive," and
	  "Labels Only."
	
	7. In the "From" box, enter "Lmylabel" (without the quotation marks), and then
	  choose OK.
	
	RESULT: Note that the message box will display "There are no items in the list"
	followed by the empty "Results" window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbSSafe600bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
