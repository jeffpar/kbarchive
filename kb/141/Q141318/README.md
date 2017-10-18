---
layout: page
title: "Q141318: PRB: &quot;Error #101 in addgraphdata(0)&quot; in Query Designer"
permalink: kb/141/Q141318/
---

## Q141318: PRB: &quot;Error #101 in addgraphdata(0)&quot; in Query Designer

	Article: Q141318
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With a laptop installation of Visual FoxPro for Windows, when you try to output
	the results of a query to a graph, the following error message is returned:
	
	  Error #101 in addgraphdata(0): cannot open file fxole30b.dll
	
	CAUSE
	=====
	
	A laptop installation of Visual FoxPro for Windows does not install the
	Fxole30b.dll file.
	
	WORKAROUND
	==========
	
	A complete installation works correctly.
	
	MORE INFORMATION
	================
	
	A complete installation of a previous version of Visual FoxPro will install
	Microsoft Graph. An upgrade of just the laptop version of Visual FoxPro will
	leave the Microsoft Graph files there but will not install the Fxole30b.dll
	file. This allows the Graph button under the Output Settings to be enabled, but
	when you click the button, an error occurs. A complete installation of Visual
	FoxPro installs Fxole30b.dll, so no error is generated.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a query.
	
	2. Choose Graph under the Output Settings.
	
	3. Run Query, and follow steps in Graph Wizard.
	
	4. Click Finish, and the error message appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
