---
layout: page
title: "Q129800: PRB: VB/VB Apps Won't Run if Windows NT OLE Service Stopped"
permalink: /kb/129/Q129800/
---

## Q129800: PRB: VB/VB Apps Won't Run if Windows NT OLE Service Stopped

	Article: Q129800
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0; winnt:3.51
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming kbVBp400
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the OLE service under Windows NT is stopped, when you attempt to start Visual
	Basic or an application written with Visual Basic, you'll see this error:
	
	  "Unexpected error; quitting"
	
	Or, if the OLE service is stopped while Visual Basic or an application written
	with Visual Basic is running and you attempt to use an OLE control in Visual
	Basic, you'll see this error:
	
	  "Unable to create embedded object"
	
	CAUSE
	=====
	
	Visual Basic uses OLE extensively for controls, data access, and even internal
	communication. The OLE Service is a necessary component for Visual Basic, but it
	is not absolutely necessary for this service to be running under Windows NT. It
	may be stopped to increase the overall performance of other tasks. If this is
	done, Visual Basic and Visual Basic applications will not run.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Scenario One
	------------
	
	1. With Windows NT running, go to an MS-DOS command prompt. (Double-click the
	  MS-DOS Command Prompt icon in your Main group in Program Manager.)
	
	2. Type the following at the command prompt:
	
	  " Net Stop OLE" (without the quotation marks)
	
	3. Switch back to Windows, and start Visual Basic. You'll see this error:
	
	  Unexpected error; quitting
	
	4. Switch back to MS-DOS, and type the following to restore everything to
	  normal:
	
	  " Net Start OLE" (without the quotation marks)
	
	Scenario Two
	------------
	
	1. Start Visual Basic.
	
	2. With Windows NT running, go to an MS-DOS command prompt. (Double-click the
	  MS-DOS Command Prompt icon in your Main group in Program Manager.)
	
	3. Type the following at the command prompt.
	
	  " Net Stop OLE" (without the quotation marks)
	
	4. Attempt to add an OLE control to the default form. (Any control where an .OCX
	  file appears in your Project window will be an OLE control.) Visual Basic
	  reports this error:
	
	  Unable to create embedded object
	
	5. Switch back to MS-DOS, and type the following to restore everything to
	  normal:
	
	  " Net Start OLE" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbProgramming kbVBp400 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0; winnt:3.51
	Issue type        : kbprb
	
	=============================================================================
	
