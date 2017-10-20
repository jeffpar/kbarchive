---
layout: page
title: "Q297677: PRB: VB 5.0 Installation on Windows 2000 Ignores Start Menu"
permalink: /kb/297/Q297677/
---

## Q297677: PRB: VB 5.0 Installation on Windows 2000 Ignores Start Menu

{% raw %}

	Article: Q297677
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,97
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, used with:
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Studio 97, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Visual Basic 5.0 on the Windows 2000 operating system (either
	the stand-alone version or as part of the Visual Studio suite of programs), no
	icons show up in the Start menu system.
	
	CAUSE
	=====
	
	Visual Basic 5.0 is not aware of the Start menu system located in the \Documents
	and settings path in the Windows 2000 operating system. When Visual Basic is
	installed, the installation completes successfully, with the exception of
	creating the icons in the Start menu under Programs.
	
	RESOLUTION
	==========
	
	There are two ways to resolve this problem:
	
	- Method 1 (manual method): Add a subfolder under <system drive
	  letter>:\Documents and Settings\All Users\Start Menu\Programs named
	  "Microsoft Visual Basic 5.0". After this folder has been created, shortcuts
	  can be manually added.
	
	- Method 2 (code method): Use the following Microsoft Visual Basic Script to
	  add the icons and program subfolders to the menus:
	
	  Start Microsoft Notepad, and then copy and paste the code into your Notepad
	  document. Save the file with a .vbs extension. Double-click the file under My
	  Computer or in Windows Explorer to run the code.
	
	  NOTES: If the Windows 2000 operating system is installed on a drive other than
	  C:, change all references in the code to the appropriate drive letter.
	
	  This script will create all icons for the full Enterprise installation. If you
	  have not installed all the items the extra icons can be deleted.
	
	  Dim fso, f
	  'creating folder on \start programs'
	     Set fso = CreateObject("Scripting.FileSystemObject")
	     Set f = fso.CreateFolder("c:\Documents and Settings\All Users\Start Menu\Programs\Microsoft Visual Basic 5.0")
	     CreateFolderDemo = f.Path
	
	  set wshshell=createobject("wscript.shell")
	
	  'creating first shortcut'
	           set oUrlLink = WshShell.CreateShortcut(f.Path & "\API Text Viewer.lnk")
	           oUrlLink.TargetPath = "c:\devstudio\vb\winapi\apiload.exe"
	           oUrlLink.Save
	        
	
	  'creating second shortcut' 
	           set oUrlLink = WshShell.CreateShortcut(f.Path & "\Application Performance Explorer.lnk")
	           oUrlLink.TargetPath = "c:\devstudio\vb\clisvr\aemanagr.exe"
	           oUrlLink.Save
	
	  'creating third shortcut'
	           set oUrlLink = WshShell.CreateShortcut(f.Path & "\Application Setup Wizard.lnk")
	           oUrlLink.TargetPath = "c:\devstudio\vb\setupkit\kitfil32\setupwiz.exe"
	           oUrlLink.Save
	
	  'creating fourth shortcut'
	           set oUrlLink = WshShell.CreateShortcut(f.Path & "\Automation Manager.lnk")
	           oUrlLink.TargetPath = "c:\winnt\system32\autmgr32.exe"
	           oUrlLink.Save
	
	  'creating fifth shortcut'
	           set oUrlLink = WshShell.CreateShortcut(f.Path & "\Books Online.lnk")
	           oUrlLink.TargetPath = "c:\devstudio\VB\vbonline\VBONLINE.EXE"
	           oUrlLink.Save
	
	  'creating sixth shortcut'
	           set oUrlLink = WshShell.CreateShortcut(f.Path & "\Crystal Reports.lnk")
	           oUrlLink.TargetPath = "c:\devstudio\VB\report\CRW32.EXE"
	           oUrlLink.Save
	
	  'creating seventh shortcut'
	           set oUrlLink = WshShell.CreateShortcut(f.Path & "\Readme.lnk")
	           oUrlLink.TargetPath = "c:\devstudio\VB\README.HLP"
	           oUrlLink.Save
	
	  'creating eighth shortcut'
	           set oUrlLink = WshShell.CreateShortcut(f.Path & "\RemAuto Connection Manager.lnk")
	           oUrlLink.TargetPath = "c:\devstudio\VB\Clisvr\RACMGR32.EXE"
	           oUrlLink.Save
	
	  'creating ninth shortcut' 
	           set oUrlLink = WshShell.CreateShortcut(f.Path & "\Visual Basic 5.0.lnk")
	           oUrlLink.TargetPath = "c:\devstudio\VB\VB5.EXE"
	           oUrlLink.Save
	
	  MsgBox "Done. Thank you for choosing Microsoft Technical Support"
	
	MORE INFORMATION
	================
	
	The information provided in this article is based on a full installation to the
	default installation location when installing Visual Basic 5.0.
	
	Additional query words: VB5 Win2000 visual studio basic 5.0 Win2K
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :5.0,97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
