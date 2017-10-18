---
layout: page
title: "Q168393: FIX: OLE Automation Server Creation Fails with Form and OCX"
permalink: kb/168/Q168393/
---

## Q168393: FIX: OLE Automation Server Creation Fails with Form and OCX

	Article: Q168393
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The creation of an Automation Server fails when a project includes a form class
	that contains an ActiveX control. The process of building the executable file
	suddenly halts and the following error message appears:
	
	  Error creating the OLE object
	
	Any of the ActiveX controls cause this error message. The error message occurs
	during the Creating Typelib portion of build process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual
	FoxPro version 5.0a for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro 5.0, create a new project and add a main program containing
	  a WAIT WINDOW command.
	
	2. In the project manager, add a form class to the project.
	
	3. Add a Container control to the form class and choose the Grid control or any
	  other control in the Control Type list box.
	
	4. From the Class menu, select the Class Info menu bar.
	
	5. In the Class Info dialog box, select the OLE Public check box in the Class
	  tab and save the class.
	
	6. Attempt to build an executable file. The error occurs.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
