---
layout: page
title: "Q123841: HOWTO: Create a FORTRAN DLL and Call It from Visual Basic"
permalink: /kb/123/Q123841/
---

## Q123841: HOWTO: Create a FORTRAN DLL and Call It from Visual Basic

{% raw %}

	Article: Q123841
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,2.0,3.0,5.1
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbLangFortran kbVBp
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	- Microsoft Visual Basic Standard Edition for Windows, versions 2.0, 3.0, 1.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how you can create a FORTRAN Dynamic Link Library (DLL)
	for Microsoft Windows and call the procedures it contains from Microsoft Visual
	Basic for Windows. You must have Microsoft FORTRAN Optimizing Compiler version
	5.1 (or later) for MS-DOS and OS/2 to create a FORTRAN DLL.
	
	MORE INFORMATION
	================
	
	There are several steps to linking DLLs written in FORTRAN to Visual Basic
	programs. These steps are briefly described below and explained in detail later
	in this article.
	
	First, create or modify the FORTRAN procedures. You can use Programmer's
	Workbench to create or modify FORTRAN procedures. You can use SUBROUTINE and
	FUNCTION procedures. The procedures must follow these rules:
	
	- Use the default FORTRAN or Pascal calling convention.
	
	- Use data types that Visual Basic can use. See the "Compatible Data Types in
	  FORTRAN and Visual Basic" section in this article.
	
	Next, create the module-definition (.DEF) file. This file gives Windows- specific
	information to the Segmented-Executable Linker. This information is later used
	by Windows to dynamically link the library to your Visual Basic application.
	
	Now you're ready to compile the source code to produce an object file, and then
	link it to actually create the DLL. Note that Visual Basic expects all DLL
	procedures to take far pointers to values passed by reference. Windows also
	imposes some restrictions on DLLs. You can use compiler switches to create a
	DLL-ready object file, but you will need to have the appropriate static-link
	(.LIB) library to create the DLL.
	
	Next, write the Visual Basic procedure declarations for each procedure. These
	will tell Visual Basic several things:
	
	- The name and type of each procedure.
	
	- The name and location of the DLL.
	
	- The order and type of its formal arguments.
	
	- The data type a FUNCTION will return.
	
	Finally, write the procedure calls. The procedure calls will be identical to
	calls made to Visual Basic procedures.
	
	Step-by-Step Example
	--------------------
	
	1. Make sure you have the appropriate library. Check the FORTRAN\LIB directory
	  for the file LDLLFEW.LIB. If you don't have this file, you will need to
	  create it from your original FORTRAN program disks. If you already have this
	  file, skip to step 2; otherwise, follow these steps:
	
	  a. Be sure the LIB.EXE program is in a directory in the current PATH.
	
	  b. Insert Disk 1, and run SETUP.EXE.
	
	  c. Press the ENTER key to go to the Main Menu.
	
	  d. Choose "Load or build additional libraries" from the Main Menu, and press
	     the ENTER key.
	
	  e. Follow the on-screen instructions to if you need to change the source of
	     the component libraries. Then press the ENTER key.
	
	  f. Specify the destination for the library files. This should be the
	     directory where your combined libraries are already installed (probably
	     C:\FORTRAN\LIB). Then press the ENTER key.
	
	  g. Highlight "MS-DOS and Windows" in the Target Operating Systems list, and
	     press the spacebar to select it. Deselect any other entries, and press the
	     ENTER key.
	
	  h. Highlight "Yes" to build FORTRAN Windows DLL libraries, and press the
	     ENTER key.
	
	  i. Highlight "Yes" to build combined libraries, and press the ENTER key.
	
	  j. Highlight "Emulator math" in the Math Options list, and press the spacebar
	     to select it. Deselect any other entries, and press the ENTER key.
	
	  k. Make sure "Large memory model" is highlighted in the Memory Models list,
	     and press the ENTER key.
	
	  l. You may select either "Yes" or "No" to include GRAPHICS.LIB in the
	     combined libraries. Then press the ENTER key.
	
	  m. You may select either "Yes" or "No" to include error descriptions in
	     combined libraries. Then press the ENTER key.
	
	  n. Select "No" to the "Install C dependent libraries?" question, and press
	     the ENTER key.
	
	  o. Select "Yes" to delete the component libraries when finished, and press
	     the ENTER key.
	
	  p. You may choose to rename any of the default libraries; this step does not
	     affect the creation of the LDLLFEW.LIB file.
	
	  q. Confirm that your responses are displayed accurately, and press the ENTER
	     key on the "NO CHANGES" entry to begin building the libraries.
	
	  r. Press the ENTER key to begin building the combined libraries at the
	     prompt.
	
	  s. Exit the Setup program when it finishes.
	
	2. Create the FORTRAN procedures.
	
	  a. Using Programmer's Workbench or another text editor, create a file called
	     FDLL.FOR, and type the following code beginning at column 7:
	
	        SUBROUTINE fsub (x [REFERENCE])
	          INTEGER*4 x
	          x = x + 1
	        END
	
	        INTEGER*2 FUNCTION ffunc (y [VALUE])
	          INTEGER*2 y
	          ffunc = y + 1
	        END
	
	        SUBROUTINE fstring (fstr [REFERENCE])
	          CHARACTER*20 fstr
	          fstr = 'Jack Be Nimble'
	        END
	
	  b. Save the file, but don't exit the editor.
	
	     NOTE: This source code defines three procedures. The first, fsub, takes a
	     long (4-byte) integer by reference. It then increments the long integer
	     that was passed to it by 1. The second procedure, ffunc, takes a short
	     (2-byte) integer by value, and returns a short integer equal to the value
	     of the integer incremented by 1. The last, fstring, takes a string value
	     by reference, and assigns the string "Jack Be Nimble" to the string passed
	     to it.
	
	3. Create the module-definition (.DEF) file.
	
	  a. Using the text editor, create a new file called FDLL.DEF and type in the
	     following lines:
	
	        ; FDLL.DEF - Module Definition file for FDLL.FOR
	        ;
	        LIBRARY            FDLL
	        DESCRIPTION        'Sample FORTRAN DLL'
	        EXETYPE            WINDOWS 3.0
	        CODE               PRELOAD MOVEABLE DISCARDABLE
	        DATA               PRELOAD MOVEABLE SINGLE
	        HEAPSIZE           1024
	        EXPORTS            fsub
	                           ffunc
	                           fstring
	                           WEP
	
	  b. Save the file, and exit the editor.
	
	     NOTE: This is a fairly standard FORTRAN module definition file for a DLL. A
	     similar one can be found on page 136 of the Microsoft FORTRAN version 5.1
	     Advanced Topics manual. The most significant parts you will need to change
	     for future DLLs you create are the LIBRARY, DESCRIPTION, and EXPORTS
	     entries.
	
	4. Compile and link the FORTRAN project.
	
	  a. At the MS-DOS prompt, type:
	
	           fl /c /Aw /Gw fdll.for
	
	     NOTE: The /c option creates an object file, FDLL.OBJ, without linking. The
	     /Aw and /Gw options are required to create Windows DLLs.
	
	  b. At the MS-DOS prompt, type:
	
	           link /NOE /NOD fdll.obj, fdll.dll, , ldllfew.lib, fdll.def;
	
	     NOTE: The /NOE and /NOD options prevent loading of the default FORTRAN
	     static-link libraries. When LINK is done, you should have a file called
	     FDLL.DLL.
	
	  c. Ensure that you don't have a file called FDLL.DLL in the WINDOWS\SYSTEM
	     directory. Rename or move it to a different directory if you do. Copy the
	     FDLL.DLL you just created to the WINDOWS\SYSTEM directory.
	
	5. Write the Visual Basic procedure declarations.
	
	  a. Start Visual Basic for Windows. A new project will load with Form1
	     showing.
	
	  b. In the general declarations section of the form, add this code:
	
	        Declare Sub fsub Lib "fdll.dll" (d As Long)
	        Declare Function ffunc Lib "fdll.dll" (ByVal n As Integer) As Integer
	        Declare Sub fstring Lib "fdll.dll" (ByVal fstr As String)
	
	6. Place two command buttons (Command1 and Command2) and two text controls
	  (Text1 and Text2) on Form1. Arrange them so that Command1 is near Text1, and
	  Command2 is near Text2. Add the following code to each command button:
	
	     Sub Command1_Click ()
	        Dim lngTest as Long
	        lngTest = CLng(Val(Text1.Text))
	        Call fsub(lngTest)
	        Text1.Text = CStr(lngTest)
	     End Sub
	
	     Sub Command2_Click ()
	       Dim intCheck as Integer
	       intCheck = CInt(Val(Text2.Text))
	       intCheck = ffunc(intCheck)
	       Text2.Text = CStr(intCheck)
	     End Sub
	
	7. Add a third command button (Command3) and add the following code to its
	  Click() event:
	
	     Sub Command3_Click()
	        Dim fstr As String
	        fstr = Space$(20)  ' Pad string before making call.
	        Call fstring(fstr)
	        MsgBox fstr        ' Display the results.
	     End Sub
	
	8. Run the program. When you click the Command1 or Command2 button, you will see
	  incrementing values appear in the text boxes associated with each button.
	
	  When you click the Command3 button, you will see the message "Jack Be Nimble"
	  displayed.
	
	Additional Notes
	----------------
	
	DLL procedure and library names are not case sensitive to Visual Basic. Also, the
	Declare statements can be in any module in your project. If they are in a .BAS
	file, then they will be global to your project. If they are in a .FRM file, the
	DLL functions can only be called from within that form.
	
	You may get a general protection (GP) fault when you call a procedure in your
	DLL. The most likely cause is that your Declare does not exactly match the
	FORTRAN procedure. Check these areas:
	
	- Be sure you use Declare Sub for SUBROUTINE and Declare Function for FUNCTION
	  procedures, and ensure that all arguments are of the correct type and match
	  up correctly.
	
	- Be sure you use the ByVal keyword in the Declare statement for any arguments
	  that have the [VALUE] attribute in the FORTRAN procedure. By default, FORTRAN
	  procedures expect all arguments to be passed by reference, and by default,
	  Visual Basic passes all arguments by reference.
	
	Always make sure you are using the most recent DLL that you created. If you
	create the DLL in another directory, you must either copy it to the
	WINDOWS\SYSTEM directory, or specify a full path to the DLL in the Declare
	statement.
	
	Compatible Data Types in FORTRAN and Visual Basic
	-------------------------------------------------
	
	The following table shows conversion information between some FORTRAN data types
	and Visual Basic data types:
	
	FORTRAN data types      Visual Basic data types
	----------------------  --------------------------------
	INTEGER*2               Integer
	INTEGER*4               Long
	REAL                    Single
	REAL*4                  Single
	DOUBLE PRECISION        Double
	REAL*8                  Double
	LOGICAL*2               Integer
	LOGICAL*4               Long
	CHARACTER*n             String*n (Passed ByVal)
	
	For more information on calling DLLs, please see Chapter 24, "Calling Procedures
	in DLLs" of the Programmer's Guide for Microsoft Visual Basic version 3.0 for
	Windows.
	
	Additional query words: 2.00 3.00 5.10 GPF
	
	======================================================================
	Keywords          : kbcode kbCompiler kbLangFortran kbVBp 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbFortranSearch kbZNotKeyword2 kbVB300Search kbVB300 kbZNotKeyword3 kbFORTRAN510DOS kbVB200
	Version           : :1.0,2.0,3.0,5.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
