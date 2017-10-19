---
layout: page
title: "Q297839: FIX: TYPE() of Combo/List Box Value May Crash VFP"
permalink: /kb/297/Q297839/
---

## Q297839: FIX: TYPE() of Combo/List Box Value May Crash VFP

	Article: Q297839
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 15-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro version 5.0 and later, if the RowSource of a list box or combo
	box is a non-existent table and you check the TYPE() of the Value property
	during the form's Init method, you may receive the following error message:
	
	  Fatal error: Exception code=C0000005
	
	In Visual FoxPro version 5.0a, you may receive the following error message:
	
	  Internal Consistency error.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	This behavior does not occur in Visual FoxPro version 3.0. An error occurs, and
	the form does not appear.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code creates and runs a form that demonstrates the problem.
	
	  SET SAFETY OFF
	  CLEAR ALL
	  CLOSE DATABASES ALL
	
	  CREATE FORM testType NOWAIT
	  ASELOBJ(laObj, 1) && Gives you the form containing the selected object.
	
	  loForm = laObj[1]
	  loForm.AutoCenter = .T.
	
	  loForm.AddObject('lstValues','listbox')
	  WITH loForm.lstValues
	     .RowSourceType = 6
	     .RowSource = "testTable.f1"
	     .Name = "lstValues"
	  ENDWITH
	
	  loForm.WriteMethod('Init', [WAIT WINDOW TYPE("ThisForm.lstValues.Value")])
	
	  KEYBOARD 'Y' CLEAR  && Answers "Yes" to Save dialog.
	  RELEASE WINDOW 'Form Designer'
	
	  DO FORM testType
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
