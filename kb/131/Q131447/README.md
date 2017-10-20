---
layout: page
title: "Q131447: HOWTO: Use PHYSICAL Command to Find SourceSafe Database File"
permalink: /kb/131/Q131447/
---

## Q131447: HOWTO: Use PHYSICAL Command to Find SourceSafe Database File

{% raw %}

	Article: Q131447
	Product(s): Microsoft SourceSafe
	Version(s): MS-DOS:3.04,3.1; WINDOWS:3.04,3.1,4.0,5.0,6.0; winnt:3.04,3.1
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbSSafe310 kbSSafe304 kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When debugging and troubleshooting, you may need to determine what file inside a
	project corresponds to a file in the SourceSafe database.
	
	MORE INFORMATION
	================
	
	Use the following undocumented command lines:
	
	     To Find                       Use This Command Line
	     ------------------------------------------------------------------
	
	     Project file                  SS PHYSICAL <Project Path>
	     Certain file in a project     SS PHYSICAL <Project Path>/<FileName>
	     All files in a project        SS PHYSICAL <Project Path> -R
	
	
	Use the -o switch to redirect the output of the SS PHYSICAL command to a text
	file. For example:
	
	     SS PHYSICAL -r $/ "-o@Filename.ext"
	
	This command reports the physical names of all projects and files starting with
	the root project and directs this output to a file named Filename.ext.
	
	Additional query words: SourceSafe vss vbwin SS SRCSAFE
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbSSafe310 kbSSafe304 kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe304NT kbSSafe310NT
	Version           : MS-DOS:3.04,3.1; WINDOWS:3.04,3.1,4.0,5.0,6.0; winnt:3.04,3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
