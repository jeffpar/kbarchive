---
layout: page
title: "Q170946: HOWTO: Create and Use a Minimal ActiveX Component in VB"
permalink: /kb/170/Q170946/
---

## Q170946: HOWTO: Create and Use a Minimal ActiveX Component in VB

{% raw %}

	Article: Q170946
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
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic versions 5.0 and later feature the ability to create ActiveX
	Components. This article illustrates how to create a minimal ActiveX Component
	and use it from a minimal Automation Controller. This article does not exercise
	the full functionality of ActiveX Components. It is intended to help you write
	your first ActiveX Component.
	
	MORE INFORMATION
	================
	
	Step One: Create the Server
	---------------------------
	
	1. Start a new project in Visual Basic. Choose either ActiveX EXE or ActiveX
	  DLL.
	
	2. From the Project Menu, choose Add Module, then Module.
	
	3. Type the following code in the General Declarations section of Module1:
	
	        Sub Main ()
	
	  NOTE: End Sub will be added automatically for you.
	
	4. Add the following code to the General Declaration section of Class1:
	
	        Public MyString As String
	
	        Public Function MyFunction() As String
	           MyFunction = "You never know what you're gonna get."
	        End Function
	
	        Public Sub Class_Initialize()
	           MyString = "Life is like a box of chocolates."
	
	        End Sub
	
	5. In the Properties window for Class1, set the following property:
	
	   Property      Value
	   ------------------------------------
	   Instancing    5 - MultiUse
	
	6. From the Project menu, choose Project1 Properties. Under the General Tab,
	  choose Sub Main from Startup Object list and click OK.
	
	7. Start the program by choosing Start from the Run menu or by pressing the F5
	  key.
	
	  You now have a complete (though limited) OLE automation server. Later, you can
	  choose Make Project1 EXE or Make Project1 DLL from the File menu to create an
	  ActiveX component that can be used without having to run the project. Now
	  you're ready to automate your server.
	
	8. Minimize Visual Basic.
	
	Step Two: Create a Client to Access the Server
	----------------------------------------------
	
	1. Start a second copy of Visual Basic. A new project (Project1) with a default
	  form (Form1) is created.
	
	2. Add the following code to the appropriate events of Form1:
	
	        ' In the General Declarations section:
	        Private MyObj As Object
	
	        Private Sub Form_Load ()
	           Set MyObj = CreateObject("Project1.Class1")
	        End Sub
	
	        Private Sub Form_Click()
	           Print MyObj.MyString
	           Print MyObj.MyFunction
	        End Sub
	
	        Private Sub Form_Unload (Cancel As Integer)
	           Set MyObj = Nothing
	        End Sub
	
	3. Start the program by choosing Start from the Run menu or by pressing the F5
	  key.
	
	4. Click Form1. The following text is output to Form1:
	
	  Life is like a box of chocolates.
	  You never know what you're gonna get.
	
	When Form1 loads, it instantiates one copy of your ActiveX Component. On the
	click, it makes two OLE calls: One to retrieve the value of the MyString public
	variable and one to invoke the MyFunction public function.
	
	When Form1 unloads, it destroys its created instance of the ActiveX Component. If
	this is the last instance in memory, the server process is removed from memory
	as well.
	
	REFERENCES
	==========
	
	For additional information on creating and using a minimal OLE Automation Server
	with Visual Basic version 4.0, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q129801 : HOWTO: Create and Use a Minimal OLE Automation Server
	
	Additional query words: OLE Server KBSERVER KBACTIVEX kbVBp500 kbVBp600 kbVBp kbdsd 
	kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
