---
layout: page
title: "Q132623: Mixer Does Not Work After Upgrading to Windows 95"
permalink: kb/132/Q132623/
---

## Q132623: Mixer Does Not Work After Upgrading to Windows 95

	Article: Q132623
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The mixer program included with your Paradise sound card may not work after you
	upgrade to Windows 95. Additionally, the mixer control included with Windows 95
	does not affect the volume of sounds being played.
	
	CAUSE
	=====
	
	The Paradise card is really both a SoundBlaster 8-bit sound card and a Microsoft
	Windows Sound System-compatible sound card. Windows 95 installs drivers for both
	of these cards, causing previous proprietary volume- control methods to not
	work. The Windows 95 mixer control does work, but it is operating on the default
	audio device. If the default device is not the device being used (such as when
	the default device is the SoundBlaster device and you are playing a 16-bit file,
	so the Windows Sound System- compatible device is being used), adjusting the
	controls has no effect.
	
	RESOLUTION
	==========
	
	Set the Windows Sound System-compatible device as the preferred device using the
	Multimedia tool in Control Panel.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
