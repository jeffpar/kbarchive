---
layout: page
title: "Q140032: BUG: After Switching OLE Client Hangs in Visual Basic 16-Bit"
permalink: /kb/140/Q140032/
---

## Q140032: BUG: After Switching OLE Client Hangs in Visual Basic 16-Bit

{% raw %}

	Article: Q140032
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an OLE server program and an OLE client program in the 16-bit
	edition of Visual Basic for Windows, version 4.0 and run both programs, the
	client program stops responding after switching from the OLE server program back
	to the OLE client program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the 16-bit version of Visual Basic 4.0, or if it is already running,
	  click New Project on the File menu.
	
	2. Use the following steps to create an OLE server called MyPop:
	
	  a. On the menu, click Tools.
	
	  b. On the Tools menu, click Options, and then click the Project tab.
	
	  c. In the Project Name text box, type "MyPop." In the StartMode group, click
	     OLE server. In the Application Description text box, enter Pop OLE server.
	
	  d. Click OK to close the Options dialog box.
	
	3. Use the following steps to create a class module:
	  a. On the menu, click Insert. On the Insert submenu, click Class Module. The
	     code window for the Class1 class module appears.
	
	  b. In the Properties window of the Class1 class module, set the Instancing
	     Property to 2-Creatable MultiUse, and set the Public property to True.
	
	4. Add the following code to the Class1 code window:
	
	         Private Sub Class_Initialize()
	            Beep
	         End Sub
	
	         Private Sub Class_Terminate()
	            Stop
	         End Sub
	
	5. Add a label to Form1. Set the Caption of this label to "My OLE Server."
	
	6. Press the F5 key to start the program. Minimize this instance of Visual
	  Basic.
	
	7. Start a second instance of Visual Basic 16-bit. In the Project window, Form1
	  is highlighted.
	
	8. On the File menu, click Remove File to remove Form1.
	
	9. On the Insert menu, click Module to create a module. The code window for
	  Module1 is displayed. Add the following code to the Module1 code window:
	
	         Sub Main()
	            goo
	         End Sub
	
	10. Create another module and add the following code into the Module2 code
	  window:
	
	         Sub goo()
	            Set r = New Class1
	            Set r = Nothing
	         End Sub
	
	11. On the Tools menu, click References. The References dialog box is displayed
	  with a list of all the objects that are available from other applications.
	  In the Available References list box, scroll down the list until the Pop OLE
	  Server check box is displayed. Click this check box. Click OK to close the
	  References dialog box.
	
	12. Press the F8 key to single step through the program until you get to the
	  Stop statement.
	
	13. Press ALT+TAB to return to the client. The client program stops responding.
	
	Additional query words: vb4win vb416 buglist4.00 hung hang
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
