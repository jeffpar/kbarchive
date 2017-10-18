---
layout: page
title: "Q135111: BUG: &quot;Feature Not Available&quot; Error If READ in Form of Formset"
permalink: kb/135/Q135111/
---

## Q135111: BUG: &quot;Feature Not Available&quot; Error If READ in Form of Formset

	Article: Q135111
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a Visual FoxPro formset results in the error "Feature Not Available"
	when a READ is executed in the Load event of a form.
	
	CAUSE
	=====
	
	A READ in the Load event of a form in a formset causes the error. However, if
	the form is not contained in a formset, the error doesn't occur.
	
	WORKAROUND
	==========
	
	There are several workarounds. The READ must be removed from the Load event of
	the form in order for the form to run in a formset. Here are some possible
	workarounds:
	
	- Place the READ in the Load event of the formset.
	
	- If the READ is being used to activate a window, perhaps a message box can be
	  used as an alternative to the window.
	
	- Remove the formset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Within the Form Designer, on the Form menu, click Create Form Set.
	
	3. Add the following code to the Load event of the form:
	
	     DEFINE WINDOW confirm FROM 1,1 TO 10,10
	     ACTIVATE WINDOW confirm
	     x= " "
	     @ 5,5 GET x
	     READ
	     RELEASE WINDOW confirm
	
	4. Run the Form. The error "Feature Not Available" will occur. To resolve the
	  issue, open the form in the Form Designer. Then on the Form menu, click
	  Remove Form Set, and run the form.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
