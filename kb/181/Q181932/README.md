---
layout: page
title: "Q181932: INFO: Limits on Text in CEditView and CEdit"
permalink: /kb/181/Q181932/
---

## Q181932: INFO: Limits on Text in CEditView and CEdit

{% raw %}

	Article: Q181932
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CEditView and the CEdit classes wrap the Windows edit control. These classes
	have limits on the amount of text that they can contain. These limits are
	operating-system dependent.
	
	MORE INFORMATION
	================
	
	Windows 95 has a 64 KB limit on edit controls that cannot be increased. To
	adjust the limit within this range, use CEdit::SetLimitText(UINT nMax), where
	nMax is the number of bytes in the new text limit. You can set nMax to 65535 to
	obtain the maximum (which is actually 64000 bytes).
	
	Windows NT has a practical, machine-dependent limit on edit controls. Users will
	run into this machine-dependent limit before they reach operating- system
	dependent limit. You can increase the limit by using SetLimitText(UINT nMax).
	You can set nMax to some large number such as 4111222333 to obtain the maximum
	your machine will allow. The practical limit is based on the computer's RAM. For
	example, it is possible to load 1 million very short lines of text (nearly 8 MB)
	into an edit control using a computer with 64 MB of RAM. Unfortunately, it may
	use up nearly 100 percent of the CPU power and take several minutes to load.
	Once it is loaded in memory, the control works slowly.
	
	If you need to use a control that is expected to contain near or over 64 KB of
	data, use CRichEditCtrl or CRichEditView. These classes wrap the rich edit
	Windows control. In both Windows 95 and Windows NT4, there is no definite limit
	on the amount of text that the control can hold. Theoretically, the rich edit
	control allows for a maximum of 4 GB of text. In practice, you can run into
	performance problems with even less than 1 MB of text. Files with many lines of
	text (not necessarily large files, because the lines can be very short) require
	a lot of time and CPU power to process the first time scrolling or resizing of
	the view window. Once the CPU has processed these actions, the control behaves
	normally.
	
	The maximum text that a CRichEditCtrl can hold can be changed by calling
	CRichEditCtrl::LimitText(). However, this will not effect any of the problems
	just mentioned. One possible option for storing huge amounts of text into a
	RichEdit control would be to only stream in the amount of text that is needed at
	a time. This would not be easy, because you need to handle the scrolling logic
	to load in the appropriate text for the position of the scrollbar thumb for this
	method to work.
	
	Another option is to design your own Cview-based class.
	
	
	Some word processing sample programs that ship with Visual C++ are:
	
	- MultiPad: Provides a simple illustration of how to use CEditView.
	
	- SuperPad: Illustrates advanced uses of CEditView through class derivation,
	  including toggling the word wrap state of the edit control and changing the
	  screen and printer font.
	
	- WordPad: Example of a professional word processing application written using
	  MFC that is included with Windows 95. It is based on the CRichEditView,
	  CRichEditDoc, and CRichEditCntrItem classes.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q166132 PRB: Dialog With RichEdit May Fail During Creation
	
	  Q166213 BUG: Right-Clicking CRichEditView Doesn't Activate Frame
	
	  Q117778 HOWTO: Change the Background Color of an MFC Edit Control
	
	  Q155224 PRB: Using CEdit SetModify/GetModify Returns Invalid Values
	
	Additional query words: CEdit CEditView CRichEditCtrl CRichEditView limit maximum max rich richedit edit control
	
	======================================================================
	Keywords          : kbCtrl kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC400a kbVC420b kbVC500Search
	Version           : WINNT:4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
