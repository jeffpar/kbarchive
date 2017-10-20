---
layout: page
title: "Q189912: BUG: RELEASE CLASSLIB in App or EXE Requires Use of ALIAS"
permalink: /kb/189/Q189912/
---

## Q189912: BUG: RELEASE CLASSLIB in App or EXE Requires Use of ALIAS

{% raw %}

	Article: Q189912
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
	
	Attempting to release a class library that is contained in an APP or an EXE will
	fail with a Class library file not found error.
	
	RESOLUTION
	==========
	
	The ALIAS clause must be used in the SET CLASSLIB and RELEASE CLASSLIB
	commands.
	
	     * Set the class library using an ALIAS
	     SET CLASSLIB TO WizCtrl.vcx IN HOME()+"Wizard.app" ALIAS MyWizClass
	     * Release the class library using the ALIAS from above
	     RELEASE CLASSLIB ALIAS MyWizClass
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following commands from the command window or from within a program:
	
	     SET CLASSLIB TO WizCtrl IN HOME()+"Wizard.app"
	     RELEASE CLASSLIB WizCtrl IN HOME()+"Wizard.app"
	
	Note: The Class library not found error occurs.
	
	Additional query words: kbVFp500a kbVFp500 kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
