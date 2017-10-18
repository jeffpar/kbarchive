---
layout: page
title: "Q138529: PRB: Visual Basic 4.0 Does Not Support Color Cursor Files"
permalink: kb/138/Q138529/
---

## Q138529: PRB: Visual Basic 4.0 Does Not Support Color Cursor Files

	Article: Q138529
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbGrpDSVB kbDSupport
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
	
	If cursor files are displayed in a picture box or as a mouse icon, then the
	picture shows in black and white only. Colors are not displayed.
	
	RESOLUTION
	==========
	
	Use icon files instead of cursor files. Many existing icons can be found in the
	Vb\Icons directory. In addition, new color icons can be created by using the
	IconWorks application found in the Vb\Hc directory.
	
	STATUS
	======
	
	This behavior is by design. Support for color cursor files was not built into
	Visual Basic 4.0.
	
	MORE INFORMATION
	================
	
	Regardless of the method used to display a cursor file (using the LoadPicture
	command or the LoadResPicture command and a resource file), cursor files will
	always be displayed in black and white.
	
	Step-by-Step Example - Loading a Cursor Using LoadPicture Command
	-----------------------------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a picture box and command button on Form1.
	
	3. In the Click event for the command button, place the following line of code
	  (assuming you have the standard cursors installed in the standard
	  directories):
	
	     ' On Windows NT or Windows 2000 use:
	     Picture1.Picture = LoadPicture("c:\windows\system32\3dgarro.cur")
	
	     ' On Windows 95 or Windows 98 use:
	     Picture1.Picture = LoadPicture("c:\windows\system\arrow_5.cur")
	
	4. Run the example by pressing the F5 key. The arrow pointer is displayed as a
	  black color in the picture box. When this cursor file is viewed in a Resource
	  Editor the arrow has a golden color.
	
	The next example uses App Studio which ships with Visual C++ Version 1.5 to
	create a resource file. It then adds the file to a project created in 16-bit
	Visual Basic 4.0. The results are the same.
	
	Step-by-Step Example - Loading a Cursor File by Using a Resource File
	---------------------------------------------------------------------
	
	1. Start App Studio Version 1.5. On the File menu, click New.
	
	2. In the New dialog box, select Resource File from the list of types, and click
	  OK.
	
	3. On the Resource menu in App Studio, click Import. In the Import Resource
	  dialog box, select Cursors (*.Cur) from the Types of Files list.
	
	4. Select any color cursor file from list of files. On a computer running
	  Windows 2000 there are some cursor files in the \WinNT\Cursors directory. On
	  Windows NT there are some cursor files in the WinNT\System32 directory. On
	  Windows 95 or Windows 98, you'll find them in the \Windows\Cursors directory.
	
	5. By default, the ID of the resource will be 101. The ID is displayed in the
	  Resource File dialog box.
	
	6. On the File menu, click Save As, and save the file as Vbres.res. Exit App
	  Studio.
	
	7. Start a new project in the 16-bit edition of Visual Basic. Form1 is created
	  by default.
	
	8. Add the resource file to the project. On the File menu, click Add File. In
	  the Add File dialog box, select Resource Files (*.res) from the Types of
	  Files combo box. Then select Vbres.res from the list of files.
	
	9. Add a picture box (Picture1) and a command button (Command1) to Form1. Add
	  the following code to the Click event for Command1:
	
	     Private Sub Command1_Click ()
	        Const vbResCursor = 2
	        Picture1.Picture = LoadResPicture(101, vbResCursor)
	     End Sub
	
	10. Run the example by pressing the F5 key. The picture box displays a black and
	  white picture.
	
	Additional query words: kbdsd kbCtrl picture box icon vb4win vb4all
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
