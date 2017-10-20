---
layout: page
title: "Q152355: PRB: Error Installing EXE With &quot;&#92;&quot; in Icon File Description"
permalink: /kb/152/Q152355/
---

## Q152355: PRB: Error Installing EXE With &quot;&#92;&quot; in Icon File Description

{% raw %}

	Article: Q152355
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup Wizard in Visual FoxPro allows the user to insert a "\" in the icon
	file description that will cause an error during installation of the executable.
	The error "Setup Error 279 object 243" is received shortly after the
	installation process begins followed by a message that indicates the
	installation did not succeed.
	
	CAUSE
	=====
	
	Setup Error 279 Object 243 is received in Win95 during setup. The user is then
	notified that setup was not successful and installation is exited.
	
	Other characters like "*", "<", ">", "?", and "|" will produce the same
	error. These are characters that are not allowed in file names under 8.3 DOS
	naming conventions.
	
	WORKAROUND
	==========
	
	The workaround is to run the Setup Wizard again and remove the "\" from the name
	of the icon file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project and put an icon file in the distribution directory.
	
	2. From the Tools menu, select Wizards, and then choose Setup.
	
	3. In Step 6 of the Setup Wizard, select the PM Item for the icon file and, in
	  the description, enter a "/" character. For the Command line, type:
	
	  " %s\name.exe " (without the quotation marks)
	
	  where "name" is the name of the executable.
	
	4. Select Finish, and run the Setup.exe file that is created.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
