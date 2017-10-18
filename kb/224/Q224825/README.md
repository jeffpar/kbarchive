---
layout: page
title: "Q224825: Event 4097 Logged Continuously By 5250 Print Session"
permalink: kb/224/Q224825/
---

## Q224825: Event 4097 Logged Continuously By 5250 Print Session

	Article: Q224825
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kberrmsg kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Event 4097 will be logged continuously if the AS/400 Print Device is incorrect.
	This event is found in the Application Event Log. The source is PPV5250. The
	text of the event is "Receive and Wait verb has completed with primary return
	code Dealloc Normal."
	
	MORE INFORMATION
	================
	
	Configuration of a 5250 print session in SNA Server requires the identification
	of an AS/400 Device Name. This item is part of the APPC tab in the print session
	properties dialog box. If the specified AS/400 Device Name exists on the AS/400
	and if it is associated with a controller for a different Microsoft SNA Server,
	the print session will start. It will immediately shut down and move into
	Pending status. Next, it will start and immediately shut down again. SNA Manager
	will show the session changing from Active to Pending and back to Active status.
	This cycle repeats as long as the Print Service is active on the SNA Server.
	
	The resolution is to configure the print session with a unique AS/400 Device
	Name.
	
	REFERENCES
	==========
	
	The print internal trace details the status change. Examples of entries for the
	status change are "AStCh New Status: pending," and "AStCh Old Status: active."
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	
