---
layout: page
title: "Q107119: Local and Remote Control Point Names Can't be the Same"
permalink: kb/107/Q107119/
---

## Q107119: Local and Remote Control Point Names Can't be the Same

	Article: Q107119
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have difficulty making a connection with a link, confirm that the local
	and remote Control Point names are not the same. A common cause of connection
	difficulties with a new configuration is that the same names have been specified
	for both local and remote Control Point and Network names.
	
	MORE INFORMATION
	================
	
	In SNA Server Admin, the local Control Point and Network names are set in a
	different dialog box than the remote Control Point and Network names. The local
	Control Point Name and Network Name apply to all connections, and are set in the
	Server Properties dialog box. The remote Control Point Name and Network Name for
	a particular connection are set in the Connection Properties dialog box.
	
	- The local network name and control point name (configured in the Server
	  dialog) identify the SNA Server node to the SNA network.
	
	- The remote network name and remote control point name (configured in the
	  connection dialog) identify the remote node name that you want to connect to.
	
	- These should never be set to the same value. If they are, the connection will
	  show up as "Pending" and never activate (note that there are other causes for
	  a Pending status besides this possible configuration problem).
	
	To verify duplicate names use SNA Admin and do the following:
	
	1. In the Servers and Connections window, choose Services.
	
	2. Select Properties.
	
	3. Make a note of the SNA Server Network Control Point Name.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211
	Version           : WINDOWS:2.0,2.11
	
	=============================================================================
	
