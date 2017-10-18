---
layout: page
title: "Q157898: INFO: Setup Wizard Allows Commas in Filenames in Setup.lst"
permalink: kb/157/Q157898/
---

## Q157898: INFO: Setup Wizard Allows Commas in Filenames in Setup.lst

	Article: Q157898
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbDSSTools kbVBp400 kbVBp500 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setup Wizard for Visual Basic 4.0 allows commas within filenames that are
	distributed with Visual Basic program files.
	
	MORE INFORMATION
	================
	
	With the release of Windows NT 3.1, special characters in filenames, as well as
	long filenames, were allowed. This broke the restrictive 8.3 character file name
	rule that limited MS-DOS filenames, and allowed for more descriptive and useful
	filenames. In particular, the comma could now be used in a filename such as an
	alphanumeric character.
	
	Realizing this, the Setup Wizard for Microsoft Visual Basic 4.0 now allows the
	use of commas within filenames. If you add a file manually whose filename
	contains a comma to the list of targeted distribution files, the Setup Wizard
	will put quotes around the added file in order to signify that a comma was used
	within the filename. You should be aware of this if you intend to edit the
	SETUP.LST file manually after the Setup Wizard initially generates it.
	
	Example
	-------
	
	In the following sample Files section of SETUP.LST, File1 is an example of a
	normal filename, while File2 is an example of a filename with a comma used. Note
	that the comma is used as the delimiter for each entry. To solve this potential
	conflict, the Setup Wizard placed double-quotes (" ") around the filenames in
	question:
	
	     >> [Files]
	     >>
	
	     File1=1,,Calc.EX_,Calc.EXE,$(AppPath),$(EXESelfRegister),,6/5/1995,14336
	     ,1.0.0.0
	
	     >> File2=1,,"my,test.tx_","my,test.txt",$(AppPath),,,6/5/1995,20
	
	NOTE: This functionality is only available with the [Files] Section of SETUP.LST.
	Files that make use of commas in their filenames cannot be placed within the
	[BootStrap] Section of SETUP.LST. The [BootStrap] Section should only contain
	Visual Basic 4.0 runtime-required files and none of these files have commas in
	their filenames. The only way this situation can occur is if SETUP.LST is edited
	manually after its initial creation. This should be a rare occurrence and it is
	not suggested.
	
	Additional query words: comma setup.lst setup wizard
	
	======================================================================
	Keywords          : kbsetup kbDSSTools kbVBp400 kbVBp500 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
