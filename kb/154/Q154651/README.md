---
layout: page
title: "Q154651: HOWTO: Determine When the Initialize Event of Class Gets Fired"
permalink: /kb/154/Q154651/
---

## Q154651: HOWTO: Determine When the Initialize Event of Class Gets Fired

{% raw %}

	Article: Q154651
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create an instance of one of your class modules in Visual Basic code,
	the Initialize event is the first operation that occurs. You can use this fact
	to explore the timing of object creation when you declare object variable As
	New. Below is some sample code showing how to demonstrate the issue.
	
	MORE INFORMATION
	================
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Standard Module to the project. Add the following code to the General
	  Declarations section of the Module:
	
	        Option Explicit
	        Public g_SomeGlobalFlag as integer
	
	3. Add a Class Module to the project from the Insert menu.
	
	4. Add the following code to the General Declarations of Class1:
	
	        Option Explicit
	        Public SomeFlag as integer
	
	        Public Sub Test()
	          MsgBox "Test was called"
	        End Sub
	
	        Private Sub Class_Initialize()
	          MsgBox "Class was initialized"
	          'This Class_Initialize is used to set Class level and
	          'Global Flags. The former is fine and always works;
	          'The latter is a Bad idea as we shall see.
	          SomeFlag = 42
	          g_SomeGlobalFlag = 451
	        End Sub
	
	5. Add the following code to the General Declarations of Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	          Dim oClass As Class1
	          Set oClass = New Class1
	          'The following lines display the flags
	          'Both are set correctly.
	          Msgbox g_SomeGlobalFlag    'Should be 451
	          Msgbox oClass.Someflag     'Should be 42
	        End Sub
	
	6. Step through the project by pressing the F8 key. Note that the Initialize
	  event is fired upon reaching the second line where the Set statement is.
	  Because the object is created first, initialization of the global flag
	  happens when it should, and the message boxes display the correct values.
	  Close Form1 to return to design mode.
	
	7. Change the code in the Command1_Click() event to the following:
	
	        Private Sub Command1_Click()
	          Private Sub Command1_Click()
	          Dim oClass As New Class1
	       'The following lines display the flags; the global flag is wrong
	       'because the object doesn't exist yet!
	          MsgBox g_someflag  'Should be 451 - Oops !
	       'When you hit this line, the first thing you see is the message box
	       'from the Initialize Event, as the object is created by using the
	       'oClass in code. By the time SomeFlag is evaluated for display in the
	       'Message Box, Initialize has set the value correctly. Initialize
	       'always happens before any other event or method call.
	          MsgBox oClass.SomeFlag
	        End Sub
	
	8. Press the F8 key to step through the project. Note that the Initialize event
	  isn't called until you call one of the properties or the methods of the
	  class.
	
	An object variable declared without "As New" must be assigned an existing object
	using the Set statement before it can be used. This is known as EXPLICIT OBJECT
	CREATION. Until it is assigned an object, the declared object variable has the
	special value Nothing, indicating that it does not refer to any particular
	instance of an object. If a method is invoked while the object variable contains
	Nothing, an error will occur.
	
	When you declare an object variable using the New keyword, it also contains the
	special value Nothing. However, the first time the variable is used to invoke a
	property or method of the class, Visual Basic notices that the variable contains
	Nothing and creates an instance of the class. The object must be created before
	the property or method is actually invoked, so the Initialize event precedes the
	property or method call. This is known as IMPLICIT OBJECT CREATION.
	
	If you use Class_Initialize to set global flags, you should use EXPLICIT OBJECT
	CREATION to make sure you know exactly when the object is declared, so that
	global flags are set before they are used. This is particularly true if your
	Class Initialize event performs subtle tasks that may not cause the application
	to fall over but may affect the outcome of the program. Note, however, that
	Class_Initialize is a perfectly safe place to initialize class data, because it
	occurs before any other event or method.
	
	There is also a complementary case that can be of interest: Because
	Class_Initialize always happens before any other event or method is invoked, the
	following is true:
	
	     'Class module code
	      Option Explicit
	      Public NowYouSeeIt As String
	      Private Sub Class_Initialize()
	        MsgBox NowYouSeeIt
	      End Sub
	
	     'Form1 code
	      Private Sub Form_Load()
	        Dim c1 As New Class1
	        c1.NowYouSeeIt = "This won't appear in the MsgBox."
	      End Sub
	
	In other words, Class_Initialize must occur even before a public variable is set.
	Therefore, in the example above, the Class_Initialize event is fired before the
	value of "NowYouSeeIt" is assigned to the class variable and the message box
	comes up with no text in the box.
	
	REFERENCES
	==========
	
	Visual Basic Help File.
	
	The Visual Basic Programmers Guide 4.0 Chapter 7, P.200 and P.218.
	
	The Visual Basic Programmers Guide 5.0 Chapter 5, P.156 and P.160.
	
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q138065 How to Enforce Initialization of a VB OLE Class Object
	
	  Q129449 Object Created w/ NEW Instantiated When Passed as Argument
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
