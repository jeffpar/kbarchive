---
layout: page
title: "Q193585: BUG: Recursive History Fails if Used With -f- Switch"
permalink: /kb/193/Q193585/
---

## Q193585: BUG: Recursive History Fails if Used With -f- Switch

{% raw %}

	Article: Q193585
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): _IK kbSSafe500bug kbSSafe600bug
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SourceSafe History command is used on a project with the -r (recursive)
	and -f- (Do Not Display Individual File Updates) switches, the -r switch does
	not work correctly.
	
	CAUSE
	=====
	
	This problem only occurs when using the -r and -f- switches together.
	
	RESOLUTION
	==========
	
	Use the SourceSafe Explorer to generate a recursive project history that does
	not show file updates.
	
	To accomplish this, clear the "Include file checkins" option in the Project
	History Options dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	From the SourceSafe Explorer:
	
	1. Create a project named TestProj under $/, then add a subproject named SubProj
	  under TestProj.
	
	2. Add some files to the TestProj and SubProj projects. Next, check out, modify,
	  and check in the files to create some history for the files.
	
	From the Command Line:
	
	1. Set the current database with the following command:
	
	       set ssdir = <path to SourceSafe directory>
	
	2. Get the history for the project, $/TestProj in addition to the subprojects
	  for $/TestProj with the following command:
	
	        ss history -r -f- $/TestProj
	
	Notice that only the files contained in $/TestProj are listed instead of the
	files in both the $/TestProj and $/TestProj/SubProj directories.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q128723 HOWTO: Reference a Time on the Command Line
	
	Visual SourceSafe Books Online; search on: "History"
	
	Additional query words: kbDSupport sub
	
	======================================================================
	Keywords          : _IK kbSSafe500bug kbSSafe600bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
