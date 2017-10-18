---
layout: page
title: "Q112352: How to Emulate Function Keys in FoxPro for Macintosh"
permalink: kb/112/Q112352/
---

## Q112352: How to Emulate Function Keys in FoxPro for Macintosh

	Article: Q112352
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A number of FoxPro functions use a function key as a hot, or shortcut, key;
	however, many Macintosh systems use keyboards that do not have function keys. To
	emulate function keys on these systems, you can use a
	CONTROL+COMMAND+<number> key combination.
	
	MORE INFORMATION
	================
	
	The hot key to bring the Command window forward is COMMAND+F2. FoxPro for
	Macintosh treats the CTRL and COMMAND keys the same, allowing users that don't
	have function keys to mimic the COMMAND+<function key> combination. To do
	this, hold both the CTRL and COMMAND keys down while pressing the number of the
	function key to activate. For example, the Command window hot key combination
	would be CTRL+COMMAND+2 instead of COMMAND+F2. To cycle through active windows,
	the key combination would be CTRL+COMMAND+1 instead of COMMAND+F1.
	
	Additional query words: VFoxMac FoxMac fkey ctrl hotkey access key accelerator
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
