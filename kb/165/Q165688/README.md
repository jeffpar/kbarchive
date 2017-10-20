---
layout: page
title: "Q165688: INFO: Visual C++ 5.0 Readme, Visual SourceSafe Issues"
permalink: /kb/165/Q165688/
---

## Q165688: INFO: Visual C++ 5.0 Readme, Visual SourceSafe Issues

{% raw %}

	Article: Q165688
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe Issues
	------------------------
	
	Converting a Project Directly From Source Control Using Visual SourceSafe With
	Keyword Expansion Disables the Ability to Check In Multiple Files
	
	MORE INFORMATION
	================
	
	Converting a Project Directly From Source Control
	-------------------------------------------------
	
	Visual C++ no longer allows you to open an old project from source control and
	convert it to the new project format from within Visual C++. Use the SourceSafe
	Explorer (or equivalent source control interface) to get the files to a local
	disc, then open the project in Visual C++ to do the conversion, and then check
	the files back in to source control. After this you may open the project out of
	source control as usual from Visual C++.
	
	Using Visual SourceSafe With Keyword Expansion Disables the Ability to
	
	Check In or Add Multiple Files
	------------------------------
	
	The keyword expansion feature of Visual SourceSafe disables multiple-file actions
	for the Check In and Add commands. Using either of these commands with keyword
	expansion enabled causes only one file to be operated on. The other files are
	ignored.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	
	=============================================================================
	

{% endraw %}
