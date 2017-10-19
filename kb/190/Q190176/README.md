---
layout: page
title: "Q190176: BUG: Visual Basic Setup Does Not Re-Register System Files"
permalink: /kb/190/Q190176/
---

## Q190176: BUG: Visual Basic Setup Does Not Re-Register System Files

	Article: Q190176
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbRegistry kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Visual Basic and load an existing project using any
	controls, you get the following error:
	
	  Class not registered
	
	If you re-install Visual Basic and run the same project again, the same error
	occurs.
	
	CAUSE
	=====
	
	Visual Basic does not re-register the following files when you re-install it:
	
	COMCAT.DLL
	STDOLE2.TLB
	OLEPRO32.DLL
	OLEAUT32.DLL
	MSVBVM60.DLL
	
	RESOLUTION
	==========
	
	You can manually register each of the above .DLL files by using the Microsoft
	Register Server utility (regsvr32.exe). The syntax for using Regsvr32.exe is as
	follows:
	
	  Regsvr32 [/u] [/s] <File Name>
	
	where:
	
	- /u - Unregisters the file based on the <File Name> argument.
	
	- /s - Registers the file in silent mode, suppressing all messages.
	
	- <File Name> - The complete path and file to be
	  registered/unregistered.
	
	  NOTE: Regsvr32.exe does not register typelibs (.TLBs)
	
	You can obtain Regsvr32.exe from your Visual Basic CD-ROM under the os\system
	directory, which can be copied to the windows\system directory for future use.
	To register the files, select Run from the Start menu, and, in the Open box,
	type:
	
	  <path to regsvr32.exe>\regsvr32 <path to windows>\system\<name
	  of system file>
	
	For example, assuming the windows directory is c:\windows, type the following in
	the Open box to register comcat.dll:
	
	  c:\windows\system\regsvr32 c:\windows\system\comcat.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbRegistry kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
