---
layout: page
title: "Q138658: PRB:Screen Turns Black &amp; Returns as Start Visual FoxPro or Exe"
permalink: /kb/138/Q138658/
---

## Q138658: PRB:Screen Turns Black &amp; Returns as Start Visual FoxPro or Exe

	Article: Q138658
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Visual FoxPro or a Visual FoxPro application executable (.exe)
	file on a 16-bit operating system, the screen flashes black, as if going to an
	MS-DOS session, and then it returns to Windows without starting Visual FoxPro or
	the application. Or you receive this error message:
	
	  This program cannot be run in DOS mode.
	
	CAUSE
	=====
	
	The Win32s subsystem is missing or is not properly installed. On 16-bit Windows
	platforms, such as Windows 3.1 or Windows for WorkGroups 3.11, the Win32s
	subsystem in necessary for Visual FoxPro and Visual FoxPro application .exe
	files to run.
	
	RESOLUTION
	==========
	
	If Visual FoxPro won't start, you need to reinstall the Win32s subsystem. For
	more information about how to reinstall the Win32s subsystem, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q129979 How to Reinstall Win32s with Visual FoxPro
	
	If a Visual FoxPro application .exe file won't start, use one of the following
	two possible resolutions:
	
	- If the Setup Wizard was not used to create distribution floppy disks for your
	  executable, run the Setup Wizard to create a set of distribution disks disks
	  or a netsetup directory for workstation installations. Then in "Step 2 -
	  Optional Components" of the Setup Wizard, select Win32s as one of the
	  optional components.
	
	-or-
	
	- If the Setup Wizard was used to create distribution diskettes, rerun the
	  Setup Wizard to rebuild the floppy disk images. Be sure to select Win32s as
	  one of the optional components on "Step 2 - Optional Components."
	
	NOTE: Windows 95 and Windows NT are 32-bit operating systems and do not require
	the Win32s subsystem.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build a Visual FoxPro executable (.exe) file.
	
	2. Place the .exe file and Vfp300.esl files onto a computer running a 16-bit
	  version of Windows that does not have a version of Win32s installed.
	
	3. Attempt to run the executable.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
