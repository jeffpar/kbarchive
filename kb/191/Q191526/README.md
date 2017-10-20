---
layout: page
title: "Q191526: PRB: READ MENU In DO..WHILE Loop Causes VFP Screen to Jump"
permalink: /kb/191/Q191526/
---

## Q191526: PRB: READ MENU In DO..WHILE Loop Causes VFP Screen to Jump

{% raw %}

	Article: Q191526
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a READ MENU is contained in a DO...WHILE loop, the Visual FoxPro screen
	jumps.
	
	RESOLUTION
	==========
	
	READ MENU is included for backward compatibility with FoxBase. Use the menu
	builder instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Save the following code to a program file and run the program:
	
	Sample Code
	-----------
	
	     *-- Code begins here.
	     PRIVATE menu1
	     DECLARE menu1[3,2]
	     menu1[1,1]=" Edit "
	     menu1[1,2]=''
	     menu1[2,1]=" Browse "
	     menu1[2,2]=''
	     menu1[3,1]=" Exit "
	     menu1[3,2]=''
	     STORE .F. TO done
	     DO WHILE .NOT. done
	        MENU BAR menu1, 3
	        READ MENU BAR TO menu_acr, mchoice
	     DO CASE
	     CASE menu_acr = 1
	        = MESSAGEBOX("Choice 1")
	     CASE menu_acr = 2
	        = MESSAGEBOX("Choice 2")
	     CASE menu_acr = 3
	        STORE .T. TO done
	     ENDCASE
	     ENDDO
	     RELEASE WINDOW Win1
	     RETURN
	     *-- Code ends here.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Stewart, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbVFp600bug kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
