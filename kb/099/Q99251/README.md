---
layout: page
title: "Q99251: FILE: VBRUN300.EXE Resolves GP Fault in KRNL286"
permalink: kb/099/Q99251/
---

## Q99251: FILE: VBRUN300.EXE Resolves GP Fault in KRNL286

	Article: Q99251
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenv kbfile kbVBp kbVBp300 kbGrpDSVB kbDSupport
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter a general protection (GP) fault in KRNL286 at 0001:259F or
	0001:4FEC when you try to run a Visual Basic executable (.EXE) file in Windows
	on a 286 computer or in Windows NT on a MIPs computer.
	
	This problem will not occur when running a Visual Basic application from the
	Visual Basic design environment on a 286 or MIPs computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft Visual Basic
	programming system for Windows, version 3.0. To correct the problem, obtain the
	post-release version of Vbrun300.dll.
	
	VBRUN100.DLL & VBRUN200.DLL Also Available in Self-Extracting Files
	-------------------------------------------------------------------
	
	For your convenience, you can also obtain the .DLL files for Visual Basic
	versions 1.0 (VBRUN100.DLL in VBRUN100.EXE) and 2.0 (VBRUN200.DLL in
	VBRUN200.EXE). These files are not updates but are provided for your
	convenience. The following files are available for download from the Microsoft
	Download Center:
	
	  Vbrun100.exe
	  (http://download.microsoft.com/download/vb30/sampleAA/1/W9XNT4/EN-US/Vbrun100.exe)
	
	  Vbrun200.exe
	  (http://download.microsoft.com/download/vb30/Sample39/1/W9XNT4/EN-US/vbrun200.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Steps to Reproduce Problem in Visual Basic Version 3.0
	------------------------------------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. From the File menu, choose Make EXE File (ALT, F, k) and use the default name
	  of PROJECT1.EXE.
	
	3. Copy PROJECT1.EXE and VBRUN300.DLL to a 286 computer running Windows or a
	  MIPs computer running Windows NT.
	
	4. Run PROJECT1.EXE.
	
	A GP fault occurs in KRNL286 at 0001:259F or 0001:4FEC.
	
	MORE INFORMATION
	================
	
	This problem has been fixed in a post-release version of Vbrun300.dll, which is
	available as part of self-extracting file named Vbrun300.exe.
	
	The following file is available for download from the Microsoft Download Center:
	
	  vbrun300.exe
	  (http://download.microsoft.com/download/vb30/update/1/win98/EN-US/vbrun300.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	This bug occurs because of a problem with VBRUN300.DLL. The date, time, size and
	version number of the VBRUN300.DLL file that leads to this problem is as
	follows:
	
	  Date: 04-APR-1993
	  Time: 12:00 a.m.
	  Size: 394384
	  Version: 03.00.0537
	
	The date, time, size and version number of the VBRUN300.DLL file that fixes this
	problem is as follows:
	
	  Date: 12-MAY-1993
	  Time: 12:00 a.m.
	  Size: 398416
	  Version: 03.00.0538
	
	Additional query words: GPF softlib update3.00 S14633 S14632 S14631 vbrun100 vbrun200 vbrun300
	
	======================================================================
	Keywords          : kbenv kbfile kbVBp kbVBp300 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
