---
layout: page
title: "Q253748: BUG: WizardBar Cannot Go to Declaration of Void Functions"
permalink: /kb/253/Q253748/
---

## Q253748: BUG: WizardBar Cannot Go to Declaration of Void Functions

{% raw %}

	Article: Q253748
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbide kbVC kbVC600bug kbDSupport kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the WizardBar to go to the declaration of a class member function that
	returns void generates the following message:
	
	  Cannot find the declaration of this function.
	
	RESOLUTION
	==========
	
	To navigate to the function declaration that returns void, find the function in
	the Class View. Right-click the function and select Go to declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	WizardBar is a dockable toolbar that provides instant access to some of the most
	powerful features in Visual C++, such as those traditionally available from
	ClassWizard, as well as many of the new ClassView functions. WizardBar extends
	ClassView functionality by "tracking" your context, updating what's displayed in
	the WizardBar toolbar when your focus shifts.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default MFC AppWizard exe project, such as Test.
	
	2. Open the file TestView.cpp.
	
	3. Position the cursor on the OnDraw() function (or on any other function that
	  returns a void).
	
	4. Go to WizardBar and click on the WizardBar action icon or the drop-down list
	  box next to it.
	
	5. Select Go to Function Declaration.
	
	The following error message appears:
	
	  Cannot find the declaration of this function.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q196782 BUG: WizardBar Can't Delete Functions that Return void
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbide kbVC kbVC600bug kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
