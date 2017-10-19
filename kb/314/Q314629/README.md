---
layout: page
title: "Q314629: FIX: Object Referenced by Property with ASSIGN Cannot Be Closed"
permalink: /kb/314/Q314629/
---

## Q314629: FIX: Object Referenced by Property with ASSIGN Cannot Be Closed

	Article: Q314629
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCOMt kbOOP kbGrpDSFox kbDSupport kbvfp700fix kbvfp700
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form or other class is created with a custom property which has an associated
	ASSIGN method. When the class is instantiated, and a reference to another object
	is assigned to the custom property, you are unable to release the second object,
	even if the first object no longer exists.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code to a new program and run it in Visual FoxPro 7.0:
	
	  LOCAL loMyForm AS FORM, ;
	      loCustClass AS CUSTOM
	
	  loCustClass = CREATEOBJECT("MyCustom")
	  loMyForm = CREATEOBJECT("FORM")
	  loCustClass.ofrm = loMyForm
	  loMyForm.SHOW(1)
	
	  DEFINE CLASS MyCustom AS CUSTOM
	  	ofrm = .NULL.
	
	  	PROCEDURE ofrm_assign
	  		LPARAMETERS vNewVal
	  		THIS.ofrm = m.vNewVal
	  	ENDPROC
	  ENDDEFINE
	
	2. When the form appears, try to close it by using the Close button; you are
	  unable to do so. The only way to close the form is to issue a CLEAR ALL
	  command from the Command Window.
	
	NOTE: This problem only occurs if there is an ASSIGN method on the property
	holding the object reference ("ofrm_assign" in the example code).
	
	Additional query words: close box kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbCOMt kbOOP kbGrpDSFox kbDSupport kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
