---
layout: page
title: "Q155402: PRB: OLE Errors with the CREATEOBJECT() Function"
permalink: /kb/155/Q155402/
---

## Q155402: PRB: OLE Errors with the CREATEOBJECT() Function

{% raw %}

	Article: Q155402
	Product(s): Microsoft FoxPro
	Version(s): 3.00b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following error messages is received when you use the CREATEOBJECT()
	function to create OLE objects in Visual FoxPro for Macintosh:
	
	1. Cannot open file Fxole30b.cfm.
	
	2. OLE error code 0x8000FFFF:Catastrophic failure.
	
	3. Cannot open file Microsoft_OLE2.
	
	CAUSE
	=====
	
	One or more of the Microsoft OLE extensions normally found in the
	System:Extensions folder are missing, corrupted, or the wrong version.
	
	RESOLUTION
	==========
	
	Check the following files in the System:Extensions folder for the corresponding
	error messages above:
	
	1. fxole30b.cfm: 163,604 bytes
	
	2. Microsoft OLE Automation: version 2.06; 537,822 bytes
	
	3. Microsoft OLE Library: version 2.06; 964,784 bytes
	
	If the above files are in the System:Extensions folder and the error messages
	persist, try installing the System software into a new folder (CMD+SHIFT+K on
	the Install dialog box) and install Visual FoxPro under this new version of the
	System software. If this resolves the problem, there is probably some sort of
	corruption in the other System.
	
	MORE INFORMATION
	================
	
	The error messages above are normally received when using the CREATEOBJECT()
	function. The following line of code causes this:
	
	     oleApp=CREATEOBJECT("Word.Basic")
	
	  -or-
	
	     oleApp=CREATEOBJECT("Excel.Application")
	
	REFERENCES
	==========
	
	"Developer's Guide," page 436
	
	Visual FoxPro Help file; search on: "CREATEOBJECT() Function."
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q151853 Required Files for the Pivot Table Wizard
	
	
	  Q124635 MXL5: Troubleshooting Microsoft Excel 5.0 for the Macintosh
	
	
	  Q120257 Error Messages Appear When Starting Application on PowerMac
	
	
	Additional query words: kbdsd vfoxmac
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : 3.00b
	
	=============================================================================
	

{% endraw %}
