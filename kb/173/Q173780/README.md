---
layout: page
title: "Q173780: Err Msg: A Fatal Exception Error 06 Has Occurred"
permalink: kb/173/Q173780/
---

## Q173780: Err Msg: A Fatal Exception Error 06 Has Occurred

	Article: Q173780
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 21-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to MSN, The Microsoft Network, you may receive the following
	error message:
	
	  A fatal exception error 06 has occurred.
	
	CAUSE
	=====
	
	This behavior can occur if you are using an Everex StepNote laptop computer with
	a NeoMagic MagicGraph video adapter.
	
	RESOLUTION
	==========
	
	To resolve this behavior, contact your computer manufacturer to determine if
	there is a newer video driver available. This error message may occur with
	version 4.03.00.2526 of the NeoMagic MagicGraph128ZV video driver.
	
	WORKAROUND
	==========
	
	To work around this behavior, configure your computer to not use the hardware
	acceleration feature. To do so, follow these steps:
	
	Windows 95
	----------
	
	1. Right-click My Computer on the desktop, and then click Properties.
	
	2. On the Performance tab, click Graphics.
	
	3. Move the Hardware Acceleration slider to None.
	
	4. Click OK, click Close, and then click Yes to restart your computer.
	
	Windows 98
	----------
	
	1. Right-click My Computer on the desktop, and then click Properties.
	
	2. On the Settings tab, click Advanced.
	
	3. On the Performance tab, move the Hardware Acceleration slider to None.
	
	4. Click OK, click OK again and then click Yes if you are prompted to restart
	  your computer.
	
	
	Additional query words: 1.20 msn
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN252 kbMSN130 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	
