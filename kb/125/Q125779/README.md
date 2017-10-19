---
layout: page
title: "Q125779: HOWTO: Color Text ClassWizard Updates to Make Mods Easy to See"
permalink: /kb/125/Q125779/
---

## Q125779: HOWTO: Color Text ClassWizard Updates to Make Mods Easy to See

	Article: Q125779
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbide kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual C++ version 2.x, the default color for text modified by the
	ClassWizard is black print on a white background; in Visual C++ version 4.0, the
	default color is dark gray print on a white background. Visual C++ is aware of
	the code that the ClassWizard modifies and can highlight these changes for you
	using a different color. This makes the new modifications very obvious and easy
	to find.
	
	To set a new text color for ClassWizard-modified code using Visual C++ 2.x, do
	the following:
	
	- Choose Options from the Tools menu.
	
	- Select the Colors Tab in the Options dialog box.
	
	- Select Wizard-Modified Code in the Set Colors For listbox.
	
	- Define the colors for text and background.
	
	To set a new text color for ClassWizard-modified code using Visual C++ 4.x and
	later versions, do the following:
	
	- Choose Options... from the Tools menu.
	
	- Select the Format Tab in the Options dialog box.
	
	- Select All Windows or Source Windows in the Category listbox.
	
	- Select Wizard Code in the Colors listbox.
	
	- Select the desired colors for text and background from the Foreground and
	  Background drop-down list boxes, respectively.
	
	Additional query words: class wizard MFC created
	
	======================================================================
	Keywords          : kbwizard kbide kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : winnt:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
