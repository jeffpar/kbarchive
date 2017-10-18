---
layout: page
title: "Q65267: Setting the Default Directory for Windows Applications"
permalink: kb/065/Q65267/
---

## Q65267: Setting the Default Directory for Windows Applications

	Article: Q65267
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows applications normally start in the directory in which the program files
	are located. You may want to have a Windows application start in a different
	directory when running under Microsoft Windows version 3.0. To have a Windows
	application start up in a different directory, do the following:
	
	1. Verify that the application's directory is listed in the DOS path statement.
	
	2. Verify that an icon exists for this application and that clicking the icon
	  runs the application.
	
	3. Highlight the icon and from the Program Manager File menu, choose Properties.
	
	4. Type the path of the new default directory in the command line of the Program
	  Item Properties dialog box. For example, type "C:\XLDATA\EXCEL.EXE" (without
	  the quotation marks) to have Excel start in the XLDATA directory.
	
	5. At this point, you will get the error message The specified path is invalid."
	  Click OK to bypass this message.
	
	MORE INFORMATION
	================
	
	The Program Manager will search for the executable file in the directory
	specified in the Command Line entry of the Program Item Properties dialog box.
	If the file is not found in that directory, the Program Manager will search the
	DOS path, leaving the specified directory as the default.
	
	There are two problems with this technique. First, when the Command Line is
	originally entered in the Program Item Properties dialog box, the error message
	
	  The specified path is invalid
	
	will appear. This indicates that Windows cannot find the executable file in the
	path specified. This does not prohibit Windows from accepting the entry, and
	Windows will add the program item to the group once OK is chosen.
	
	The second drawback is that Windows will use the default application program item
	icon instead of the program's actual icon when displaying the program item in
	its group within the Program Manager. To correct this behavior, do the
	following:
	
	1. Select the icon in Program Manager.
	
	2. From the File menu, choose Properties.
	
	3. Select Change Icon.
	
	4. Type the path to the executable file and press the ENTER key.
	
	Pages 89-91 of the "Microsoft Windows User's Guide" for Windows version 3.0 has
	more information about using Windows applications with the Program Manager.
	
	You may also have non-Windows applications start in different directories. The
	best method of doing this is to specify the directory you want the application
	to start in at the Start-Up Directory box within the PIF file for that
	application.
	
	REFERENCES
	==========
	
	For more information on this subject, refer to Page 451 of the "Microsoft
	Windows User's Guide."
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
