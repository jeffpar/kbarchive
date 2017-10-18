---
layout: page
title: "Q139969: FIX: File Extension Lost if Save As Option is Used in Win95"
permalink: kb/139/Q139969/
---

## Q139969: FIX: File Extension Lost if Save As Option is Used in Win95

	Article: Q139969
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbOSWin95 kbOSWin98fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When file extensions are hidden under Microsoft Windows 95, saving a project or
	file in Visual Basic with the Save As option may cause the file extension to be
	lost. In this case, Windows 95 loses the ability to recognize the type of the
	Visual Basic file or even to associate the file with Visual Basic.
	
	RESOLUTION
	==========
	
	Either of the following methods can be used to resolve this problem:
	
	In the Windows Explorer, click Options on the View menu. Then uncheck the "Hide
	MS-DOS file extensions for file types that are registered" option. When this
	option is used, the display in the Windows Explorer always shows any file
	extensions, and it also changes the default behavior of the file common dialog
	boxes. With this option unchecked, the Save As dialog box shows the Visual Basic
	file extension by default, and all files are saved and associated properly.
	
	- or -
	
	If you would like to keep the behavior offered by this option, you can work
	around this problem by manually adding the relevant file extension to each file
	and project you save with the Save As command. You must remember to append the
	correct extension to every file and project that is saved.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of the article. This problem has been fixed in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Windows Explorer.
	
	2. On the Windows Explorer's View menu, click Options.
	
	3. Make sure the "Hide MS-DOS file extensions for file types that are
	  registered" option is checked and click OK.
	
	4. Start Visual Basic (32-bit) running under Windows 95.
	
	5. On the Visual Basic File menu, click Open Project.
	
	6. Switch to the Samples\CallDLLs subdirectory and open the CallDLLs project.
	
	7. On the File menu, click Save File As.
	
	8. Switch to a different directory and click OK to save the selected form from
	  the CallDLLs sample application.
	
	9. In the Windows Explorer, change to and view the directory you just saved the
	  form to. A file now exists with the correct name, but it does not exhibit the
	  correct icon for a Visual Basic Form file, nor does it show the correct Type
	  in its Properties dialog box. Turning off the Explorer option and saving the
	  file again fixes the problem (note that the old saved file is not deleted and
	  no message appears asking if it is OK to overwrite the original file because
	  as far as Windows 95 is concerned, the two files are completely different
	  entities).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbOSWin95 kbOSWin98fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
