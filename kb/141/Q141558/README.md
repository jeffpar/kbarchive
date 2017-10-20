---
layout: page
title: "Q141558: FIX: WindowType Changed at Run Time Can't Be Changed Back"
permalink: /kb/141/Q141558/
---

## Q141558: FIX: WindowType Changed at Run Time Can't Be Changed Back

{% raw %}

	Article: Q141558
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You attempt to change the WindowType of a running form from modeless to modal
	and then back to modeless. On the switch from modeless to modal, you succeed.
	But the attempt to switch the now modal form to modeless fails.
	
	WORKAROUND
	==========
	
	Although there isn't much call to do this at run time, the switch is one way
	only. There is no way to programmatically change it back.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	The WindowType of a form should be a property you set a design time; not run
	time.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form, and set the form's WindowType property to Modeless.
	
	2. Place a command button on the form. In the Click method, add the following
	  line of code:
	
	        THISFORM.SHOW(1)
	
	3. Change the Caption property to Modal. Place a second command button on the
	  form, and add the following code to its Click event:
	
	        THISFORM.SHOW(2)
	
	4. Change the Caption property to Modeless. Place a third command button on the
	  form. Change its Caption property to Release, and add the following code to
	  its Click event:
	
	        THISFORM.RELEASE
	
	5. Run the form. If you click the Release command button, the form closes as
	  expected. If you click the Modal command button, the form becomes modal. You
	  may test this by trying to click outside of the form and noting you are
	  unable to activate anything outside of the form or access any other part of
	  the Windows interface. If you then click the Modeless command button, the
	  form does not return to a modeless WindowType. The form remains modal. The
	  Release command button does not release the form. You must cancel the program
	  to exit.
	
	
	Additional query words: VFoxWin buglist3.00 buglist3.00b kbvfp300 kbvfp300b kbVfp500fix
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
