---
layout: page
title: "Q196910: HOWTO: Avoid Extra Threads with Depersisted Embedded Objects"
permalink: kb/196/Q196910/
---

## Q196910: HOWTO: Avoid Extra Threads with Depersisted Embedded Objects

	Article: Q196910
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbDLL kbPersistSt kbThread kbVBp600 kbGrpDSVB
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you depersist an object in Visual Basic, Visual Basic creates a thread for
	the object. If the object embeds other objects and the ActiveX .exe is set to
	use Thread per Object, Visual Basic creates a thread for each embedded object
	within the .exe when the object is depersisted. For objects embedding other
	objects, the number of threads created is different from a non-persisted object.
	Moving the embedded objects from the ActiveX .exe to a referenced ActiveX DLL
	can reduce the number of threads created. This article demonstrates how to
	achieve this.
	
	MORE INFORMATION
	================
	
	Visual Basic 6.0 introduces the capability of class persistence, which enables
	developers to store a component's properties between instances. A PropertyBag
	object makes this functionality possible because it stores or "persists" the
	object with the current property values for later retrieval. You can store the
	PropertyBag object anywhere that binary data can be stored, such as a file or
	database. Subsequently, an application can read the object back in from or
	"depersist" the PropertyBag object and use the object. The property values for
	the depersisted object are those set prior to saving the object in the
	PropertyBag, which can be different from the object's default properties.
	
	The number of threads created with a depersisted object can differ from a
	non-persisted object. If an object embeds other objects and the ActiveX .exe is
	set to use Thread per Object (specified in Project Properties), a depersisted
	object creates multiple threads when it is depersisted. For example, under on
	Windows NT or Windows 2000, if an object within an ActiveX .exe that is set to
	use Thread per Object and has public properties of class types, Visual Basic
	creates the following threads when the object is depersisted:
	
	- One thread for the object.
	
	- One thread for each public property of a class type within the ActiveX .exe.
	
	For instance, if an ActiveX .exe has three class modules (for example, Class1,
	Class2, and Class3) and Class1 exposes two properties of type Class2 and Class3,
	three threads are created for each Class1 object that is depersisted. That is,
	if you depersist ten Class1 objects, Visual Basic creates thirty threads, in
	addition to the threads Visual Basic uses.
	
	If the object is not persisted, Visual Basic just creates one thread for the
	object.
	
	You can reduce the number of threads that Visual Basic creates upon depersisting
	an ActiveX .exe object by moving the contained classes out of the ActiveX .exe
	and into an ActiveX DLL, which the ActiveX .exe references. By doing so, Visual
	Basic creates only one thread for the containing class and the embedded classes
	are created on the same thread.
	
	The following example demonstrates the difference between having embedded objects
	within an ActiveX .exe and having an ActiveX .exe reference objects within an
	ActiveX DLL.
	
	Step-by-Step Procedures
	-----------------------
	
	Create the ActiveX DLL:
	
	1. Create a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. From the Project menu, click Add Class Module to add a Class (Class2) to the
	  project.
	
	3. Change the Class name of Class1 to Class3.
	
	4. Set the Persistable Property of Class3 to 1-Persistable.
	
	5. Add the following code to Class3:
	
	        Public Class3Prop As Variant
	
	6. Set the Persistable Property of Class2 to 1-Persistable.
	
	7. Add the following code to Class2:
	
	        Public Class2Prop As Variant
	
	8. From the Project menu, click Project Properties and change the Project name
	  to Embedded.
	
	9. Create the Embedded.dll by selecting Make Embedded.dll from the File menu.
	
	10. Save changes to the Embedded DLL Project.
	
	Create the ActiveX .exe:
	
	1. Create a new ActiveX .exe project. Class1 is created by default.
	
	2. From the Project menu, click Project Properties. Change the Project name to
	  PersistThread.
	
	3. Set the Persistable Property of Class1 to 1-Persistable.
	
	4. From the Project menu, click References. Make a reference to Embedded.dll.
	
	5. Add the following code to Class1:
	
	        Dim m_obj As Class2
	        Dim m_obj2 As Class3
	        Private Sub Class_InitProperties()
	           Set m_obj = New Class2
	           Set m_obj2 = New Class3
	           ' Normally, some initialization takes place here.
	        End Sub
	        Private Sub Class_ReadProperties(PropBag As PropertyBag)
	          ' PropertyBag is detected, so you need to read the objects in.
	          With PropBag
	             Set MyObject = .ReadProperty("m_obj")
	             Set MyObject2 = .ReadProperty("m_obj2")
	          End With
	        End Sub
	
	        Private Sub Class_WriteProperties(PropBag As PropertyBag)
	          ' Save objects into the PropertyBag.
	          With PropBag
	             .WriteProperty "m_obj", m_obj
	             .WriteProperty "m_obj2", m_obj2
	         End With
	        End Sub
	
	        Public Property Get MyObject() As Class2
	          Set MyObject = m_obj
	        End Property
	
	        Public Property Set MyObject(ByVal vNewValue As Class2)
	          Set m_obj = vNewValue
	          PropertyChanged "m_obj"
	        End Property
	        Public Property Get MyObject2() As Class3
	          Set MyObject2 = m_obj2
	        End Property
	
	        Public Property Set MyObject2(ByVal vNewValue As Class3)
	          Set m_obj2 = vNewValue
	          PropertyChanged "m_obj2"
	        End Property
	
	6. From the Project Menu, click PersistThread Properties. In the Threading Model
	  Section, select Thread per Object.
	
	7. From the File Menu, click Make PersistThread.exe to create PersistThread.exe.
	
	8. Save the Project as PersistThread.vbp.
	
	Create and run a Standard .exe:
	
	1. Create a new Standard .exe project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click References and click PersistThread.exe to make a
	  reference to PersistThread.
	
	3. Paste the following code into Form1:
	
	        Private Sub Form_Load()
	           Dim pb As New PropertyBag
	           Dim obj(1 To 10) As Class1
	           Dim idx As Integer
	
	           For idx = 1 To 10
	              Set obj(idx) = New Class1
	              obj(idx).MyObject.Class2Prop = "Object " & CStr(idx)
	              obj(idx).MyObject2.Class3Prop = "Object " & CStr(idx)
	              pb.WriteProperty "Object" & idx, obj(idx)
	           Next idx
	
	           Stop  ' Check number of running threads.
	
	           Erase obj   'The server goes away here.  No threads are running.
	
	           Stop
	
	           For idx = 1 To 10
	              Set obj(idx) = pb.ReadProperty("Object" & idx)
	           Next idx
	
	           Stop ' Check the number of running threads.
	
	        End Sub
	
	4. Start Windows NT or Windows 2000 Task Manager and position it so that you can
	  see both Visual Basic and Task Manager.
	
	5. Click the Processes Tab. If you do not have a Threads column, click Columns
	  from the View menu and click Thread Count.
	
	  RESULT: A column appears in Task Manager for the number of threads that are
	  running within each process.
	
	6. Save the project as PersistThreadTester.vbp.
	
	7. In Visual Basic, press F5 to run the project. The debugger brings you to the
	  first Stop statement in the code. Now view PersistThread.exe in Task Manager,
	  there are 13 threads under Windows NT or 15 threads under Windows 2000
	  running for PersistThread.exe.
	
	8. In Visual Basic, press F5. The debugger brings you to the second Stop
	  statement, after the Erase statement. In Task Manager, PersistThread.exe is
	  no longer running and consequently no threads are running.
	
	9. In Visual Basic, press F5. The debugger brings you to the third Stop
	  statement in the code, after the 10 objects have been depersisted. Task
	  Manager now displays 13 threads under Windows NT, 15 threads under Windows
	  2000, or 11 threads under Win95/98/Me running.
	
	This is the optimal case, because the contained classes are within a referenced
	ActiveX DLL and the number of threads remained the same for the depersisted
	object.
	
	Steps to Reproduce Behavior
	---------------------------
	
	These steps demonstrate how the persisted object spawns new threads for each
	object it embeds. These steps assume that you have already followed the previous
	Step-by-Step Procedures.
	
	1. Open the project PersistThread.vbp that you created.
	
	2. From the Project Menu, click References and clear the reference to
	  Embedded.DLL.
	
	3. Add two Class Modules (Class2 and Class3) to the project by selecting Add
	  Class Module from the Project menu.
	
	4. Set the Persistable Property of Class3 to 1-Persistable.
	
	5. Add the following code to Class3:
	
	        Public Class3Prop As Variant
	
	6. Set the Persistable Property of Class2 to 1-Persistable.
	
	7. Add the following code to Class2:
	
	        Public Class2Prop As Variant
	
	8. Make PersistThread.exe and replace the existing file.
	
	9. Save the project.
	
	10. Open the PersistThreadTester.VBP project.
	
	11. Start Windows NT or Windows 2000 Task Manager and position it so that you
	  can see both Visual Basic and Task Manager.
	
	12. Click the Processes tab. If you do not have a Threads column, click Columns
	  from the View menu and click Thread Count.
	
	  RESULT: A column appears in Task Manager for the number of threads that are
	  running within each process.
	
	13. Save the project as PersistThreadTester.vbp.
	
	14. In Visual Basic, press F5 to run the project. The debugger brings you to the
	  first Stop statement in the code. Now view PersistThread.exe in Task
	  Manager, there are 13 threads under Windows NT or 15 threads under Windows
	  2000 running for PersistThread.exe.
	
	  NOTE: The results are the same as the previous time.
	
	15. In Visual Basic, press F5. The debugger brings you to the third Stop
	  statement in the code, after the 10 objects have been depersisted. Looking
	  at Task Manager, you see that there are 33 threads under Windows NT or 35
	  threads under Windows 2000 running, as compared to 13 under Windows NT or 15
	  under Windows 2000 when you used a referenced ActiveX DLL for the embedded
	  objects (under Windows 95, Windows 98, or Windows Me you will see 31
	  threads).
	
	If you are looking to optimize the number of running threads, you can see using a
	referenced ActiveX DLL is optimal.
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by David Bradley, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	Visual Basic Help, version 6.0; search on: "Class Persistence"
	
	For a sample on persistence, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q187299 : SAMPLE: Persist.exe Persists Class Objects with VB6
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbDLL kbPersistSt kbThread kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
