---
layout: page
title: "Q159410: FIX: &quot;Invalid Procedure Call&quot; Referencing Collection Item"
permalink: /kb/159/Q159410/
---

## Q159410: FIX: &quot;Invalid Procedure Call&quot; Referencing Collection Item

{% raw %}

	Article: Q159410
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you reference a collection object created by an out-of-process OLE server
	with a variable index and the index variable is specified as an Integer or Long
	in a Dimension statement, the following error appears:
	
	  "Invalid Procedure Call"
	
	RESOLUTION
	==========
	
	Make sure that the index variable is specified as Variant in the Dimension
	statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The out-of-process OLE server (EXE server) that created the collection object
	receives the index through remote procedure call (RPC). This data is marshaled
	across the processes and received as a Variant data type only.
	
	This behavior does not occur if the collection object is created in an in-process
	server because RPC is in the same process and is not needed to transmit the data
	between the two different processes.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. On the Visual Basic menu, click Insert and Class Module to add a new class
	  module.
	
	3. Insert the following code into the class module code window:
	
	     Dim x As New Collection
	
	     Public Function PassCollection() As Collection
	              x.Add "Item 1"
	              x.Add "Item 2"
	              x.Add "Item 3"
	
	              Set PassCollection = x
	     End Function
	
	4. Change the following properties on the class module:
	
	     Instancing = 2-Createable MultiUse
	     Public = True
	
	5. On the Visual Basic menu, click Insert and Module to add a new Basic code
	  module.
	
	6. Insert the following code in the code window of the Basic code module:
	
	     Sub main()
	              Load Form1
	     End Sub
	
	7. On the Visual Basic menu, click Tools and Options. On the Project tab, change
	  the following fields:
	
	  Startup Form = Sub Main
	  Project Name = OLECOL
	  StartMode = OLE Server
	  Application Description = OLE Collection Example
	
	8. Click OK, and then press the F5 key to run the project.
	
	9. Start another session of Visual Basic. A new Project with Form1 appears by
	  default.
	
	10. Place a CommandButton on Form1.
	
	11. Insert the following code into the General Declaration section of the code
	  window for Form1:
	
	      Private Sub Command1_Click()
	               Dim c As Collection
	               Dim o As New OLECOL.Class1
	               Dim i As Long
	
	               Set c = o.PassCollection
	
	               For i = 1 To c.Count
	      MsgBox c(i)
	               Next i
	      End Sub
	
	12. On the Visual Basic menu, click Tools and References. Select "OLE Collection
	  Example" on the reference list, and then click OK.
	
	13. Run the project by pressing the F5 key and clicking on Command1. The
	  following error message appears:
	
	  "Invalid Procedure Call"
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
