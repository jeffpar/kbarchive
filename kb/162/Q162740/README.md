---
layout: page
title: "Q162740: Using Motorola Premier 33.6 Modem with MSN"
permalink: /kb/162/Q162740/
---

## Q162740: Using Motorola Premier 33.6 Modem with MSN

	Article: Q162740
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The manufacturer's .inf file supplied with the Motorola Premier 33.6 modem sets
	some parameters incorrectly for use with MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	The manufacturer's .inf file disables Automode modulation and locks the modem in
	v.22bis mode. To use Automode modulation characteristics and true v.34 modem
	speeds, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the Motorola Premier 33.6 modem, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. In the Extra Settings box, type the following string:
	
	  "*MM" (without the quotation marks)
	
	6. Click OK or Close until you return to Windows.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	
	=============================================================================
	
