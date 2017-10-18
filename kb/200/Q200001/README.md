---
layout: page
title: "Q200001: HOWTO: Test and Debug a Windows 2000 Migration DLL"
permalink: kb/200/Q200001/
---

## Q200001: HOWTO: Test and Debug a Windows 2000 Migration DLL

	Article: Q200001
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDS
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A migration Dynamic-Link Library (DLL) allows an application installed on
	Windows 95 or Windows 98 to function correctly after you have upgraded to
	Windows 2000 Professional. This article covers two important aspects of creating
	a migration DLL:
	
	- Testing to determine areas that need migrating.
	
	- Debugging a migration DLL during a Windows 2000 Professional upgrade.
	
	MORE INFORMATION
	================
	
	Determining the Need for a Migration DLL
	----------------------------------------
	
	It is important to do extensive testing to identify the areas in your application
	that do not work after upgrading to Windows 2000. This initial work makes
	writing the migration DLL more straightforward, and provides a test suite for
	evaluating the success of a migration DLL once it is written.
	
	First, install your application on Windows 2000 and run tests to make sure that
	the application functions properly. A few areas to keep in mind are:
	
	- Does your application handle multiple monitors correctly?
	
	- Does the application work with Windows 2000 printer drivers?
	
	- Can your application communicate properly with NTFS drives?
	
	- Are shortcut and menu items in the proper place?
	
	- Are user settings being stored correctly?
	
	If there are problems running the application on Windows 2000, you must decide
	whether it is possible to use the migration DLL to fix these problems. If it is
	not possible, you should arrange to display an incompatibility message that you
	will see before you choose to upgrade the operating system. This can be
	accomplished by using the [Incompatible Messages] section of the Migrate.inf
	file. See the "Migration Extension Interface Reference" on the Platform SDK for
	more details.
	
	The next step tests how well your application migrates from Windows 9x. Install
	your application on Windows 95 or Window 98 and then upgrade to Windows 2000.
	Run all of the tests listed, paying special attention to whether application and
	user settings migrated properly. In addition:
	
	- Are there different binaries required for a Windows NT installation.
	
	- Does the Windows NT installation require different or additional registry
	  entries?
	
	- Are there services that were not present on the Windows 95 or Windows 98
	  installation that need to be installed for Windows NT?
	
	Any areas that did not migrate properly should be fixed in a migration DLL.
	
	In addition to manual testing, you can use tools such as Sysdiff.exe and
	Regedit.exe to compare registry/file differences between a clean Windows NT
	installation of your product and an upgraded version. See the
	"Migration-Extension Interface" reference in the MSDN Library to learn more
	about Sysdiff.exe, as well as a description of how to create the migration DLL.
	
	Debugging a Migration DLL During the Windows 2000 Upgrade Process
	-----------------------------------------------------------------
	
	The migration DLL is processed first on the Windows 95/98 side. After restarting,
	the migration DLL completes its processing on the Windows 2000 side during
	GUI-mode. Different techniques can be used to enable debugging during both the
	Windows 95/98 and Windows 2000 sides of setup.
	
	Preparing for the Debugging Process
	-----------------------------------
	
	Before starting the Windows 2000 upgrade, consider the difficulty of debugging
	after setup restarts and enters GUI-mode. This article explains how to use
	Visual C++ to debug during GUI-mode. To do this, you need a way to start Visual
	C++ after the computer is restarted and enters the Windows 2000 side of setup.
	Unattended setup mode accomplishes this goal.
	
	Unattended setup mode uses an answer file to "answer" the options presented by
	setup. Unattended setup mode also provides a way to launch an application that
	runs during the Windows 2000 side of setup. By using this method, a command
	prompt can be started during setup. Visual C++ and other applications can then
	be run from the command line.
	
	The following is an example of a simple answer file that loads a migration DLL
	and provides a command prompt for debugging purposes:
	
	  ; UNATTEND.TXT
	
	  [Unattended]
	  UnattendMode = ProvideDefault
	  Win9xUpgrade = Yes
	
	  [GuiUnattended]
	  DetachedProgram = "cmd.exe"
	  Arguments = "/k start"
	
	  [Win9xUpg]
	  MigrationDlls = "C:\MyDll","D:\MyOtherDLL"
	
	The [Unattended] section indicates that the installation of Windows 2000 should
	be an upgrade of Windows 95/98. The [GuiUnattended] section indicates that the
	command prompt should be started during setup. The [Win9xUpg] section contains
	the directory of the Migrate.dll files to load. Other parameters can be used to
	further automate the installation of Windows 2000, but the settings earlier are
	crucial to enable Migration DLL debugging during the Windows 2000 side of
	setup.
	
	A Windows 2000 upgrade uses Winnt32.exe, found on the Windows 2000 installation
	source. Assuming that the Unattend.txt file is stored on "C:\", the following
	command line starts Windows 2000 setup from a Windows 95/98 command window:
	
	  WINNT32.exe /unattend:"C:\unattend.txt" /s:[Full path to the Install Source] /#u:testdlls
	
	If Winnt32.exe resides in the same location as the Install Source, the /s switch
	is not needed. The /#u:testdlls string has the following important functions:
	
	- All migration DLLs are loaded into setup's process to enable debugging.
	
	- The time-out value for migration DLLs on the Windows 2000 side of setup is
	  removed.
	
	Finally, place the MessageBox function calls at the beginning of functions that
	need to be debugged. This method indicates that setup has loaded your migration
	DLL, and provides an opportunity to debug. This applies to both the Windows
	95/98 and the Windows 2000 sides of setup.
	
	Debugging on the Windows 95/98 Side
	-----------------------------------
	
	During the Windows 95/98 side of setup, it is easy to set breakpoints and step
	through the code by using Visual C++. Unfortunately, this process is complicated
	by the fact that there are other migration DLLs with the same name, Migrate.dll,
	and the same exported functions. At times, the Visual C++ debugger accidentally
	breaks into another migration DLL causing Windows 2000 setup to fail. The use of
	the following message boxes avoids this problem. These steps apply to Visual C++
	versions 5.0 and 6.0, and assumes that a valid answer file, Unattend.txt, has
	been created as described:
	
	1. Determine what migration DLL code you need to break into and step through. At
	  those places, use the MessageBox function to display message boxes.
	
	2. Begin setup from the command line by launching Winnt32.exe making sure to use
	  the following switches:
	
	  /unattend:[Answer File Path] /s:[Install Source] /#u:testdlls
	
	  Make sure that the answer file points to the location containing the debug
	  version of your migration DLL.
	
	3. Setup runs unattended until the message boxes in the migration DLL appear. At
	  that point, launch Visual C++.
	
	4. On Visual C++'s Build menu, point to Start Debug, and then click Attach to
	  Process.
	
	5. Select WINNT32 from the list of processes, and then click OK.
	
	6. Open the source files for the migration DLL, and set multiple breakpoints
	  only in the current function. Do not open the workspace file (.dsw) while
	  debugging. Visual C++ 5.0 or 6.0 automatically creates a workspace when it
	  attaches to a process.
	
	7. After clicking OK in the message box, the breakpoints should be hit by the
	  debugger, allowing you to step through the code.
	
	8. When finished debugging, remove all breakpoints. On the Edit menu, click
	  Breakpoints, and then click Remove All. This prevents Visual C++ from
	  becoming confused and breaking into other migration DLLs with the same name,
	  Migrate.dll.
	
	9. On the Debug menu, click Go to restart setup.
	
	10. Visual C++ remains attached to the setup process, so just set breakpoints in
	  the same manner for any other message boxes that display.
	
	11. Do not close Visual C++ or cancel debugging. This action will also terminate
	  the Setup process.
	
	Debugging on the Windows 2000 Side
	----------------------------------
	
	To debug the migration DLL on the Windows 2000 side, unattended setup can be used
	as described. These steps assume the following:
	
	- The [GuiUnattended] section of the Unattend.txt file was used to start a
	  command prompt (Cmd.exe) on the Windows 2000 side of setup.
	
	- Message boxes were placed in the beginning of each function that you want to
	  debug.
	
	- Winnt32.exe was started with the /#u:testdlls command-line parameter.
	
	To debug the migration DLL by using Visual C++ 5.0 or 6.0, follow these steps
	carefully (a similar approach can be used with other debuggers):
	
	1. When your custom message box appears to indicate that setup has entered your
	  migration DLL, go to the command prompt.
	
	2. Navigate to the directory containing Msdev.exe, and start it. The default
	  locations of Msdev.exe are:
	
	   - For Visual C++ version 5.0:
	
	     C:\Program Files\DevStudio\SharedIDE\Bin
	
	   - For Visual C++ version 6.0:
	
	     C:\Program Files\Microsoft Visual Studio\Common\MSDev98\Bin
	
	3. On the Build menu in Visual C++, point to Start Debug, and then click Attach
	  to Process.
	
	4. Select Setup in the Attach to Process dialog box. Click OK.
	
	5. Open all source files needed for debugging. It is important to do this before
	  you begin debugging. Attempting to open files while debugging can cause
	  Visual C++ and Windows 2000 Setup to stop responding (hang).
	
	6. Set breakpoints in the code.
	
	7. Click OK on the message box, and Visual C++ should break into the code.
	
	8. When finished debugging, remove all breakpoints. On the Edit menu, click
	  Breakpoints, and then click Remove All.
	
	9. On the Debug menu, click Go to restart setup.
	
	WARNING: Do not exit Visual C++ at any time after attaching to the setup process.
	Doing so will end the process of the debugger, Windows 2000 Setup.
	
	
	REFERENCES
	==========
	
	For more information on Migration DLLs, see following in the MSDN Library:
	
	  Platform SDK; Management Services; Setup; Migration-Extension Interface
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDSupport kbGrpDSTools kbMigrationDLLFAQ 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
