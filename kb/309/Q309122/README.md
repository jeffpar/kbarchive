---
layout: page
title: "Q309122: PRB: VFP 6 Application Framework Class Doesn't Compile in  VFP 7"
permalink: /kb/309/Q309122/
---

## Q309122: PRB: VFP 6 Application Framework Class Doesn't Compile in  VFP 7

{% raw %}

	Article: Q309122
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbwizard kbOOP kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to compile the _FRAMEWK.VCX from the Visual FoxPro (VFP) 6.0
	application framework in VFP 7.0, you may receive the following error:
	
	  Error in line 3729 of _application.validatemetatable (record 103): Syntax
	  error.
	
	This also occurs when rebuilding a project that uses the VFP 6.0 application
	framework.
	
	CAUSE
	=====
	
	The following line is contained in the ValidateMetaTable method:
	
	  LOCAL lcTable, lcMessage, lcAlias, liSelect, ;
	        llReturn, liTagCount laRequired[1], laKeys[1];
	        liFound, llExactOff
	
	Although the syntax is valid for VFP 6.0, VFP 7.0 does not allow you to omit the
	commas between the variables.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Determine the location of the copy of _FRAMEWK.VCX that you are using.
	
	2. Run the following line, replacing the path as necessary:
	
	  MODIFY CLASS _application ;
	     OF ("c:\Program Files\Microsoft Visual Studio\VFP98\Wizards\_FRAMEWK") ;
	     METHOD ValidateMetaTable
	
	3. Add the missing commas to line 8.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In VFP 7.0, the LOCAL command is enhanced to allow you to declare variables as
	being particular types, for use with IntelliSense. Because this syntax requires
	spaces within a single variable declaration, the older syntax that allows spaces
	to separate variables is no longer valid.
	
	To reproduce this behavior, run the following code, changing the path as
	necessary if you did not install VFP 6.0 to the default location:
	
	  lcPath = "c:\Program Files\Microsoft Visual Studio\VFP98\Wizards\_FRAMEWK"
	  COMPILE CLASSLIB (lcPath + ".vcx")
	  MODIFY FILE (lcPath + ".err")
	
	REFERENCES
	==========
	
	For more information on the LOCAL command, see the "LOCAL Command" entry in the
	VFP 7.0 Help file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbOOP kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
