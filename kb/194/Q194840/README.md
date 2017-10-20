---
layout: page
title: "Q194840: FIX: The &quot;&#42;&quot; Key Does Not Expand All ClassView Branches Properly"
permalink: /kb/194/Q194840/
---

## Q194840: FIX: The &quot;&#42;&quot; Key Does Not Expand All ClassView Branches Properly

{% raw %}

	Article: Q194840
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbClassView kbide kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ASTERISK (*) key does not expand the complete class information for a class
	selected in ClassView. On its first usage, the ASTERISK (*) key expands to a
	single level, much like the PLUS SIGN (+). Subsequently, it expands all levels
	with the exception of Globals, or it fails to display Globals and some
	interfaces in ActiveX projects.
	
	RESOLUTION
	==========
	
	Use the PLUS SIGN (+) or click the PLUS box with the mouse pointer first, then
	press the ASTERISK (*) key. You must still expand the Globals branch in a
	separate step.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	
	MORE INFORMATION
	================
	
	ClassView supports the cursor keys for navigation from the keyboard. It supports
	the PLUS SIGN (+) to expand a branch, and the MINUS SIGN (-) to collapse a
	branch. The ASTERISK (*) key has the special meaning "expand all."
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Visual C++ File menu, click New and then click the Projects tab.
	
	2. Select MFC ActiveX ControlWizard; name the project Active, and click OK.
	
	3. Click Finish, and then click OK to create the project.
	
	  In the new project, ClassView displays the following:
	
	  + Active classes.
	
	4. Click once on the phrase "Active classes" in ClassView.
	
	5. Press the ASTERISK (*) key. Note that class names appear, but they are not
	  expanded to display class information. Also, note that the interface
	  _DActiveEvents appears.
	
	6. Press the ASTERISK (*) key again. Note that all classes are fully expanded,
	  but the Globals branch remains collapsed.
	
	7. Press the MINUS SIGN (-)to collapse the class information.
	
	8. Press the ASTERISK (*) key again.
	
	RESULT: After step 7, ClassView displays the entire class information tree fully
	expanded. However, the interface _DActiveEvents and the Globals branch are
	missing.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbClassView kbide kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
