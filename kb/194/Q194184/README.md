---
layout: page
title: "Q194184: INFO: General Protection Fault Error Handling in VFP 6.0 and 7.0"
permalink: kb/194/Q194184/
---

## Q194184: INFO: General Protection Fault Error Handling in VFP 6.0 and 7.0

	Article: Q194184
	Product(s): Microsoft FoxPro
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro versions 6.0 and 7.0 offer improved error reporting for General
	Protection Faults (GPF) and Fatal Errors.
	
	MORE INFORMATION
	================
	
	In earlier versions of Visual FoxPro, a General Protection Fault (GPF) or Fatal
	Error result in the display of one of two dialog boxes: either a Dr. Watson
	dialog box or a dialog box stating that a GPF has occurred.
	
	In Visual FoxPro 6.0 and 7.0, when a GPF or Fatal Error occurs, a dialog box
	appears with the program call stack. With the call stack information, you are
	able to trace the problem code more easily than in earlier versions.
	
	IMPORTANT: This article contains information about modifying the registry. Before
	you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	This enhanced error reporting can be disabled by editing the registry; to do so,
	follow these steps:
	
	1. Click Start, click Run, and then enter REGEDIT.
	
	2. Locate the HKEY_CLASSES_ROOT key, click to select it, and then click New Key
	  on the Edit menu.
	
	3. For the new key name, type VisualFoxpro.6.
	
	4. With this new key selected, clicking New Key on the Edit menu to create
	  another new key beneath it.
	
	5. Name the new key Exceptions.
	
	6. With the new Exceptions key selected, you will see an entry in the right-hand
	  pane of RegEdit that resembles the following:
	
	(Default)                REG_SZ                      (value not set)
	
	7. Double-click the (Default) entry and enter 0 in the Value data box in the
	  window that appears.
	
	  A value of 0 in the new key created here will disable the enhanced error
	  reporting in VFP 6.0. To do this for VFP 7.0, perform the same steps again,
	  but in step 3 name the new key VisualFoxpro.7.
	
	Note that this only affects the development versions of VFP 6.0 and 7.0. The
	run-time versions report the errors described in the first paragraph of the
	"More Information" section.
	
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike A.
	Stewart, Microsoft Corporation.
	
	
	Additional query words: access violation c0000005 fatal exception ICE internal consistency error
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP700
	Version           : :6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
