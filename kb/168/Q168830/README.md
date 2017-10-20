---
layout: page
title: "Q168830: HOWTO: Cast an Object to a Different Interface"
permalink: /kb/168/Q168830/
---

## Q168830: HOWTO: Cast an Object to a Different Interface

{% raw %}

	Article: Q168830
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using an object that has multiple interfaces, you may be faced with
	assigning it to multiple variables of different object types to get at relevant
	interfaces. This is made more difficult by having to keep track of the different
	variables and clean them up properly. This article gives code for a simple
	function to allow casting an object to a different interface without the need to
	create additional object variables or keep track of them.
	
	MORE INFORMATION
	================
	
	The sample code below illustrates a common problem when utilizing objects that
	have multiple interfaces:
	
	     Dim Shape As IShape, C As ICircle, S As ISquare
	     Set C = New ICircle
	     Set Shape = C
	     Shape.SetXY 100, 100
	     C.Radius = 50
	     Shape.Draw Me
	     Set C = Nothing
	     Set S = New ISquare
	     Set Shape = S            ' Critical line
	     Shape.SetXY 300, 200
	     S.Side = 50
	     Shape.Draw Me
	     Set Shape = Nothing
	     Set S = Nothing
	
	If you forget to set the Shape object to S on the "Critical line," you will still
	be manipulating the Circle object in subsequent code. In addition, it's
	difficult to tell you are using the Shape object to get at additional interfaces
	or what object it's currently set to.
	
	To clear up this problem, create global functions in your application to cast the
	variables to their alternate interfaces. The example above requires only one
	function to cast to the IShape interface:
	
	     Function IShape(oShape As IShape) As IShape
	       Set IShape = oShape
	     End Function
	
	You can then reference this function to perform the casting:
	
	     IShape(C).SetXY 100, 100
	     C.Radius = 50
	     IShape(C).Draw Me
	
	Or more efficiently:
	
	     With IShape(C)
	       .SetXY 100, 100
	       C.Radius = 50
	       .Draw Me
	     End With
	
	You no longer have to define, set, or otherwise keep track of additional
	variables for casting purposes. Giving the function the same name as the
	interface helps with program clarity.
	
	Step-by Step Example
	--------------------
	
	1. Create a new project with the following objects:
	
	  Type            Name
	  ---------------------------
	  Class Module    IShape
	  Class Module    ICircle
	  Class Module    ISquare
	  Form            Form1
	
	2. Type the following code in the IShape Class Module:
	
	        Option Explicit
	
	        Public Sub SetXY(ByVal NewX As Long, ByVal NewY As Long)
	        End Sub
	
	        Public Sub Draw(oDrawSpace As Object)
	        End Sub
	
	3. Type the following code into the ICircle Class Module:
	
	        Option Explicit
	        Implements IShape
	
	        Dim X As Long, Y As Long, iRadius As Long
	
	        Private Sub IShape_Draw(oDrawSpace As Object)
	          oDrawSpace.Circle (X, Y), iRadius
	        End Sub
	
	        Private Sub IShape_SetXY(ByVal NewX As Long, ByVal NewY As Long)
	          X = NewX
	          Y = NewY
	        End Sub
	
	        Public Property Let Radius(ByVal NewVal As Long)
	          iRadius = NewVal
	        End Property
	
	4. Type the following code in the ISquare Class Module:
	
	        Option Explicit
	        Implements IShape
	
	        Dim X As Long, Y As Long, Side As Long
	
	        Private Sub IShape_Draw(oDrawSpace As Object)
	          oDrawSpace.Line (X, Y)-(X + Side, Y + Side), , B
	        End Sub
	
	        Private Sub IShape_SetXY(ByVal NewX As Long, ByVal NewY As Long)
	          X = NewX
	          Y = NewY
	        End Sub
	
	        Public Property Let SideLength(ByVal NewVal As Long)
	          Side = NewVal
	        End Property
	
	5. Add a CommandButton to the lower edge of the form.
	
	6. Type the following code in the form module:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	
	        Dim C As ICircle, S As ISquare
	          Set C = New ICircle
	          Set S = New ISquare
	        ' Manipulate circle shape (using With)
	          C.Radius = 250
	          With IShape(C)
	            .SetXY 400, 400
	            .Draw Me
	          End With
	        ' Manipulate square shape (without using With)
	          IShape(S).SetXY 700, 300
	          S.SideLength = 300
	          IShape(S).Draw Me
	        End Sub
	
	        Function IShape(oShape As IShape) As IShape
	          Set IShape = oShape
	        End Function
	
	7. Run the project and click the CommandButton. You will see a circle and a
	  square drawn on the form background.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic Help topic "Implements Statement"
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
