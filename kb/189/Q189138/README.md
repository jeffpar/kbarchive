---
layout: page
title: "Q189138: PRB: &quot;error spawning empfile.exe&quot; Building WINCE Application"
permalink: /kb/189/Q189138/
---

## Q189138: PRB: &quot;error spawning empfile.exe&quot; Building WINCE Application

	Article: Q189138
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0,2.0
	Operating System(s): 
	Keyword(s): kbVC500 kbOSWinCE200
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	While building Windows CE applications, you may get one of the following six
	errors:
	
	  error spawning empfile.exe
	  error spawning pfile.exe
	  error spawning shcl.exe
	  error spawning clmips.exe
	  error spawning clppc.exe
	  error spawning cl.exe
	
	The Empfile.exe program copies build output to the emulator store in the host
	computer when your project is of type Win32 (WCE x86em).
	
	The Pfile.exe file copies the application to a Windows CE target device connected
	to the host computer via Windows CE Services when the project is of the other
	Win32 (WCE XXX) types.
	
	The remaining .exe files listed are the compilers for the corresponding
	platforms.
	
	CAUSE
	=====
	
	The above problem may occur if the platform list box is not visible in Developer
	Studio or if the path to the executable files is missing (to check whether the
	path to the executable files is missing, on the Tools menu, click Options, then
	click the Directories tab).
	
	
	RESOLUTION
	==========
	
	The following are a set of troubleshooting steps. Try the following resolutions
	one at a time until you succeed. Note that Windows CE emulation is not supported
	in Windows 95 by design. Therefore, Empfile.exe error messages can not be
	resolved in Windows 95 for the Win32 (WCE x86em) platform.
	
	1. When you install the Windows CE Toolkit for Visual C++ 5.0, you see a list
	  box in Developer Studio. This list box contains the items H/PC Ver 1.00, H/PC
	  Ver 1.01, and H/PC Ver 2.00.
	
	  NOTE: Before you start to build a Win32 Windows CE application, this list box
	  must be visible. If the list box is not visible, do the following:
	
	  a. Right-click an empty area on the Developer Studio toolbar.
	
	  b. In the pop-up window, select "WCE Configuration." This action displays the
	     list box and you can now try to build your application again.
	
	  If you are building for types other than Win32 (WCE x86em), your application
	  will build, but you may get a message box stating "Failed to verify platform
	  or OS version" if Windows CE Services is not running on the host computer or
	  the Windows CE device has not established a connection to the host.
	
	  If the above method fails to remove the error, go to step 2; otherwise, go to
	  step 5.
	
	2. Make sure that the correct path to the executables is set in the Developer
	  Studio menu. On the Tools menu, click Options, then click the Directories
	  tab. In the "Show Directories for" list box, select "Executable files." The
	  following should be visible in the Directories list box if drive C is the
	  installation drive.
	
	  For H/PC version 2.0, all platforms other than Win32 (WCE x86em):
	
	  If Installed on Windows NT:
	
	  C:\Program Files\DevStudio\WCE\Bin
	  C:\Program Files\DevStudio\SharedIDE\BIN
	  C:\Program Files\DevStudio\VC\BIN
	  C:\Program Files\DevStudio\VC\BIN\WINNT
	
	  If Installed on Windows 95:
	
	  C:\Program Files\DevStudio\WCE\Bin
	  C:\Program Files\DevStudio\SharedIDE\BIN
	  C:\Program Files\DevStudio\VC\BIN
	  C:\Program Files\DevStudio\VC\BIN\WIN95
	
	  Note that the above also applies to H/PC versions 1.0 and 1.01, available only
	  for platforms Win32 (WCE SH) and Win32 (WCE MIPS).
	
	  For H/PC version 2.0, for platform Win32 (WCE x86em), available only on NT:
	
	  C:\Program Files\Windows CE Platform SDK\wce\emul\HPC\windows
	  C:\Program Files\DevStudio\WCE\Bin
	  C:\Program Files\DevStudio\SharedIDE\BIN
	  C:\Program Files\DevStudio\VC\BIN
	  C:\Program Files\DevStudio\VC\BIN\WIN95
	
	  Build again. If the error persists, go to step 3; otherwise, go to step 5.
	
	3. If you are trying to build for the first time after installing Windows CE
	  Toolkit for Visual C++ 5.0 and none of the above works, then make sure that
	  the Windows CE Toolkit is installed under your user account with
	  administrative privileges. Check steps 4 and 5.
	
	4. If none of the above works, then uninstall Windows CE components followed by
	  uninstalling Visual C++. Back up any user-created files or projects and
	  delete the ..\DevStudio and ..\WINCE directories if the Embedded toolkit is
	  also installed. Then delete the following registry keys if they still exist:
	
	     HKEY_CURRENT_USER\Software\Microsoft\DevStudio
	     HKEY_CURRENT_USER\Software\Microsoft\Infoviewer\5.0
	     HKEY_LOCAL_MACHINE\Software\Microsoft\DevStudio
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Infoviewer\5.0
	
	  Reinstall Visual C++ version 5.0. Verify that this installation works before
	  installing any Windows CE components.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	  If you are running Windows NT, you should also update your Emergency Repair
	  Disk (ERD).
	
	5. Once you can build without the error, close Developer Studio. Open the
	  Registry editor, and export (save) the following key, giving it a name on
	  your hard drive:
	
	     HKEY_CURRENT_USER\Software\Microsoft\DevStudio
	
	  The saved file has a .reg extension. If you see the error again in the future,
	  close Developer Studio, open the Registry Editor and import the saved key.
	  Start Developer Studio and you should be able to build again.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q177433 PRB: Building on Windows 95 Reports "Error spawning empfile.exe"
	
	  Q188720 PRB: Error Executing ~vcecho!Compiling
	
	Additional query words: wce kbwince300 kbide kbvc500 wince
	
	======================================================================
	Keywords          : kbVC500 kbOSWinCE200 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCEETKSearch kbWinCESearch kbWinCEETKVC500
	Version           : WINDOWS:5.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
