---
layout: page
title: "Q197138: WD97: Word Beeps Opening Shortcut Menu with Macro Recorder On"
permalink: /kb/197/Q197138/
---

## Q197138: WD97: Word Beeps Opening Shortcut Menu with Macro Recorder On

	Article: Q197138
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the macro recorder and then try to open a shortcut menu by
	clicking the right mouse button, Microsoft Word beeps and nothing happens.
	
	CAUSE
	=====
	
	Shortcut menus are context-sensitive, which means that Word determines which
	menu to open based on the selection you click with the mouse. While the macro
	recorder is running, you cannot use the mouse to move the insertion point or
	select text, so, by design, you cannot open a shortcut menu that is based on a
	mouse selection.
	
	NOTE: When you record a macro, you can still use the mouse to click menu commands
	or to scroll with the scroll bars.
	
	
	Additional query words: beeped
	
	======================================================================
	Keywords          : kbmacro word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
