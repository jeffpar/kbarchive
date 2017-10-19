---
layout: page
title: "Q164647: Server Displays Offline When Link Drops and Recovers"
permalink: /kb/164/Q164647/
---

## Q164647: Server Displays Offline When Link Drops and Recovers

	Article: Q164647
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the network connection between SNA Server Manager and a remote SNA Server
	service is lost, the SNA Server service shows a status of "Offline." If the
	network connection is reestablished within a few minutes, it stays offline until
	the administrator reopens the SNA subdomain in the SNA Server Manager.
	
	CAUSE
	=====
	
	If the network connection between the Manage Client to the Manage Agent fails,
	the SnaBase service (which relies upon broadcasts) still considers the services
	to be active. If the connection is reconnected before the SnaBase service frees
	the services from the services table, the SnaBase service never sends a service
	table update to indicate the services have recovered. Therefore, the network
	connection is never reestablished. This may cause the SNA Server Manager to
	display the SNA Server status as "Offline."
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. With the new
	Manage files, Mngcli.exe will now retry a dropped connection to Mngagent.exe
	three times with a two-minute delay between each retry. If the outage is longer
	than four minutes (the default setting), SnaBase detects the recovery and
	signals Mngagent.exe to try again. If the server broadcast times are changed to
	be longer, these times may need to be adjusted. The value of the retry delay
	multiplied by the number of retries should be slightly longer than the server
	broadcast value multiplied by four. The server broadcast value, which has a
	default of 60 seconds, is configured in the Server Broadcasts folder in the SNA
	Server Manager, in the SNA Server properties. The registry entries for adjusting
	these settings are:
	
	  HKEY_Local_Machine\Software\Microsoft\SNA Server\Parameters\Manage\ 
	     ConnectRetryLimit: REG_DWORD: <value>
	
	  HKEY_Local_Machine\Software\Microsoft\SNA Server\Parameters\Manage\ 
	     ConnectRetryDelay: REG_DWORD: <value>
	
	The updated modules are:
	
	  <Snaroot>\System\Mngagent.exe
	  <Snaroot>\System\Mngcli.exe
	  <Snaroot>\System\Snamanag.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
