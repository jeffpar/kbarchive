---
layout: page
title: "Q191591: BUG: Meaningless or Undocumented Errors in Visual FoxPro 6.0"
permalink: kb/191/Q191591/
---

## Q191591: BUG: Meaningless or Undocumented Errors in Visual FoxPro 6.0

	Article: Q191591
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Several errors invoked from the ERROR command are either meaningless and/or
	undocumented in Visual FoxPro 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following ERROR commands and numbers produce error messages that are
	undocumented in the Online Help documentation. Some of the errors return
	messages that are meaningless in Visual FoxPro for Windows:
	
	  1748 - This file is incompatible with the current version of Visual FoxPro.
	  Run 30UPDATE.PRG to update the file to the current version.
	
	  1729 - Apple Shared Library Manager error. Install from the Apple
	  SharedLibrary Manager disk shipped with Visual FoxPro.
	
	  1917 - Script error.:
	
	  1920 - XCMD or XFCN resource file is not found.
	
	  1921 - RUNCSCRIPT command failed.
	
	  1980 - Ignore.
	
	  1990 - Cancel.
	
	  2025 - The SQL Statement is too complex for the View/Query Designer. It will
	  be opened in the editor.
	
	  2036 - The current Help file is empty.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, type the ERROR command followed by any of the preceding
	error numbers. For example, type the following in the command window and then
	press ENTER:
	
	  " ERROR 1748" (without the quotation marks)
	
	REFERENCES
	==========
	
	Visual FoxPro Documentation: search on: "Technical Reference"; "Error Messages";
	"Error Messages by Number"
	
	Additional query words: kbVFp600bug kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
