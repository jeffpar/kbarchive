---
layout: page
title: "Q182884: SNA NT 4.0 Client Gets 1003 Error Connecting to SNA Server 3.0"
permalink: /kb/182/Q182884/
---

## Q182884: SNA NT 4.0 Client Gets 1003 Error Connecting to SNA Server 3.0

	Article: Q182884
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server 3.0 or 4.0 client for Windows NT may display the following error
	message when you try to connect to an SNA Server 3.0 (all service packs)
	system:
	
	  SNA Server - Error # 1003
	  SnaBase could not open a sponsor connection to server <server name>.
	
	In addition, the Windows NT client logs the following messages in the Application
	event log:
	
	  
	
	  Event ID: 705
	  Source: SNA Base Service
	  Description: Logon Failed.
	  Explanation: Connection request failed due to data security.
	  GetChallengeResponse failed --- Error Code: C0000008H
	
	  Event ID: 705
	  Source: SNA Base Service
	  Description: Logon Failed.
	  Explanation: Connection request failed due to data security.
	  RegisterLogonProcess failure --- Error Code: C0000041H
	
	The SNA Server 3.0 system logs the following message in its Application event
	log:
	
	  
	
	  Event ID: 705
	  Source: SNA Base Service
	  Description: Logon Failed.
	  Explanation: Connection request failed due to data security. Invalid
	  Challenge Response --- Error Code: 002B000AH
	
	CAUSE
	=====
	
	The SNA Server clients for Windows NT, prior to version 4.0, set up the SnaBase
	service to run under the LocalSystem account. The SNA Server 4.0 client for
	Windows NT allows the SnaBase service to run under a user account specified
	during its initial setup. This user account dialog box also includes the
	following option:
	
	  Allow connection through SNA Server 3.0
	
	If this option is not selected, the client will be unable to connect to an SNA
	Server 3.0 system. This failure results in the error messages listed in the
	Symptoms section.
	
	If this problem is observed on an SNA Server 3.0 Windows NT client (running on a
	Windows NT Server or Windows NT Workstation), check the user context where where
	the SnaBase service is running. If SnaBase is running under a user context
	(instead of Local System), this problem can occur when the user account has not
	been assigned the "Act as part of operating system" user right on the SNA
	Windows NT client computer.
	
	RESOLUTION
	==========
	
	One of the following must be done to correct this problem:
	
	- When using the SNA Server 4.0 Windows NT client, enable the "Allow connection
	  through SNA Server 3.0" option on the Windows NT client. This option is only
	  available during the initial installation of the SNA 4.0 Windows NT client.
	  To enable it after installation (or when using an SNA 3.0 Windows NT client),
	  perform the following steps:
	
	  1. Run User Manager on the Windows NT client system.
	
	  2. Select Policies / Users Rights from the menu bar.
	
	  3. Select the Show Advanced User Rights option at the bottom of the User
	     Rights Policy dialog box.
	
	  4. Select "Act as part of the operating system" from the drop-down list of
	     rights.
	
	  5. Select Add to display the Add Users and Groups dialog box.
	
	  6. Select the user account that the SnaBase service was configured to run
	     under during its initial installation.
	
	  7. Click Add to add this account into the Add Names: portion of the dialog
	     box.
	
	  8. Click OK.
	
	  9. The selected account is now listed in the Grant To: portion of the User
	     Rights Policy dialog box.
	
	  10. Click OK to exit the User Rights Policy dialog box.
	
	  11. Close User Manager.
	
	  12. Stop and restart the SnaBase service.
	
	  -OR-
	
	- Reconfigure the SnaBase service to run under the LocalSystem account.
	
	MORE INFORMATION
	================
	
	SNA Servers prior to version 4.0 use the LSA logon method for sponsor
	connections. In order to use the LSA logon method, the SnaBase service on the
	client has to meet one of the following conditions:
	
	- It is configured to run under the LocalSystem account.
	
	  -OR-
	
	- The account it is configured to run under needs the "Act as part of the
	  operating system" user right on the client system.
	
	If the "Allow connection through SNA Server 3.0" option is selected during
	installation, the Setup program adds this user right to the SnaBase user account
	automatically.
	
	
	SNA Server 4.0 (and later versions) use the NTLM logon method for sponsor
	connections.
	
	NOTE: The "Allow connection through SNA Server 3.0" option is documented in the
	SNA Server 4.0 Readme.doc file in the section titled "Interoperability with
	Previous Versions of SNA Server." However, the option is incorrectly listed as
	"Interoperate with SNA Server 3.0."
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
