---
layout: page
title: "Q186906: FIX: VBScript Macro Names Cannot Contain MBCS Characters"
permalink: kb/186/Q186906/
---

## Q186906: FIX: VBScript Macro Names Cannot Contain MBCS Characters

	Article: Q186906
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to record a macro with a name that contains a Multi-Byte
	Character Set (MBCS) character, an error appears.
	
	RESOLUTION
	==========
	
	Use only single-byte characters to name a macro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	A Developer Studio macro is a Visual Basic Scripting Edition subroutine that
	contains VBScript commands and takes no parameters. The macro begins with a Sub
	statement, continues with VBScript commands that automate tasks in Developer
	Studio, and ends with an End Sub statement.
	
	A macro needs a name before you record it or write it manually. When complete,
	the macro is stored in a text file known as a macro file (.dsm).
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Tools menu, click Macro.
	
	2. If a message box appears, click OK.
	
	3. In the Macro File list, select a macro file. If no macro file exists, click
	  Options, and then click New File.
	
	4. In the Macro Name box, enter a new name for the macro. Use at least one MBCS
	  character.
	
	5. Click Record.
	
	  Note: You cannot record a macro that already exists or record to a file that
	  is read-only.
	
	An error dialog appears indicating the macro name is invalid.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
