---
layout: page
title: "Q307750: End-User Client Does Not Connect After Configuration Change"
permalink: /kb/307/Q307750/
---

## Q307750: End-User Client Does Not Connect After Configuration Change

	Article: Q307750
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 20-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Host Integration Server (HIS) 2000 End User Client may not function properly
	after you run the SNA Resource Location Wizard to make a configuration change to
	the End User Client.
	
	Symptoms may vary but may include the following:
	
	- Failure to connect to an HIS 2000 or SNA Server system to obtain a host
	  session after making a configuration change.
	
	- Configuration changes made in the SNA Resource Location Wizard revert back to
	  their previous settings.
	
	CAUSE
	=====
	
	The SNA Resource Location Wizard incorrectly sets the following registry entry
	to a NULL value under some circumstances:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNA
	  Server\CurrentVersion\Setup:FinalXID
	
	WORKAROUND
	==========
	
	You can correct this problem by running the SNA Resource Location Wizard in
	Admin mode from a command prompt by using the following syntax, as documented in
	the HIS 2000 Readme.doc:
	
	  "HICLICFG /a" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	The following is an example scenario of the problem described in this article:
	
	1. Use the SNA Resource Location Wizard to configure the End-User Client to
	  Locate servers using Active Directory.
	
	2. Stop SnaBase.exe (if it is running).
	
	3. Use the SNA Resource Location Wizard to configure the End-User Client to
	  Locate servers using a Subdomain.
	
	4. In the Locate Servers dialog box, select Locate servers by Server Name.
	
	5. Type one or more server names for the sponsor servers in the Locate servers
	  by Server Name dialog box.
	
	6. Finish the configuration and close the Wizard.
	
	7. Start SnaBase.exe and note that Active Directory is still being used to
	  locate HIS 2000 servers.
	
	In this example, the configuration change was not implemented when you used the
	SNA Resource Location Wizard in non-Admin mode because the FinalXID registry
	entry was incorrectly set to a NULL value. If the FinalXID registry entry was
	correctly defined by the SNA Resource Location Wizard, the configuration change
	would have taken effect.
	
	NOTE: The FinalXID registry entry was not supposed to be modified by using the
	steps outlined here, but its value affects whether other configuration changes
	are saved.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
