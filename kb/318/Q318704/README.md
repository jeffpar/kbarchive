---
layout: page
title: "Q318704: FIX: Fatal Exception Error When You Use CreateObjectEx() with Ex"
permalink: /kb/318/Q318704/
---

## Q318704: FIX: Fatal Exception Error When You Use CreateObjectEx() with Ex

	Article: Q318704
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCOMt kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the CreateObjectEx() function to create an Excel.Application
	object, and you reference a property of the Excel.Application object, you may
	receive one of the following error messages:
	
	In Microsoft Visual FoxPro 7.0:
	
	  Fatal error: Exception code=C0000005
	
	-or-
	
	  Member ACTIVEDIALOG does not evaluate to an object.
	
	In Visual FoxPro 7.0 Service Pack 1:
	
	  OLE error code 0x8002802b: Element not found.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	1. Paste the following code in a program (.prg) file named Test, and then run
	  the program from the Command window:
	
	  SET RESOURCE OFF
	  PUBLIC x AS Excel.Application
	  x = CREATEOBJECTEX("excel.application","",;
	        "{000208D5-0000-0000-C000-000000000046}")
	  x.Quit
	  x = CREATEOBJECTEX("excel.application","",;
	        "{000208D5-0000-0000-C000-000000000046}")
	  x.ActiveDialog.Comments
	  x.Quit
	  RELEASE x
	  RETURN
	
	2. Save and close the program.
	
	3. Run Test.prg from the Command window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
