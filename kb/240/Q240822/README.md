---
layout: page
title: "Q240822: BackOffice Server 4.5 and License Manager"
permalink: kb/240/Q240822/
---

## Q240822: BackOffice Server 4.5 and License Manager

	Article: Q240822
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BackOffice integrated Setup installs Microsoft SQL Server and Microsoft SNA
	Server in Per-Server licensing mode by default. As a result, you cannot use the
	BackOffice Client Access Licenses (CALs) against these server components without
	changing the licensing mode to Per-Seat instead.
	
	MORE INFORMATION
	================
	
	BackOffice 4.5 installs SQL Server and SNA Server components in Per-Server
	licensing mode by default. A BackOffice CAL cannot be deployed when these server
	components are installed in Per-Server licensing mode. Instead, individual
	server component CALs must be purchased separately for the appropriate number of
	users. A BackOffice CAL can be deployed only for server components that are
	running in Per-Seat licensing mode.
	
	If you want to run SQL Server and SNA Server in Per-Seat mode and deploy the
	BackOffice CALs against these programs, you need to switch the licensing mode
	for these servers from Per-Server to Per-Seat. You make this change in the
	Licensing tool in Control Panel on the computer on which these server programs
	are installed, or by using the License Manager tool (under Administrative Tools)
	from any server on the network. This only works remotely, however, if the
	currently logged-in user has the appropriate administrative privileges to the
	target server.
	
	To change the licensing from Per-Server to Per-Seat:
	
	1. In Administrative Tools (Common), start the License Manager tool.
	
	2. Click the Server Browser tab, and then expand the server you want to change.
	
	3. Double-click either Microsoft SQL Server 7.0 or Microsoft SNA Server
	  (depending on which one you need to change).
	
	4. In the Licensing Mode section, change the mode from Per Server to Per Seat.
	
	  NOTE: Changing the Licensing mode from Per-Server to Per-Seat is allowed only
	  one time. You cannot revert to Per-Server after this change is committed.
	  Please contact Microsoft for questions.)
	
	5. Click Yes, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbinfo
	
	=============================================================================
	
