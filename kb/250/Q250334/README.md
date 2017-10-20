---
layout: page
title: "Q250334: PRB: MSDN Library Unable to Display Help from Within VS"
permalink: /kb/250/Q250334/
---

## Q250334: PRB: MSDN Library Unable to Display Help from Within VS

{% raw %}

	Article: Q250334
	Product(s): Microsoft Developer Network
	Version(s): 6.0,6.0 sp1, sp2, sp3
	Operating System(s): 
	Keyword(s): kbMSDN kbSSafe600 kbVBp600 kbVC600 kbvfp600 kbVisID600 kbVJ600 kbVS600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	- Microsoft Visual Studio versions 6.0, 6.0 sp1, sp2, sp3 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual Studio, Professional Edition 6.0 
	- Microsoft Visual Studio, Enterprise Edition 6.0 
	- Microsoft Visual J++, version 6.0 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft Visual InterDev, version 6.0 
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access MSDN Library Help from within Visual Studio programs
	using F1 or the Help menu, the following error message appears:
	
	  unable to display help
	
	CAUSE
	=====
	
	Vshelp.dll is not registered or is not correctly registered with the operating
	system.
	
	RESOLUTION
	==========
	
	To resolve this problem, run Regsvr32 to register Vshelp.dll:
	
	1. Search for Vshelp.dll.
	
	2. Select Start and then click Run. Type "Regsvr32" (without the quotation
	  marks).
	
	3. Click and hold on the file Vshelp.dll found in the search and drag it into
	  the Run box immediately following Regsvr32. Click OK.
	
	4. The system should return a "registered successfully" message. Click OK.
	
	5. Close both windows.
	
	6. Open a Visual Studio program and test Help.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This condition may occur after uninstalling the MSDN Library and reinstalling it
	to a new location.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	Unregister Vshelp.dll using "regsvr32 /U VSHELP.DLL".
	
	REFERENCES
	==========
	
	  Q216109 HOWTO: Troubleshoot MSDN Library Run-Time/Install/Uninstall
	
	  Q251147 PRB: "Unable to Display Help" or "No Help Available" Error Messages
	  for ADO from Within Visual Basic
	
	Additional query words: sp4 VSNET VS .NET
	
	======================================================================
	Keywords          : kbMSDN kbSSafe600 kbVBp600 kbVC600 kbvfp600 kbVisID600 kbVJ600 kbVS600 
	Technology        : kbVCsearch kbVSsearch kbVJsearch kbVisIDsearch kbVFPsearch kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbMSDNSearch kbZNotKeyword2 kbVB600Search kbVB600 kbVC600 kbVC32bitSearch kbVFP600 kbVisID600 kbVJ600 kbSSafe600 kbVS600 kbVS600SPxSearch kbVS600Search
	Version           : :6.0,6.0 sp1, sp2, sp3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
