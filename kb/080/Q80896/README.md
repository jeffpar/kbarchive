---
layout: page
title: "Q80896: Windows 3.1 Application Compatibility (part 1 of 7)"
permalink: /kb/080/Q80896/
---

## Q80896: Windows 3.1 Application Compatibility (part 1 of 7)

{% raw %}

	Article: Q80896
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Application Compatibility Document for Windows 3.1:
	
	To make Windows version 3.1 better and more robust than Windows version 3.0,
	Microsoft enhanced and improved many Windows features. Although every effort was
	made to ensure compatibility with applications developed for Windows version
	3.0, some enhancements may affect the operation of these applications --
	especially if an application uses features in an undocumented fashion or relies
	on invalid assumptions about the behavior of Windows.
	
	Microsoft is eager to help you resolve any compatibility problems you may
	encounter. This document identifies the enhancements that may affect existing
	Windows version 3.0 applications and explains how you can determine whether your
	application will run successfully under Windows version 3.1.
	
	Please read each section carefully and use the "Windows 3.1 Compatibility Test"
	(available separately) as a checklist to ensure that you have carried out the
	recommended tests. As you complete each test, mark whether your application
	passed or failed the test. If your application failed a test, please supply
	comments that will help Microsoft determine the cause of the compatibility
	problem. If you choose not to carry out a test, please indicate why in the
	comments section.
	
	When you have completed the Compatibility Test, return it to:
	
	  Windows Compatibility Test
	  Microsoft Corporation
	  One Microsoft Way
	  Building 4
	  Redmond, WA 98052-6399
	
	Due to the amount of information in this document, it has been broken into seven
	pieces. To find all seven pieces of this document and the Windows 3.1
	Compatibility Test checklist, query this knowledge base on the words:
	
	  prod(winsdk) and 31compattest
	
	Application Installation Programs
	---------------------------------
	
	Enhancements to the Program Manager's group file format and extensions to the
	PROGMAN.INI file may affect your application's installation program.
	
	Potential Problem:
	
	Your installation program may not correctly add your application's icon to
	Program Manager or may not correctly save your application's PROGMAN.INI
	settings.
	
	Tests:
	
	Run your installation program in each of the following applicable environments:
	
	- MS-DOS
	
	- MS-DOS command prompt under Windows version 3.1
	
	- Windows using the Run command in the Program Manager's File menu
	
	      Windows Setup
	-------------
	
	Windows version 3.1 Setup is easier to use, faster, more robust, and capable of
	detecting more hardware and network configurations than was the Windows version
	3.0 Setup. Special attention was given to the need to upgrade from Windows
	version 3.0 while maintaining existing group files and WIN.INI settings.
	
	Potential Problem:
	
	Setup may fail to correctly preserve your application's program group files and
	WIN.INI settings.
	
	Test:
	
	Use Setup to install Windows version 3.1 on a computer on which both Windows
	version 3.0 and your application are already installed. After installation, be
	sure that your application's WIN.INI settings are correct and that your
	application runs properly.
	
	        Shell Application
	-----------------
	
	This section applies only to applications that replace the standard Windows shell
	application, Program Manager. The shell application (as specified by the "shell"
	setting in the SYSTEM.INI file) is no longer guaranteed to be the first
	process.
	
	Potential Problem:
	
	An application that assumes it is the shell only when it is the first process
	will not exit Windows correctly when terminated.
	
	Test:
	
	Make your application the shell by specifying your application's executable
	filename with the "shell" setting in the SYSTEM.INI file. Exit Windows and be
	sure Windows terminates correctly.
	
	Solution:
	
	Your application must determine whether it is the shell by doing the following:
	
	1. Check the number of processes running when it starts.
	
	2. If more than one process is running, check the shell setting in the
	  SYSTEM.INI file.
	
	Windows Shell Applications
	--------------------------
	
	Enhancements to the Program Manager, File Manager, Print Manager, and Control
	Panel may affect your application.
	
	DRAG AND DROP:
	
	Drag and drop was reimplemented, and Windows now exports the drag-drop functions
	and message (WM_DROPFILES).
	
	Potential Problem:
	
	An application that reverse-engineered the Windows version 3.0 drag- drop
	protocol may encounter difficulties.
	
	Tests:
	
	1. Drag a file from File Manager to your application. Be sure your application
	  opens the proper file.
	
	2. Drag a file associated with your application to Print Manager. Be sure your
	  application opens and prints the proper file.
	
	SYSTEM COLORS:
	
	Windows now provides more system colors and user preferences. Users can select
	separate colors for active and inactive title bar text, button face, button
	shadow, button text, button highlight, disabled text, highlight, and highlighted
	text. Different wallpapers and color schemes were added, and the default color
	scheme is changed.
	
	Potential Problem:
	
	An application may not use all colors correctly.
	
	Test:
	
	Display your application's windows, dialog boxes, and controls, and check the
	colors of the active and inactive title bar text, button face, button shadow,
	button text, button highlight, disabled text, highlight, and highlighted text
	colors. Use the Control Panel to set each of the following system color
	schemes:
	
	- System colors set to default.
	
	- System colors set to a nondefault color scheme, such as Arizona.
	
	- System colors set to a random scheme in which you set colors individually.
	  (Don't use the predefined color schemes.)
	
	CARDFILE AND WRITE FILES:
	
	The Cardfile file format is changed, and both Cardfile and Write documents can
	now contain embedded OLE objects.
	
	Potential Problem:
	
	Any application that makes assumptions about Cardfile and Write file formats may
	not be able to read or write to these files correctly.
	
	Tests:
	
	1. Use your application to create Cardfile or Write files. Use Windows version
	  3.1 Cardfile and Write to open and view the files.
	
	2. Use Windows version 3.1 Cardfile and Write to create files containing OLE
	  objects. Be sure your application can open and read the files.
	
	OTHER CONSIDERATIONS:
	
	- Path searching is enhanced. When trying to load DLLs, Windows searches
	  directories in the following order: current directory, Windows directory,
	  System directory, application directory, path. The application directory is
	  new for Windows version 3.1.
	
	- Title fonts for Program Manager and desktop icons are changed, and icon
	  titles can now wrap.
	
	- More than one printer can now be installed on a port.
	
	- Control Panel's font installation is enhanced.
	
	- Program Manager automatically reconnects network drives and devices when
	  Windows is restarted.
	
	- File Manager is entirely new for Windows version 3.1. File Manager includes
	  an interface that lets applications add menu items to File Manager menu by
	  using a File Manager extension library.
	
	- Control Panel now provides an interface for adding new Control Panel
	  applications and icons.
	
	- The Startup group contains applications that load whenever Windows is
	  started. For backward compatibility, Windows continues to support the "load"
	  line in the WIN.INI file.
	
	- The [intl] section in the WIN.INI file is enhanced. More date formats and
	  currency symbols are available.
	
	- Desktop spacing can now be changed by a new setting in the WIN.INI file and
	  by the SystemParametersInfo function.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
