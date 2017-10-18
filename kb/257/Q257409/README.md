---
layout: page
title: "Q257409: PRB: &quot;Could Not Start Internet Explorer&quot; Debugging WebClasses"
permalink: kb/257/Q257409/
---

## Q257409: PRB: &quot;Could Not Start Internet Explorer&quot; Debugging WebClasses

	Article: Q257409
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbConfig kbOSWin2000 kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a WebClass (Internet Information Server [IIS] application) from the
	Visual Basic Integrated Development Environment (IDE) in Windows 2000, the
	following error message appears:
	
	  Could not start Internet Explorer
	
	After you click OK, Internet Explorer does not open.
	
	CAUSE
	=====
	
	This behavior occurs only if the "IUSR_<machinename>" account has been
	added to the Default Access Permissions in the DCOM security settings. If you
	add only the IUSR_<machinename> account, this restricts the default access
	permissions for all DCOM servers that use the default permissions.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the IUSR_<machinename> account from the
	DCOM Default Access Permissions and follow the instructions in the following
	Microsoft Knowledge Base article:
	
	  Q255502 PRB: Server Object Error 'ASP 0178' Occurs When You Run a WebClass in
	  Windows 2000
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	On a fresh installation of Windows 2000 (not upgraded from Windows NT4.0), add
	IUSR_<machinename> to the Default Access Permissions in DCOM:
	
	1. Start DCOMCNFG: Click Start, click Run, and then type "dcomcnfg" (without the
	  quotation marks) in the Run dialog box.
	
	2. On the Default Security tab, click Edit Default in the Default Access
	  Permissions frame. The Registry Value Permissions dialog box appears.
	
	3. Add the IUSR_<computername> account to the Registry Value Permissions
	  dialog box, and then click OK.
	
	4. Apply the changes and exit the DCOM permissions window.
	
	Create a new IIS Application in Visual Basic, and then click the Start button or
	press F5 to run the WebClass.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q198432 PRB: Server Object Error 'ASP 0178' Instantiating COM Object
	
	  Q192152 PRB: Server Object Error 'ASP 0178 : 800a0005' From WebClasses
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbConfig kbOSWin2000 kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbOSWin2000 kbVBSearch kbAudDeveloper kbOSWinSearch kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :2000,6.0
	Issue type        : kbprb
	
	=============================================================================
	
