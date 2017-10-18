---
layout: page
title: "Q176429: BUG: Can't Check MDIChild Property of Forms in Forms Collection"
permalink: kb/176/Q176429/
---

## Q176429: BUG: Can't Check MDIChild Property of Forms in Forms Collection

	Article: Q176429
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnokeyword kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following code worked in Visual Basic 4.0, but fails in Visual Basic 5.0 or
	6.0 with an error "Error 380, Invalid Property Value" if an MDI parent form is
	in the project:
	
	     Dim f As Form
	        For Each f In Forms
	          If Not TypeOf f Is MDIForm Then
	            If f.MDIChild Then
	              Form1.Print f.Name & "   MDI Child"
	            Else
	              Form1.Print f.Name & "   Not MDI Child"
	            End If
	          Else
	            Form1.Print f.Name & "  Not MDI Child"
	          End If
	        Next
	
	CAUSE
	=====
	
	MDI forms do not have a MDIChild property in Visual Basic 4.0, 5.0, or 6.0.
	Visual Basic 4.0 compensated for that in the specific case of looping through
	the forms collection and checking this property, but Visual Basic 5.0 and 6.0 do
	not.
	
	RESOLUTION
	==========
	
	The workaround is to determine if the form is an MDI form before checking the
	MDIChild property, which the following code demonstrates:
	
	     Dim f As Form
	     For Each f In Forms
	       If Not TypeOf f Is MDIForm Then
	         If f.MDIChild Then
	           Form1.Print f.Name & "   MDI Child"
	         Else
	           Form1.Print f.Name & "   Not MDI Child"
	         End If
	       Else
	         Form1.Print f.Name & "  Not MDI Child"
	       End If
	     Next
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnokeyword kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
