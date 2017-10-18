---
layout: page
title: "Q245124: FIX: Access Violation in Remote Automation Manager"
permalink: kb/245/Q245124/
---

## Q245124: FIX: Access Violation in Remote Automation Manager

	Article: Q245124
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Autmgr32.exe process may terminate with an Access Violation when large
	numbers of connections are made concurrently (usually more than 140). The access
	violation usually occurs at 0x0403C1F:
	
	00403C1F  8B00             mov         eax,dword ptr [eax]
	
	RESOLUTION
	==========
	
	This bug has been fixed in the Microsoft Visual Basic and Microsoft Visual
	Studio 6, Service Pack 4 version of the Autmgr32.exe file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbAutomation kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
