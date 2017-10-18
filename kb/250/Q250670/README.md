---
layout: page
title: "Q250670: PRB: VC++ IDE May Hang During a Build Due to Anti-Virus Software"
permalink: kb/250/Q250670/
---

## Q250670: PRB: VC++ IDE May Hang During a Build Due to Anti-Virus Software

	Article: Q250670
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC500 kbVC600 kbOSWin95 kbOSWin98 kbDevStudio kbDSupport kbGrpDSTools
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Windows 98 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The build process of a project in the Visual C++ Integrated Development
	Environment (IDE) accesses the floppy drive and then appears to stop responding
	(hang). In rare cases, building a project may cause the computer to restart.
	
	This problem can also happen outside of a build process if text is redirected to
	the output window. For example, a custom tool on the Tools menu has an option of
	redirecting output to the output window. Running a tool with that setting may
	also cause the IDE to stop responding.
	
	CAUSE
	=====
	
	This behavior appears to be caused by McAfee.com VirusScan or Norton AntiVirus
	2000 from Symantec interfering with the custom build or post build rules of the
	project during the build process. This happens with projects that have a custom
	build or a post build rule only.
	
	Device drivers can also occasionally be at fault. The sound and video drivers
	would be the first ones to test. Rebooting the computer to safe mode uses
	standard drivers, and can be used as a test if the virus scanner has first been
	ruled out as a cause.
	
	
	
	RESOLUTION
	==========
	
	There are two possible ways to prevent this from occurring:
	
	- Temporarily disable the anti-virus software when you are going to perform
	  builds.
	
	  -or-
	
	- Remove all custom build and post build rules from your projects.
	
	Note that simply removing the virus scanner from Startup by using a tool like
	MSCONFIG may not fix the problem. The virus scanner may be using a custom
	virtual device driver (VXD) that continues to cause problems with Visual C++
	even when the actual scanner does not appear to be running. The best strategy is
	to leave the virus scanner installed and instead disable it. Most virus scanners
	can be disabled by right-clicking their associated icon in the system tray on
	the taskbar. An option to disable system monitoring or scanning is usually
	provided.
	
	After the IDE stops responding, you will not be able to exit Visual C++. To
	resolve this without restarting, perform the following steps:
	
	1. On the Start menu, point to Programs, point to Microsoft Visual Studio 6.0,
	  point to Microsoft Visual Studio 6.0 Tools, and then click Process Viewer.
	
	2. Select WINOLDAP and click Kill Process.
	
	3. Select Vcspawn.exe and click Kill Process.
	
	4. If you are still unable to exit Visual C++, use the same steps to end the
	  Msdev.exe process.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the OEM version of McAfee VirusScan 4.0.2. Your computer may have the
	  OEM version of this anti-virus program preinstalled. (This problem may also
	  occur with other versions of VirusScan.) Or, to reproduce this problem with
	  Norton anti-virus software, you must have Norton Antivirus 2000 version
	  6.10.20 (click the program's live button to perform a "live" update if
	  necessary).
	
	2. In Visual C++, use the Microsoft Foundation Classes (MFC) AppWizard (exe) to
	  create a default MFC dialog-based project. In step 2 of 4 of the AppWizard,
	  include support for context-sensitive Help.
	
	3. From the Build menu, select Build to start the build process.
	
	The floppy drive may be accessed when the build starts, if there is one. Then the
	Output window will display "Copying contents file..." in Visual C++ 6.0 and
	"Making help file..." if the project was built in version 5.0. The build will
	not proceed, and the Visual C++ IDE appears to stop responding.
	
	The anti-virus software seems to interfere with the custom build rule on the .cnt
	file, which is the Help Contents file.
	
	Workaround
	----------
	
	In the case of the OEM version of VirusScan 4.0.2, you can work around the
	problem by configuring VShield System Scan in VirusScan. In the System Scan's
	properties, on the Detection tab, select the Program Files Only option.
	
	For both the McAfee and Norton programs: Visual C++ 5.0 and 6.0 generate a
	Makehelp.bat file that can be used to build the .hpj file. So, another
	workaround would be to disable the custom build rule for the affected files and
	use the Makehelp.bat file as follows:
	
	1. On the FileView tab, select the .hpj file under the Source Files folder.
	
	2. Right-click this file and select Settings from the pop-up menu.
	
	3. Click the General tab.
	
	4. Clear the Always use custom build step option and select Exclude file from
	  build.
	
	5. If you are using Visual C++ 6.0, then you must repeat steps 1, 2, 3, and 4
	  for the Resource.h and the .cnt files. Visual C++ 6.0 doesn't use the
	  Makehelp.bat file; it is only provided for backward compatibility with Visual
	  C++ 5.0.
	
	6. Run Makehelp.bat file from an MS-DOS prompt or double-click the file in
	  Windows Explorer. It will generate the appropriate files and place them in
	  the Debug and Release folders, depending on the settings.
	
	The same problem will occur with an Active Template Library (ATL) COM
	AppWizard-generated .dll or .exe project. There is a custom build rule that will
	attempt to register the .exe or .dll file. For an .exe, you will have to
	register from an MS-DOS prompt, whereas you can register the .dll by selecting
	Register Control from the Tools menu.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q196796 PRB: ClassWizard Unable to Create Files for New Class
	
	Additional query words: reboot
	
	======================================================================
	Keywords          : kbide kbVC500 kbVC600 kbOSWin95 kbOSWin98 kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbWinMEsearch kbAudDeveloper kbWin98search kbWin98 kbWinME kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
