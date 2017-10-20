---
layout: page
title: "Q192622: PRB: ClassWizard Doesn't Display Ungrouped Radio Button"
permalink: /kb/192/Q192622/
---

## Q192622: PRB: ClassWizard Doesn't Display Ungrouped Radio Button

{% raw %}

	Article: Q192622
	Product(s): Microsoft C Compiler
	Version(s): WINNT:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbEditor kbide kbResourceEd kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kb
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When one or more new radio button controls are placed on a dialog box, they do
	not appear in the Control ID's list box on the ClassWizard Member Variables tab.
	This gives the user the impression that a member variable cannot be associated
	with the control.
	
	RESOLUTION
	==========
	
	A workaround to this problem is to add the Group property to the first radio
	button created by using the following steps:
	
	1. In the Dialog Editor, right-click a radio button, and then click Properties.
	
	2. From the General tab of the Radio Button Properties dialog box, select the
	  Group check box.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For information regarding ClassWizard, see "Using ClassWizard" in the MSDN
	index.
	
	For information regarding the Dialog Editor, see "Using the Dialog Editor to Add
	Controls" in the MSDN index.
	
	For information regarding Radio Buttons, see "Buttons Overview" in the MSDN
	index.
	
	Additional query words: kbDSupport kbdss
	
	======================================================================
	Keywords          : kbwizard kbEditor kbide kbResourceEd kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbClassWizard kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : WINNT:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
