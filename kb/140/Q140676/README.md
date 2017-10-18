---
layout: page
title: "Q140676: PRB: ClassWizard Uses WM_HELPINFO Instead of WM_HELP"
permalink: kb/140/Q140676/
---

## Q140676: PRB: ClassWizard Uses WM_HELPINFO Instead of WM_HELP

	Article: Q140676
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbtool kbwizard kbCSHelp kbMFC kbVC400 kbVC500 kbVC600 kbClassWizard kbGr
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use ClassWizard to add a handler for the WM_HELP message, the message
	is not listed in the Messages list box. Instead, the message is listed as
	WM_HELPINFO.
	
	RESOLUTION
	==========
	
	Select WM_HELPINFO to add a handler for WM_HELP.
	
	MORE INFORMATION
	================
	
	Previous versions of MFC define OnHelp as the function to handle the WM_COMMAND
	message with ID_HELP. To avoid conflicts with this message handler, MFC 4.x and
	higher use OnHelpInfo as the name of the function that handles the WM_HELP
	message. So ClassWizard shows the WM_HELP message as WM_HELPINFO.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbtool kbwizard kbCSHelp kbMFC kbVC400 kbVC500 kbVC600 kbClassWizard kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
