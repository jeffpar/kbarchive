---
layout: page
title: "Q193577: HOWTO: Pin Multiple Files in Visual SourceSafe"
permalink: /kb/193/Q193577/
---

## Q193577: HOWTO: Pin Multiple Files in Visual SourceSafe

{% raw %}

	Article: Q193577
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): _IK kbSSafe400 kbSSafe500 kbSSafe600 kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By design, Visual SourceSafe does not allow you to pin multiple files from
	Visual SourceSafe Explorer. You can pin multiple files from the command prompt
	using the following command:
	
	  ss pin <path to the files> -V#
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedures
	-----------------------
	
	To pin an individual file, type the following command at the command prompt:
	
	  ss pin $/project1/first.doc -V1
	
	RESULT: This pins the file first.doc at version 1.
	
	To pin multiple files, separate the file names with a space as follows:
	
	  ss pin $/project1/first.doc $/project1/project11/second.doc -V1
	
	RESULT: This pins the files first.doc in project1 and second.doc in project11 at
	version 1.
	
	You can also pin files using wildcard specifications as follows:
	
	  ss pin $/project1/*.doc -V1
	
	RESULT: This pins all the document files under project1 at version 1. Also, you
	can use the *.* wildcard to pin all the files under project1.
	
	To pin the files in the subprojects as well, you have to select the Recursive
	option. To do this, go to the Tools menu, click Options, and select the Act on
	projects recursively check box on the General tab. This adds a line "Recursive =
	Yes" in the ss.ini for the current user.
	
	NOTE: The recursive option is set only after you make the changes and close
	Visual SourceSafe Explorer.
	
	After you set the recursive option, type the following command:
	
	  ss pin $/project1/*.* -V1
	
	RESULT: This pins all files in project1 and its subprojects at version 1.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q169257 INFO: Actions That Perform an Implicit GET
	
	  Q157527 INFO: New Visual SourceSafe Commands and Functionality
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbSSafe400 kbSSafe500 kbSSafe600 kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400a kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
