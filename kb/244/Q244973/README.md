---
layout: page
title: "Q244973: SNA Server Client Returns APPC Error 0001 0000015B"
permalink: kb/244/Q244973/
---

## Q244973: SNA Server Client Returns APPC Error 0001 0000015B

	Article: Q244973
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to establish a connection to an AS/400 with the APPC security check
	box enabled in the SNA Manager Subdomain Security folder, an SNA Server 5250
	client may return the following APPC error:
	
	  primary_rc = X'0001' (AP_PARAMETER_CHECK)
	  secondary_rc = X'0000015B' (AP_BAD_PARTNER_LU_ALIAS)
	
	This can also happen with an independent LU 6.2 connection to a host. The primary
	APPC return code is (0001) and the secondary return code is (0000015B). This
	error also appears in the display portion of the LU-LU test when you use the
	APPC session viewer in SNA Manager.
	This error is returned when the user does not have authority to establish a
	conversation over the Remote APPC LU being requested by the APPC or CPI-C
	application (this error can also occur if the application is requesting a Remote
	APPC LU that is not configured on an SNA Server computer).
	
	WORKAROUND
	==========
	
	To verify whether or not APPC security is enabled, check the properties of the
	SNA subdomain, by clicking the Security tab. If the APPC security check box is
	checked, then the user must be configured to have permissions to the Local and
	Remote APPC LU under the configured users folder. The other option is to turn
	off APPC security.
	
	MORE INFORMATION
	================
	
	This following example is a sample of the output when you run the LU-LU test
	with APPC security enabled in the APPC Session Viewer:
	
	  TP_Started primary rc: 0H
	  *** Allocate Failed ***
	  Allocate Primary RC : 1H
	  Allocate Secondary RC : 15BH
	  Please check the application event logs for further details on why the
	  allocate failed.
	  The Partner LU Alias is incorrectly configured. Check session configuration.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q150841 Troubleshooting Common APPC Error Codes
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
