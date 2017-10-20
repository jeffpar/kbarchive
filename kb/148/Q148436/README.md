---
layout: page
title: "Q148436: PRB: AppWizard Cannot Generate Resources in Sublanguages"
permalink: /kb/148/Q148436/
---

## Q148436: PRB: AppWizard Cannot Generate Resources in Sublanguages

{% raw %}

	Article: Q148436
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbResource kbVC400 kbVC410 kbVC500 kbLocalization kbGrpDSTools kbNoUpdat
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	The Microsoft Foundation Classes (MFC) AppWizard or MFC Application Wizard in
	Visual C++ .NET does not generate resources in sublanguages if the language
	setting of the operating system is set to a sublanguage instead of one of the
	five standard languages that Visual C++ supports.
	
	CAUSE
	=====
	
	AppWizard or Application Wizard does not allow selection of sublanguage during
	application creation. If the language setting of the operating system is set to
	a sublanguage instead of a standard dialect, AppWizard or Application Wizard
	does not use that information.
	
	RESOLUTION
	==========
	
	Change the "Language Settings" property for the resource to match the exact
	language setting for the operating system.
	
	To do this for a dialog resource:
	
	1. Right-click the dialog's name in Resource View, and then click Properties.
	
	  NOTE: in Visual C++ .NET you can select multiple resources with Shift-click.
	  In previous versions, this could cause the IDE to crash.
	
	2. In Dialog Properties window, change Language Settings to match the current
	  setting for the operating system.
	
	  Visual C++ .NET:
	  In the Properties window, choose a value from the Language property drop-down
	  list to match the current setting for the operating system. If the Properties
	  window is not visible, from the View menu, select Properties Window.
	
	As an alternative, you can create a new copy of the resource in some other
	language by following these steps:
	
	1. Right-click the dialog's name in Resource View, and then click Insert Copy.
	
	2. In the Insert Resource Copy window, select the Language that exactly matches
	  the language setting of the operating system.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Windows 95, Windows 98, and Windows Millennium Edition (Me), from the
	  Control Panel, change Regional Settings to French (Swiss).
	
	  In Windows NT and Windows 2000, select French (Swiss) as the default language.
	
	2. Restart your computer, and then start Visual C++.
	
	3. Use MFC AppWizard to create a dialog-based application. AppWizard allows you
	  to choose five languages for resources. Sublanguages are not listed and
	  cannot be specified. Select French (Standard) for the resource language.
	
	  Visual C++ .NET:
	  On the Application Type tab of the MFC Application Wizard, the resource
	  language and its sublanguage are listed for the five languages which the
	  wizard can generate. Select French (France) for the resource language.
	
	4. Generate the application.
	
	5. Change to Resource View.
	
	6. Open the main window dialog box. It shows the label "French (French)" with
	  the dialog's name.
	
	Because the language setting for the resource does not match the language setting
	of the operating system, you may see another behavior where ClassWizard does not
	show Control IDs under the Member Variables Tab. This is a not behavior previous
	to version 4.0.
	
	For additional information about this behavior, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q145997 PRB: Resource Language Must Match Current System Language
	
	Additional query words: international sublanguage
	
	======================================================================
	Keywords          : kbwizard kbMFC kbResource kbVC400 kbVC410 kbVC500 kbLocalization kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
