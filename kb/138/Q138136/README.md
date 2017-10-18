---
layout: page
title: "Q138136: HOWTO: Assign the F8 Key to DebugStepInto in Visual C++"
permalink: kb/138/Q138136/
---

## Q138136: HOWTO: Assign the F8 Key to DebugStepInto in Visual C++

	Article: Q138136
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbusage kbide kbVC kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Developer Studio's debugger uses the F11 key as the shortcut key to
	step into a function. All past editions of Visual C++ and Codeview used the F8
	key as the shortcut key for step into. This article describes how to modify the
	keyboard settings so the F8 key can be used to step into functions when
	debugging.
	
	MORE INFORMATION
	================
	
	There are two possible ways to change the default key for stepping into a
	function. You can change your keyboard compatibility settings to Visual C++ 2.0,
	or you can define a custom key assignment for DebugStepInto.
	
	Change Keyboard Compatibility Settings to Visual C++ 2.0
	--------------------------------------------------------
	
	1. On the Tools menu, click Options.
	
	2. Click the Compatibility tab, and select the Recommended Options for Visual
	  C++ 2.0.
	
	NOTE: If you defined any custom key assignments, you will have to redefine them
	because this method resets all key assignments.
	
	Define a Custom Key Assignment for DebugStepInto
	------------------------------------------------
	
	1. On the Tools menu, click Customize.
	
	2. On the Keyboard tab, click Text editor, the Edit category, and the SelectChar
	  command. Note that this will have the F8 key assigned to it.
	
	3. Select F8, and click the Remove button. Note that if you want to use the
	  SelectChar function, you need to assign another key sequence to it.
	  CTRL+SHIFT+A was used in Visual C++ 2.0 and is unassigned in Visual C++ 4.0.
	
	4. Select the Main editor, the Debug category, and the DebugStepInto command.
	
	5. Select the Current Key, which is set to F11, and click the Remove button.
	
	6. Click the "Press new shortcut key" edit control. Then press the F8 key, and
	  click the Assign button.
	
	Additional query words: kbinf
	
	======================================================================
	Keywords          : kbusage kbide kbVC kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
