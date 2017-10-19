---
layout: page
title: "Q184733: BUG: EXE File Not Created After Compiling"
permalink: /kb/184/Q184733/
---

## Q184733: BUG: EXE File Not Created After Compiling

	Article: Q184733
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to compile a Visual Basic 5.0 application into an EXE, no
	errors are produced and no EXE file is created.
	
	CAUSE
	=====
	
	This problem occurs when you are using a resource (.res) file that includes a
	"Version" resource.
	
	RESOLUTION
	==========
	
	Remove the "Version" resource from the resource (.res) file contained in the
	Visual Basic project.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a Resource file that includes a "Version" resource.
	
	Creating the Resource File
	--------------------------
	
	Create a resource file using a text editor and resource compiler, such as those
	provided with Microsoft Visual C++. The compiled resource file has a .res file
	name extension. Use Visual C++ 5.0 to generate a .res file to reproduce this
	bug, as follows:
	
	1. Create a new "MFC AppWizard (EXE) Project" named App1.
	
	2. Click OK, click Finish, and click OK again.
	
	3. On the Build menu, click Build App1.exe.
	
	An App1.res file should be generated in the Debug directory under the App1
	Project Directory. By default, this directory is:
	
	  C:\program files\devstudio\my projects\App1\debug
	
	Create the Visual Basic Application
	-----------------------------------
	
	1. Start Visual Basic 5.0 and create a New Standard EXE project.
	
	2. Add the App1.res file that was created above.
	
	3. On the File menu, click Make Project1.exe.
	
	At this point, Visual Basic will compile and appear to write an EXE file.
	However, no EXE file is generated because the resource file contains a "Version"
	resource. To alleviate this problem, remove the "Version" resource from the .res
	file by using Visual C++, or by using the Visual Basic Resource Editor.
	
	NOTE: You can download the Visual Basic Resource Editor from the Visual Basic
	Owner's Area located at:
	
	  http://www.microsoft.com/vstudio/owner/default.asp
	
	If you are using Visual C++, rebuild the "App1" project, remove the old resource
	file and add the new resource file to the Visual Basic project. If you are using
	the Visual Basic Resource Editor, save the .res file after removing the
	"Version" resource by clicking Save on the Resource Editor toolbar.
	
	Additional query words: Resource compile
	
	======================================================================
	Keywords          : kbnokeyword kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
