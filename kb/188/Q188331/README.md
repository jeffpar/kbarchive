---
layout: page
title: "Q188331: PRB: Opening Property Page Results in &quot;Class Not Registered&quot;"
permalink: /kb/188/Q188331/
---

## Q188331: PRB: Opening Property Page Results in &quot;Class Not Registered&quot;

	Article: Q188331
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the property page for a control, the following error message
	appears:
	
	  Class Not Registered.
	  Looking For Object With CLSID {7EBDAAE1-8120-11CF-899F-00AA00688B10}
	
	NOTE: The actual CLSID might be different.
	
	CAUSE
	=====
	
	One or more of the stock property page objects have not been properly registered
	on the development system.
	
	RESOLUTION
	==========
	
	You need to manually register the Msstkprp.dll file.
	
	Step-by-Step Procedure
	----------------------
	
	1. Copy the Msstkprp.dll file from \OS\System folder on your Visual Basic CD to
	  your Windows\System folder (or the System32 folder if you are using Microsoft
	  Windows NT).
	
	2. Use the RegSvr32 utility to manually register the Msstkprp.dll. On the
	  Windows Start menu, click Run, and then type the following command:
	
	  "Regsvr32 C:\Windows\System\Msstkprp.dll" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	Manually registering the Msstkprp.dll file resolves problems with objects that
	have the following CLSID's:
	
	- 7EBDAAE1-8120-11CF-899F-00AA00688B10: Stock Color Property Page Object
	- 7EBDAAE0-8120-11CF-899F-00AA00688B10: Stock Font Property Page Object
	- 7EBDAAE2-8120-11CF-899F-00AA00688B10: Stock Picture Property Page Object
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
