---
layout: page
title: "Q305041: FIX: Fatal Error When Closing Second Instance of Class Designer"
permalink: /kb/305/Q305041/
---

## Q305041: FIX: Fatal Error When Closing Second Instance of Class Designer

	Article: Q305041
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp kbGrpDSFox kbDSupport kbvfp700fix kbvfp700
	Last Modified: 28-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, if you issue the SET RESOURCE ON command and you have two
	instances of the Class Designer open, when you close the second instance of the
	Class Designer, you may see the following error message:
	
	  Fatal exception: Error code=C0000005
	
	NOTE: In Visual FoxPro 5.0a, you do not need to issue the SET RESOURCE ON command
	to see the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro 6.0, create a program that contains the following code:
	
	  SET RESOURCE ON
	  CLEAR ALL
	  DELETE FILE atemp.vc?
	  DELETE FILE ctemp.vc?
	  CREATE CLASS atextbox AS TEXTBOX OF atemp.vcx NOWAIT
	  KEYBOARD '{ctrl+w}'  
	  MODI CLASS ctextbox AS TEXTBOX OF ctemp.vcx
	  RETURN
	
	2. Close the program and all other windows.
	
	3. Run the program and the error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp kbGrpDSFox kbDSupport kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
