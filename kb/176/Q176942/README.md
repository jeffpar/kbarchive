---
layout: page
title: "Q176942: Fatal Exception Error or Computer Hangs with Incoming Fax"
permalink: kb/176/Q176942/
---

## Q176942: Fatal Exception Error or Computer Hangs with Incoming Fax

	Article: Q176942
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a fax is received by your computer while it is processing another fax, you
	may receive a fatal exception error message, and your computer may stop
	responding (hang).
	
	RESOLUTION
	==========
	
	To work around this issue, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Mail And Fax.
	
	2. In the list of installed information services, click Microsoft Fax, and then
	  click Properties.
	
	3. Click the Modem tab, click the modem you are using to receive incoming faxes,
	  and then click Properties.
	
	4. Click Answer After <n> Rings.
	
	5. Change the value in the Answer After <n> Rings box to the number of
	  rings you want Microsoft Fax to wait before the fax modem answers the call.
	
	6. Click OK, click OK, click OK, and then close Control Panel.
	
	MORE INFORMATION
	================
	
	For additional information about troubleshooting Microsoft Fax, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152196 How to Install and Use Microsoft Fax
	
	======================================================================
	Keywords          : kbenv kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
