---
layout: page
title: "Q248458: PRB: Connecting to MAS 90 ODBC Driver Fails in Visual FoxPro"
permalink: kb/248/Q248458/
---

## Q248458: PRB: Connecting to MAS 90 ODBC Driver Fails in Visual FoxPro

	Article: Q248458
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbDatabase kbODBC kbvfp300b kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSuppor
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After connecting to the Sage MAS 90 32-bit ODBC driver, all the versions of
	Visual FoxPro listed above terminate with the following error:
	
	  An application error has occurred and an application log is being generated.
	  vfp.exe
	  Exception:access violation (0x0000005), Address: <memory address>
	
	When running under Microsoft Windows version 9x, you receive different error
	messages but Visual FoxPro still terminates.
	
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the Sage MAS 90 accounting package or the demo.
	
	2. Create a new database container.
	
	3. Create a remote view and choose the Available data sources option.
	
	4. Choose the SOTAMAS90 data source from the Available data sources list box on
	  the Select Connection or Data Source dialog box.
	
	5. Click OK.
	
	Immediately after you click OK, Visual FoxPro reports the error listed in the
	"Symptoms" section and terminates.
	
	Additional query words: vfp
	
	======================================================================
	Keywords          : kb3rdparty kbDatabase kbODBC kbvfp300b kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
