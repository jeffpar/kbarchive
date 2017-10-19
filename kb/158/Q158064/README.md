---
layout: page
title: "Q158064: PRB: &quot;VFP500.dll Is Invalid or Damaged&quot; Error in VFP 5.0"
permalink: /kb/158/Q158064/
---

## Q158064: PRB: &quot;VFP500.dll Is Invalid or Damaged&quot; Error in VFP 5.0

	Article: Q158064
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message "The file Vfp500.dll is invalid or damaged" appears when you
	try to run an executable on a machine that does not have Visual FoxPro installed
	This error occurs even if you have copied the Vfp500.dll file and the
	Vfp5enu.dll file to the /Windows/System folder.
	
	CAUSE
	=====
	
	This is caused by an outdated dynamic-link library (DLL). Oleaut32.dll. When you
	install Visual FoxPro, this DLL gets updated.
	
	It has not been updated on the machine to which the executable has been copied.
	The Setup Wizard's setup program has not been used to install the executable on
	the destination system.
	
	RESOLUTION
	==========
	
	Use the Setup Wizard to create distribution disks, and install the application
	from them or create a netsetup and install from the network. The Setup Wizard
	takes care of updating Oleaut32.dll.
	
	If you choose not to use the Setup Wizard use one of the two methods outlined
	below. The first method applies to Windows 95. The second method applies to
	Windows NT 3.51.
	
	NOTE: If the Windows 95 method is used on a Windows NT 3.51 machine the machine
	is rendered UNBOOTABLE!
	
	Windows 95
	----------
	
	The outdated Oleaut32.dll file on the destination machine may be in use by other
	programs. Do not replace it while Windows is active. If you wish to just copy
	the Oleaut32.dll from the development machine, copy the file from the
	\Windows\System folder to a disk, then boot the destination machine to an MS-DOS
	prompt, and copy the file from the disk to that machine's \Windows\System
	folder.
	
	Windows NT 3.51
	---------------
	
	Do not copy the Oleaut32.dll file to the Windows\System folder!
	
	Follow the directions under the heading "To Update the Service Pack version of
	Oleaut32.dll" in the Readme.hlp file in the Visual FoxPro directory.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an executable that runs a simple program, such as one that executes a
	  WAIT WINDOW command.
	
	2. Copy the executable to another machine that does not have Visual FoxPro
	  installed on it.
	
	3. Copy the Vfp500.dll and the Vfp5enu.dll from the development system's
	  \Windows\System folder to the destination system's \Windows\System folder.
	
	4. Run the executable.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbsetup kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
