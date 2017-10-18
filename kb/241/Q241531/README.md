---
layout: page
title: "Q241531: HOWTO: Create a UI-Less eVC DLL for Use in an eVB Application"
permalink: kb/241/Q241531/
---

## Q241531: HOWTO: Create a UI-Less eVC DLL for Use in an eVB Application

	Article: Q241531
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to create a simple UI-less DLL with eMbedded
	Visual C++ (eVC) and call that DLL from an eMbedded Visual Basic (eVB)
	application.
	
	For illustrative purposes, the CreateProcess API function is wrapped for use by a
	eVB application targeting a Pocket PC device. The same process can be used for
	other devices supported by both eVC and eVB, as well as with the previous
	versions of the Windows CE development tools (the Windows CE Toolkit for Visual
	Basic 6.0 and the Windows CE Toolkit for Visual C++ 6.0).
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	How to Build the UI-less EVC DLL
	
	1. Launch Microsoft eMbedded Visual C++.
	
	2. From the File menu, select New.
	
	3. In the New dialog box, select the Projects tab and click on WCE Dynamic-Link
	  Library.
	
	4. In the Project name text box, enter a project name, such as "CProcess"
	  (without the quotation marks).
	
	5. Click OK to create the WCE DLL.
	
	6. In the WCE Dynamic-Link Library dialog box, select An empty Windows CE DLL
	  project.
	
	7. Click Finish.
	
	8. Click the OK button of the New Project Information dialog box to create the
	  project.
	
	9. From the File menu, choose New.
	
	10. In the New dialog box, select the Files tab, and then click on C++ Source
	  File.
	
	11. In the File name text box, enter a file name, such as "WinExecCE" (without
	  the quotation marks).
	
	12. Click the OK button.
	
	13. From the File menu, choose New.
	
	14. In the New dialog box, select the Files tab, and then click on Text File.
	
	15. In the File name text box, enter a file name, such as "WinExecCE.def"
	  (without the quotation marks).
	
	16. Click the OK button.
	
	17. Paste the following code into the WinExecCE.cpp file:
	
	  #include <windows.h>
	
	  DWORD WINAPI WinExecCE (LPWSTR lpApplicationName, LPWSTR lpCommandLine)
	  {
	    DWORD dwError = NOERROR;
	    PROCESS_INFORMATION pi = {0};
	
	    if (!CreateProcess (lpApplicationName, lpCommandLine, NULL, NULL, FALSE, 0, NULL, NULL, NULL, &pi))
	    {
	        dwError = GetLastError ();
	    }
	    else
	    {
	        if (pi.hProcess)
	            CloseHandle (pi.hProcess);
	        if (pi.hThread)
	            CloseHandle (pi.hThread);
	    }
	    return dwError;
	  }
	
	18. Paste the following into the WinExecCE.def file:
	
	  EXPORTS
	  WinExecCE
	
	19. From the WCE Configuration toolbar, select Pocket PC, Win32 (WCE ARM)
	  Release, and Pocket PC (Default Device).
	
	  NOTE: If your Pocket PC device uses a different processor type, select that
	  one instead.
	
	20. Ensure that the Pocket PC device is connected to the desktop development
	  computer.
	
	21. From the Build menu, select Rebuild All. The DLL is compiled and downloaded
	  to the device.
	
	22. From the File menu, select Save Workspace, and then select Exit.
	
	How to Build the eVB Application
	
	1. Launch eMbedded Visual Basic.
	
	2. Create a new Windows CE Pocket PC Project.
	
	3. Add command button Command1 to Form1.
	
	4. Paste the following code into Form1:
	
	  Option Explicit
	  Public Declare Function WinExecCE Lib "CProcess.DLL" ( _
	     ByVal lpApplicationName As String, _
	     lpCommandLine As String) As Long
	
	  Private Sub Command1_Click()
	     WinExecCE "Calc.exe", ""
	  End Sub
	
	5. Ensure that the Pocket PC device is connected to the desktop development
	  computer.
	
	6. Run the project.
	
	7. On the device, click on the command button to launch Calc.Exe.
	
	Additional query words: eVB eVB6 shell wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVCeMb kbVBeMb300
	Version           : :3.0
	Hardware          : WinCE
	Issue type        : kbhowto
	
	=============================================================================
	
