---
layout: page
title: "Q237757: INFO: Leaking Handles When Creating COM Objects"
permalink: kb/237/Q237757/
---

## Q237757: INFO: Leaking Handles When Creating COM Objects

	Article: Q237757
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Visual Basic application creates COM objects that are instantiated in an
	out-of-process server, observe the number of handles shown in the performance
	tab of the NT task manager. You might see the number of handles increasing,
	without returning to its initial level when the objects are released.
	
	Although this behavior appears to be a leak, it is not. This behavior is by
	design.
	
	MORE INFORMATION
	================
	
	Visual Basic does not release the handles it creates immediately after it uses
	them; it caches them. When the number of handles reaches a given level, they are
	released and new allocations start again when they are needed. All handles are
	recovered when the client application is closed.
	
	This is the expected behavior. Visual Basic is just optimizing the
	creation/release of handles internally.
	
	You can observe this behavior by doing the following under Windows NT or Windows
	2000:
	
	1. Create a Visual Basic ActiveX EXE project. Class1 is created by default.
	
	2. On the Project menu, click Project1 Properties. Set the contents of the
	  Project Name field to MyServer.
	
	3. Add the following Code to the General Declarations section of Class1:
	
	  Public Function GetLong()
	      GetLong=1
	  End Function
	
	4. Save the project and compile it.
	
	5. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	6. From the Project menu, select References and add a reference to the server
	  you just created.
	
	7. Place a CommandButton on Form1.
	
	8. Place a label beside the button and clear the Caption property.
	
	9. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Command1_Click()
	     Dim i As Long
	     Dim MyObj As MyServer.Class1
	     Label1.Caption = "Creating..."
	     Form1.Refresh
	     For i = 1 To 200
	        Set MyObj = CreateObject("MyServer.Class1")
	        Set MyObj = Nothing
	     Next i
	     Label1.Caption = "Done"
	  End Sub
	
	10. Save the project and compile it.
	
	11. Close the Visual Basic Design Environment (IDE).
	
	12. Open the NT or Windows 2000 task manager and click on the Performance tab.
	
	13. Run the compiled client.
	
	14. Click the button and observe the number of handles. It will grow and will
	  not come back down after creating the objects.
	
	15. Wait until the label displays "Done," indicating all objects were created.
	
	16. Repeat this by clicking the button several times. You will see that after
	  the third or fourth time the number of handles drops to a lower value. (This
	  does not occur in Windows 2000.)
	
	17. You could also do the same with 1000 iterations, by changing the code in the
	  button's click event (for i=1 to 1000) and observe the number of handles
	  while these 1000 objects get created. You should see the number of handles
	  going up and down.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
