---
layout: page
title: "Q314646: FIX: ResetToDefault May Remove a Custom Method Completely"
permalink: /kb/314/Q314646/
---

## Q314646: FIX: ResetToDefault May Remove a Custom Method Completely

{% raw %}

	Article: Q314646
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbDesigner kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ResetToDefault method may remove a custom method completely, instead of
	resetting the method and removing just the code.
	
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
	
	1. Run the following code from a program (.prg) file:
	
	  LOCAL aobj[1]
	  LOCAL xx As Form
	  DELETE FILE testxx.sc?
	  CREATE FORM testxx NOWAIT
	  =ASELOBJ(aobj,1)
	  xx = aobj[1]
	  xx.AutoCenter = .t.
	  xx.WriteMethod('click1',[WAIT WINDOW PROGRAM() time 1],.t.)
	
	  KEYBOARD 'Y' CLEAR
	  RELEASE WINDOW 'Form Designer'
	
	  DO FORM testxx 
	  testxx.click1
	  testxx.Release 
	
	  MODIFY FORM testxx NOWAIT 
	  =ASELOBJ(aobj,1) 
	  xx = aobj[1]
	  * Uncomment the next line to set up conditions for a possible fatal error.
	  * xx.ResetToDefault('click1')
	  RETURN
	
	2. In the Properties window, click the Methods tab. Find the Click1 method,
	  right-click it, and select Reset to Default. The method will be removed from
	  the form instead of being reset.
	
	  If you uncomment the last line of the code above, you will see a stray entry
	  in the Properties window, where the Click1 method should have been. If you
	  double-click that entry, you receive the following error:
	
	  Fatal error: Exception code=C0000005
	
	Additional query words: crash kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbDesigner kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
