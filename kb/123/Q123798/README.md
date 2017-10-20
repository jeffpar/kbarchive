---
layout: page
title: "Q123798: ADT2: Setup Wizard OLE Default Dependent on MSARN200 Choice"
permalink: /kb/123/Q123798/
---

## Q123798: ADT2: Setup Wizard OLE Default Dependent on MSARN200 Choice

{% raw %}

	Article: Q123798
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	When you are running the Microsoft Access Developer's Toolkit (ADT) Setup
	Wizard, the OLE 2.01 (or OLE 2.02 if you have installed the Microsoft Access
	version 2.0 Service Pack) option is selected by default only if you select the
	Run With MSARN200 check box in the Add File dialog box.
	
	MORE INFORMATION
	================
	
	If you do not choose to include the Microsoft Access run-time executable file
	MSARN200.EXE with your custom application, users of your application will need
	to have a retail version of Microsoft Access to run your application. The retail
	version of Microsoft Access includes the OLE dynamic-link library (DLL) files;
	therefore, they do not need to be included by the Setup Wizard in your custom
	application's Setup.
	
	If you do choose to include the run-time executable file with your custom
	application, the Setup Wizard will generate a warning if you choose not to
	include the OLE files. If you choose OK in response to this warning, a flag is
	set to prevent future warnings about the OLE files. This flag is saved with your
	template.
	
	REFERENCES
	==========
	
	Microsoft Access Developer's Toolkit "Advanced Topics," version 2.0, Chapter 2,
	"Creating a Custom Setup Program," pages 19-37
	
	For information about how to obtain the Microsoft Access version 2.0 Service
	Pack, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q122927
	  TITLE : WX1124: Microsoft Access Version 2.0 Service Pack
	
	Additional query words: runtime jet25 jet 2.5
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
