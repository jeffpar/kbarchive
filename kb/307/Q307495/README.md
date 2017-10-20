---
layout: page
title: "Q307495: PRB: Error 0x80004005 When You Try to Register a WebClass DLL"
permalink: /kb/307/Q307495/
---

## Q307495: PRB: Error 0x80004005 When You Try to Register a WebClass DLL

{% raw %}

	Article: Q307495
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbASPObj kbCOMt kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Microsoft Internet Information Server (IIS) application (WebClass)
	to create a dynamic-link library (DLL) in Visual Basic 6.0, you receive the
	following error message when you try to register the DLL:
	
	  DLLRegisterServer in <path to DLL> failed.
	  Return Code was: 0x80004005
	
	This error message occurs when you try to register the DLL on a computer other
	than the one on which it was created.
	
	CAUSE
	=====
	
	The WebClass run-time files must be installed to register a WebClass DLL. This
	error occurs if you try to register the DLL on a computer that does not have the
	WebClass run-time files installed and registered.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- The best way to deploy a WebClass is to use the Package and Deployment
	  Wizard. The Package and Deployment Wizard packages the dependent WebClass
	  run-time DLLs when your WebClass is deployed. For information on how to use
	  this tool, see the following Microsoft Web site:
	
	  http://www.microsoft.com/Mind/0999/faq/faq0999.htm
	
	- Copy and register the Mswcrun.dll file to the computer on which you are
	  trying to register your WebClass DLL.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic 6.0, use the IIS Application Project option to create a
	  WebClass.
	
	2. Copy the DLL to a computer that does not have the Mswcrun.dll file.
	
	3. At a command prompt, type "regsvr32 WebClassDllName.dll" (without the
	  quotation marks) to register the DLL.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q242550 INFO: Required System Files for WebClasses (IIS Applications)
	
	  Q242767 INFO: Deploying WebClasses with the Package and Deployment Wizard
	  (PDW)
	
	Additional query words: Mswcrun runtime run time
	
	======================================================================
	Keywords          : kbASPObj kbCOMt kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
