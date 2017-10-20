---
layout: page
title: "Q250495: PRB: SAVE SCREEN Not Creating Variable on CLEARed Screen"
permalink: /kb/250/Q250495/
---

## Q250495: PRB: SAVE SCREEN Not Creating Variable on CLEARed Screen

{% raw %}

	Article: Q250495
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SAVE SCREEN TO <memory variable> command, the memory
	variable might not be created. When using the RESTORE SCREEN FROM <memory
	variable> command, you receive the error:
	
	  Variable <memory variable> is not found.
	
	CAUSE
	=====
	
	If the screen has been CLEARed, Microsoft Visual FoxPro is not able to save
	anything to the memory variable, so it is not created. If the memory variable
	already exists, the information in it is not overwritten.
	
	RESOLUTION
	==========
	
	Output of some kind to the screen (Visual FoxPro Desktop) enables the SAVE
	SCREEN TO command to create the memory variable. The statement:
	
	  ? SPACE(0)
	
	right after the CLEAR command places a null string on the screen and does not
	affect screen appearance, but it causes the SAVE SCREEN TO command to create the
	memory variable.
	
	MORE INFORMATION
	================
	
	This problem does not occur in Visual FoxPro 3.0b.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program in Visual FoxPro and add the following statements:
	
	  CLEAR ALL
	  CLEAR
	  * ? SPACE(0) 
	  SAVE SCREEN TO X
	  ? VERSION()
	  RESTORE SCREEN FROM X
	  ? TYPE("X")
	
	2. Run the code and note that the error mentioned in the "Symptoms" section
	  appears.
	
	3. Remove the asterisk from the line:
	
	  ? SPACE(0)
	
	  and execute the code again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
