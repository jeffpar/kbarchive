---
layout: page
title: "Q139128: DOC: Help for WindowType Shows Incorrect Property Settings"
permalink: /kb/139/Q139128/
---

## Q139128: DOC: Help for WindowType Shows Incorrect Property Settings

	Article: Q139128
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro Help file "WindowType Property" topic states incorrectly that
	the WindowType property settings of '2 - Read' and '3 - Read Modal' are
	available for a formset or form.
	
	These settings are actually only available on a formset converted from an earlier
	version of FoxPro by using the Converter. They are for backwards compatibility
	only. The WindowType property settings of '0 - Modeless' and '1 - Modal' are not
	affected.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	Additional query words: docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
