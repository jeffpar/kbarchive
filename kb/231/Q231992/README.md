---
layout: page
title: "Q231992: XFOR: Enable/Disable Mtg Request Support w/PROFS/Notes Connector"
permalink: kb/231/Q231992/
---

## Q231992: XFOR: Enable/Disable Mtg Request Support w/PROFS/Notes Connector

	Article: Q231992
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): EXC55SP3Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With Exchange Server version 5.5 Service Pack 2, support for meeting requests
	from the Exchange PROFS Connector and the Exchange Notes Connector is enabled by
	default.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: LinkAge 3.2
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Lsdiamex.exe | 5.5.2604.0 | 
	+---------------------------+
	| Lsmexdia.exe | 5.5.2604.0 | 
	+---------------------------+
	| Lsmexhc.dll  | 5.5.2604.0 | 
	+---------------------------+
	| Lsmexnts.exe | 5.5.2604.0 | 
	+---------------------------+
	| Lsmexnts.exe | 5.5.2604.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LinkAge Message Exchange 3.2.
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	To implement the different settings to disable meeting request support, obtain
	the hotfix mentioned above. Then, modify the Exchconn.ini file and add the
	following line:
	
	  "MtgRequestSupport = No" (without the quotation marks)
	
	When the parameter is placed under the [LME] section, it turns off meeting
	request support for both the Exchange PROFS Connector and the Exchange Notes
	Connector.
	
	When the parameter is placed under the [LME-PROFS] section, it does not turn off
	meeting request support for the Exchange Notes Connector.
	
	When the parameter is in place, all meeting objects such as
	Accept/Tentative/Decline responses are downgraded to normal messages. When the
	parameter is set to YES or does not exist, functionality is not changed.
	
	The INI parameter/switch is for both Notes and PROFS. The switch can be turned on
	specifically for a particular connector, depending on the location of the
	parameter in the INI file. For example:
	
	  [LME]
	  MtgRequestSupport = No
	
	This will turn off all meeting request support for ALL connectors.
	
	  [LME-PROFS]
	  MtgRequestSupport = No
	
	In this case, only the Exchange PROFS Connector maps a meeting request to a
	normal message, and if there is an Exchange Notes Connector running on the same
	computer, the Exchange Notes Connector still supports the meeting request
	properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : EXC55SP3Fix 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
