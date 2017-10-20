---
layout: page
title: "Q137444: How to Use AppSearch to Search for a Specific Application"
permalink: /kb/137/Q137444/
---

## Q137444: How to Use AppSearch to Search for a Specific Application

{% raw %}

	Article: Q137444
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro 3.0 Setup Wizard does not require that an application (.app)
	file be specified. This article describes how to cause a generated setup to
	search for a specific file to determine if the application exists on the target
	computer.
	
	NOTE: Modifications to Wzsetup.ini are not supported by Microsoft FoxPro
	Technical Support.
	
	MORE INFORMATION
	================
	
	The FoxPro 2.6 Setup Wizard required that a specific .app or .exe be identified
	as the application file. This file was used in the command for the Program
	Manager item.
	
	The Visual FoxPro 3.0 Setup Wizard allows many Program Manager items to be
	created and does not require that a single .app or .exe be selected as the
	application file. As a result, the generated setup does not know which specific
	file to search for to determine if the application exists on the target
	directory.
	
	You can, however, modify the ApplicationName setting in the Preferences section
	of Wzsetup.ini as follows to cause the generated setup program to look for a
	specific file and display a warning to the user if the file is found:
	
	     [Preferences]
	     ApplicationName=Myapp.app
	
	When the generated setup runs, it will look for Myapp.app in the default
	installation directory.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
