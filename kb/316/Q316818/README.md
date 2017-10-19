---
layout: page
title: "Q316818: FIX: Fatal Error Using the Equal Sign on Excel Classed Property"
permalink: /kb/316/Q316818/
---

## Q316818: FIX: Fatal Error Using the Equal Sign on Excel Classed Property

	Article: Q316818
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbAutomation kbContainer kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Visual FoxPro 7.0 CREATEOBJECTEX() function and add the cIID
	clause (Interface ID GUID) to create an early-bound instance of a Microsoft
	Excel class, the following error may occur when you use the equal sign (=) to
	assign a value to one of the class properties:
	
	  Fatal error: Exception code=C0000005
	
	NOTE: IntelliSense must be turned on in Visual FoxPro 7.0 for this error to
	occur.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Tools menu, click IntelliSense Manager and make sure that the Enable
	  IntelliSense check box is selected.
	
	2. Enter the following commands in the Command window:
	
	  x = CREATEOBJECTEX("Excel.Application","", ;
	        "{000208D5-0000-0000-C000-000000000046}")
	  x.Application.ActiveCell.Value
	
	3. Type the equal sign symbol after the word "Value". The error occurs and
	  causes Visual FoxPro 7.0 to close.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbAutomation kbContainer kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
