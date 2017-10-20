---
layout: page
title: "Q77205: SHIFT+UP/DOWN ARROW Combinations Don't Work on Toshiba 5100"
permalink: /kb/077/Q77205/
---

## Q77205: SHIFT+UP/DOWN ARROW Combinations Don't Work on Toshiba 5100

{% raw %}

	Article: Q77205
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an 84-key keyboard with the Toshiba 5100, using the SHIFT key with
	the UP or DOWN ARROW keys may not work properly with the MS-DOS version 5.x and
	versions 6.0 and later utilities.
	
	CAUSE
	=====
	
	In MS-DOS Shell, Qbasic, or Edit, pressing the SHIFT+UP/DOWN ARROW key
	combinations for text or file selection does not work correctly with an
	incorrect CMOS setup.
	
	The Toshiba 5100 CMOS setup contains options for an 84 or 101-key keyboard. The
	SHIFT+UP/DOWN ARROW key combinations do not operate properly if the setup is
	configured for an 84-key keyboard.
	
	The Toshiba CMOS setup option for 84-key keyboard selection disables the 17 page
	editing keys. This prevents the UP/DOWN ARROW keys from working in conjunction
	with the SHIFT key.
	
	RESOLUTION
	==========
	
	To correct the problem, change the system CMOS setup from an 84-key keyboard to
	a 101-key keyboard, as follows:
	
	1. Insert the Toshiba Setup disk in drive A.
	
	2. At the A prompt, type "TEST3" (without the quotation marks) and press ENTER.
	
	3. Enter 0 (zero) for the Setup option.
	
	4. Select the Keyboard option.
	
	5. Change the 84-key keyboard to the 101-key keyboard.
	
	6. Press F10 to save your changes and exit Setup.
	
	MORE INFORMATION
	================
	
	For more information, contact Toshiba.
	
	The Toshiba product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 5.00 6.00 6.20 6.21 6.22 hardware
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
