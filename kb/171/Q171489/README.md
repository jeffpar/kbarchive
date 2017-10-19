---
layout: page
title: "Q171489: FIX: Use of Implements and Public Constants Crashes Compiler"
permalink: /kb/171/Q171489/
---

## Q171489: FIX: Use of Implements and Public Constants Crashes Compiler

	Article: Q171489
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp500fix kbVS97sp2fix kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the IMPLEMENTS statement in a private class that is implementing another
	private class in the same project can cause a compiler error if public module
	level constants used by the implemented class are not located in the same .BAS
	file. This error occurs whether the code is compiled to p-code or native code.
	It does not occur while running in the IDE.
	
	RESOLUTION
	==========
	
	To work around this behavior, declare all public module level constants used by
	an implemented class in the same .BAS file.
	
	In the sample below, if LF_FACESIZE is declared in the same module as the other
	public module level constants (in Module1 rather than Module2), then the error
	does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	1. Start a new Standard EXE project.
	
	2. Add a new module (Module1) and add the following code:
	
	        Public Type tFont
	           Color As Long
	           Angle As Integer
	           Bold As Byte
	           Italic As Byte
	           Underline As Byte
	           StrikeOut As Byte
	           PointSize As Single
	           Name As String * LF_FACESIZE
	        End Type
	
	3. Add another module (Module2) to the project and add the following code:
	
	        Global Const LF_FACESIZE As Long = 32
	
	4. Add a third module (Module3) to the project and add the following code:
	
	        Sub Main()
	
	        End Sub
	
	5. Add a class (Class1) to the project and add the following code:
	
	        Private mtWindowProps As tFont
	
	        Public Property Let BorderStyle(nNewValue As Integer)
	        End Property
	
	        Public Property Get BorderStyle() As Integer
	        End Property
	
	6. Add a second class (Class2) to the project and add the following code:
	
	        Implements Class1
	
	        Private Property Get Class1_BorderStyle() As Integer
	        End Property
	
	        Private Property Let Class1_BorderStyle(RHS As Integer)
	        End Property
	
	7. Compile the project, using either p-code or native code. You should get an
	  Application Error:
	
	  In Windows NT 4.0:
	
	  The instruction at <address> referenced memory at <address>. The
	  memory could not be read.[ASCII 148]
	
	  In Windows 95, Windows 98, and Windows Me:
	
	  VB5 has caused an invalid page fault in module VBA5.DLL at <address>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp500fix kbVS97sp2fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
