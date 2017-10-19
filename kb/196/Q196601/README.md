---
layout: page
title: "Q196601: PRB: DCOMCNFG Displays One Class Name For Each ActiveX Server"
permalink: /kb/196/Q196601/
---

## Q196601: PRB: DCOMCNFG Displays One Class Name For Each ActiveX Server

	Article: Q196601
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDCOM kbSecurity kbServer kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Distributed Component Object Model (DCOM) Configuration Utility
	(Dcomcnfg.exe), only one class for each ActiveX server appears in the list of
	applications. This occurs even though an ActiveX server may contain several
	classes, each of which is functioning correctly.
	
	CAUSE
	=====
	
	DCOM provides server level security. All objects within a server share the same
	security settings. Therefore, Dcomcnfg.exe only lists the first object (class)
	for each ActiveX server registered.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX .exe project in Microsoft Visual Basic. Class1 is
	  created by default.
	
	2. Add a second class to the project (Class2).
	
	3. From the Project menu, choose Project Properties.
	
	4. Click the Component tab, and then select Remote Server Files.
	
	5. Save and compile the .exe.
	
	6. Exit Microsoft Visual Basic.
	
	7. From the Windows Start menu click Run and then execute Dcomcnfg.exe.
	
	RESULTS: When DCOMCNFG launches, the ProgId of the first object (Class1) displays
	in the server list. Class2 will not appear.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q266717 HOWTO: Create a DCOM Client/Server Application by Using Visual Basic
	
	  Q267836 HOWTO: Create a DCOM Client/Server with Events by Using Visual Basic
	
	  Q268550 HOWTO: Use Dcomcnfg for a Visual Basic DCOM Client/Server Application
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDCOM kbSecurity kbServer kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
