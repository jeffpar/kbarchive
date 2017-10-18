---
layout: page
title: "Q161056: HOWTO: Iterate Controls on a Form from a Property Page"
permalink: kb/161/Q161056/
---

## Q161056: HOWTO: Iterate Controls on a Form from a Property Page

	Article: Q161056
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual J++, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual Basic version enables you to create custom property pages for
	user-defined ActiveX controls. These property pages can contain controls and
	fields that change the properties of the user-defined control.
	
	The property pages can also be extended to change properties of other controls
	that may be contained within the form where the user-defined control is
	located.
	
	The property page, by default, can only access public properties of the
	user-defined control for which it was written. However, by using the
	ParentControls collection and a Friend function, you can create a route through
	which you can expose the other controls contained within the parent form.
	
	The use of the Friend function enables components within the ActiveX control to
	use this function, while hiding it from use outside the immediate project. The
	ParentControls collection returns the objects within the parent container. This
	includes returning item(0) as a reference to the parent container.
	
	
	MORE INFORMATION
	================
	
	To enable a property page for a user-defined ActiveX control to gain access to
	the container form's set of controls, do the following:
	
	1. Start Microsoft Visual Basic. Load an ActiveX control project, or create a
	  new one.
	
	2. Add the following code in the control's code window:
	
	        Friend Function FormControls() As Object
	            Set FormControls = ParentControls
	            'Returns the collection of controls on the parent form.
	        End Function
	
	3. From the Project menu, click Add Property Page.
	
	4. Add the following code in the Property Page's code window:
	
	        Private Sub PropertyPage_SelectionChanged()
	            Dim UC As UserControl1  'Make sure that UC is typed explicitly as
	                                    'the user-defined control you are working
	                                    'with. To use Friend functions, you must
	                                    'early-bind your variables.
	            Dim Ctrl As Object
	            Set UC = SelectedControls(0)  'Return selected control.
	            For Each Ctrl In UC.FormControls  'Iterate through the use of
	                                              'UC's friend function.
	            Debug.Print Ctrl.Name  'Output the name of each control.
	            Next Ctrl
	        End Sub
	
	5. Switch to the UserControl1 object. On the properties list, click Property
	  Pages. Turn on the option for PropertyPage1.
	
	  Now when you use this custom ActiveX control on a form, you can choose
	  'Custom' from the properties list to bring up the Property Page.
	
	Additional query words: hidden private Friend Extender kbVBp500 kbVBp600 kbVJ100 kbVBp kbdsd kbDSupport kbActiveX kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVJsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVJ100
	Issue type        : kbhowto
	
	=============================================================================
	
