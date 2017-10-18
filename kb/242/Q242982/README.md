---
layout: page
title: "Q242982: PRB: VFP Hangs on Windows 98 When Using Novell NetWare Client"
permalink: kb/242/Q242982/
---

## Q242982: PRB: VFP Hangs on Windows 98 When Using Novell NetWare Client

	Article: Q242982
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the APPEND FROM <xlfile.xls> TYPE XL8 command makes Visual FoxPro
	either disappear or produce an error. In Visual FoxPro 6.0 running under Windows
	NT 4.0, the following error message might appear before the application closes:
	
	  Fatal error: Exception code=C0000005
	
	After selecting OK, Visual FoxPro disappears. In Visual FoxPro 6.0 Service Pack 3
	running under Windows NT 4.0, FoxPro simply disappears after executing the
	APPEND FROM command. No error message appears.
	
	In Visual FoxPro 6.0 Service Pack 3 running under Windows 98, the following error
	appears:
	
	  Microsoft Excel file format is invalid.
	
	
	RESOLUTION
	==========
	
	1. Open the Network Applet in the Windows Control Panel.
	
	2. Select the Novell NetWare Client from the network components and click the
	  Properties button.
	
	3. Select the Advanced Settings tab of the Novell NetWare Client Properties
	  dialog.
	
	4. Select the "Use Extended File Handles" property.
	
	5. Change the "Setting" value to "ON."
	
	MORE INFORMATION
	================
	
	The Novell NetWare Client for Windows 95 release 3.0 and greater, has a new Use
	Extended File Handles property that has been added to the Advanced Settings. The
	default setting for Use Extended File Handles is "OFF."
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Launch Visual FoxPro and set the default directory to a directory on a Novell
	  Netware Server.
	
	2. Create a program file named "DEMO.PRG" with the following code:
	
	  CLOSE ALL
	  SET SAFETY OFF
	  IF !FILE("base.dbf")
	     CREATE TABLE BASE (basekey c(10), memofld m)
	     INSERT INTO BASE (basekey,memofld) VALUES ("0000001","this is ;
	     a test")
	     INDEX ON basekey TAG basekey OF BASE
	  ENDIF
	  FOR i=1 TO 100
	     thisstr="file"+ALLTRIM(STR(i))
	     SELECT DISTINCT * FROM BASE INTO TABLE &thisstr
	     SELECT (thisstr)
	     INDEX ON basekey TAG basekey OF &thisstr
	  NEXT
	  SET SAFETY ON
	
	3. Run the DEMO.PRG file.
	
	4. When the following error message appears, click Cancel:
	
	  Too many files open
	
	5. From the Command window, type "DIR" (without the quotation marks). The
	  machine may hang at this point.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
