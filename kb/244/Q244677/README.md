---
layout: page
title: "Q244677: HOWTO: Create a Desktop Shortcut with the Windows Script Host"
permalink: kb/244/Q244677/
---

## Q244677: HOWTO: Create a Desktop Shortcut with the Windows Script Host

	Article: Q244677
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbScript kbMiscTools kbvfp300b kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 25-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Script Host (WSH) is a tool that allows you to run
	Microsoft Visual Basic Scripting Edition and JScript natively within the base
	Operating System, either on Windows 95 or Windows NT 4.0. It also includes
	several COM automation methods that allow you to do several tasks easily through
	the Windows Script Host Object Model. The Microsoft Windows Script Host is
	integrated into Windows 98 and Windows 2000. It is available for Windows NT 4.0
	from within the Windows NT 4.0 Option Pack. It is also available for download
	from:
	
	http://www.msdn.microsoft.com/scripting
	
	MORE INFORMATION
	================
	
	This program demonstrates how to use the Windows Script Host to create a
	shortcut on the Windows Desktop. In order to run this example, you must have the
	Windows Script Host installed on your computer. To run one of these examples,
	copy the code below into a new program file and run it.
	
	Example 1
	
	  WshShell = CreateObject("Wscript.shell")
	  strDesktop = WshShell.SpecialFolders("Desktop")
	  oMyShortcut = WshShell.CreateShortcut(strDesktop + "\Sample.lnk")
	  oMyShortcut.WindowStyle = 3  &&Maximized 7=Minimized  4=Normal 
	  oMyShortcut.IconLocation = "C:\myicon.ico"
	  OMyShortcut.TargetPath = "%windir%\notepad.exe"
	  oMyShortCut.Hotkey = "ALT+CTRL+F"
	  oMyShortCut.Save
	
	Example 2
	
	(Add a command line argument)
	
	  WshShell = CreateObject("WScript.Shell")
	  strDesktop = WshShell.SpecialFolders("Desktop")
	  oMyShortCut= WshShell.CreateShortcut(strDesktop+"\Foxtest.lnk")
	  oMyShortCut.WindowStyle = 7  &&Minimized 0=Maximized  4=Normal 
	  oMyShortcut.IconLocation = home()+"wizards\graphics\builder.ico"
	  oMyShortCut.TargetPath = "c:\Program Files\Microsoft Visual Studio\VFP98\vfp6.exe" 
	  oMyShortCut.Arguments = '-c'+'"'+Home()+'config.fpw'+'"'
	  oMyShortCut.WorkingDirectory = "c:\"
	  oMyShortCut.Save
	
	Example 3
	
	(Add a URL Shortcut to the desktop)
	
	  WshShell = CreateObject("WScript.Shell")
	  strDesktop = WshShell.SpecialFolders("Desktop")
	  oUrlLink = WshShell.CreateShortcut(strDesktop+"\Microsoft Web Site.URL")
	  oUrlLink.TargetPath = "http://www.microsoft.com"
	  oUrlLink.Save
	
	Please note that all methods must be passed valid parameters for the shortcut to
	be created. No error appears if one of the parameters is incorrect.
	
	REFERENCES
	==========
	
	The following references are available at:
	http://www.msdn.microsoft.com/scripting/
	
	White paper:
	
	Windows Script Host: A Universal Scripting Host for Scripting Languages
	
	Technical Paper:
	
	Windows Script Host Programmer's Reference
	
	Additional query words:
	
	======================================================================
	Keywords          : kbScript kbMiscTools kbvfp300b kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
