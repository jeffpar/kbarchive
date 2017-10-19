---
layout: page
title: "Q166928: FIX: Public Properties of VB4 Class Are Passed by Reference"
permalink: /kb/166/Q166928/
---

## Q166928: FIX: Public Properties of VB4 Class Are Passed by Reference

	Article: Q166928
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Visual Basic 4.0 class with a public property implemented like the
	following:
	
	    Public MyProp As Integer
	
	Visual Basic 4.0 passes the property by reference (ByRef).
	
	However, if your property is implemented in Visual Basic 4.0 using property
	procedures (Property Get, Property Let, Property Set), it will be passed by
	value (ByVal).
	
	STATUS
	======
	
	This problem has been fixed in Visual Basic 5.0. All properties are now passed
	by value (ByVal) for consistency.
	
	In addition, all code internal to the class still has direct access to member
	variable data:
	
	    MyClass.CLS
	    ===========
	    Public MyProp As Integer
	
	    Public Sub MyMethod()
	      MyProp = 5  '// This has direct access to the class data
	    End Sub
	    ===========
	
	MORE INFORMATION
	================
	
	Microsoft has acknowledged that this change in behavior may be an issue for some
	developers porting Visual Basic 4.0 code to Visual Basic 5.0. Code that relies
	on the ByRef functionality stated above will need to be modified.
	
	One possible way to modify the Visual Basic 4.0 for porting to Visual Basic 5.0
	is shown below:
	
	Original Visual Basic 4.0 code:
	
	     MyClass.CLS
	     ===========
	     Public MyProp As Integer
	     ===========
	
	     MyBas.BAS
	     =========
	     Sub Compute(ByRef iTarget As Integer)
	       Dim iTemp as Integer
	       '// implementation code
	       iTarget = iTemp
	     End Sub
	
	     Sub Main()
	       Dim MyObject As MyClass
	       MyObject.MyProp = 97
	       Call Compute(MyObject.MyProp)
	     End Sub
	     =========
	
	Modified Sub Main() for Visual Basic 5.0:
	
	     Sub Main()
	       Dim MyObject As MyClass
	       Dim iTtemp1 As Integer
	       Dim iTemp2 As Integer
	       MyObject.MyProp = 97
	       iTemp1 = MyObject.MyProp
	       iTemp2 = iTemp1
	       Call Compute(iTemp2)
	       If iTemp1 <> iTemp2 Then
	         MyObject.MyProp = iTemp2
	         iTemp1 = iTemp2
	       End If
	     End Sub
	
	Exposing public variables is not a recommended programming technique. The
	following demonstrates possible modifications to MyClass.CLS, illustrating a
	data-hiding technique to preserve class member data:
	
	     MyClass.CLS
	     ===========
	     Private m_MyProp As Integer
	
	     Public Property Let MyProp(NewValue As Integer)
	       '// implement validation code and data formatting
	       m_MyProp = NewValue
	     End Property
	
	     Public Property Get MyProp() As Integer
	       MyProp = m_MyProp
	     End Property
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
