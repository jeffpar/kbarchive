---
layout: page
title: "Q245632: Dial-Up AutoSync2 Link Service Support for SNA Server"
permalink: /kb/245/Q245632/
---

## Q245632: Dial-Up AutoSync2 Link Service Support for SNA Server

{% raw %}

	Article: Q245632
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all versions),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 U.S. SP1
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 U.S. SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Serengeti Systems Incorporated offers a Hayes AutoSync2 compatible link service
	for SNA Server that allows an SDLC connection through an asynchronous
	communication port. It is specific to Hayes AutoSync2 and does not support
	earlier versions of Hayes AutoSync.
	
	MORE INFORMATION
	================
	
	The Link Service requires a Hayes Optima 33.6 or 56kb modem with AutoSync2
	support. The part number for the 33.6 modem is 08-02688 and the 56kb modem is
	08-02892. These are the only two modems that this link service works with.
	
	To install the link service, do the following:
	
	1. Run the setup routine provided with the software. You will be prompted for a
	  password, which must be entered.
	
	2. Install the Link Service in SNA Server by choosing Insert, and then selecting
	  Link Service.
	
	3. Open the property sheet for the link service and choose Run License Manager.
	
	4. Choose First Run Authorization. This provides a 7-day window of activation.
	  After 7 days, it is necessary to contact Serengeti Systems Incorporated to
	  obtain a Full License Authorization.
	
	5. The Link service is SSIAUTOx and is configured with the necessary
	  initialization strings, COM port settings, and dial mode settings. The
	  default initialization strings should work without modification. The phone
	  number to dial is configured in the Connection Properties. COM1 through
	  COM256 are supported, as well as tone or pulse dial.
	
	To configure a connection, do the following:
	
	1. Choose Insert Connection, and then choose SDLC.
	
	2. On the general sheet of the Connection Properties, select SSIAUTOx.
	
	3. Select the Address sheet, and then enter the phone number to dial in the Dial
	  Data field.
	
	All other settings are configured as with any other SDLC connection.
	Tracing is accomplished through the trace utility or a built-in trace function
	that has the capability to trace the Link Service and/or the Device Driver, and
	is enabled thorough the Link Service Properties sheet.
	
	The Link Service Software is removed using the Add/Remove program in Control
	Panel.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	www.serengeti.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11 (all versions),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 U.S. SP1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
