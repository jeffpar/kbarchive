---
layout: page
title: "Q192152: PRB: Server Object Error 'ASP 0178 : 800a0005' From WebClasses"
permalink: /kb/192/Q192152/
---

## Q192152: PRB: Server Object Error 'ASP 0178 : 800a0005' From WebClasses

{% raw %}

	Article: Q192152
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbide kbInternet kbVBp kbVBp600 kbVS600 kbWebClasses _IK
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When debugging a WebClass from the Visual Basic IDE, the following error
	occurs:
	
	  Server object error 'ASP 0178 : 800a0005'
	  Server.CreateObject Access Error
	  /Temp/WebClass1.ASP, line 14
	  The call to Server.CreateObject failed while checking permissions.
	  Access is denied to this object.
	
	You might also notice a Transaction Server Error entry in the NT Application
	Event Log. The details of the error message should look similar to this:
	
	  Failed on creation from object context: IClassFactory::CreateInstance
	  (ProgId: Project1.WebClass1) (CLSID: {C2B16A1D-3C8F-11D2-8015-
	  00C04FB9D877}) (Interface: IUnknown) (IID: {00000000-0000-0000-C000-
	  000000000046}) (Microsoft Transaction Server Internals Information: File:
	  d:\viper\src\runtime\context\ccontext.cpp, Line: 1220)
	
	RESOLUTION
	==========
	
	You need to give the IUSR_<machine_name> account permissions to launch and
	access your project using dcomcnfg by doing the following:
	
	1. Launch DCOMCNFG by clicking the Start button, selecting Run, and typing
	  "Dcomcnfg.exe" (without the quotation marks) in the Run dialog box.
	
	2. In the Default Security tab, click Edit Default in the Default Access
	  Permissions frame. The Registry Value Permissions dialog box appears.
	
	3. Add the IUSR_<machine_name> account and the INTERACTIVE account to the
	  Registry Value Permissions dialog box and click OK.
	
	4. In the Default Security tab, click Edit Default in the Default Launch
	  Permissions frame. The Registry Value Permissions dialog box appears.
	
	5. Add the IUSR_<machine_name> account to the Registry Value Permissions
	  dialog box and click OK.
	
	6. Close and re-open Visual Basic.
	
	Note On a computer that is running Windows 2000, some additional steps may be
	required. For additional information, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q255502 PRB: Server Object Error "ASP 0178" Occurs When You Run a WebClass in
	  Windows 2000
	
	  Q257409 PRB: Error Message: "Could Not Start Internet Explorer" When You Run
	  a WebClass Under Windows 2000 from the Visual Basic IDE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbInternet kbVBp kbVBp600 kbVS600 kbWebClasses _IK 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
