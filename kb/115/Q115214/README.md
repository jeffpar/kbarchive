---
layout: page
title: "Q115214: PRB: Project Editor Gives &quot;Invalid File Format&quot; at Startup"
permalink: /kb/115/Q115214/
---

## Q115214: PRB: Project Editor Gives &quot;Invalid File Format&quot; at Startup

{% raw %}

	Article: Q115214
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Upon starting the Viewer Project Editor, an "Invalid File Format" error is
	displayed.
	
	CAUSE
	=====
	
	Viewer located and attempted to use an older version of the CMDIALOG.VBX custom
	control.
	
	RESOLUTION
	==========
	
	Check the date and time of the CMDIALOG.VBX file located in the \WINDOWS\SYSTEM
	directory. If the file is dated before 3/22/93, it will need to be replaced.
	This file can be found on the Viewer CD in the \SYSTEM directory.
	
	If the CMDIALOG.VBX file located in the \WINDOWS\SYSTEM directory has a date
	later than 3/22/93, check the directories specified in your MS-DOS path
	(especially those that precede the Windows directory) for the presence of a
	duplicate. If one is found, keep only the most recent copy and delete the
	others.
	
	Additional query words: viewer 2.00 2.00a 2.0a invalid file format
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	

{% endraw %}
