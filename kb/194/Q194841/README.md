---
layout: page
title: "Q194841: FIX: Editing the IDL File May Cause ClassView Shortcuts to Fail"
permalink: /kb/194/Q194841/
---

## Q194841: FIX: Editing the IDL File May Cause ClassView Shortcuts to Fail

{% raw %}

	Article: Q194841
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbide kbVC kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After editing the project IDL file by hand, you may receive the following error
	when trying to add a method or property to an interface using the ClassView
	shortcuts Add Method and Add Property:
	
	  Unable to create the function because the header or the implementation file
	  could not be found.
	
	RESOLUTION
	==========
	
	Save the IDL file before using the ClassView shortcuts Add Method and Add
	Property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	CASE 1:
	
	1. Create a default ATL COM AppWizard project.
	
	2. In ClassView, right-click on the root node and select New Class. Add a new
	  ATL Class Interface pair.
	
	3. Open the project's IDL file in the Source editor.
	
	4. Add five blank lines anywhere above the interface you added as part of step
	  2.
	
	  NOTE: Do not save anything at this point. The unsaved change is key to causing
	  the problem.
	
	5. In ClassView, right-click on the interface created in step 2 and select Add
	  Method. Complete the Add Method dialog box and click OK.
	
	  RESULT: The error described in the SYMPTOMS section is displayed. Click OK to
	  dismiss the error dialog box and click Cancel to dismiss the Add Method
	  dialog box.
	
	6. Manually save the project's IDL file and repeat step 5.
	
	  RESULT: The error does not occur.
	
	CASE 2:
	
	1. In the project's IDL file, add a source file comment above or below any
	  method or property in any declared interface.
	
	  NOTE: Do not save anything at this point. The unsaved change is key to causing
	  the problem.
	
	2. Repeat steps 5 and 6 from CASE 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbide kbVC kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
