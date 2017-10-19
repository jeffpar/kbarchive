---
layout: page
title: "Q198348: PRB: Component Gallery Errors in Localized German VFP"
permalink: /kb/198/Q198348/
---

## Q198348: PRB: Component Gallery Errors in Localized German VFP

	Article: Q198348
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbXBase
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting the Component Gallery in German Visual FoxPro 6.0 running on
	German Windows NT 4.0, the following error appears:
	
	  Fehler bei der Klasseninstanziierung C:\Program files\Microsoft Visual
	  Studio\VFP98\Gallery\_gallery.vcx kann nicht gerfunden werden
	
	A rough translation is:
	
	  Error instantiating class C:\Program Files\Microsoft Visual
	  Studio\VFP98\Gallery\_gallery.vcx could not be found.
	
	RESOLUTION
	==========
	
	Add the default folder of Visual FoxPro in the Search Path text box of the File
	Locations tab of the Options dialog box. To get to this dialog box, from the
	Tools menu, choose Options. In the Options dialog box, click the File Locations
	tab. To determine the default folder of Visual FoxPro, issue a the following
	command in the Visual FoxPro Command window:
	
	     ?Home()
	
	MORE INFORMATION
	================
	
	The error seems to occur because the German version of Visual FoxPro installs in
	the default folder c:\Programme\Microsoft Visual Studio\VFP98 instead of the
	folder used in the US version, which is c:\Program Files\Microsoft Visual
	Studio\VFP98.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install German Windows NT 4.0 with Service Pack 3.
	
	2. Install the German version of Visual FoxPro 6.0 with Service Pack 1. Next,
	  attempt to open the Component Gallery.
	
	Before the Component Gallery launches, the error message mentioned in the SUMMARY
	section appears. That error message may be followed by an additional error
	dialog box that displays the Katalog (Catalog), Objekt (Object), Fehler (Error),
	and Methode (Method).
	
	NOTE: This error dialog box may occur twice.
	
	If you chose the Ignorieren (Ignore) option in the message dialog box, then the
	Component Gallery opens.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
