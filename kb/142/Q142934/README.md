---
layout: page
title: "Q142934: Problems Using Two Identical Modems in Windows 95"
permalink: kb/142/Q142934/
---

## Q142934: Problems Using Two Identical Modems in Windows 95

	Article: Q142934
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install two identical modems in Windows 95 and then try to use the second
	modem with a 32-bit communications program that supports the Telephony
	Application Programming Interface (TAPI), the first modem may be used instead.
	The problem occurs if both modems are identified and installed as the same
	model.
	
	CAUSE
	=====
	
	This problem is caused by the length of the "friendly" name for the modem. You
	can see the modem's friendly name (for example, "Practical Peripherals PM288MT
	II V.34") in the Modems tool in Control Panel.
	
	
	RESOLUTION
	==========
	
	To work around this problem, remove the second modem and then reinstall it as a
	different model. To do so, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Modems.
	
	2. Click the second modem, and then click Remove.
	
	3. Click Add, click the "Don't detect my modem..." check box to select it, and
	  then click Next.
	
	4. In the Manufacturers and Models boxes, click a manufacturer and model that is
	  compatible with your modem. If your modem is not compatible with another
	  modem, click Standard Modem Types in the Manufacturers box and click the
	  model that matches the speed of your modem in the Models box.
	
	  NOTE: If you choose one of the standard modems, you may not be able to use
	  some of the advanced features of your modem. For example, the option to use
	  data compression may not be available.
	
	5. Click Next.
	
	6. Click the appropriate port for the modem, and then click Next.
	
	7. Click Finish.
	
	MORE INFORMATION
	================
	
	This problem typically occurs when you install one modem to use with
	communications programs, and another modem to use for a different purpose, such
	as sending and receiving faxes. If both modems are identical and are installed
	as the same model, both modems appear in the Modems Properties dialog box. For
	example, if you install two Practical Peripherals PM288MT II V.34 modems in
	Windows 95, the following modems are displayed on the General tab in Modems
	properties:
	
	- Practical Peripherals PM288MT II V.34
	
	- Practical Peripherals PM288MT II V.34 #2
	
	Additional query words: dual multilink
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
