---
layout: page
title: "Q121419: ALT+&lt;Hot Key&gt; Will Not Choose Push Button on Macintosh"
permalink: /kb/121/Q121419/
---

## Q121419: ALT+&lt;Hot Key&gt; Will Not Choose Push Button on Macintosh

{% raw %}

	Article: Q121419
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro for Macintosh, the ALT+<hot key> key combination does not choose
	a push button like it does in Windows even if KEYCOMP is set to WINDOWS.
	
	MORE INFORMATION
	================
	
	Page 107 of the FoxPro for Macintosh "Language Reference" manual says that if
	KEYCOMP is set to WINDOWS, hot keys are underlined. This is true, but
	ALT+<hot key> does not select the push button when another GET object,
	edit region, list box, or popup is currently selected. However, if a radio
	button is the active GET object, pressing SHIFT and the underlined letter will
	choose the push button. Hot keys on the Macintosh function more like hot keys
	under FoxPro for MS-DOS. This behavior is described on page 106.
	
	If the push button GET is currently selected, pressing the hot key without ALT
	will choose the push button.
	
	If KEYCOMP is set to MAC, hot keys are not underlined, and push buttons can be
	chosen only with the mouse.
	
	NOTE: Pressing CTRL+ALT+<hot key> in the FoxPro for Macintosh is equivalent
	to pressing ALT+<hot key> in FoxPro for Windows.
	
	REFERENCES
	==========
	
	FoxPro "Language Reference," pages 106-107
	
	Additional query words: FoxMac hotkey accelerator access docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac
	Version           : MACINTOSH:2.5b,2.5c,2.6a
	
	=============================================================================
	

{% endraw %}
