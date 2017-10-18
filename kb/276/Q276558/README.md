---
layout: page
title: "Q276558: How to Uninstall and Reinstall SNA Server"
permalink: kb/276/Q276558/
---

## Q276558: How to Uninstall and Reinstall SNA Server

	Article: Q276558
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	At some point, you may need to uninstall and reinstall SNA Server. This
	operation can be very simple depending on the link services that are installed.
	You can save the Com.cfg file, uninstall and reinstall the SNA Server, and then
	paste the old Com.cfg file. The new install should be similar to the previous
	install, with the exception of the link services, which are not kept in the
	Com.cfg file. The link services must be noted before uninstalling, and then
	reinstalled manually. At that point, the various connections in the Com.cfg file
	must be reconfigured to point to the new link services.
	
	MORE INFORMATION
	================
	
	You must save the correct Com.cfg file to ensure a successful reinstallation.
	The SNA Server configuration is contained in the Com.cfg file on the SNA Server
	that holds the "server role" of "primary" in the SNA subdomain. To determine the
	role of each SNA Server, right-click each server in the SNA Server Manager and
	view the properties. You can find the Com.cfg file in the
	Installpath\Sna\System\Config folder.
	
	Following are the steps to uninstall SNA Server and to reinstall it on the same
	Microsoft Windows NT server:
	
	1. Before you uninstall SNA Server, make careful notes of all the parameters for
	  each link service that is installed. You must do this manually (by hand).
	  Enough information must be noted to allow the link service to reinstalled.
	
	2. Make notes about which link service each connection is configured to use. For
	  a server with many connections, an easy way to create a text file with the
	  link service information for each connection is to type the following at a
	  command prompt:
	
	  "snacfg /print > c:\temp\comcfg.txt" (without the quotation marks)
	
	  Search on the "linkservice" string to find this information.
	
	3. Copy the Com.cfg file from the primary configuration server in the SNA
	  subdomain. (See the "More Information" section for how to find the server
	  that is acting in the server role of "primary.")
	
	4. Uninstall the SNA server.
	
	For additional information about how to manually uninstall SNA Server 4.0, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q242571 How To Manually Uninstall SNA Server 4.0
	
	5. Reinstall the SNA Server.
	
	6. Copy the saved Com.cfg file to the Installpath\Sna\System\Config folder.
	
	7. Insert the link services from the notes that were taken earlier. You may need
	  to restart Windows NT, depending on the link service.
	
	8. Reconnect the connections to the corresponding link service from the notes
	  taken earlier.
	
	9. Save the configuration and start the SNA Server service.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : :3.0,4.0
	
	=============================================================================
	
