---
layout: page
title: "Q168305: MSN Does Not Recognize the Creatix ISDN Card"
permalink: kb/168/Q168305/
---

## Q168305: MSN Does Not Recognize the Creatix ISDN Card

	Article: Q168305
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbmsn kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Creatix SO Plug and Play card with MSN, The Microsoft Network,
	you may receive the following error message:
	
	  Modem is busy or cannot be found. Your modem may already be in use, turned
	  off, or not connected properly.
	
	CAUSE
	=====
	
	The Capi 2.0 protocol is not installed. Creatix provides the Capi 2.0 protocol
	on a disk or CD-ROM that is included with the Creatix ISDN card.
	
	RESOLUTION
	==========
	
	To use the Creatix ISDN card successfully, follow these steps:
	
	Install the Creatix ISDN Card
	-----------------------------
	
	1. Install the Creatix ISDN card in your computer.
	
	2. In Control Panel, double-click Network.
	
	3. Click Add, and then click Adapter.
	
	4. Click Have Disk, and then click the path to the CD-ROM.
	
	5. Click the Creatix SO Plug and Play card.
	
	6. When you are prompted, restart your computer.
	
	Install the Capiport Driver (Capi 2.0 Protocol)
	-----------------------------------------------
	
	1. In Control Panel, double-click Network.
	
	2. Click Add.
	
	3. Click Protocol, and then click Add.
	
	4. Click Have Disk, and then click the path to CSS\Ger located on the
	  manufacturer's disk.
	
	5. Click OK.
	
	6. When you are prompted, restart your computer.
	
	Connect to MSN
	--------------
	
	1. Double-click the MSN icon.
	
	2. Click Setting, and then click Access Numbers.
	
	3. Click the "ISDN access to the Internet and MSN" service type.
	
	4. Click OK.
	
	5. In Connection Settings, click AcoISDN.
	
	6. Click OK, and then connect to MSN.
	
	If you need further assistance, please contact TELES technical support.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kberrmsg kbhw kbmsn kbHardware 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
