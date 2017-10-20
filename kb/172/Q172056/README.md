---
layout: page
title: "Q172056: BUG: Private UserControls Do Not Support Data Binding"
permalink: /kb/172/Q172056/
---

## Q172056: BUG: Private UserControls Do Not Support Data Binding

{% raw %}

	Article: Q172056
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A UserControl created within a Standard EXE as a private object will not
	correctly bind its defined bound properties after the application is compiled to
	an EXE. While the application is debugged in the Visual Basic 5.0 IDE, the
	control and its binding function correctly.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	The only workaround is to compile a separate binary for the OCX to be a public
	control. In this fashion, the bindable public properties function correctly.
	
	To hide the use of this control adequately from other applications (one of the
	main benefits of a private UserControl) the author should add run-time licensing
	support to minimize the use of the control outside the intended application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Create a new Standard EXE project.
	
	2. Add a private UserControl (UserControl1) to the project.
	
	3. Add a label (Label1) to the UserControl.
	
	4. Add the following code to the UserControl:
	
	        Public Property Get Value() As Variant
	            Value = Label1.Caption
	        End Property
	
	        Public Property Let Value(ByVal vNewValue As Variant)
	            Label1.Caption = vNewValue
	        End Property
	
	5. From the Tools Menu, select Procedure Attributes.
	
	6. In the Procedure Attributes dialog Window, click the Advanced button.
	
	7. In the Data Binding section, check "Property is databound" and "This property
	  binds to DataField." Click OK.
	
	8. Close the UserControl designer and code window.
	
	9. Add a Data control to Form1.
	
	10. Set the following properties of the Data control:
	
	        DatabaseName ="C:\Program Files\Microsoft Visual Basic\Biblio.mdb"
	        DefaultCursorType = 0
	        DefaultType = 2
	        ReadOnly = False
	        RecordsetType = 1
	        RecordSource = "Authors"
	
	11. Add an instance of UserControl1 to the form.
	
	12. Change the following properties of UserControl11.
	
	        DataField= "Author"
	        DataSource= "Data1"
	
	13. Run the application by pressing the F5 key.
	
	14. Move through the authors in Biblio using the Data control (just to verify
	  that everything works in the IDE).
	
	15. Compile to EXE.
	
	16. Run the EXE. Note that the "bound" property of the UserControl does not
	  change as it did in the IDE.
	
	REFERENCES
	==========
	
	For more information about licensing processes, see the Microsoft Visual Basic
	Books Online:
	
	Component Tools Guide
	  Creating ActiveX Components
	     Building ActiveX Controls
	        Distributing Controls
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
