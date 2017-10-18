---
layout: page
title: "Q155747: HOWTO: Use the New Application Property in Visual FoxPro 5.0"
permalink: kb/155/Q155747/
---

## Q155747: HOWTO: Use the New Application Property in Visual FoxPro 5.0

	Article: Q155747
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Each Visual FoxPro object has an Application property that you can use to
	reference the Application object for the current instance of Visual FoxPro.
	
	MORE INFORMATION
	================
	
	This new property works for both the development version of Visual FoxPro and a
	Visual FoxPro executable. The Application property provides access to the
	properties and methods associated with the _VFP object. For example, assume you
	want to display the DefaultFilePath property for the current instance of Visual
	FoxPro from the Click event of a command button in a form. The following code
	placed in the Click event of a command button provides this information:
	
	     WAIT WINDOW This.Application.DefaultFilePath
	
	In a Visual FoxPro 5.0 executable, the application property is also useful. The
	following code in the Click of a command button can change the title of the
	executable:
	
	     _VFP.Caption="This is a Different Title"
	
	The Application property and _VFP are used interchangeably. Therefore, all of the
	following return the same value--"Microsoft Visual FoxPro":
	
	     ?_VFP.NAME
	     ?_VFP.APPLICATION.NAME
	     ?APPLICATION.NAME
	     ?_VFP.PARENT.NAME
	     ?_VFP.APPLICATION.PARENT.NAME
	     ?APPLICATION.PARENT.NAME
	
	REFERENCES
	==========
	
	Visual FoxPro Help: _VFP System Variable; Application Object
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
