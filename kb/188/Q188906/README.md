---
layout: page
title: "Q188906: PRB: No Command Line Equivalent for Move...File"
permalink: /kb/188/Q188906/
---

## Q188906: PRB: No Command Line Equivalent for Move...File

{% raw %}

	Article: Q188906
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): _IK kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Visual SourceSafe Move command on the command line,
	providing the path to a file in a SourceSafe project, the following message
	appears:
	
	  This command only works on projects.
	
	CAUSE
	=====
	
	The Move command is designed to move Projects only, not move files.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A new feature in Visual SourceSafe is the ability to move files from one project
	to another. This operation is available in the graphical user interface in the
	"Move..." command under the File menu. There is not a command line equivalent
	for the command.
	
	The user can move a file from one project to another in Visual SourceSafe by
	selecting the file and choosing the "Move..." command located under the File
	menu. When you move a file this way, the file is shared to the destination
	project, and then deleted but not purged from the source project.
	
	To move a file from one project to another utilizing the command line, you use
	the SourceSafe CP, SHARE and DELETE commands. For example, to move the
	Myfile.txt file from $/source to $/destination, execute the following commands:
	
	  SS CP $/destination
	  SS SHARE $/source/myfile.txt
	  SS DELETE $/source/myfile.txt
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
