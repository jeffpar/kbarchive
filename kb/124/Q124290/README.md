---
layout: page
title: "Q124290: HOWTO: Add File Filters to Visual C++ Version 2.0"
permalink: /kb/124/Q124290/
---

## Q124290: HOWTO: Add File Filters to Visual C++ Version 2.0

{% raw %}

	Article: Q124290
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbVC200 kbGrpDSTools
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Adding file filters is an all or nothing process; the process overrides all of
	the default file filters intrinsic to Visual C++. This article gives you a
	step-by-step way to add file filters to the Microsoft Visual C++ development
	environment.
	
	NOTE: This functionality was unsupported in Visual C++ 2.0 and was removed from
	Visual C++ 4.0.
	
	WARNING: This process involves modifying the system registry, a process usually
	done by applications, not people. Errors in editing the registry may result in
	undefined behavior. The use of the registry to override the default file filters
	in Visual C++ may be revised in future versions of Visual C++.
	
	MORE INFORMATION
	================
	
	Step-by-Step Method to Add File Filters to Visual C++
	-----------------------------------------------------
	
	1. Start REGEDT32.EXE (located in the \SYSTEM32 subdirectory of the Windows NT
	  directory).
	
	2. From the HKEY_CURRENT_USER tree:
	
	   - Double-click Software.
	
	   - Double-click Microsoft.
	
	   - Double-click Visual C++ 2.0
	
	   - Double-click File Filters, which should be empty if this is the first
	     anyone has added file filters for Visual C++.
	
	3. From the Edit menu, choose Add Value to bring up the Add Value dialog box.
	
	4. In the Value Name field, type "CommonOpen" (without the quotation marks).
	  This is the Name field for the first entry in the File Filter Entry List (see
	  below). Click the OK button. Note that all entries are of type REG_SZ. Now
	  you have a String Editor dialog box.
	
	5. Type "Common Files (*.mak;*.c;*.cpp;*.cxx;*.h;*.rc)" (without the quotation
	  marks) in the String Editor dialog box. This is the Data field for the first
	  entry in the File Filter Entry List. Click the OK button.
	
	6. Repeat steps 3 through 5 for the remainder of the entry list.
	
	Key Name:        Software\Microsoft\Visual C++ 2.0\File Filters
	-----------------------------------------------------------------
	
	Name:            CommonOpen
	Data:            Common Files (*.mak;*.c;*.cpp;*.cxx;*.h;*.rc)
	
	Name:            CommonProject
	Data:            Common Files (*.c;*.cpp;*.cxx;*.rc;*.def;*.odl)
	
	Name:            Filter1
	Data:            7,Source Files (*.c;*.cpp;*.cxx)
	
	Name:            Filter2
	Data:            7,Header Files (*.h;*.hpp;*.hxx)
	
	Name:            Filter3
	Data:            7,Resource Files (*.rc)
	
	Name:            Filter4
	Data:            1,Image Files (*.bmp;*.dib;*.ico;*.cur)
	
	Name:            Filter5
	Data:            5,Projects (*.mak)
	
	Name:            Filter6
	Data:            1,Browse Info Files (*.bsc)
	
	Name:            Filter7
	Data:            1,Executable Files (*.exe;*.dll;*.drv)
	
	Name:            Filter8
	Data:            7,Definition Files (*.def)
	
	Name:            Filter9
	Data:            2,Object Description Files (*.odl)
	
	Name:            Filter10
	Data:            2,Library Files (*.lib)
	
	Name:            Filter11
	Data:            2,Object Files (*.obj)
	
	Each data field begins with a number. The number is a bit-field that indicates
	what kind of lists that should use the filters:
	
	- 1 means use this File Filter in a File Open list.
	
	- 2 means use this File Filter in a Project Files list.
	
	- 4 means use this File Filter in a Find in Files list (reserved, but not used
	  yet).
	
	The values 5 and 7 are the logical AND of the values 1, 2, and 4.
	
	NOTE: If the Visual C++ version 2.0 registry is corrupted, it may be deleted. The
	next time you run Visual C++, you will be warned that the registry does not
	exist and a new, default registry will be built.
	
	Additional query words: kbinf 9.00 2.00
	
	======================================================================
	Keywords          : kbenv kbVC200 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
