---
layout: page
title: "Q161273: HOWTO: Create Data Bound Controls"
permalink: /kb/161/Q161273/
---

## Q161273: HOWTO: Create Data Bound Controls

{% raw %}

	Article: Q161273
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic allows a user's custom ActiveX control to have properties that are
	"bound" to database fields. This article describes how to bind these properties.
	
	MORE INFORMATION
	================
	
	When defining a bindable property for a control, do the following:
	
	1. With the code window of your custom ActiveX control visible, click Procedure
	  Attributes from the Tools menu.
	
	2. Click Advanced.
	
	3. In the Name field, select the property you want to be bindable.
	
	The following options are available for bindable properties and should be
	considered:
	
	1. Property binds to DataField.
	
	  This means that the DataField property, exposed at design-time, will define
	  the database field for which this property is bound. Only one property can
	  use the DataField property to bind to a database field. If you have many
	  bindable properties, you must use the DataBindings collection (see next
	  option).
	
	2. Show in DataBindings collection at design-time.
	
	  This exposes a DataBindings property at design-time. When used, this property
	  displays a dialog that allows you to choose which bindable properties are
	  bound to which database fields.
	
	3. Property will call CanPropertyChange before changing.
	
	  The CanPropertyChange function asks the container if a property bound to a
	  data source can be changed.
	
	Step-by-Step Example
	--------------------
	
	The following example creates a custom ActiveX control with two bindable
	properties:
	
	1. Start a new ActiveX Control project. UserControl1 is added by default.
	
	2. Add two Textbox controls, Text1 and Text2, to UserControl1.
	
	3. Add the following code to the General Declarations of the UserControl1
	  section:
	
	        Option Explicit
	
	        Private Sub UserControl_Initialize()
	           Text1.Text = "Caption"
	           Text1.Left = 0
	           Text2.Text = "Subcaption"
	           Text2.Left = 0
	           Text2.Font.Name = "Arial"
	           Text2.Font.Size = 7
	        End Sub
	
	        Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	           Caption = PropBag.ReadProperty("Caption", "")
	           SubCaption = PropBag.ReadProperty("SubCaption", "")
	        End Sub
	
	        Property Let Caption(strNewValue As String)
	           If CanPropertyChange("Caption") Then
	              Text1.Text = strNewValue
	              PropertyChanged "Caption"
	           End If
	        End Property
	
	        Property Get Caption() As String
	           Caption = Text1.Text
	        End Property
	
	        Property Let SubCaption(strNewValue As String)
	           If CanPropertyChange("SubCaption") Then
	              Text2.Text = strNewValue
	              PropertyChanged "Caption"
	           End If
	        End Property
	
	        Property Get SubCaption() As String
	           SubCaption = Text2.Text
	        End Property
	
	        Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
	           PropBag.WriteProperty "Caption", Caption, ""
	           PropBag.WriteProperty "SubCaption", SubCaption, ""
	        End Sub
	
	        Private Sub Text1_Change()
	           PropertyChanged "Caption"
	        End Sub
	
	        Private Sub Text2_Change()
	           PropertyChanged "SubCaption"
	        End Sub
	
	4. To make the properties "Caption" and "SubCaption" bindable, click Procedure
	  Attributes from the Tools menu.
	
	5. Select "Caption" from the Name field, and the click Advanced.
	
	6. Select the "Property is data bound" option.
	
	7. Select the "Show in DataBindings collection at design-time" option.
	
	8. Select the "Property will call CanPropertyChange before changing" option.
	
	9. Select the "This property binds to DataField" option.
	
	10. Click Apply.
	
	11. Repeat steps 6 to 8 for the "SubCaption" property, and click Apply. Do not
	  repeat step 9 as only one property can be bound to the DataField.
	
	12. Click OK.
	
	The "Caption" property is now defined as a bindable property that obtains the
	database field to which it is bound from the exposed DataField property. The
	"SubCaption" property is defined as bindable through the use of the DataBindings
	collection.
	
	Additional query words: databound user-defined multiple
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : 5.00
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
