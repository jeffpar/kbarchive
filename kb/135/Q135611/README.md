---
layout: page
title: "Q135611: FIX: Try to Modify Label Previewed by Another, Calls Converter"
permalink: kb/135/Q135611/
---

## Q135611: FIX: Try to Modify Label Previewed by Another, Calls Converter

	Article: Q135611
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a label form is shared and one workstation attempts to modify the form
	while another has run the label in preview mode, the converter is erroneously
	called.
	
	WORKAROUND
	==========
	
	The error condition is harmless, but you should cancel the Converter dialog box,
	and postpone the attempt to modify the label until after the other workstation
	has completed previewing the label.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	When the label is modified from the second workstation in Visual FoxPro 5.0, a
	"File access is denied" message appears.
	
	MORE INFORMATION
	================
	
	While a label form can be both modified and printed simultaneously, attempting
	to run the label in preview mode synchronously results in the error "File access
	is denied." Unlike the Label Designer, the Report Designer correctly returns
	this error when you attempt to modify a report that is already being previewed
	by another. In all cases, previewing must be completed before a label or report
	can be shared again in any other operation.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On one workstation, create a label, and issue this command:
	
	     LABEL FORM <labelname> PREVIEW
	
	2. On the second workstation, connect to the same directory in which the label
	  was created, and attempt to modify it:
	
	     MODIFY LABEL <labelname>
	
	3. Choose Cancel when the Converter dialog box appears.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
