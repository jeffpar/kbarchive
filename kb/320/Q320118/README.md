---
layout: page
title: "Q320118: FIX: Error Occurs Using the Open Parenthesis Calling VSS Method"
permalink: /kb/320/Q320118/
---

## Q320118: FIX: Error Occurs Using the Open Parenthesis Calling VSS Method

	Article: Q320118
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 03-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you programmatically call Microsoft Visual SourceSafe while you are using
	the CREATEOBJECT() function in Visual FoxPro 7.0, you receive the following
	error message if you type the opening parenthesis after any of the methods in
	Visual SourceSafe that rely on the opening parenthesis as part of the code
	structure:
	
	  Fatal error: Exception code=C0000005
	
	Note that you must turn on the IntelliSense Manager for the error to occur.
	
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
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Make sure that Visual SourceSafe is installed on the computer.
	
	2. On the Tools menu, click IntelliSense Manager, and then click to select
	  Enable IntelliSense.
	
	3. In Visual FoxPro, paste the following code in a program (.prg) file, and then
	  run the program from the Command window:
	
	  oSafe = CREATEOBJECT("SourceSafe")
	  oSafe.Open(
	
	Note that you receive the error message that is described in the "Symptoms"
	section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
