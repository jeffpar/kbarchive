---
layout: page
title: "Q316822: FIX: Exception Error When You Use Wildcards in Find Dialog Box"
permalink: /kb/316/Q316822/
---

## Q316822: FIX: Exception Error When You Use Wildcards in Find Dialog Box

	Article: Q316822
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the wildcard combination of a closing square bracket and an
	asterisk (]*) in the Visual FoxPro 7.0 Find dialog box, the following error may
	occur:
	
	  Fatal error: Exception code=C0000005
	
	This error does not occur when you search forward. The error occurs after you
	click to select the Search Backward check box and then begin to search again.
	
	Note that to use wildcards successfully to search for data, you must click to
	select the Use Wildcards check box.
	
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
	
	1. Create a program (.prg) file and type the following phrase in it:
	
	  This search will use wildcards to search for the word error and generate an exception error.
	
	2. On the Edit menu, click Find. Click to select the Use Wildcards check box and
	  then type the following in the Look For box of the Find window:
	
	  [e]*ror
	
	3. Click the Find button twice, and then click to select the Search Backward
	  check box.
	
	4. Click Find again. The error occurs after a few seconds.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
