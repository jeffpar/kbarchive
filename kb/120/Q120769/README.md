---
layout: page
title: "Q120769: Visual C++ Version 2.0 README.WRI File - Part 1 Setup"
permalink: /kb/120/Q120769/
---

## Q120769: Visual C++ Version 2.0 README.WRI File - Part 1 Setup

	Article: Q120769
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is based on the Visual C++ version 2.0 README.WRI file:
	
	Environment Variable Settings
	-----------------------------
	
	The CD Install option does not initialize the environment variables PATH, LIB,
	and INCLUDE to point to the CD drive. You must set these directories as
	appropriate after you run Setup.
	
	If you reinstall the Visual C++ version 2.0 development environment to a
	different path than the original installation, the environment variables are not
	reset and the Platforms subkey in the Registry points to the original
	installation.
	
	If an INIT variable is specified in AUTOEXEC.BAT, it will be placed in the system
	environment but not in the registry, so it will not be accessible to Setup and
	to tools using the variable. The INIT variable should be specified using the
	System dialog from the Control Panel applet.
	
	Installing for Remote Debugging
	-------------------------------
	
	When you install the Visual C++ version 2.0 development environment for Win32s,
	Setup installs the Visual C++ Debug Monitor icon in your Visual C++ program
	group. However, when you install the development environment for Windows 95 or
	Windows NT, Setup copies the appropriate remote debugging files to the BIN
	subdirectory of your Visual C++ installation but does not install this icon to
	your program group. You can add this icon to your program group.
	
	Installing Over Previous Versions of Visual C++
	-----------------------------------------------
	
	If you install Microsoft Visual C++ version 2.0 into a directory that contains
	Microsoft Visual C++ version 1.5, version 2.0 will overwrite version 1.5 without
	warning.
	
	If you have installed a pre-release version of Visual C++ version 2.0, you should
	delete the previous installation and the registry associated with it before
	installing the retail version.
	
	WARNING: take care when deleting keys from your registry. It is possible to
	damage your system configuration if the wrong keys are deleted.
	
	To delete your registry for previous installations of Visual C++ version 2.0:
	
	1. Run REGEDT32.EXE, which is in your SYSTEM32 directory.
	
	2. Make sure the HKEY_CURRENT_USER on the Local Machine window is active.
	
	3. Open the Software folder by double-clicking the folder icon.
	
	4. Open the Microsoft folder by double-clicking the folder icon.
	
	5. Highlight the Visual C++ version 2.0 folder by clicking it once.
	
	6. From the Edit menu, choose Delete to delete this registration key.
	
	7. Before you choose Yes on the Warning dialog box, verify that the Visual C++
	  version 2.0 registration key is selected. It should have an outline box
	  around it.
	
	8. Exit the Registry Editor by choosing Exit from the Registry menu.
	
	Installing Without the Microsoft Foundation Class Library
	---------------------------------------------------------
	
	If you install Visual C++ version 2.0 without the Microsoft Foundation Class
	(MFC) Library and then open an MFC project, a dialog box appears warning that
	you did not install MFC. This message may be incorrect if you installed MFC or
	built modified MFC libraries at another time. To prevent this dialog box from
	appearing, you can change the MFCInstalled registry subkey under
	HKEY_CURRENT_USER.Software.Microsoft.Visual C++ 2.0.General to:
	
	MFCInstalled : REG_DWORD : 0x1
	
	NT System Symbols Setup
	-----------------------
	
	When debugging code in a callback function, it is helpful to have the symbol
	(.DBG) files for corresponding system DLLs on the call stack. If these symbol
	files are not installed, the Visual C++ debugger will not always be able to
	determine the context in which your functions are called. Without this
	information, the debugger shows a truncated call stack.The system symbol files
	are also required for OLE RPC debugging.
	
	You can install the symbol files using the NT System Symbols Setup application.
	An icon for this application is installed in the Visual C++ program group. The
	NT System Symbols Setup application installs symbol files for the most commonly
	used system DLLs. If your application calls a less commonly used system DLL, you
	may need to install the symbol file manually from your Windows NT distribution
	disk. The symbol files are in the SUPPORT\DEBUG\I386\SYMBOLS\DLL directory. They
	should be installed into the %SystemRoot%{WINDOWS}\SYMBOLS\DLL directory, or a
	directory pointed to by the %_NT_SYMBOL_PATH%\SYMBOLS\DLL environment variable.
	
	If you update your Windows NT system files, you will also have to reinstall the
	symbol files containing updated information.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	
	=============================================================================
	
