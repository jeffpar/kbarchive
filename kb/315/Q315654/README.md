---
layout: page
title: "Q315654: FIX: Code Changes Lost Switching Between Bookmarks in Methods"
permalink: /kb/315/Q315654/
---

## Q315654: FIX: Code Changes Lost Switching Between Bookmarks in Methods

	Article: Q315654
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
	
	If you use bookmarks to mark code in two different methods of a form, when you
	add changes to one of the methods, switch to another bookmarked method, and then
	switch back to the altered method code, your changes are gone.
	
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
	
	1. Create a form called "Test".
	
	2. Enter code into the form's Activate method. Press ALT+SHIFT+F2 to bookmark
	  the code.
	
	3. Enter code into the form's AddProperty method. Press ALT+SHIFT+F2 to bookmark
	  the code.
	
	4. Press the F2 key to go to the bookmark in the Activate method. If this fails,
	  use the Properties sheet to choose the Activate method.
	
	5. Enter some code changes in the Activate method.
	
	6. Press the F2 key to go to the bookmark in the AddProperty method.
	
	7. Press the F2 key to go to the Activate code with the changes.
	
	  Note that the changes to the Activate code that you made in step 5 are gone.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
