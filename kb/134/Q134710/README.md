---
layout: page
title: "Q134710: Thrustmaster Joystick Fails Control Panel Test"
permalink: kb/134/Q134710/
---

## Q134710: Thrustmaster Joystick Fails Control Panel Test

	Article: Q134710
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a ThrustMaster F-16 FLCS joystick using the Joystick
	tool in Control Panel, the joystick fails the tests performed by Windows 95.
	When you are finished installing it, the joystick does not function properly.
	
	CAUSE
	=====
	
	This problem can occur if the joystick is connected to a ThrustMaster Mark I
	Weapons Control System (WCS) device, rather than directly to the computer
	itself. Mark I WCS configurations are not supported by the Windows 95
	protected-mode joystick driver (Vjoyd.vxd).
	
	RESOLUTION
	==========
	
	Connect the joystick directly to the computer, rather than to the Mark I WCS
	device.
	
	MORE INFORMATION
	================
	
	The Thrustmaster joystick has been produced with a ThrustMaster Mark I Weapons
	Control System (WCS) and a ThrustMaster Mark II Weapons Control System (WCS).
	The Mark II Weapons Control System (WCS) works with Windows 95, but the Mark I
	Weapons Control System (WCS) does not. For more information contact,
	ThrustMaster.
	
	The ThrustMaster products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: fcs flight stick flightstick
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
