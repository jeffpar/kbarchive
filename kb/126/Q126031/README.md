---
layout: page
title: "Q126031: PRB: Repeated Blank Screens During Build Process in VC++"
permalink: /kb/126/Q126031/
---

## Q126031: PRB: Repeated Blank Screens During Build Process in VC++

{% raw %}

	Article: Q126031
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbide kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTo
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build from the development environment in Visual C++, the screen
	repeatedly flashes to a blank text-mode screen with no text on it. A text cursor
	may show up if you move the mouse while the blank screen is showing. The screen
	returns to Visual C++ and then blanks out again. The blanking occurs at least
	twice but possibly more times during the entire build process.
	
	CAUSE
	=====
	
	The default settings for the Command Prompt on Microsoft Windows NT, Microsoft
	Windows 2000, Microsoft Windows XP, Microsoft Windows 95, Microsoft Windows 98
	or Microsoft Windows Millennium Edition (Me) are set to full screen.
	
	RESOLUTION
	==========
	
	Depending on whether you are on Windows NT, Windows 2000, Windows XP, Windows
	95, Windows 98, or Windows Me, the resolution process is different:
	
	- For Windows NT, Windows 2000, and Windows XP, you must set the options for
	  one of the following to "Windowed":
	
	   - The environment settings of all Windows NT Command Prompts.
	
	   - The program Vcspawn.exe, which Visual C++ runs as a background process.
	
	- For Windows 95, Windows 98, and Windows Me, you must reset the options for
	  one or all of the following:
	
	   - _Default.pif
	
	   - Conagent.exe
	
	Follow the instructions given in the "More Information" section.
	
	MORE INFORMATION
	================
	
	On Windows NT, Windows 2000, and Windows XP, Visual C++ repeatedly invokes a
	background process called Vcspawn.exe for each command-line tool executed by the
	development environment. Tools such as Cl.exe, Link.exe, and Bscmake.exe run in
	the Vcspawn.exe environment, which is a 32-bit console application.
	
	Usually Vcspawn.exe is invoked as a hidden window and you never see it. However,
	if the setting for Vcspawn.exe is in "full screen" mode, the screen switches to
	text mode each time Vcspawn.exe is invoked. No text is actually sent to the
	Vcspawn screen, so the screen appears blank.
	
	On Windows 95, Windows 98, and Windows Me, Vcspawn.exe is affected by the
	presence of the _Default.pif and the settings of the Conagent.exe file. If a
	_Default.pif is in the path, its properties will be used for all invoked console
	applications. Often, a _Default.pif is left over from a previous Windows 3.1 or
	3.11 installation. Windows 95, Windows 98, and Windows Me do not create one
	during installation. If _Default.pif is not present, Windows 95, Windows 98, and
	Windows Me use the properties of Conagent.exe.
	
	On Windows NT, Windows 2000, or Windows XP:
	-------------------------------------------
	
	Use one of the following two procedures to correct the problem:
	
	Steps to Reset Default Configuration of ALL Command Prompts
	-----------------------------------------------------------
	
	On Windows NT:
	
	1. Go to the Windows NT Control Panel.
	
	2. Double-click the Console icon.
	
	3. Click the General Settings or Options tab.
	
	4. Select Window under the Display Options group.
	
	5. Click OK.
	
	On Windows 2000 and Windows XP:
	
	1. Run Regedt32, which is located in the \System32 subfolder of the Windows NT
	  root folder.
	
	2. Open the \HKEY_CURRENT_USER\Console branch of the registry tree.
	
	3. Set the FullScreen value to 0.
	
	4. Exit the registry editor.
	
	Steps to Reset Configuration for Just Vcspawn.exe by Using Regedt32
	-------------------------------------------------------------------
	
	Use the following process to add a registry entry so only Vcspawn's settings are
	not "full screen."
	
	1. Run Regedt32, which is located in the \System32 subdirectory of the Windows
	  NT root directory.
	
	2. Open the \HKEY_CURRENT_USER\Console branch of the registry tree.
	
	3. Choose Add Key on the Edit menu to add a node called:
	
	  C:_MSVC20_BIN_vcspawn.exe
	
	  If Visual C++ is installed in a different directory or on a different drive,
	  use the following form for the Key Name:
	
	  <drive>:_DIR1_DIR2_DIR3..._vcspawn.exe
	
	  Leave the Class field empty.
	
	4. With "C:_MSVC20_BIN_vcspawn.exe" highlighted, click Add Value on the Edit
	  menu. In Value Name, type "FullScreen" (without the quotation marks). In Data
	  Type, select REG_DWORD. Click OK, and then add a value of 0 (zero).
	
	5. Exit the registry editor, and restart Visual C++.
	
	Steps to Reset Configuration for Just Vcspawn.exe Without Using Regedt32
	------------------------------------------------------------------------
	
	If you are unfamiliar with the system registry and do not want to reset the
	default configurations for the Command Prompt, use the following procedure to
	reset the settings for Vcspawn. This procedure adds the same registry entry.
	
	NOTE: if you have a fast machine, you may have trouble performing some of the
	following steps and you need a larger project. Therefore, if you have a fast
	machine, use one of the previous methods to work around the problem.
	
	If you are compiling a large project, you can switch tasks and see the minimized
	Vcspawn.exe icon. Resetting the attributes of this icon will reset the
	attributes of Vcspawn.
	
	1. Open a large project, such as the sample project CTRLBARS or SUPERPAD
	  supplied with Visual C++.
	
	2. Choose to Rebuild All.
	
	3. Press ALT+TAB to see the minimized Vcspawn icon in the corner of the screen.
	
	4. Quickly open the system menu, and follow the steps shown in the "Steps to
	  Reset Default Configuration of ALL Command Prompts" section of this article.
	
	NOTE: You must save the configuration before the development environment finishes
	the build process. If you do not, the Vcspawn.exe window will be terminated, the
	icon will disappear and any changes you made will not be saved.
	
	On Windows 95, Windows 98, and Windows Me:
	------------------------------------------
	
	Use one of the following procedures to correct the problem.
	
	Steps to Reset Configuration of _Default.pif
	--------------------------------------------
	
	1. In the Explorer, right-click the _DEFAULT file with the MS-DOS icon next to
	  it in your Windows directory.
	
	2. Choose Properties.
	
	3. Click the Screen tab.
	
	4. Choose the Window option and click Apply, then OK.
	
	Steps to Reset Configuration of Conagent.exe
	--------------------------------------------
	
	1. Make sure there is no _Default.pif file in your path; specifically check your
	  Windows directory.
	
	2. Follow the instructions for steps 2, 3, and 4 above given for resetting
	  _Default.pif on the file Conagent.exe in your Windows or Windows System
	  directory.
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10 4.20 5.00 VWB cl link wintee winteer black
	
	======================================================================
	Keywords          : kbsetup kbide kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbVCNET
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
