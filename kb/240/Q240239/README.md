---
layout: page
title: "Q240239: HOWTO: Capture the Path to a File that has been Loaded into an A"
permalink: kb/240/Q240239/
---

## Q240239: HOWTO: Capture the Path to a File that has been Loaded into an A

	Article: Q240239
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under some circumstances, developers might find it necessary to capture the path
	to an executable file created with Visual FoxPro or the path to a file that is
	running within an application's address space.
	
	The path and file name of an executable file mapped into the address space of an
	application can be returned with the GetModuleFileName function of the Windows
	API.
	
	MORE INFORMATION
	================
	
	The GetModuleHandle function is used to return a module handle for the specified
	module if the file has been mapped into the address space of the calling
	process.
	
	The GetModuleFileName function retrieves the full path and filename for the file
	containing the specified module. If the function succeeds, the return value is
	the length, in characters, of the string copied to the buffer.
	
	The following code illustrates this procedure.
	
	1. Create a program file named GetName.PRG using the following code snippet:
	
	  #DEFINE MAX_PATH         256
	
	  parameter lcFileName
	
	  *!* Initialize variables
	  STORE SPACE(128) TO lpModuleName,lpFileName
	  nSize        = MAX_PATH
	
	  *!* Declare GetModuleHandle
	  DECLARE INTEGER GetModuleHandle ;
	     IN kernel32.DLL ;
	     STRING @lpModuleName
	
	  *!* Declare GetModuleFileName
	  DECLARE INTEGER GetModuleFileName ;
	     IN kernel32.DLL ;
	     INTEGER hModule, ;
	     STRING @lpFileName, ;
	     INTEGER nSize
	  *!* End of API declarations
	
	  *!* Will look for the name of the file passed to lcFileName
	  lpModuleName = lcFileName
	  *!* Get a handle to the executable file
	  testa=GetModuleHandle(@lpModuleName)
	  *!* Get the path to the file
	  testb=GetModuleFileName(testa,@lpFileName,nSize)
	  *!* Remove the null terminator from the string
	  lpFileName=LEFT(ALLTRIM(lpFileName),AT(CHR(0),lpFileName)-1)
	  *!* Display the path in a messagebox.
	  =MESSAGEBOX(lpFileName,64,'Path returned by GetModuleFileName')
	  CLEAR DLLS
	
	2. From the command line, type "DO GETNAME WITH ''" (without the quotation
	  marks). Because no file is referenced, a messagebox appears and displays the
	  path to the Visual FoxPro executable file.
	
	3. From the command line, type "DO GETNAME WITH 'GDI32'" (without the quotation
	  marks). Because GDI32.DLL is mapped into Visual FoxPro's address space, a
	  messagebox appears and displays the path to the GDI32 dynamic link library.
	
	4. From the command line, type "DO GETNAME WITH 'MYAPP'" (without the quotation
	  marks). Because MYAPP.DLL is not mapped into Visual FoxPro's address space, a
	  messagebox appears and displays the path to the Visual FoxPro executable
	  file.
	
	5. From the command line, type "DO GETNAME WITH 'KERNEL32'" (without the
	  quotation marks). Because KERNEL32.DLL is mapped into Visual FoxPro's address
	  space, a messagebox appears and displays the path to the KERNEL32 dynamic
	  link library.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
