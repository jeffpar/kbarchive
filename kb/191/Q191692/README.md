---
layout: page
title: "Q191692: PRB: Shdocvw.dll Is Not Included in PDW Setup Package"
permalink: /kb/191/Q191692/
---

## Q191692: PRB: Shdocvw.dll Is Not Included in PDW Setup Package

	Article: Q191692
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbIE kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 20-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Package and Deployment Wizard (PDW) to create a setup package
	for a Visual Basic project that contains the Microsoft Internet Controls, PDW
	does not include the Shdocvw.dll file in your setup package.
	
	CAUSE
	=====
	
	Shdocvw.dll is a core component of Microsoft Internet Explorer. Under current
	redistribution policy, you are not allowed to redistribute Internet Explorer in
	your application. Therefore, Shdocvw.dll is not included in your setup package.
	
	
	RESOLUTION
	==========
	
	To enable the functionality of the Microsoft Internet Controls, users of your
	application are required to have Internet Explorer installed on their computers.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q155969 HOWTO: Distribute the WebBrowser Control
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbIE kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
