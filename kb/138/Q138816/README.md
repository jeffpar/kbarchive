---
layout: page
title: "Q138816: BUG: &quot;Error occurred while trying to rebuild&quot; w/ Setup Wizard"
permalink: kb/138/Q138816/
---

## Q138816: BUG: &quot;Error occurred while trying to rebuild&quot; w/ Setup Wizard

	Article: Q138816
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After entering the path to the project file in Setup Wizard and selecting next,
	you receive this error:
	
	  <An invalid pathname with two drive specifiers> File not found. An
	  error occurred while trying to build the project .exe or .dll
	
	CAUSE
	=====
	
	This error occurs when, before running the Setup Wizard, you choose to make an
	.exe file in a directory one or more levels higher in the directory tree than
	the directory where your project files are located.
	
	For example, if your .vbp file is in C:\Myprogs\Prog1 and you choose to make the
	.exe file in C:\, C:\Myprogs, or C:\Myprogs\Prog2, you may encounter this
	problem.
	
	The Setup Wizard always tries to recompile your project, but it fails while
	making the attempt. The Setup Wizard will correctly handle the case where the
	.exe is made in a subdirectory of the directory where the .vbp file is located.
	
	RESOLUTION
	==========
	
	Use either of the following two methods to resolve the problem:
	
	- Before running the Setup Wizard, from within Visual Basic, make the .exe file
	  in the directory containing the .vbp file -- or in a subdirectory.
	
	-or-
	
	- Using a text editor like Notepad, modify the Path32 line in your .vbp file to
	  point to your .exe file relative to the directory where your .vbp file is
	  located. For example, if the .exe file is in C:\Temp and the project file is
	  in C:\Vb, change the Path32 line so that it has an entry of ..\Temp. The
	  problem with this solution is that the change is only temporary. The next
	  time you save the project from Visual Basic 4.0, Visual Basic will force this
	  line to be absolute again, overwriting your change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic.
	
	2. Using the File Manager or Explorer, create a new temporary subdirectory on
	  the root directory (for example, C:\Newtemp).
	
	3. On the File menu, click Make EXE. Change the path for where the new .exe file
	  will reside from the default of C:\Vb to the new temporary directory you just
	  created. Click OK to make the new .exe file. It will reside in the temporary
	  directory you created.
	
	4. On the File menu, click Save Project, and save the default Form1.frm and
	  Project1.vbp files in the C:\Vb directory.
	
	5. Exit Visual Basic, and start the Setup Wizard.
	
	6. When prompted for a path to the project file, give the Setup Wizard
	  C:\Vb\Project1.vbp, and click Next. The Setup Wizard will minimize, and
	  Visual Basic will start, but then Visual Basic will exit without compiling
	  your project. At that point, the Setup Wizard will display the error saying
	  that it couldn't find the file.
	
	Additional query words: 4.00 buglist4.00 vb4win vb4all setup wizard
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
