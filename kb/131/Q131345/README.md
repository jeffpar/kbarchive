---
layout: page
title: "Q131345: Using the DISPLAY OBJECTS Command"
permalink: /kb/131/Q131345/
---

## Q131345: Using the DISPLAY OBJECTS Command

{% raw %}

	Article: Q131345
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DISPLAY OBJECTS command's behavior is similar to that of the DISPLAY MEMORY
	command. However, DISPLAY OBJECTS reports information about objects instead of
	memory variables.
	
	MORE INFORMATION
	================
	
	DISPLAY OBJECTS displays the following information about all existing objects:
	
	- Properties and their values
	
	- Methods
	
	- Member objects and the class or subclass on which they are based
	
	- Class or subclass on which objects are based
	
	- Class hierarchy for the objects
	
	You can also use the DISPLAY OBJECTS [LIKE][NOCONSOLE][TO PRINT][TO FILE] clauses
	as you can with all the DISPLAY commands.
	
	Example
	-------
	
	The following code creates the object oCustom based on the custom class and
	directs the output of the DISPLAY OBJECT command to the file TEST.TXT.
	
	     oCustom=Createobject("CUSTOM")
	     DISPLAY OBJECT LIKE oCustom TO FILE TEST.TXT
	
	Output from Example Code
	------------------------
	
	Object: OCUSTOM                      Pub       O    CUSTOM
	
	Class Tree:
	       CUSTOM
	
	Properties:
	       BASECLASS                                   C    "Custom"
	       CLASS                                       C    "Custom"
	       CLASSLIBRARY                                C    ""
	       COMMENT                                     C    ""
	       HEIGHT                                      N    17
	       LEFT                                        N    0
	       NAME                                        C    "Custom1"
	       PARENTCLASS                                 C    ""
	       PICTURE                                     C    ""
	       TOP                                         N    0
	       WIDTH                                       N    100
	
	Methods and Events:
	       ADDOBJECT                                  DESTROY
	       ERROR                                      INIT
	       REMOVEOBJECT                               SAVEASCLASS
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
