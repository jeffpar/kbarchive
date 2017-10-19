---
layout: page
title: "Q299788: FIX: Setting SelStart = 0 in EditBox Causes Fatal Exception"
permalink: /kb/299/Q299788/
---

## Q299788: FIX: Setting SelStart = 0 in EditBox Causes Fatal Exception

	Article: Q299788
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600b
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the SelStart property of an EditBox control to 0, Visual FoxPro may
	exit with the following error message:
	
	  Fatal Error: Exception Code = C0000005
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code in the Command window:
	
	  *!* Q299788 FIX: Setting SelStart = 0 In EditBox Causes Fatal Exception
	  loDemo = CreateObject('EditBox')
	  loDemo.SelStart=0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
