---
layout: page
title: "Q129886: HOWTO: Optimize OLE Calls in Visual Basic"
permalink: /kb/129/Q129886/
---

## Q129886: HOWTO: Optimize OLE Calls in Visual Basic

{% raw %}

	Article: Q129886
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400 kbVBp500 kbhowto
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because 32-Bit versions of Visual Basic make extensive use of Microsoft OLE
	Technologies, the correct use of object references can be crucial to the
	performance of a Visual Basic application.
	
	MORE INFORMATION
	================
	
	First, you should read the Visual Basic documentation on optimizing your
	application. Visual Basic 4.0 users should refer to Chapter 27, "Optimizing Your
	Application for Size and Speed" in the Visual Basic "Programmer's Guide. Visual
	Basic 5.0 users should refer to the "Design Performance and Compatibility"
	chapter of the Programmer's Guide. These chapters lay out details of many of the
	most useful size and speed optimizations. Visual Basic 5.0 users should refer to
	the "Design Performance and Compatibility" chapter of the Programmer's Guide.
	
	Use the Most Specific Object Available
	--------------------------------------
	
	In Visual Basic, accessing any object model typically requires the repeated use
	of the Object.Property syntax. This chain of references can get quite long:
	
	  DBEngine.Workspaces(0).Databases(0).RecordSet.Fields(0).Name
	
	Each dot (.) in this sequence represents an OLE lookup that is required in order
	for Visual Basic to access the next element. If you put a statement like the
	following into a loop, it can generate a large number of needless lookups:
	
	        ' Assume Fields.Count = 10
	        For I% = 0 To DBEngine.WorkSpaces(0).Database._
	           RecordSet.Fields.Count - 1
	              ' Five dots.
	              Print DBEngine.WorkSpaces(0).Database.RecordSet.Fields(I%).Name
	              ' Five Dots.
	        Next
	        ' This loop generates OLE calls for each dot (.)
	        ' in the Print statement
	        ' on each iteration of the loop.
	
	By using the most specific object type available, you can reduce the overhead of
	this same loop significantly, as in this example:
	
	       Dim DB As Database
	       Dim X As Fields
	       Dim F As Field
	         Set DB = DBEngine.Workspaces(0).OpenDatabase("biblio.mdb")
	         'Object binding takes place at compile time
	         Set X =   DBEngine.Workspaces(0).Databases(0).TableDefs(0).Fields
	         'Four dots, only executed once.
	         For Each F In X
	           Print F.Name
	           'One OLE call
	         Next
	
	Take Advantage of With Statement Blocks to Reduce Repeat References
	-------------------------------------------------------------------
	
	To set multiple properties of a single object, you can use With...End With to
	reduce the number of times the chain of references is invoked to set your
	properties. In this case, you don't even have to have a temporary object of the
	object type defined.
	
	This set of assignments:
	
	     DBEngine.WorkSpaces(0).Database.RecordSet.Fields(0).Name = "NYSE"
	     DBEngine.WorkSpaces(0).Database.RecordSet.Fields(0).Required = True
	     DBEngine.WorkSpaces(0).Database.RecordSet.Fields(0).Size = 10
	     DBEngine.WorkSpaces(0).Database.RecordSet.Fields(0).Type = dbText
	     DBEngine.WorkSpaces(0).Database.RecordSet.Fields(0).Value = "MSFT"
	
	Can be optimized by reducing the dot references using the 'With' statement:
	
	     With DBEngine.WorkSpaces(0).Database.RecordSet.Fields(0)
	
	        .Name = "NYSE"
	        .Required = True
	        .Size = 10
	        .Type = dbText
	        .Value = "MSFT"
	
	     End With
	
	This reduces the number of OLE object lookups that must be done to execute the
	assignments.
	
	Minimize Cross-Process OLE Calls
	--------------------------------
	
	InProcess OLE Automation calls will always be faster than Local Process calls
	(such as automating Excel from Visual Basic for Windows). If you do Local
	Process OLE automation, an early bound object (Dim X As Excel.Application)
	rather than a late bound object (Dim X as object) can cut the overhead
	significantly as only one cross process call is needed. Use the 'With statement'
	and 'Specific Objects' suggestions above. Use In- Process OLE Servers Instead of
	Out-of-Process OLE Servers
	
	In-process OLE Servers (OLE servers created using the Make DLL menu option) are
	significantly faster than out-of-process OLE Servers (OLE servers created using
	the Make EXE menu option).
	
	Use Server-Side Macros to Reduce Cross-Process Calls
	----------------------------------------------------
	
	Macro functions created on the Server side (for example, a WordBasic macro
	created in Word and called from Visual Basic) require only a single
	cross-process call but can perform multiple operations. This speeds up the total
	execution time.
	
	Additional query words: optimize faster speedier quicker best optimal
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 kbVBp500 kbhowto 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
