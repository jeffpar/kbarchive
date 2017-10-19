---
layout: page
title: "Q164127: OLE Error Running Applications After Applying SP2"
permalink: /kb/164/Q164127/
---

## Q164127: OLE Error Running Applications After Applying SP2

	Article: Q164127
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 2, you may receive one of the
	following OLE error messages when running an application that makes a call to
	create a form and alter the font attributes:
	
	  Run-time error '429': OLE Automation server can't create object
	
	-or-
	
	  OLE error 31037 -- "Error Loading from File"
	
	CAUSE
	=====
	
	This is caused by the changes to Olepro32.dll in Service Pack 2 where Olepro32
	became a shell that now thunks any OLE call to other OLE executable files. Some
	of the functions are not automatically being thunked over to the new executable
	files.
	
	RESOLUTION
	==========
	
	To work around the above errors, run the following at a command prompt:
	
	  REGSVR32 OLEPRO32.DLL
	  REGSVR32 OLEAUT32.DLL
	
	Regsvr32.exe is located in the %SystemRoot%\System32 folder.
	
	After you run the above commands, you should be able to run your application
	without experiencing the error messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: visual c c++ vcapp code
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
