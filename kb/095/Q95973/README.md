---
layout: page
title: "Q95973: Using the Toshiba T5100 with Windows"
permalink: kb/095/Q95973/
---

## Q95973: Using the Toshiba T5100 with Windows

	Article: Q95973
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Toshiba DOS 5.0 and Microsoft Windows 3.1 on the Toshiba T5100
	laptop, you may experience the following problems:
	
	- The machine reboots when trying to run Windows.
	
	- The machine stops responding (hangs) when entering Windows.
	
	CAUSE
	=====
	
	You are using the Windows versions of HIMEM.SYS and SMARTDRV.SYS.
	
	RESOLUTION
	==========
	
	The Toshiba version of HIMEM.SYS and SMARTDRV.EXE have been modified for the
	T5100 and other Toshiba systems and should be used in place of the Windows 3.1
	versions.
	
	MORE INFORMATION
	================
	
	According to Toshiba technical support, these problems can be corrected as
	follows:
	
	1. Use the HIMEM.SYS driver that ships with Toshiba DOS 5.0 (rather than the one
	  that comes with Windows).
	
	2. Following steps 1 through 3 in the "T5100 and Windows 3.0" section below.
	
	T5100 and Windows 3.0
	---------------------
	
	You may receive either a
	
	  Violated System Integrity
	
	or
	
	  Parity Error 2
	
	message on a Toshiba T5100 when you run non-Windows-based applications in 386
	enhanced mode of Windows 3.0. Disabling the T5100 Fast ROM option may eliminate
	these messages.
	
	To disable Fast ROM, do the following:
	
	1. Run the file TEST3.EXE from the MS-DOS command prompt. This program is on the
	  Diagnostics disk included with the T5100.
	
	2. After running TEST3.EXE, choose zero for Setup. Select Expanded Memory, then
	  use the down arrow keys to select All Extended No Expanded Memory.
	
	3. Choose Negative for the Fast ROM option.
	
	Using the Windows Select Feature
	--------------------------------
	
	To properly use the Select feature on the T5100 with Windows 3.0, you need to
	select a 101-key keyboard. The Select feature (SHIFT+ARROW, SHIFT+HOME,
	SHIFT+END, SHIFT+PGUP, SHIFT+PGDN) allows you to select large blocks of text in
	Windows-based applications.
	
	To enable this feature on a T5100, do the following:
	
	1. Set up the machine for a 101-key keyboard by running TEST3.EXE on the Toshiba
	  Diagnostics disk.
	
	2. Choose 0 for SETUP and change the keyboard from 84 to 101 keys.
	
	3. Exit and save the changes.
	
	4. Install Windows and choose "Enhanced 101- or 102-key US and Non-US keyboards"
	  as the keyboard type.
	
	NOTE: If you have already installed Windows, run the Windows Setup program and
	select "Enhanced 101- or 102-key US and Non-US keyboards" as the keyboard type.
	
	For additional information, contact Toshiba technical support.
	
	The T5100 computer is manufactured by Toshiba, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 2.x 3.10 3.11 3.00 3.00a lap top lap-top 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
