---
layout: page
title: "Q81345: Mac Fax: Fax Gateway and Fax Modem ROM Incompatibilities"
permalink: /kb/081/Q81345/
---

## Q81345: Mac Fax: Fax Gateway and Fax Modem ROM Incompatibilities

	Article: Q81345
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.x, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Microsoft Mail for AppleTalk Networks Gateway to Fax, you may
	experience some problems based on ROM incompatibilities with the Orchid and
	FlexFAX fax modems.
	
	MORE INFORMATION
	================
	
	Following are some of the known problems:
	
	Orchid - ROM versions 1.07 and 1.04
	-----------------------------------
	
	- Modem dials the fax number and disconnects soon after the receiving fax
	  machine answers.
	
	-or-
	
	- Modem hangs during transmission.
	
	To verify the ROM version, use a terminal emulation program and type "ATI9
	(ATi9)" (without the quotation marks) followed by a RETURN. The modem will
	respond with the ROM version of the modem. If the version is other than 1.06,
	contact Orchid Technologies at (415) 683-0300 to ask about changing the ROM
	version to 1.06.
	
	FlexFAX
	-------
	
	- Modem disconnects during transmission.
	
	-or-
	
	- Modem hangs during transmission.
	
	To verify the ROM version, use a terminal emulation program and type "ATI0
	(ATi0)" (without the quotation marks) followed by a RETURN. The modem will
	respond with the ROM version of the modem. Contact Circuit Research at (603)
	880-4000 about obtaining the latest ROM version.
	
	Additional query words: 2.0 2.00 2.0a 2.00a 2.0b 2.00b 3.00 faxgate
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN2xSearch
	Version           : WINDOWS:2.x,3.0
	
	=============================================================================
	
