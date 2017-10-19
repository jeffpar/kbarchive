---
layout: page
title: "Q191735: PRB: The Jet VBA File Failed to Initialize When Called"
permalink: /kb/191/Q191735/
---

## Q191735: PRB: The Jet VBA File Failed to Initialize When Called

	Article: Q191735
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbDAOsearch kbDatabase kbVC500 kbMFC500
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some application or driver setups might not perform version checking, and
	therefore overwrite newer DLLs with an older Msvcrt.dll and Mfc.dll. When this
	happens and an MFC application tries to open an Access database using MFC DAO,
	the following error is received:
	
	  The Jet VBA file VBAJET.DLL for 16-bit versions, or VBAJET32.DLL for
	  32- bit versions failed to initialize when called.
	
	This article exemplifies a particular driver setup which causes this error.
	
	CAUSE
	=====
	
	Some installation programs replace Msvcrt.dll and Mfc42.dll system files in the
	System32 folder with:
	
	- Msvcrt.dll (5.0.0.7128)
	
	- Mfc42.dll (5.0.0.7128)
	
	
	RESOLUTION
	==========
	
	Replace the Msvcrt.dll (5.0.0.7128) and Mfc42.dll (5.0.0.7128) with Msvcrt.dll
	(5.0.0.7303) and Mfc42.dll (5.0.0.7303) or newer respectively, obtained from
	Visual Studio 97 Service Pack 3 or later.
	
	For additional information about the Visual Studio 97 Service Pack 3, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an Access Database.
	
	2. Create a DSN to access the Database created in step 1.
	
	3. Create an MFC Database application that uses the DSN created in step 2.
	
	
	4. Install the offending program or overwrite the existing Msvcrt.dll and
	  Mfc42.dll with the older versions.
	
	5. Run the application created in step 3.
	
	6. The following error message appears:
	
	  The Jet VBA file VBAJET.DLL for 16-bit versions, or VBAJET32.DLL for
	  32-bit versions failed to initialize when called.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbDAOsearch kbDatabase kbVC500 kbMFC500 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
