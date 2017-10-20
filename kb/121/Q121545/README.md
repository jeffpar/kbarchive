---
layout: page
title: "Q121545: Compaq Prosignia Hangs on GUI Portion of Setup"
permalink: /kb/121/Q121545/
---

## Q121545: Compaq Prosignia Hangs on GUI Portion of Setup

{% raw %}

	Article: Q121545
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbhw kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT version 3.5 on a COMPAQ Prosignia DX/2 66, the
	system stops responding (hangs) at the graphical user interface portion of
	Setup. A dialog box requesting the product number is displayed as well as a
	mouse pointer, which is not functional.
	
	CAUSE
	=====
	
	This problem occurs if the mouse support is disabled in the system BIOS.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run the system's OEM EISA Setup utility supplied with the computer.
	
	2. Go to the Auxiliary Devices section.
	
	3. Select Pointing Devices.
	
	4. Ensure that Interrupts are enabled (interrupt 12).
	
	The Compaq product discussed here is manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
