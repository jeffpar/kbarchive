---
layout: page
title: "Q229756: INFO: Maximum Number of Controls on a Form"
permalink: /kb/229/Q229756/
---

## Q229756: INFO: Maximum Number of Controls on a Form

	Article: Q229756
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVB kbFAQ kbDSupport kbVBp600FAQ
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles discusses the number of controls you can add to a form in a Visual
	Basic project and ways to work around these limitations.
	
	MORE INFORMATION
	================
	
	The maximum number of controls allowed on a single form depends on the type of
	controls used and available system resources. However, there is a fixed limit of
	254 control names per form.
	
	NOTE: Although you can have up to 254 control names in a form, a large number of
	controls in a form will severely degrade your program's performance. In some
	cases, you will experience out-of-memory error. To maximize the performance of
	your program, you should minimize the number of controls in each form.
	
	Here are three ways to work around the control name and system resource
	limitations:
	
	- Use a control array - instead of using several instances of a control in a
	  form, create a control array for all the similar controls on the form.
	  Members of a control array share the same control name.
	
	- Dynamically create the controls as required - instead of loading all the
	  controls on a form when you first display the form, try loading the controls
	  as needed. This only works well when you potentially need many controls, but
	  will use only a few of them at any given time. For more information about
	  dynamically creating controls, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q190670 HOWTO: Dynamically Add Controls to a Form with Visual Basic 6.0
	
	- Put your controls on a UserControl - similar to using a control array, you
	  can create a UserControl that contains your controls and then add the
	  UserControl to your project. For example, if you need a form that displays
	  500 text boxes, create a UserControl that contains 250 text boxes, and put
	  two instances of your UserControl on the form. You now have 500 text boxes on
	  the form, but only two controls.
	
	REFERENCES
	==========
	
	For more information about project, control, and code limitations in Visual
	Basic, please see the following topics in the Visual Basic Programmers Guide,
	the Online Help, or the MSDN Web site:
	
	  Project Limitations
	  http://msdn.microsoft.com/library/en-us/vbcon98/html/vbconprojectlimitations.asp
	
	  Control Limitations
	  http://msdn.microsoft.com/library/en-us/vbcon98/html/vbconcontrollimitations.asp
	
	  Code Limitations
	  http://msdn.microsoft.com/library/en-us/vbcon98/html/vbconcodelimitations.asp
	
	  Data Limitations
	  http://msdn.microsoft.com/library/en-us/vbcon98/html/vbcondatalimitations.asp
	
	  System Resource Limitations
	  http://msdn.microsoft.com/library/en-us/vbcon98/html/vbconwindowslimitations.asp
	
	Additional query words: vbFAQProgramming
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVB kbFAQ kbDSupport kbVBp600FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	
