---
layout: page
title: "Q159453: SNA Server 3.0 5250 Applet Numeric Pad Function Keys Don't Work"
permalink: /kb/159/Q159453/
---

## Q159453: SNA Server 3.0 5250 Applet Numeric Pad Function Keys Don't Work

{% raw %}

	Article: Q159453
	Product(s): Microsoft SNA Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kbui kbusage
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the SNA Server 3.0 5250 applet, function keys located on the numeric
	keypad (such as PgUp, PgDn and Enter) are not mapped to 5250 functions for Page
	Up, Page Down, and Enter. The standard cursor control keys for PageUp and
	PageDown (located on the keypad positioned between the Backspace and NumLock
	keys) and the standard Enter key do work.
	
	The SNA Server 3.0 5250 applet does support limited keyboard remapping by
	following the instructions in the <Snaroot>\System\5250.kbd file. This
	keyboard mapping support is not available in SNA Server 2.x versions of the 5250
	applet.
	
	MORE INFORMATION
	================
	
	The <Snaroot>\System\5250.kbd file can be edited to support limited
	keyboard remapping, for the standard IBM 101 keyboard layout. For example, here
	are instructions to add support for the Enter, PgUp and PgDn keys located on the
	numeric keypad:
	
	1. Save the original copy of <Snaroot>\System\5250.kbd to 5250.old.
	
	2. Add the following lines to the 5250.kbd file:
	
	  NumPgUp : PAGE_UP
	  NumPgDn : PAGE_DOWN
	  NumEnter: ENTER
	
	  NOTE: 5250.kbd will already include default entries for the 5250 PAGE_UP,
	  PAGE_DOWN, and ENTER functions, mapped to the PageUp, PageDown, and Enter
	  keys respectively.
	
	3. Copy the 5250.kbd file to Keyboard.map, and place Keyboard.map in the same
	  directory where the Win5250.exe program resides:
	
	   - for Windows 3.x clients, the default is <sna.win>
	
	   - for Windows 95 clients, the default is <sna95>\system
	
	   - for Windows NT clients, the default is <sna>\system
	
	4. Restart the 5250 applet.
	
	5. To verify that the new keyboard mapping is in effect, go to the Keypad option
	  on the menu bar and verify that Enter is mapped to NumEnter. If Enter is
	  still mapped to Enter, it may be necessary to delete and re-create shortcuts
	  to the 5250 applet.
	
	REFERENCES
	==========
	
	For more information about other keyboard functions of the 5250 applet, see the
	following Microsoft Knowledge Base article:
	
	  Q107116 5250 Applet Keyboard Functions
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbui kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300NT kbSNAServ400NT
	Version           : winnt:3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
