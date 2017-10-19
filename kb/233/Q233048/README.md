---
layout: page
title: "Q233048: RAS or RRAS Logs Event ID 20050 When PPTP Connection Is Refused"
permalink: /kb/233/Q233048/
---

## Q233048: RAS or RRAS Logs Event ID 20050 When PPTP Connection Is Refused

	Article: Q233048
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT RAS or RRAS Server computer running the Point to Point Tunneling
	Protocol (PPTP) intermittently refuses client connections over a Remote Access
	Service (RRAS) connection. The following error message is logged in the Event
	log on the PPTP server:
	
	  Event ID: 20050 Source: Remote Access Description: The user Domain\User
	  connected to port VPNx has been disconnected because the computer could not
	  be projected onto the network.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	
	This error is a result of projecting or "plumbing" the new route into the route
	table on the RRAS server for the connecting client. This only occurs when all
	the existing addresses have been used at least once and the clients connecting
	are actually recycling older, previously-used IP addresses.
	
	Additional query words: projection
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
