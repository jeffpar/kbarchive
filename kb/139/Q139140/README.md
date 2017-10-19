---
layout: page
title: "Q139140: Older Supra Modems May Not Work on Unitel Phone Lines"
permalink: /kb/139/Q139140/
---

## Q139140: Older Supra Modems May Not Work on Unitel Phone Lines

	Article: Q139140
	Product(s): The Microsoft Network
	Version(s): 1.00 1.2 1.3 2.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unitel (Canada) uses v.34 modems on its network. As a result, older models of
	the Supra FAX 144i fax/modem that use the Rockwell chip set may not work
	correctly.
	
	MORE INFORMATION
	================
	
	To identify models with the older chip set, use the ATI3 command. If the result
	is version 1.4 or 1.5, the chip set is new and will probably work correctly. If
	the result is any other number (such as 1.2, 1.3, or 1.8) the chip set is older
	and may not work correctly.
	
	To use the ATI3 command, follow these steps:
	
	1. Start HyperTerminal.
	
	2. Type a name for the new connection (for example, Test) in the Name box.
	
	3. Click an icon for the connection, and then click OK.
	
	4. In the Connect Using box, click Direct To COM <X>, where <X> is
	  the COM port the modem uses, and then click OK.
	
	5. Verify the settings on the Port Settings tab, and then click OK.
	
	6. Type "ATI3" (without the quotation marks) and then press ENTER. The modem and
	  version number should be returned.
	
	7. Quit HyperTerminal. When you are prompted to save the session, click No.
	
	If you have a modem with the older chip set, you may be able to work around the
	problem by adding the following extra setting to turn off modem link negotiation
	and lock the modem at 14,400 bps:
	
	  "&F@NS37=11 " (without the quotation marks)
	
	To add this setting, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click your modem, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. In the Extra Settings box, type the following line:
	
	  "&F@NS37=11" (without the quotation marks)
	
	6. Click OK or Close until you return to Windows.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN105 kbMSN250 kbMSN120
	Version           : 1.00 1.2 1.3 2.00
	
	=============================================================================
	
