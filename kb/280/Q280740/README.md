---
layout: page
title: "Q280740: Issues Associated with the SNA Server/HIS 2000 Web Client"
permalink: /kb/280/Q280740/
---

## Q280740: Issues Associated with the SNA Server/HIS 2000 Web Client

{% raw %}

	Article: Q280740
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp2 kbsna300sp3 kbsna300sp4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses known issues that relate to installing, configuring, and
	using the SNA Server/Host Integration Server (HIS) 2000 Web Client.
	
	MORE INFORMATION
	================
	
	Issue 1: Installing the Web Client Over an Existing SNA/HIS 2000 End-User Client
	--------------------------------------------------------------------------------
	
	If you attempt to install the SNA Server/HIS 2000 Web Client on a computer that
	already has an SNA Server/HIS 2000 client/server installed on it, you may
	receive the following error message:
	
	  Cannot install over existing client/server installation!
	
	Resolution:
	
	The Web Client cannot be installed on a computer that already has the SNA/HIS
	2000 client/server on it. If you currently have a SNA client installed, there is
	no need to install the Web Client.
	
	Issue 2: Cannot Get a 3270/5250 Session by Using the Web Client.
	----------------------------------------------------------------
	
	When you are trying to get a 3270 or 5250 session, the emulator opens and
	displays a "blank screen," but never connects. If this computer had the SNA
	Server/HIS 2000 end-user client installed on it and the end-user client was
	later removed, the Web Client may be trying to use the old Win3270.ini and
	Win5250.ini files for configuration information.
	
	Resolution:
	
	To resolve this problem:
	
	1. Close out all sessions.
	
	2. Search your entire hard drive for any Win3270.ini and Win5250.ini files, and
	  then delete all of them.
	
	3. Run the 3270/5250 sessions again. This process will cause new *.ini files to
	  be created with the appropriate configuration settings that were set up by
	  the Administrator.
	
	Issue 3: Opening a 5250 Session for the First Time Gives an Error Message
	-------------------------------------------------------------------------
	
	When you open a 5250 session for the first time, you may receive the following
	error message:
	
	  Local LU not configured on an active Node. Either the Local LU has not been
	  configured, or its Node is not started. Please check your configuration!
	
	  [F004][020000F0]
	
	Resolution:
	
	When the 5250full.htm file was edited by the Administrator with the needed
	configuration information (for example, Sponsor Server, Local LU, Remote LU and
	so on), lowercase letters were used. Use uppercase letters when you configure
	the 5250full.htm file.
	
	
	REFERENCES
	==========
	
	For more information on using, configuring, and troubleshooting the Web Client,
	please review the Help documentation.
	
	For additional information about the Web Client, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q279003 Understanding and Configuring the SNA Server/HIS 2000 Web Client
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp2 kbsna300sp3 kbsna300sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
