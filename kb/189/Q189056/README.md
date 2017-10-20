---
layout: page
title: "Q189056: BUG: Incorrect Localized Strings Display in the Visual Basic IDE"
permalink: /kb/189/Q189056/
---

## Q189056: BUG: Incorrect Localized Strings Display in the Visual Basic IDE

{% raw %}

	Article: Q189056
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbDSSTools kbVBp500bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use string tables with the Visual Basic Resource Editor, the string
	returned by the LoadResString function is not localized when you run your
	application in the Visual Basic Integrated Development Environment (IDE).
	
	CAUSE
	=====
	
	The Visual Basic Resource Editor is an add-in, and the resources are not
	included until the .exe file is created.
	
	RESOLUTION
	==========
	
	Compile the application into an .exe file and run the .exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: These steps assume that you have already downloaded and installed the
	Visual Basic Resource Editor. The Visual Basic Resource Editor add-in is
	available for download at the following Web site:
	
	  http://msdn.microsoft.com/vbasic/downloads/download.asp?ID=027.
	
	1. In Visual Basic, create a new Standard EXE project.
	
	2. On the Tools menu, click Resource Editor. In the Visual Basic Resource
	  Editor, click Edit String Tables on the toolbar.
	
	3. In the Edit String Tables window, click Insert New String Table on the
	  toolbar. By default, the first string table added is English (United States).
	
	4. Click Insert New String Table again. In the next combo box that is inserted,
	  click French (Standard).
	
	5. In the Id 101 row, type ""Hello World (English)"" (without the quotation
	  marks) in the English (United States) column and ""Hello World (French)" "
	  (without the quotation marks) in the French (Standard) column.
	
	6. Close the Resource Editor windows. On the Project menu, click Add New
	  Resource File. Follow the prompts to save and open the resource file.
	
	7. Add a command button to a form. In the Click event, add the following code:
	
	        MsgBox(LoadResString(101))
	
	8. Run the application in the Visual Basic IDE, and click Command1. Note that
	  the message box displays "Hello World (English)."
	
	9. In the Control Panel, change the language in Regional Settings to French
	  (Standard). If you are using Windows 95 or Windows 98, you will need to
	  restart your computer before the changes take effect. Run the program in the
	  IDE again, and click Command1.
	
	  RESULT: The message box displays "Hello World (English)" instead of "Hello
	  World (French)" as expected.
	
	10. Create the .exe file, and run it. Click Command1.
	
	  RESULT: The message box displays "Hello World (French)."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbDSSTools kbVBp500bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
