---
layout: page
title: "Q240927: FIX: Cannot Read Source File Error Running PDW Distribution"
permalink: /kb/240/Q240927/
---

## Q240927: FIX: Cannot Read Source File Error Running PDW Distribution

	Article: Q240927
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbGrpDSVB kbDSupport kbVS600sp4fix kbVS
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing a Visual Basic application created with the Package and
	Deployment Wizard (PDW) and the package contains one or more DLLs with long file
	names, an error similar to the following occurs and the installation
	terminates:
	
	  Cannot read source file c:\windows\temp\rbt5120.tmp
	
	CAUSE
	=====
	
	This problem is caused by mismatched components on the target system. Once an
	install has been made successfully, the problem does not recur.
	
	
	RESOLUTION
	==========
	
	Create a PDW package with a simple Visual Basic project that does not contain
	files with long file names and install it on the machines that demonstrate this
	problem. Subsequent installation of packages containing files with long file
	names do not experience this problem.
	
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
	
	REFERENCES
	==========
	
	For additional information about potential deployment problems with long file
	names, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q239069 PRB: Cannot Open or Find File Error Installing VB Application
	
	Additional query words: sp4 pdw, long file-names LFN kbfix
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
