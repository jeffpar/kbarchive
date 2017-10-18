---
layout: page
title: "Q177768: XADM: How to Hide the Schedule+ Free/Busy Connector"
permalink: kb/177/Q177768/
---

## Q177768: XADM: How to Hide the Schedule+ Free/Busy Connector

	Article: Q177768
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to hide the Microsoft Schedule+ Free/Busy Connector
	using the Microsoft Exchange Administrator program in "Raw" mode.
	
	The Microsoft Schedule+ Free/Busy Connector enables Exchange Server to share
	Microsoft Schedule+ free and busy information with Microsoft Mail. The Schedule+
	Free/Busy Connector is an extension to the Microsoft Mail Connector.
	
	To hide the Microsoft Schedule+ Free/Busy Connector, perform the following
	steps:
	
	WARNING: Using Raw Mode of Exchange Administrator incorrectly can cause serious
	problems that may require you to reinstall Windows NT and or Microsoft Exchange.
	Microsoft cannot guarantee that problems resulting from the incorrect use of Raw
	Mode can be solved. Use Raw Mode at your own risk.
	
	1. To run the Microsoft Exchange Administrator program in Raw mode, run the
	  Admin.exe program with the /raw command line option.
	
	2. Enter the Exchange Administrator program in Raw mode.
	
	3. Highlight the Microsoft Schedule+ Free/Busy Connector.
	
	4. From the File menu, select Raw Properties or use the SHIFT+ENTER keystroke
	  combination.
	
	5. From the Object Attributes window, select the Hide from AB object.
	
	6. With the Hide from AB object highlighted, change the Edit value from zero to
	  1.
	
	7. Click the Set button. Notice the Attribute value change to 1.
	
	8. Click the OK button to finish.
	
	MORE INFORMATION
	================
	
	The Microsoft Schedule+ Free/Busy Connector will now be hidden from the Exchange
	Server computer's recipients container where the above procedure was performed.
	This hides the Microsoft Schedule+ Free/Busy Connector in the Global Address
	List for this server only.
	
	If you do not want the Microsoft Schedule+ Free/Busy Connector visible to users
	in the Global Address List, it may be necessary to perform this procedure on
	other Exchange Server computers in the site or organization.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
