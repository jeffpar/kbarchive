---
layout: page
title: "Q138296: HOWTO: Use UNC Paths in Visual SourceSafe"
permalink: /kb/138/Q138296/
---

## Q138296: HOWTO: Use UNC Paths in Visual SourceSafe

{% raw %}

	Article: Q138296
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Previous versions of Visual SourceSafe could not use universal naming convention
	(UNC) paths. Visual SourceSafe now allows the user to use UNC paths in most
	SourceSafe Explorer, SRCSAFE.INI or SS.INI settings. This eliminates the need to
	map a drive to run SourceSafe and allows the administrator to easily place the
	Visual SourceSafe database on a different network server without any end-user
	intervention.
	
	MORE INFORMATION
	================
	
	UNC paths may be used in many locations, but not every location in Visual
	SourceSafe. The following list contains the files, environment variables, and
	.INI file variables that accept UNC paths:
	
	- SSDIR environment variable.
	
	- SSINI environment variable.
	
	- #INCLUDE in the SRCSAFE.INI file. For more information about possible
	  problems with using the #INCLUDE option, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q136401 Visual SourceSafe "Invalid Data Path" Error
	
	- SRCSAFE.INI variables:
	
	  Data_Path
	  Journal_File
	  Shadow
	  Temp_Path
	  Users_Txt
	
	- SS.INI variables:
	
	  Comment_Editor
	  Comment_Template
	  Editor
	  File extension masks
	
	Visual SourceSafe cannot use UNC paths in the following situations:
	
	- Working directories.
	
	- File dialog boxes:
	
	  Add file
	  Get
	  Checkout
	  Checkin
	
	NOTE: These situations do not apply to Visual SourceSafe 5.0. You can use a UNC
	name anywhere you can supply a pathname.
	
	
	REFERENCES
	==========
	
	Query using the UNC keyword in Visual SourceSafe Books Online.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
