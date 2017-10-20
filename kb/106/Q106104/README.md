---
layout: page
title: "Q106104: Cannot Create Icons for Executables in Long Directories"
permalink: /kb/106/Q106104/
---

## Q106104: Cannot Create Icons for Executables in Long Directories

{% raw %}

	Article: Q106104
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1; :3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Normally you should be able to drag and drop any program (executable file) from
	File Manager to an active program group in Program Manager in order to create a
	new icon in that group. If the directory in which the file resides has a 245
	character-long name, the following error message appears:
	
	  Invalid Path: The Path is Invalid
	
	The icon is created, but the path is truncated. If you try to start the program
	by double-clicking the icon, the following error message appears:
	
	  Application Execution Error: Cannot find file <drive><long-
	  directory><file name> (or one of its components): check to ensure
	  that the path and file name are correct and that all required libraries are
	  available.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT. We are researching
	this problem and will post new information here as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWin3xSearch kbWinNT310Search kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1; :3.1
	
	=============================================================================
	

{% endraw %}
