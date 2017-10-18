---
layout: page
title: "Q271208: BUG: Crash in Mfc42(d).dll During Process Exit on Windows 95, W"
permalink: kb/271/Q271208/
---

## Q271208: BUG: Crash in Mfc42(d).dll During Process Exit on Windows 95, W

	Article: Q271208
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC600bug kbOSWin95 kbOSWin98 kbOSWinME
	Last Modified: 23-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0, on platform(s):
	   - Microsoft Windows Millennium Edition 
	   - Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0, on platform(s):
	   - Microsoft Windows Millennium Edition 
	   - Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, on platform(s):
	   - Microsoft Windows Millennium Edition 
	   - Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a process exits, you may experience a crash in the Mfc42.dll or Mfc42d.dll
	file on Microsoft Windows 95, Microsoft Windows 98, or Microsoft Windows
	Millennium (Me).
	
	CAUSE
	=====
	
	The Mfc42(d).dll file assumes it is cleaning up on the main thread and relies on
	the handle map that is stored into a thread-local storage value for the main
	thread. If the handle map is missing, Microsoft Foundation Class Library (MFC)
	may crash.
	
	On a computer that is running Windows 95, Windows 98, or Windows Me, you can run
	DLL_PROCESS_DETACH on any thread, rather than the thread that called the
	ExitProcess function. (Microsoft Windows NT and Microsoft Windows 2000 exit the
	process on the thread that called ExitProcess.)
	
	RESOLUTION
	==========
	
	Use the static MFC library and not the shared MFC dynamic-link library (DLL).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC project and accept all the defaults.
	
	2. Use class wizard to add a new handler for ID_FILE_OPEN in the CWinApp-derived
	  class. Edit the code to read as follows:
	
	      void CAssertApp::OnFileOpen()
	      {
	          CFileDialog dlg(TRUE);
	          dlg.DoModal();
	          ASSERT(FALSE);
	      }
	
	3. In the message map in the Assert.cpp file, remove the line that maps
	  ID_FILE_OPEN to the CWinApp::OnFileOpen function.
	
	4. Build the debug configuration.
	
	5. Press F5 (on the Debug menu, and then click Go).
	
	6. In the application, click the toolbar button to open a file.
	
	7. Click Cancel in the Open File dialog box.
	
	  The assertion is hit and a dialog box titled Debug Assertion Failed! is
	  displayed.
	
	8. Click Abort.
	
	This is known to crash on Windows 98 Second Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbVC600bug kbOSWin95 kbOSWin98 kbOSWinME 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
