---
layout: page
title: "Q189924: BUG: Private Databound UserControl Loses DataBindings in EXE"
permalink: kb/189/Q189924/
---

## Q189924: BUG: Private Databound UserControl Loses DataBindings in EXE

	Article: Q189924
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A private UserControl loses it Data Bindings when compiled to an EXE.
	
	RESOLUTION
	==========
	
	Close the form containing the UserControl before making the EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, add a New UserControl (UserControl1) to the project.
	  The Public property of the UserControl is set to False by default.
	
	3. Add a label (Label1) to the UserControl.
	
	4. Add the following code to the code window of the UserControl:
	
	  Public Property Get Value() As Variant
	            Value = Label1.Caption
	        End Property
	
	        Public Property Let Value(ByVal vNewValue As Variant)
	            Label1.Caption = vNewValue
	        End Property
	
	5. From the Tools Menu, choose Procedure Attributes. Value should be displayed
	  in the Name ComboBox.
	
	6. Click the Advanced button, and then click the following two CheckBoxes in the
	  Data Binding section:
	
	     Property is data bound
	     This property binds to DataField
	
	7. Close the UserControl designer and code window.
	
	8. Add a Data control to Form1.
	
	9. Set the following properties of the Data control:
	
	DatabaseName = <path to Biblio.mdb>
	
	For Visual Basic 5.0, this would be:
	
	"C:\Program Files\DevStudio\VB\Biblio.mdb"
	
	and for Visual Basic 6.0, it would be:
	
	"C:\Program Files\Microsoft Visual Studio\VB98\Biblio.mdb"
	
	     DefaultCursorType = 0
	     DefaultType = 2
	     ReadOnly = False
	     RecordsetType = 1
	     RecordSource = "Authors"
	
	10. Add an instance of UserControl1 to the form.
	
	11. Change the following properties of UserControl1:
	
	        DataField = "Author"
	        DataSource = "Data1"
	
	12. Press the F5 key or select Start from the Run menu to run the application.
	
	13. Flip through the authors in Biblio using the Data control to verify that
	  everything works in the IDE.
	
	14. Choose Make Project1.EXE from the File menu.
	
	15. Run the EXE. Note that the UserControl's DataBinding has been lost and the
	  application no longer functions properly.
	
	16. Close the EXE and go back to the Project.
	
	17. Close the form hosting the UserControl and repeat steps 14 - 15. Note that
	  the program functions properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
