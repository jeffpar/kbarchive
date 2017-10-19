---
layout: page
title: "Q163552: HOWTO: Reduce the Size of Exe Files Built with VFP"
permalink: /kb/163/Q163552/
---

## Q163552: HOWTO: Reduce the Size of Exe Files Built with VFP

	Article: Q163552
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp500 kbvfp600
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro executables include copies of the .scx and .vcx files that define
	the forms and classes of the project from which the .exe is built.
	
	By default, the embedded copies include the source code of the methods and
	procedures as a debugging convenience. The source code can be quite large.
	
	The developer can eliminate the source code in the forms and class tables by
	opening the project and deselecting Debug Info in the Project Information dialog
	box.
	
	This feature of Visual FoxPro for Windows release 5.0 and 6.0 simplifies the
	similar functionality provided by the Buildapp.prg program that came with Visual
	FoxPro 3.0b.
	
	MORE INFORMATION
	================
	
	To confirm the effect of using this feature follow the procedure below:
	
	1. In the command window, type the following command:
	
	        CREATE PROJECT atest
	
	2. Click the Documents tab of the Project. Create a new form.
	
	3. Place several command buttons on the form, and in the click method of each
	  type a command such as:
	
	        =MESSAGEBOX("This is a very, very, very, very, very long message")
	
	4. Close and save the method code windows and the form.
	
	5. Click the Programs tab of the Project. Create a new program.
	
	6. In the edit window for that program, type the following comment:
	
	        *Main program
	
	7. Close and save the file as Main.prg (the "Main" program).
	
	8. On the Project menu, click Set Main.
	
	9. In the Project window, click Build. Click Build Executable and click OK.
	
	10. In Windows 95 Explorer or Windows NT Explorer, locate and highlight the
	  Atest.exe file. On the File menu, click Properties. Note the exact file size
	  in the Properties dialog box.
	
	11. In Visual FoxPro, click Project Info on the Project menu.
	
	12. In the Project Information dialog box, click the Project tab. Deselect Debug
	  Info, and then click OK.
	
	13. Build the executable again, and replace the original Atest.exe with the new
	  one.
	
	14. In Windows 95 Explorer or Windows NT Explorer, locate and highlight the
	  Atest.exe file. On the File menu, click Properties. Note the exact file size
	  in the Properties dialog box. The exact number of bytes will be less than
	  the number from the first build.
	
	REFERENCES
	==========
	
	For more information about the BuildApp program provided with Visual FoxPro 3.0
	and 3.0b, please see the following articles in the Microsoft Knowledge Base:
	
	  Q130825 Tools Available with Visual FoxPro 3.0 Professional
	
	  Q131302 PRB: Visual FoxPro Makes Bigger .EXE Files Than FoxPro 2.6
	
	  Q136017 PRB: Cannot Update Cursor Error Occurs as Buildapp Builds
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
