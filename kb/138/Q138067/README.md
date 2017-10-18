---
layout: page
title: "Q138067: HOWTO: Hide the Automation Manager"
permalink: kb/138/Q138067/
---

## Q138067: HOWTO: Hide the Automation Manager

	Article: Q138067
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbAutomation _IK964 kbVBp kbVBp400 kbVBp500 kbGrpDSVB kbRemoteProg
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Remote OLE Automation occurs when a client requests an object from a remote
	server. For Remote OLE Automation to work, an application known as the
	Automation Manager (AM) must be running on the server computer. When the AM is
	started on the remote server computer, the LocalServer32 subkey under the clsid
	key for the AM in the system registry is read. The AM is visible by default.
	There are two ways to do this, either specify /Hidden as a command line switch
	for the AM or modify a registry entry for the AM.
	
	MORE INFORMATION
	================
	
	To specify a command line switch for the AM, you will need to edit its command
	line in the properties window provided by Windows 2000, Windows NT, Windows Me,
	Windows 98, or Windows 95. You will want something like this:
	
	  C:\Winnt35\System32\Autmgr32.exe /Hidden
	
	You need to add the /Hidden switch in the system registry as follows under the
	CLSID of the Automation Manager in order to hide the AM:
	
	  FA4FEBC3-4591-11CE-95E5-00AA0051E510 (Remote Automation CLSID_StubMarshaler)
	  LocalServer32 = C:\WINNT35\SYSTEM32\AUTMGR32.EXE /Automation /HIDDEN
	
	NOTE: Once it is hidden, the only way to terminate the AM is through the Pview
	system utility under Windows NT or Windows 2000 and the Pview95 system utility
	under Windows 95.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation _IK964 kbVBp kbVBp400 kbVBp500 kbGrpDSVB kbRemoteProg 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
