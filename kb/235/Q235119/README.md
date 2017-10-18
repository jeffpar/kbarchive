---
layout: page
title: "Q235119: PRB: No Version Info if COM DLL/EXE Built Under Windows Me/98/95"
permalink: kb/235/Q235119/
---

## Q235119: PRB: No Version Info if COM DLL/EXE Built Under Windows Me/98/95

	Article: Q235119
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600 kbOSWin95 kbOSWin98 kbVS600sp3bug kbGrpDSFox kbDSupport
	Last Modified: 13-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the properties of a Visual FoxPro COM server, either EXE or DLL, (created
	with Visual FoxPro 6.0 with the Visual Studio 6.0 Service Pack 3, Service Pack
	4, or Service Pack 5 updates) are displayed, there is not a version tab even
	though version information was entered into the EXE or DLL when it was built.
	
	RESOLUTION
	==========
	
	Build the EXE or DLL with Visual FoxPro 6.0 running on the Windows NT or Windows
	2000 operating systems instead of on Windows Millennium Edition (Me), Windows
	98, or Windows 95.
	
	MORE INFORMATION
	================
	
	This problem only occurs with Visual FoxPro 6.0 with the Visual Studio 6.0 SP3,
	SP4, or SP5 updates, running on Windows Me, Windows 98, or Windows 95. The
	original release of Visual FoxPro 6.0, without the Visual Studio 6.0 SP3, SP4,
	or SP5 updates, does not exhibit this problem.
	
	To determine if you have the Visual Studio 6.0 SP3, SP4, or SP5 updates, on the
	Visual FoxPro Help menu, select About Microsoft Visual FoxPro. The version will
	be listed as "Microsoft Visual FoxPro 6.0 SP#."
	
	In addition, this only happens to COM servers. Run-time EXEs that do not have an
	OLEPUBLIC class do not have this problem. Note that to build a DLL from a Visual
	FoxPro project, there has to be at least one OLEPUBLIC class in the project.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. With Visual FoxPro 6.0 installed on Windows Me, Windows 98, or Windows 95,
	  create a new project named test.pjx.
	
	2. Install Visual Studio 6.0 SP3, SP4, or SP5. This will make several updates to
	  your installation of Visual FoxPro 6.0.
	
	3. Using Visual FoxPro 6.0, create a new project named test.pjx.
	
	4. Add a new program file to the project. Place the following code in the
	  program file and save it as test.prg:
	
	  * This is a comment
	
	5. Add a new class to the project. Name it "test," base it on the custom class
	  and save it in test.vcx.
	
	6. With the Class Designer open, choose the Class Info command from the Class
	  menu. Check the OLE Public checkbox. Choose OK to exit and save the class.
	
	7. In the Project Manager, choose the Build button.
	
	8. In the Build Options dialog box, choose the Version button and enter a
	  version number and any other information desired.
	
	9. Build your choice of a:
	
	   - Win32 executable / COM server (exe)
	
	   - Single-threaded COM server (dll)
	
	   - Multi-threaded COM server (dll)
	
	10. Once test.exe or test.dll is built, go to Windows Explorer and select the
	  file. Right-click the file and choose Properties from the Short Cut menu.
	  The ALT+ENTER key combination can also be used to bring up the properties
	  once the file is selected.
	
	11. Note that there is no version tab in the properties sheet for the file. The
	  version and any other information that was entered is not there either.
	
	Additional query words: AGetFileVersion
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 kbOSWin95 kbOSWin98 kbVS600sp3bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
