---
layout: page
title: "Q132207: PRB: MSINFO Not Installed on Windows NT or Windows 95"
permalink: /kb/132/Q132207/
---

## Q132207: PRB: MSINFO Not Installed on Windows NT or Windows 95

{% raw %}

	Article: Q132207
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 02-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Visual FoxPro version 3.0 on Windows NT or Windows 95, you
	notice that MSINFO is not installed by the Complete configuration option.
	
	
	CAUSE
	=====
	
	MSINFO is a Microsoft Technical Support application designed to gather system
	configuration information from customers. This information can assist a
	technical support professional to more quickly identify the cause of a
	customer's problem. The current version of MSINFO writes information about
	itself to the WIN.INI file when it is installed.
	
	Windows 95 logo requirements specify that applications use the registry and not
	the Win.ini or System.ini files to store application information. This ensures
	that applications are properly registered and visible in the Windows 95
	environment. To meet these logo requirements, Visual FoxPro's default (Complete)
	installation does not include MSINFO under Windows NT or Windows 95, which are
	both 32-bit environments.
	
	NOTE: MSINFO is included in the complete installation of Visual FoxPro version
	3.0 under Windows version 3.1x and Windows for Workgroups version 3.11.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	If you're running Setup for the first time, you can add MSINFO in your Visual
	FoxPro version 3.0 installation under Windows NT or Windows 95 by following
	these steps:
	
	1. In Setup, click the Custom installation button in the Big Button dialog box.
	
	2. Click the MS Tools check box to enable the Change Option button.
	
	3. Click the Change Option button.
	
	4. In the Microsoft Tools dialog box, click the MS Info installation check box,
	  and click the OK button.
	
	5. Continue with the Setup process.
	
	If you've already installed Visual FoxPro and now want to install MSINFO, click
	the Microsoft Visual FoxPro Setup icon to run Maintenance Mode Setup:
	
	1. When the Setup dialog box appears, click the Add/Remove button.
	
	2. Follow steps 2-5 above.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
