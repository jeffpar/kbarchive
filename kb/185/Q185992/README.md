---
layout: page
title: "Q185992: PRB: &quot;Wrong Version Of Run-Time DLL&quot; When Starting Application"
permalink: kb/185/Q185992/
---

## Q185992: PRB: &quot;Wrong Version Of Run-Time DLL&quot; When Starting Application

	Article: Q185992
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting a Visual Basic 5.0 application, you might receive the following
	error dialog box:
	
	  Error
	  "Wrong Version Of Run-Time DLL"
	
	CAUSE
	=====
	
	The wrong version of the run-time file, Msvbvm50.dll, is installed on the target
	machine.
	
	RESOLUTION
	==========
	
	The most recent version of Msvbvm50.dll must be installed.
	
	To resolve this problem, install a Visual Basic 5.0 application built using the
	Application Setup Wizard onto the target machine, or manually copy the most
	recent version of Msvbvm50.dll into the System directory (or System32 for NT
	machines) and register it using RegSvr32.Exe.
	
	To register the run-time file manually, use RegSvr32.Exe (shipped on the Visual
	Basic CD in the OS\System and Tools\RegUtils directories) as demonstrated
	below:
	
	1. On the Windows Start menu, click Run.
	
	2. Type in the following and press ENTER:
	
	  RegSvr32.Exe MSVBVM50.DLL
	
	  You should see a message similar to the following:
	
	  "DLLRegisterServer in C:\Windows\System\MSVBVM50.DLL succeeded"
	
	3. If you do not see this message, please make sure you have the most recent
	  version of Msvbvm50.dll and you have RegSvr32.Exe installed in the Windows
	  System or System32 folder.
	
	  NOTE: It is also possible to obtain all of the latest run-time files by
	  installing the self extracting EXE referred to in the following Microsoft
	  Knowledge Base article:
	
	  Q180071 : FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Application Setup Wizard should always be used to distribute your Visual
	Basic 5.0 applications (or an equivalent third-party distribution tool). This
	ensures that the necessary support files are brought along and installed on the
	target system.
	
	When compiling a Visual Basic program, the final output requires either the
	run-time file that is installed upon the development system (or a more recent
	run-time file). Older applications are not broken by newer versions of the
	run-time file, but newer applications are broken by older versions of the
	run-time file.
	
	However, sometimes the wrong version Visual Basic 5.0 run-time file can still be
	installed on a system and lead to the above error message. If the NT Option 4.0
	or Internet Information Server 4.0 is installed, there is the chance that an
	older version of the run-time file will be installed.
	
	There are currently two versions of the Visual Basic 5.0 run-time file:
	
	    Run-Time File     Version           Ships With
	    -------------------------------------------------------------------
	    Msvbvm50.dll      5.00.3724         Visual Basic 5.0
	                                        Visual Studio 97
	                                        NT Option Pack 4.0
	                                        Internet Information Server 4.0
	
	    Msvbvm50.dll      05.00.4319 (SP2)  Visual Studio Service Pack 2
	                                        Visual Studio Service Pack 3
	
	If you have installed the most recent version of the Visual Basic 5.0 run- time
	file, installing either the NT Option Pack 4 or Internet Information Server 4.0
	results in the older version of the run-time file replacing the most recent
	version, and all Visual Basic 5.0 applications compiled under Service Pack 2 or
	3 will break.
	
	Additional query words: kbDSupport kbdss kbAppSetup
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
