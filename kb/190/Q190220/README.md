---
layout: page
title: "Q190220: PRB: &quot;Invalid Property Value&quot; When You Query MDIChild Property"
permalink: /kb/190/Q190220/
---

## Q190220: PRB: &quot;Invalid Property Value&quot; When You Query MDIChild Property

{% raw %}

	Article: Q190220
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic, if you query for the MDIChild property of an MDI Parent form,
	the following error occurs:
	
	  Error 380 : Invalid Property Value
	
	CAUSE
	=====
	
	MDI Parent forms do not have an MDIChild property. To query for this nonexistent
	property will result in the above error.
	
	RESOLUTION
	==========
	
	To resolve this, use the following code to query for the MDIChild property of a
	form:
	
	Sample Code
	-----------
	
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
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic.
	
	2. Add an MDI form to the project by selecting Add MDI Form from the Project
	  menu.
	
	3. Set the MDIChild property of Form1 to True.
	
	4. Paste the following code in the General Declarations section of Form1:
	
	        Private Sub Form_Click()
	           Dim f As Form
	           For Each f In Forms
	              If f.MDIChild Then
	                 Form1.Print f.Name & "   MDI Child"
	              Else
	                 Form1.Print f.Name & "   Not MDI Child"
	              End If
	           Next
	        End Sub
	
	5. Press F5 to run the project
	
	6. Click on Form1.
	
	An error message displays "Run-Time Error 380 : Invalid Property Value" instead
	of printing all of the names of the forms, and a value indicating whether or not
	they are an MDI Child form
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
