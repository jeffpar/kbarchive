---
layout: page
title: "Q135720: PRB: Moving Project in SourceSafe Explorer Causes Error in VB"
permalink: /kb/135/Q135720/
---

## Q135720: PRB: Moving Project in SourceSafe Explorer Causes Error in VB

{% raw %}

	Article: Q135720
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbVBp400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic, when you run the SourceSafe CheckOut Command, the following
	error message displays in Visual Basic:
	
	  All available files have already been checked out.
	
	CAUSE
	=====
	
	The project was open in Visual Basic when it was moved or renamed in the Visual
	SourceSafe Explorer. Because the project was moved or renamed, the SourceSafe
	Add-In in Visual Basic can no longer can find it.
	
	
	RESOLUTION
	==========
	
	In the Visual SourceSafe Explorer, when you run SourceSafe commands that impact
	a project open in Visual Basic, click Refresh File Status on the Add- Ins /
	SourceSafe menu. By refreshing the project file status, Visual Basic is able to
	get in sync with Visual SourceSafe.
	
	If you run Refresh File Status after the series of steps listed in the "Steps to
	Reproduce Behavior" section of this article, this message appears:
	
	  Project <old VSS project location> has been moved or renamed to
	  <found VSS project location>. Would you like to connect to this
	  project?
	
	This project location may or may not be the project you want. In most cases, it
	probably is, so you can click OK and you continue on with your work.
	
	If you click Cancel, the following error message displays:
	
	  Project <old VSS project location> was not found. Would you like to
	  browse for the project?
	
	If you know the new location or new name for the file, click Yes, and select the
	new project location or name. If you click No, the following error message
	displays:
	
	  The project "<old VSS project location>", <VSS Database File> no
	  longer exists in SourceSafe. You must either recover or re-create the project
	  before you can use this project with source code control.
	
	At this point, there is no longer any link between any Visual SourceSafe project
	and the project you currently have open in Visual Basic.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, open a sample project, and add it to Source Code control.
	
	2. In Visual Basic, run the SourceSafe Explorer. (On the Add-Ins menu, click
	  SourceSafe and then Run SourceSafe.
	
	3. In the Visual SourceSafe Explorer, move the project to another location, such
	  as into a subdirectory.
	
	4. In Visual Basic, check out the files. The following error message displays:
	
	  All available files have already been checked out.
	
	Of course, you know the files are not checked out, neither in Visual Basic nor
	the Visual SourceSafe Explorer.
	
	REFERENCES
	==========
	
	For more information on synchronizing Visual SourceSafe with Visual Basic,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q135357 PRB: Sync Between Visual SourceSafe and VB Is Delayed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbVBp400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
