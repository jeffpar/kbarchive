---
layout: page
title: "Q131023: DOC: How to Set Up a Shadow Directory"
permalink: /kb/131/Q131023/
---

## Q131023: DOC: How to Set Up a Shadow Directory

{% raw %}

	Article: Q131023
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe400 kbSSafe310 kbSSafe304 kbSSafe302
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, version 3.04 
	- Microsoft SourceSafe for Windows NT, version 3.02 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The instructions for setting up a shadow directory under SourceSafe need
	clarification in the documentation.
	
	MORE INFORMATION
	================
	
	The documentation states that the user must use GET to obtain the files from the
	SourceSafe project that has a shadow directory.
	
	To do this from the interface, follow these steps:
	
	1. Select the project you want to shadow.
	
	2. Select the GET option.
	
	3. When the dialog box comes up, follow these steps:
	
	  a. Make the TO: prompt point to the shadow directory.
	
	  b. Select recursive.
	
	  c. Select build tree.
	
	4. Click OK, and answer Yes to create any subdirectories
	
	To do this from the command line, follow these steps:
	
	1. Use this syntax:
	
	  SS GET <PROJECT> -GL<SHADOW DIRECTORY> -R
	  -Y<USERNAME>,<PASSWORD>
	
	2. Choose No when asked if you want to set the directory to your working
	  directory.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q124529 How to Access SourceSafe Code from a Central Directory
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe400 kbSSafe310 kbSSafe304 kbSSafe302 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe310DOS kbSSafe302NT
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
