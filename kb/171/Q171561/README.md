---
layout: page
title: "Q171561: Inside COM: CD-ROM: Problems Compiling Tangram Source Code"
permalink: /kb/171/Q171561/
---

## Q171561: Inside COM: CD-ROM: Problems Compiling Tangram Source Code

	Article: Q171561
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 16-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Com ISBN 1-57231-349-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Errors may occur if you attempt to compile the source code for the Tangram
	application from the CD-ROM packaged with the Microsoft Press book "Inside COM."
	
	MORE INFORMATION
	================
	
	The following corrections should be made before compiling the source code for
	the Tangram application:
	
	- Add a subdirectory called \Proxy to the \tangram\source\model\ directory.
	  This directory should be left empty.
	
	- In file \tangram\source\glwlrd\cgl-pal.cpp, line 108:
	
	  Change: TRACE0
	  To: "TRACE" (without the quotation marks)
	
	  TRACE0 causes the compiler to use a Unicode-aware macro call "_T", but the
	  file doesn't include the necessary header file for the macro.
	
	- A release build of the final Tangram executable will fail because it attempts
	  to use precompiled headers for files that aren't set up to use them.
	
	  To avoid this error, disable precompiled headers for the entire Release build
	  of the Tangram executable. To do this in Microsoft Visual C++, follow these
	  steps:
	
	  1. On the Developer Studio's Project menu, click Settings.
	
	  2. In the dialog box that appears, click Tangram in the left pane and select
	     Win32 Release from the Settings For list above it.
	
	  3. Click the C/C++ tab on the right, and select Precompiled Headers from the
	     Category list.
	
	  4. Click to select the button for Not Using Precompiled Headers.
	
	Additional query words: mspress ms_press press bookbug com automation
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
