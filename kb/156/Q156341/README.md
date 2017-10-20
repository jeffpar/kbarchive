---
layout: page
title: "Q156341: PRB: Cannot Load the Same Class Library More Than Once"
permalink: /kb/156/Q156341/
---

## Q156341: PRB: Cannot Load the Same Class Library More Than Once

{% raw %}

	Article: Q156341
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro version 5.0 does not allow you to load the same class library more
	than once, using the "SET CLASSLIB... ALIAS ... ADDITIVE" command.
	
	WORKAROUND
	==========
	
	If you want to load the same class library multiple times, you have to create
	multiple copies of the same class library in different directories and then load
	each one. Following is an example to do so:
	
	  SET CLASSLIB TO
	
	  **Make a temp directory in the HOME() directory**
	  MD HOME()+'temp'
	
	  **Copy the Class Library files to the temp directory**
	  COPY FILE HOME()+'wizards\wizstyle.vc?' to HOME()+'temp\wizstyle.vc?'
	
	  **Load First instance of the Class Library**
	  SET CLASSLIB TO HOME()+'wizards\wizstyle' ALIAS one
	
	  **Display the Class Library(ies) Loaded into memory**
	  ?SET('CLASSLIB')
	  **The above command will display the First Library**
	
	  **Load second instance of the Class Library
	  SET CLASSLIB TO HOME()+'temp\wizstyle' ALIAS two ADDITIVE
	
	  **Display the Class Library(ies) Loaded into memory**
	  ?SET('CLASSLIB')
	  **The above command will display both instances of the library**
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps demonstrate that, although the second instance of the Class
	Library is opened using the ALIAS and ADDITIVE clause, the first instance of the
	same class is closed, and only the second instance of the Class remains loaded
	into memory:
	
	1. Issue the following commands from the Command window:
	
	       SET CLASSLIB TO HOME()+ "Wizards\Wizstyle" ALIAS One
	       ?SET("Classlib")
	
	     The ?SET("Classlib") command displays the following:
	
	       ..\Vfp\Wizards\Wizstyle.vcx ALIAS One
	
	2. Issue the following commands from the Command window:
	
	       SET CLASSLIB TO HOME()+ "Wizards\Wizstyle" ALIAS Two ADDITIVE
	       ?SET("Classlib")
	
	     The ?SET("Classlib") command displays the following:
	
	       ..\Vfp\Wizards\Wizstyle.vcx ALIAS Two
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
