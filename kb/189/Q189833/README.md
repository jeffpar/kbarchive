---
layout: page
title: "Q189833: BUG: Visual Basic Does Not Create an EXE File After Compiling"
permalink: /kb/189/Q189833/
---

## Q189833: BUG: Visual Basic Does Not Create an EXE File After Compiling

{% raw %}

	Article: Q189833
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
	
	SYMPTOMS
	========
	
	An EXE file is not created even though no errors are produced after compiling a
	Visual Basic application that includes a resource file.
	
	CAUSE
	=====
	
	This will occur when including a resource file which contains a "Version"
	resource.
	
	RESOLUTION
	==========
	
	Remove the "Version" information from the resource file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Creating the Resource File:
	
	Create a resource file that includes a "Version" resource using a text editor and
	resource compiler, such as those provided with Microsoft Visual C++. The
	compiled resource file will have a .res file name extension.
	
	One method of generating a .res file to reproduce this bug would be to use
	Microsoft Visual C++ 5.0 while following these steps:
	
	1. Start Visual C++ 5.0 and create a new MFC AppWizard (EXE) project named Res1.
	
	2. Click OK, Finish, and then the OK button again.
	
	3. Under the Build menu, select Build Res1.exe.
	
	  A "Res1.res" file should be generated in the Debug directory under the Res1
	  project Directory. By default, this directory would be "C:\program
	  files\DevStudio\my projects\Res1\debug."
	
	Create the Visual Basic Application:
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Add Files from the Project menu, then add the "Res1.res" file created
	  above.
	
	3. Select Make Project1.exe from the File menu.
	
	  At this point, Visual Basic will compile and appear to write an EXE file. No
	  EXE file is actually generated because the resource file contains a "Version"
	  resource. To alleviate this problem, remove the "Version" resource from the
	  .res file by using Visual C++ 5.0. Rebuild the "Res1" project and add the new
	  resource file to the Visual Basic project.
	
	Additional query words: kbDSupport kbVC500 kbVBp500bug kbVBp kbMFC kbWizard kbVBp600bug kbdss
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
