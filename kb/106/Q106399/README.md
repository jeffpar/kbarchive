---
layout: page
title: "Q106399: INFO: Using the Development Studio or Visual Workbench with MASM"
permalink: /kb/106/Q106399/
---

## Q106399: INFO: Using the Development Studio or Visual Workbench with MASM

{% raw %}

	Article: Q106399
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0,6.11
	Operating System(s): 
	Keyword(s): kbenv kbide kbVC kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Macro Assembler (MASM) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions of Microsoft Visual C++, version 4.0 and later, do not support
	assembler source files by default. That is, the Developer Studio does not
	associate any special significance to .asm files without being informed
	otherwise. However, there are several viable options, namely custom build rules,
	which enable the creation of projects that depend directly upon assembler source
	files.
	
	The remainder of this article discusses four methods for adding .ASM files to a
	Visual C++ project. The methods are:
	
	1. Using custom build rules;
	
	2. Modifying a VWB makefile and using it as an external makefile;
	
	3. Using an external makefile to assemble the assembly modules and then using an
	  internal makefile for the main program, and
	
	4. Creating an option on the VWB Tools menu to assemble each assembly module as
	  needed.
	
	Of these methods, the use of custom build rules receives special attention. This
	powerful construct debuts in Visual C++ version 4.0. By utilizing a custom build
	rule, a project can invoke MASM on a per file basis to assemble .asm files. The
	resulting object modules can then be linked into the desired target.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	Using Visual C++ Developer Studio, the following provides sample code and a
	step-by-step example of how to create a simple console application, CAPP, that
	requires MASM (Ml.exe) to assemble one of its source files. Note that the sample
	code for this example was borrowed from KB article Q104644, Passing C Arrays to
	MASM by Reference.
	
	Method 1: Sample Code - C Module
	--------------------------------
	
	  /* Filename: CMAIN.C */ 
	
	  #include <stdio.h>
	
	  #ifdef __cplusplus
	  extern "C" {
	  #endif
	
	  void MasmSub (char *, short *, long *);
	
	  #ifdef __cplusplus
	  }
	  #endif
	
	  char chararray[4] = "abc";
	  short shortarray[3]  = {1, 2, 3};
	  long longarray[3] = {32768, 32769, 32770};
	
	  void main( void )
	  {
	     printf ("%s\n", chararray);
	     printf ("%d %d %d\n", shortarray[0], shortarray[1], shortarray[2]);
	     printf ("%ld %ld %ld\n", longarray[0], longarray[1], longarray[2]);
	     MasmSub (chararray, shortarray, longarray);
	     printf ("%s\n", chararray);
	     printf ("%d %d %d\n", shortarray[0], shortarray[1], shortarray[2]);
	     printf ("%ld %ld %ld\n", longarray[0], longarray[1], longarray[2]);
	  }
	
	Method 1: Sample Code - ASM Module
	----------------------------------
	
	  ; Filename: MASMSUB.ASM
	  ; Assemble options needed for ML: /c /Cx /coff
	
	  .386
	  .MODEL flat, C
	  .CODE
	
	  MasmSub PROC uses esi, \ 
	     arraychar:PTR, \ 
	     arrayshort:PTR, \ 
	     arraylong:PTR
	
	     mov esi, arraychar ; Load ESI with the address of the char array.
	     mov BYTE PTR [esi], "x"      ; Since a char is 1 byte long, each
	     mov BYTE PTR [esi+1], "y"    ; successive element can be accessed
	     mov BYTE PTR [esi+2], "z"    ; by adding 1 more to esi.
	     mov esi, arrayshort; Load ESI with the address of the short array.
	     add WORD PTR [esi], 7        ; Since a short is 2 bytes long, each
	     add WORD PTR [esi+2], 7      ; successive element can be accessed
	     add WORD PTR [esi+4], 7      ; by adding 2 more to esi.
	     mov esi, arraylong ; Load ESI with the address of the long array.
	     inc DWORD PTR [esi]          ; Since a long is 4 bytes long, each
	     inc DWORD PTR [esi+4]        ; successive element can be accessed
	     inc DWORD PTR [esi+8]        ; by adding 4 more to esi.
	     ret
	  MasmSub ENDP
	  END
	
	Method 1: Step-by-step Instructions for Building CAPP
	-----------------------------------------------------
	
	Use the following steps to create the project:
	
	1. Start the Visual C++ Developer Studio, Msdev.exe.
	
	2. Create and save Cmain.c and MasmSub.asm.
	
	3. From the File menu, select New. Create a new console application named CAPP.
	
	For Visual C++, version 4.0, follow these steps to build the project:
	
	1. From the Insert menu, choose Files into Project. In the Insert Files into
	  Project dialog box, select Cmain.c as a Common File Type and press OK.
	
	2. From the Insert menu, choose Files into Project. In the Insert Files into
	  Project dialog box, select MasmSub.asm as an All Files Type and press OK.
	
	3. From the Build menu, choose Settings. In the Settings For list box in the
	  Project Settings dialog box, expand the "CAPP - Win32 Debug" target such that
	  MasmSub.asm is visible. Highlight only MasmSub.asm.
	
	4. Select the Custom Build tab.
	
	5. In the first line of the Build command(s) box, enter the full path and file
	  name for MASM, the desired build options, and the macro for the File Input
	  Path. The latter can be obtained by pressing the Files button and selecting
	  Input Path from the resulting menu. If Ml.exe is in the C:\MASM611A\BIN
	  directory, the entry would appear as follows:
	
	  C:\MASM611A\BIN\ML.EXE /c /Cx /coff $(InputPath)
	
	6. In the first line of the Output files(s) box, enter MasmSub.obj.
	
	7. Press OK in the Project Settings dialog box to save your changes. (This also
	  selects the default build options for Cmain.c.)
	
	8. The "CAPP - Win32 Debug" target is now ready to be built. From the Build
	  menu, select Rebuild All. First, Ml.exe will be invoked to compile
	  MasmSub.asm, second, Cl.exe will be invoked to compile Cmain.c, and third,
	  Link.exe will be invoked to generate Capp.exe.
	
	9. The following is the console output of Capp.exe:
	
	  abc
	  1 2 3
	  32768 32769 32770
	  xyz
	  8 9 10
	  32769 32770 32771
	
	10. To build the "CAPP - Win32 Release" target, select its name in the Target
	  drop-down list box on the Project Workspace toolbar. Then, repeat steps 6
	  through 11 substituting the release version of the target for the debug
	  version.
	
	For Visual C++, versions 5.0 and 6.0, follow these steps to build the project:
	
	1. On the Project menu, point to Add To Project, and then click Files.
	
	2. Find and select both Cmain.c and MasmSub.asm.
	
	3. On the Project menu, click Settings.
	
	4. On the Project Settings dialog box, select All Configurations in the Settings
	  For list.
	
	5. Click the Custom Build tab.
	
	6. In the first line of the Build command(s) box, enter the full path and file
	  name for MASM, the desired build options, and the macro for the File Input
	  Path. The latter can be obtained by pressing the Files button and selecting
	  Input Path from the resulting menu. If Ml.exe is in the C:\MASM611A\BIN
	  directory, the entry would appear as follows:
	
	  C:\MASM611A\BIN\ML.EXE /c /Cx /coff $(InputPath)
	
	7. In the first line of the Output files(s) box, enter MasmSub.obj.
	
	8. On the Build menu, click Batch Build. Select the desired configurations and
	  click the Rebuild All button.
	
	For more information on custom build rules, see the Visual C++ online Help for
	the Custom Build Tab (press the Help button in the Project Settings dialog box
	when the Custom Build tab is selected).
	
	Method 2
	--------
	
	Modify a Visual WorkBench makefile and then use it as an external makefile. To do
	this, use the following steps:
	
	1. Open or create a project with the VWB and set it up as desired for the C/C++
	  files in the project.
	
	2. Close the project and modify the .MAK file to include build rules for the
	  assembly modules.
	
	3. Put a comment at the start of the file to force the VWB to read the file as
	  an external makefile; otherwise, you could lose your changes.
	
	The primary disadvantage of this method is you cannot use the VWB options to
	change the way a build is done with an external makefile.
	
	Method 3
	--------
	
	Use an external makefile to assemble the assembly modules, and use an internal
	makefile for the main program, which includes the MASM .obj files built with the
	external makefile. Simply add the .obj files to the project list.
	
	With this method, remember to load the external makefile and build the .obj files
	after changing any MASM code. By doing this, you can still use the VWB to modify
	options for the main project, including switching from debug to release. The
	linker will drop the CodeView information if you select release build for the
	main project, so always having the debug switches on for the assembler files is
	not a problem.
	
	Method 4
	--------
	
	Create an option on the VWB Tools menu to assemble each assembly module as
	needed. The following setups can be used to create Tools menu items that build
	the current file:
	
	1. From the Tools menu, choose the Customize option.
	
	2. Select the Tools tab in the Customize dialog box. Press Add.
	
	3. Specify the complete path to Ml.exe in the Command edit field of the Add Tool
	  dialog box, or use the Browse button feature, and press OK.
	
	4. Set up the Ml.exe menu option as follows:
	
	     Menu Text:          &Assemble Current File
	     Command:            <should be set from step 3 above>
	     Arguments:          /c /Zi /Fl /Sa $FileName
	     Initial Directory:  $FileDir
	     Check the box for:  "Prompt for Arguments"
	     Check the box for:   "Redirect to Output Window"
	
	5. Press the Close button.
	
	The assembly results will appear in the build output window. You can use F4 to
	jump to lines containing errors in the source window.
	
	Additional query words: VWBIss
	
	======================================================================
	Keywords          : kbenv kbide kbVC kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbMASMsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,5.0,6.0,6.11
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
