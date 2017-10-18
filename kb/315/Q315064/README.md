---
layout: page
title: "Q315064: FIX: Fatal Exception Error with ResetToDefault on Empty Method"
permalink: kb/315/Q315064/
---

## Q315064: FIX: Fatal Exception Error with ResetToDefault on Empty Method

	Article: Q315064
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ResetToDefault method on a method that contains no code, the
	following error may be returned:
	
	  Fatal Error: Exception code: C0000005
	
	This error may be followed by one or more of the following error messages:
	
	  Mismatched pushjmp/popjmp call.
	
	  -or-
	
	  Fatal error 14 while attempting to report error 14
	
	  -or-
	
	  File is not open.
	
	  -or-
	
	  Fatal error 182 while attempting to report error 182
	
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
	
	1. Create a program called Test.prg and add the following code to it:
	
	  LOCAL ax[1], oF
	  DELETE FILE Testxx.sc*
	  CREATE FORM testxx NOWAIT
	  ASELOBJ(ax,1)  && Get an object reference to the form in the Designer
	  oF = ax[1]
	  oF.AddObject('Text1', 'TextBox')
	  * oF.Text1.WriteMethod('Click','*')
	  oF.Text1.ResetToDefault('Click')
	  RETURN  
	
	2. Save this file and then run the program.
	
	If you uncomment the WriteMethod line so that the method is not empty and run the
	code again, the errors do not occur.
	
	Additional query words: crash reset to default kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
