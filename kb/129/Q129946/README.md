---
layout: page
title: "Q129946: PRB: Object Instances Are Not Freed from Memory"
permalink: /kb/129/Q129946/
---

## Q129946: PRB: Object Instances Are Not Freed from Memory

{% raw %}

	Article: Q129946
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
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
	
	If you use class modules to build a linked list, Visual Basic will free the
	memory it can when the variable containing the head of the list goes out of
	scope. However if you build a circular list (a list in which an object
	references itself) and attempt to destroy all references to the circular
	reference, Visual Basic will retain the instances of the objects in memory while
	the program is running because the references to the objects actually still
	exist. As a result, memory is lost until the OLE Server's Terminate event is
	called, which is when the last instance of the class is freed.
	
	CAUSE
	=====
	
	Under any of the following conditions, the Visual Basic internal terminate event
	is not called, so the object instances are not freed from memory:
	
	- Building a circular linked list.
	
	- Executing an End statement.
	
	- Choosing Restart from the Run menu.
	
	- Clicking the End button on an Error dialog.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add three command buttons (Command1, Command2, and Command3) to Form1.
	
	3. Add the following code to the general declarations of Form1:
	
	     Sub addx(y As Class1)
	        Dim x As New Class1
	        Set y.v = x
	     End Sub
	
	     Sub CircularRef()
	        Dim x As New Class1
	        Set x.v = x
	        Set x.v1 = x
	        Set x.v2 = x
	        Set x.v3 = x
	        Set x.v4 = x
	        Set x.v5 = x
	        Set x.v6 = x
	        Set x.v7 = x
	        Set x.v8 = x
	        Set x.v9 = x
	        Set x.v10 = x
	        Set x.v11 = x
	        Set x.v12 = x
	        Set x.v13 = x
	        Set x.v14 = x
	        Set x.v15 = x
	        Set x.v16 = x
	        Set x.v17 = x
	        Set x.v18 = x
	        Set x.v19 = x
	        Set x.v20 = x
	        Set x = Nothing
	     End Sub
	
	4. Add the following code to the Command1_Click event procedure:
	
	     Private Sub Command1_Click()
	     #If Win32 Then
	        Dim ut As MEMORYSTATUS
	        ut.dwLength = 32
	        GlobalMemoryStatus ut
	        Print ut.dwAvailPhys
	     #Else
	        Dim fspace As Long
	        fspace = GetFreeSpace(0)
	        Print fspace
	     #End If
	     End Sub
	
	5. Add the following code to the Command2_Click event procedure:
	
	     Private Sub Command2_Click()
	        Dim y As New Class1
	        Dim x As Class1
	        Dim i As Integer
	
	        For i = 1 To 1000
	           addx y
	           Set y = y.v
	        Next
	     End Sub
	
	6. Add the following code to the Command3_Click event procedure:
	
	     Private Sub Command3_Click()
	        Dim i As Integer
	        For i = 1 To 1000
	           CircularRef
	        Next
	     End Sub
	
	7. From the Insert menu, choose Module to add Module1 to the project.
	
	8. Add the following code to the general declarations section of Module1:
	
	     #If Win32 Then
	        Public Type MEMORYSTATUS
	           dwLength As Long
	           dwMemoryLoad As Long   ' percent of memory in use
	           dwTotalPhys As Long    ' bytes of physical memory
	           dwAvailPhys  As Long   ' free physical memory bytes
	           dwTotalPageFile As Long ' bytes of paging file
	           dwAvailPageFile As Long ' free bytes of paging file
	           dwTotalVirtual As Long ' user bytes of address space
	           dwAvailVirtual As Long ' free user bytes
	        End Type
	
	        Declare Sub GlobalMemoryStatus Lib "kernel32" (lpBuffer As _
	           MEMORYSTATUS)
	     #Else
	        Declare Function GetFreeSpace Lib "Kernel" (ByVal wFlags As Integer)_
	           As Long
	     #End If
	
	9. From the Insert menu, choose Class Module to add Class1 to the project.
	
	10. Add the following code to the general declarations section of Class1:
	
	     Public v As Variant
	     Public v1 As Variant
	     Public v2 As Variant
	     Public v3 As Variant
	     Public v4 As Variant
	     Public v5 As Variant
	     Public v6 As Variant
	     Public v7 As Variant
	     Public v8 As Variant
	     Public v9 As Variant
	     Public v10 As Variant
	     Public v11 As Variant
	     Public v12 As Variant
	     Public v13 As Variant
	     Public v14 As Variant
	     Public v15 As Variant
	     Public v16 As Variant
	     Public v17 As Variant
	     Public v18 As Variant
	     Public v19 As Variant
	     Public v20 As Variant
	
	11. Run the program. Press the Command1 button to print the initial free memory.
	  Press the Command2 button to create a linked list. Press the Command1 button
	  again, and notice that the free memory is the same. Then press Command3 to
	  create a circular list. Press the Command1 button again, and notice that the
	  available free memory has dropped.
	
	NOTE: When running the sample code on Windows NT, memory may fluctuate such that
	the return values from GetFreeSpace() will vary even in the case where the
	article reports that the values should not vary. To obtain accurate results, you
	should press Command1 several times until the memory reading has steadied and
	given five to six identical readings. On 16- bit operating systems such as
	Windows for WorkGroups, memory fluctuation is not a concern and the sample will
	perform as described.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
