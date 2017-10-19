---
layout: page
title: "Q221173: PRB: Installing VB6 Doesn't Update Clireg32.exe"
permalink: /kb/221/Q221173/
---

## Q221173: PRB: Installing VB6 Doesn't Update Clireg32.exe

	Article: Q221173
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDCOM kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating a Visual Basic application that references remote servers using
	DCOM and then installing it on a target machine, the application crashes when it
	tries to call the remote server.
	
	CAUSE
	=====
	
	This can occur if you are still using the older version of Clireg32.exe. For
	additional information on this problem, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q185193 CLIREG32 Fails to Register TypeLibrary of DCOM server
	
	RESOLUTION
	==========
	
	Visual Basic 6.0 ships a newer version of Clireg32.exe that can be found on the
	Visual Basic 6.0 or Visual Studio 6.0 CDs. However, when you install Visual
	Basic 6.0 or Visual Studio 6.0, the newer version does not get installed on your
	machine. Consequently, when you create a distribution package for your Visual
	Basic 6.0 applications, the Package and Deployment Wizard (PDW) takes the old
	version of Clireg32.exe from the winnt\system32 directory and includes it in the
	distribution list. When this happens, you experience the problem described in
	the above Knowledge Base article.
	
	To solve the problem:
	
	1. Check if you have the old version in the winnt\system32 folder. The versions
	  are:
	
	   - Old Version: 5.00.3716 Size: 44 kb Date: 1/16/97 12:00
	
	   - New Version: 6.00.8168 Size: 42 kb Date: 6/17/98 12:00
	
	2. If the old version exists, copy the new version from the Visual Basic 6.0 CD
	  into the Winnt\system32 directory.
	
	3. Recreate the distribution files with the PDW.
	
	4. Reinstall the client to the workstations.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDCOM kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
