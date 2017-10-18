---
layout: page
title: "Q84791: Associating Files and Passing Command-Line Parameters"
permalink: kb/084/Q84791/
---

## Q84791: Associating Files and Passing Command-Line Parameters

	Article: Q84791
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows versions 3.0 and 3.0a support the use of command-line
	parameters in the File Associations dialog box in File Manager. Microsoft
	Windows version 3.1 does not support the use of command-line parameters in the
	File Manager Associate dialog box. Command-line parameters for use with file
	associations can be set up through the registration information database by
	using the Registration Information Editor (REGEDIT.EXE).
	
	MORE INFORMATION
	================
	
	To use (pass) command-line parameters, do the following:
	
	1. Run File Manager.
	
	2. From the File menu, choose Run.
	
	3. In the Command Line box, type "regedit" (without the quotation marks), and
	  choose OK.
	
	4. In the Registration Information Editor, choose Add File Type from the Edit
	  menu.
	
	5. Fill in the information as follows:
	
	  Identifier - Keyword to describe the entry. For example:
	
	  Noteprint
	
	  File Type - Program name and version. For example:
	
	  Notepad v3.1
	
	  Action - Select the Open option button.
	
	  Command - Program and command-line parameters. For example:
	
	  notepad.exe /p %1
	
	  where "/p" = print and "%1" = pass the filename
	
	  NOTE: You must type the fully-qualified pathname to the executable file (.EXE)
	  if it is not on the path in the AUTOEXEC.BAT file, or you can use the Browse
	  button to search for a program file.
	
	6. From the File menu, choose Exit, which saves your changes.
	
	7. In File Manager, select a file with the extension you want to associate (for
	  example, SETUP.TXT).
	
	8. From the File menu, choose Associate.
	
	9. Confirm that the text in the Files With Extension box matches the extension
	  you want to associate (in this case, TXT).
	
	10. The Associate With box should contain the file type that was entered above
	  in the Registration Information Editor (for example, Notepad 3.1).
	
	  NOTE: In this example, there may be more than one entry for Notepad. To use
	  the entry with the correct command-line parameters, you must select the same
	  file type as you previously entered (in this case, Noteprint).
	
	Using the "regedit /v" command line gives advanced access to the registration
	database, giving you complete control of the contents of the registration
	database. If you use "regedit /v" (without the quotation marks) in step 3 above,
	replace steps 7-10 above with the following:
	
	1. Select the root by highlighting the backslash character (\) at the top of the
	  file entry.
	
	2. From the Edit menu, choose Add Key.
	
	3. Type the extension in the Key box and the identifier in the Value box, as
	  follows:
	
	  Key - Extension. For example:
	
	  .TXT
	
	  Value - Identifier. For example:
	
	  Noteprint
	
	4. From the File menu, choose Exit, which saves the changes as you exit.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
