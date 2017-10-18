---
layout: page
title: "Q180727: Error Message: Property or Method Not Found"
permalink: kb/180/Q180727/
---

## Q180727: Error Message: Property or Method Not Found

	Article: Q180727
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbProgramming osr2 win95
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a 16-bit program created using Microsoft Visual Basic 4.0, you may
	receive either of the following error messages:
	
	  Run-time error 438: Property or method not found
	
	  Run-time error 423: Object doesn't support this property or method
	
	When either of these error messages occurs, the program may not be able to
	continue running and may terminate unexpectedly.
	
	CAUSE
	=====
	
	These error message can occur if the following conditions exist:
	
	  The 16-bit program references some of its controls as variables.
	
	  Windows 95 is configured for a region other than the Unites States.
	
	  There is not enough physical memory (RAM) in the computer for all the
	  currently running programs to run completely in RAM memory.
	
	There is a problem in the LSTRCMP and LSTRCMPI string-comparison functions in
	Windows 95. This problem prevents the string comparison from succeeding if
	Windows 95 is configured for a non-U.S. locale and one of the strings being
	compared is in a 16-bit segment that has been discarded. Microsoft Visual Basic
	4.0 relies on these string-comparison functions to find the program's controls,
	depending on how the program is written. The error message occurs if the program
	cannot find its controls.
	
	RESOLUTION
	==========
	
	To work around this problem, use any of the following methods:
	
	- Change the Windows 95 location setting to "English (United States)" using the
	  Regional Settings tool in Control Panel.
	
	- Run the program in Microsoft Windows NT.
	
	- Compile the program as a 32-bit program.
	
	- Compile the program using Visual Basic 5.0, which does not mark code segments
	  as discardable when the program is compiled.
	
	- Rewrite the program to change the way it references its controls. For
	  information about this method, see the "More Information" section of this
	  article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95 and Windows 95 OEM
	Service Release 2 (OSR2). We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Microsoft Visual Basic 4.0 relies on these string-comparison functions to find
	names of the program's controls when the controls are referenced as variables
	(see below). Programs created using Microsoft Visual Basic 4.0 have their
	control names stored in code segments marked discardable. Under relatively
	low-memory conditions, one or more of these segments may be discarded, to be
	reloaded again as needed.
	
	When non-U.S. regional settings are in use, the LSTRCMP and LSTRCMPI functions do
	not cause the discarded code segment to be reloaded when the strings are
	compared, and return a result indicating that the strings do not match. When the
	string comparison does not find the matching control name when it is needed, the
	program displays one of the error messages, may not be able to continue running,
	and may terminate unexpectedly.
	
	The following code samples demonstrate how a control can be referenced as a
	variable with Visual Basic:
	
	Example 1:
	
	     Dim myForm As Form
	     Set myForm = Form1
	     If myForm.ssTab1.Tab = 1 Then ' Error 438 when (.) operator is used
	          MsgBox "Tab 1"
	     End If
	
	Example 2:
	
	     Dim myForm As Form
	     Set myForm = Form1
	     If myForm!ssTab1.Tab = 1 Then ' Error 423 when (!) operator is used
	          MsgBox "Tab 1"
	     End If
	
	You can work around this problem by using the (.) operator and changing the code
	to use a Property procedure, as in this example:
	
	     Dim myForm As Form
	     Set myForm = Form1
	     If myForm.Tab1.Tab = 1 Then ' No error with (.) operator
	          MsgBox "Tab 1"
	     End If
	
	     Public Property Get Tab1() As Control
	              Set Tab1 = ssTab1
	     End Property
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q178529 BUG: LSTRCMP and LSTRCMPI May Fail With Non-US Regional Settings
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbProgramming osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
