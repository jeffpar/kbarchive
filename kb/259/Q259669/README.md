---
layout: page
title: "Q259669: PRB: _Include Variable Behavior with Modify Form/Class"
permalink: /kb/259/Q259669/
---

## Q259669: PRB: _Include Variable Behavior with Modify Form/Class

	Article: Q259669
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 06-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The purpose of the _Include system memory variable in Visual FoxPro is to
	specify a default header file that is included for every newly created form,
	formset, or class. However, if you set the _Include variable and then modify a
	form or class, the header file is not included in the form or class.
	
	NOTE: Even if you use the MODIFY command to create a new form or class, the
	header file is not added to the form or class.
	
	RESOLUTION
	==========
	
	Set the _Include system memory variable before you create the new form or class,
	or add the header file to the form or class manually. Once the _Include system
	memory variable is set, be sure to create a new form or class with either the
	CREATE FORM or CREATE CLASS command, or from the File menu, choose New.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can set the _Include system memory variable in several ways:
	
	- On the File menu, choose Options, choose Tools, and then choose Default
	  Include File.
	- Assign the header file, including the path if it is not located in the
	  current folder, to the _Include memory variable, as follows:
	
	  _Include="headerfile.h"
	
	You can also programmatically set a header file for a form or class. In the file
	structure for the form or class is a field named Reserved8. This field holds the
	information for the _Include header file.
	
	Following is the code to add a header file "testheader.h" in a form named
	test.scx:
	
	  USE test.scx
	  REPLACE reserved8 WITH "testheader.h"
	  USE
	  COMPILE FORM test
	
	Class libraries must be handled differently because there can be multiple classes
	stored in each library.
	
	Following is the code to add a header file "testheader.h" to all classes in the
	class library named test.vcx:
	
	  CLEAR ALL && May need to issue this if class definitions exist in memory
	  USE test.vcx
	  REPLACE reserved8 WITH "testheader.h" FOR !Empty(objname) AND !EMPTY(class)
	  USE
	  COMPILE CLASS test
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
