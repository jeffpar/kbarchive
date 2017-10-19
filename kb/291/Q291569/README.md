---
layout: page
title: "Q291569: HOWTO: Associate a Custom Icon with a Formless VB Application"
permalink: /kb/291/Q291569/
---

## Q291569: HOWTO: Associate a Custom Icon with a Formless VB Application

	Article: Q291569
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbIcon kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For Visual Basic applications that do not contain forms, you can still provide a
	custom icon for the executable. This article explains how you can add an icon
	resource to the project.
	
	MORE INFORMATION
	================
	
	When you create a Visual Basic executable application, you can select an icon
	from one of the project's forms in the Icon drop-down list box on the Make tab
	of the Project Properties dialog box to use as the icon for the executable file.
	However, if there are no forms in the project, no icons are available in the
	drop-down list box of the Make tab. In this case, you can create a custom icon
	resource in your project. The compiler uses this resource as the icon for your
	executable file. If you include more than one icon, the compiler uses the icon
	whose letter appears first in the alphabet because it prioritizes
	alphabetically.
	
	The following sample demonstrates how to provide a custom icon for a simple,
	formless Visual Basic EXE project. For this sample, you may select an icon from
	your system, or you can create your own. By default, Visual Basic 6.0 installs
	icons in the following folder:
	
	  C:\Program Files\Microsoft Visual Studio\Common\Graphics\Icons\
	
	To create your own icon, you can use a tool such as Image Editor, which is
	available from the Visual Basic 6.0 CD (Disk 1) or the Visual Studio 6.0 CD
	(Disk 3) at the following location:
	
	  \Common\Tools\VB\Imagedit\Imagedit.exe
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Visual Basic standard EXE project. Form1 is created by default.
	
	2. Right-click Form1 in the Project window, and then click Remove Form1 to
	  remove the form from the project.
	
	3. Add a new standard module (Module1) to the project.
	
	4. Paste the following code into the code window of Module1:
	
	  Public Sub Main()
	       MsgBox "Hello World"
	  End Sub
	
	5. Select an icon from the list, or use Image Editor (or another appropriate
	  tool) to create an icon file.
	
	6. To load the Visual Basic Resource Editor, follow these steps:
	
	  a. From the Add-Ins menu, click Add-In Manager.
	
	  b. Locate VB 6 Resource Editor in the list of available add-ins.
	
	  c. Double-click VB 6 Resource Editor to load the editor add-in.
	
	7. From the Tools menu, click Resource Editor.
	
	8. In the Resource Editor window, click Add Icon on the toolbar. (This button
	  appears as a small gray square that is outlined in blue.)
	
	9. Open the icon file that you created earlier.
	
	10. By default, the icon is added with the name "101". Right-click the icon
	  resource that was just added, and then click Properties.
	
	11. In the Id box, type "APPICON" (without the quotation marks) to rename the
	  icon resource, and then click OK.
	
	  NOTE: "APPICON" is just a suggested name for your resource. If you already
	  have other, named icon resources, make sure that your executable icon begins
	  with a letter that occurs later in the alphabet than the other icons. For
	  example, if you have an icon that is named "AAA" and another that is named
	  "BBB", the compiler uses the one that is named "AAA" as your application
	  icon.
	
	12. From the File menu, click Make to compile the Visual Basic project.
	
	13. In Windows Explorer, browse to the location where you compiled your
	  executable file. Notice that the icon for the executable file is the icon
	  that you selected in the Resource Editor.
	
	REFERENCES
	==========
	
	MSDN Online Help for Visual Basic
	
	Additional query words: custom build
	
	======================================================================
	Keywords          : kbCompiler kbIcon kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
