---
layout: page
title: "Q155519: Using the Shortcut Key to Enable FilterKeys"
permalink: /kb/155/Q155519/
---

## Q155519: Using the Shortcut Key to Enable FilterKeys

	Article: Q155519
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbenable kbtool kbEnableMove kbEnableLearn
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server 
	- Microsoft Windows NT Workstation 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FilterKeys is an Accessibility option that you can use to control the keyboard
	repeat rate and ignore repeated keys. This article discusses how to use the
	FilterKeys shortcut key to enable various levels of FilterKeys functionality.
	
	MORE INFORMATION
	================
	
	Enabling the FilterKeys Shortcut Key
	------------------------------------
	
	The FilterKeys shortcut key is the right SHIFT key. To enable the shortcut key to
	start FilterKeys functionality, use the following steps:
	
	1. In Control Panel, double-click Accessibility Options.
	
	2. Click the Keyboard tab, click Settings in the FilterKeys section, and then
	  click the Use Shortcut check box to select it.
	
	3. Click OK, and then click OK again.
	
	Description of Terms Associated with FilterKeys
	-----------------------------------------------
	
	SlowKeys - The sensitivity of the keyboard can be a problem, especially if you
	strike keys accidentally. SlowKeys instructs Windows to disregard keys that are
	not held down for a certain period of time.
	
	RepeatKeys - Most keyboards allow you to repeat a key just by holding it down. If
	you cannot lift your fingers off the keyboard quickly enough, this can result in
	unintentionally repeated characters. RepeatKeys lets you adjust the repeat rate
	or disable it altogether.
	
	BounceKeys - You may "bounce" keys, resulting in double strokes of the same key
	or other similar errors. BounceKeys instructs Windows to ignore unintended
	keystrokes.
	
	Description of Tones Produced by the FilterKeys Shortcut Key
	------------------------------------------------------------
	
	If you press down and hold the right SHIFT key for four seconds, you hear three
	short warning tones. No functionality is enabled with these warning tones.
	
	If you hold the right SHIFT key for eight seconds, in addition to the previous
	tones, you hear a rising tone and the following default FilterKeys settings (or
	the last settings saved) are enabled:
	
	- RepeatKeys: On, one second
	
	- SlowKeys: On, one second
	
	- BounceKeys: Off
	
	If you hold the right SHIFT key for eight seconds, in addition to the previous
	tones, you hear two rising tones and the following Emergency Level 1 FilterKeys
	settings are enabled:
	
	- RepeatKeys: Off
	
	- SlowKeys: Off
	
	- BounceKeys: On, one second
	
	Holding down the right SHIFT key another four seconds (16 seconds total) produces
	three rising tones and invokes the Emergency Level 2 setting with the following
	settings:
	
	- RepeatKeys: Off
	
	- SlowKeys: On, two seconds
	
	- BounceKeys: Off
	
	Additional query words: prodnt hotkey
	
	======================================================================
	Keywords          : kbenable kbtool kbEnableMove kbEnableLearn 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch
	Version           : winnt:
	
	=============================================================================
	
