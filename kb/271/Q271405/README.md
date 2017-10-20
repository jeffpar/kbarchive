---
layout: page
title: "Q271405: PRB: Batch Files Do Not Run as Post Executables in Setup"
permalink: /kb/271/Q271405/
---

## Q271405: PRB: Batch Files Do Not Run as Post Executables in Setup

{% raw %}

	Article: Q271405
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbOSWinNT400 kbOSWin2000 kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500aF
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run a batch file as a post executable in an setup package built
	by Visual FoxPro's Setup Wizard, the batch file does not execute if it is run on
	a Microsoft Windows NT 4.0 or a Microsoft Windows 2000-based operating system.
	The batch file does execute properly if it is run on Microsoft Windows 9X-based
	operating systems.
	
	MORE INFORMATION
	================
	
	In step 4 of the Visual FoxPro Setup Wizard, there is a Post-Setup Executable
	text box. The file specified in this box runs at the end of the setup package
	created by the wizard. This file is usually an executable (.exe) or batch (.bat)
	file. An .exe executes at the end of the setup routine regardless of what
	operating system is running, but a .bat file does not execute on NT 4.0 or
	Windows 2000-based operating systems.
	
	NOTE: .CMD files, an alternative to batch files on Windows NT and Windows 2000
	computers, also do not run as Post-Setup Executables.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a batch file called "Do_Batch.bat" (without the quotation marks) in a
	  new folder, and then add some DOS commands, such as:
	
	  CD C:\ 
	  MD Mybatch
	
	If the batch file executes properly, a folder called Mybatch is created on the C:
	drive.
	
	2. Create a Visual FoxPro executable in the same folder as the batch file. The
	  .exe can be small; a .prg with a WAIT WINDOW command will do.
	
	3. Run the Visual FoxPro Setup Wizard, pointing to the files that are in the
	  folder created in step 1. Type the file name "Do_Batch.bat" (without the
	  quotation marks) in the Post-Executable text box in step 4.
	
	4. Select Finish in step 6 of the Setup Wizard, allow the setup package to be
	  created, and then run Setup.exe to start the installation. If you are doing
	  this on a NT 4.0 or Windows 2000 computer, note that the batch file does not
	  execute as a Post-Setup Executable.
	
	5. Note that when you are running the setup routine on a Win 9X computer, the
	  batch file executes successfully.
	
	REFERENCES
	==========
	
	For additional information on the post-setup option in the Visual FoxPro Setup
	Wizard, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q176887 FIX: Running VFP Exe as Post-Setup Executable Hangs the Process
	
	  Q194434 HOWTO: Using the Setup Wizard in Visual FoxPro 6.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbOSWinNT400 kbOSWin2000 kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500aFIX kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
