---
layout: page
title: "Q94988: Slow Keyboard Repeat Rate with the AnyKey Keyboard"
permalink: /kb/094/Q94988/
---

## Q94988: Slow Keyboard Repeat Rate with the AnyKey Keyboard

{% raw %}

	Article: Q94988
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some Gateway computers ship with the AnyKey programmable keyboard. On such
	systems, the keyboard repeat rate may be extremely slow, or you may accidentally
	program the keyboard to do something that you do not intend. In this situation,
	symptoms may indicate you have a problem with either Microsoft MS-DOS or Windows
	when this is not the case. To identify the AnyKey keyboard, locate a key labeled
	"Program" in the upper-right corner of the keyboard.
	
	MORE INFORMATION
	================
	
	The following information may help you work around problems with the AnyKey
	keyboard.
	
	Slow Keyboard Repeat Rate
	-------------------------
	
	The AnyKey programmable keyboard allows you to select the rate at which keys
	repeat when you hold down the keys. This setting overrides any setting made
	using the DOS MODE command or Windows Control Panel. You may choose any one of
	eight different rates, ranging from 2 characters per second (CPS) to 30
	characters per second.
	
	To set the repeat rate:
	
	1. Press the Repeat Rate Key (found in the upper-right corner of the keyboard).
	  The Program LED should begin to flash.
	
	2. Function keys F1 through F8 produce the following repeat rates:
	
	      F1    2  CPS
	      F2    3  CPS
	      F3    5  CPS
	      F4    7  CPS
	      F5   10  CPS
	      F6   15  CPS
	      F7   20  CPS
	      F8   30  CPS
	
	3. Press the function key that produces the rate you want, then press the Repeat
	  Rate key again. The Program LED stops flashing and the new repeat rate is
	  set.
	
	Keyboard is Programmed Incorrectly
	----------------------------------
	
	To reset the keyboard to its default state:
	
	1. Ensure the NUM LOCK, CAPS LOCK, and SCROLL LOCK LEDs are off. If these keys
	  are remapped (that is, they do not respond), skip this step and continue with
	  step 2.
	
	2. Press the CTRL+ALT+Suspend Macro key combination. (The Suspend Macro key is
	  in the upper-right corner of the keyboard.)
	
	The Program light on the keyboard flashes momentarily, indicating that the
	keyboard has been reset. If the keyboard hangs (stops responding) after
	performing the above steps, unplug the keyboard from the central processing unit
	(CPU), then plug it in again or restart the computer.
	
	If the computer is running Windows, the reset may fail. If this happens, exit
	completely out of Windows to the MS-DOS prompt, and repeat the reset
	instructions.
	
	The AnyKey keyboard is manufactured by Gateway, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	REFERENCES
	==========
	
	"Gateway 2000 Computer System User's Guide," pages 3-20 through 3-23.
	
	Additional query words: 3.00 3.00a 3.10 3.11 5.00 any key 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
