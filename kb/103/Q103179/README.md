---
layout: page
title: "Q103179: ADT/ODE: Help Topic Does Not Exist Err Invoking Custom Help File"
permalink: /kb/103/Q103179/
---

## Q103179: ADT/ODE: Help Topic Does Not Exist Err Invoking Custom Help File

	Article: Q103179
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1,2.0,7.0,97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	If you press the F1 key to invoke a custom Help file topic for a form control,
	you receive the following error message.
	
	In Microsoft Access 97:
	
	  The Topic does not exist. Contact your application vendor for an updated Help
	  file (129)
	
	In Microsoft Access versions 1.1, 2.0, and 7.0:
	
	  Help topic does not exist
	
	twice.
	
	CAUSE
	=====
	
	The number entered in the HelpContextID property could not be mapped to a Help
	file context string in the custom Help file.
	
	RESOLUTION
	==========
	
	Make sure a [MAP] section exists in the Help project file that correctly maps
	the HelpContextID context number to the context string in the custom Help file.
	
	MORE INFORMATION
	================
	
	The number entered in the HelpContextID property for a Microsoft Access form
	control can be mistaken for the context string used to identify a topic in the
	Help system. The HelpContextID is actually known as a context number. A context
	number is an optional number that you can associate with context strings by
	using the [MAP] section in the Help project file. A context number can be
	assigned to each object in an application to enable context sensitivity.
	
	A typical [MAP] section in the Help project file will look as follows:
	
	  [MAP]
	  TitlePageContextString   3
	  Topic1ContextString      1
	  Topic2ContextString      2
	
	The context string appears first, followed by the HelpContextID context number.
	The context string and context number are separated by white space, using either
	space characters or tabs.
	
	In the example above, the # footnote for the first topic would be set to the
	string TitlePageContextString. Within Microsoft Access, you would set
	HelpContextID to the number 3.
	
	REFERENCES
	==========
	
	For more information on creating your own help topics, search the Help Index for
	"help, creating custom," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbAccessDistKit110 kbOffice97DevSearch
	Version           : WINDOWS:1.1,2.0,7.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
