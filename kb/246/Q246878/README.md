---
layout: page
title: "Q246878: How to Configure a Compass Client to Log On to an MMS Server"
permalink: kb/246/Q246878/
---

## Q246878: How to Configure a Compass Client to Log On to an MMS Server

	Article: Q246878
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2,2.2 SP1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services versions 2.1, 2.2, 2.2 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Compass client is a Lightweight Directory Access Protocol (LDAP) client that
	is required for Microsoft Metadirectory Services (MMS) management. You can also
	use the Compass client for end user directory access. This article describes how
	to configure a Compass client to log on to an MMS server. You can log on to a
	Compass client using either of the following methods:
	
	- Run Compass on the computer that has MMS installed.
	
	- Connect to the MMS server remotely using another computer on the network.
	
	This article describes how to set up the client to work with both situations.
	
	MORE INFORMATION
	================
	
	How to Install the Compass Client
	---------------------------------
	
	1. If you are remotely installing a client computer, open a Web browser and
	  connect to either the Internet Protocol (IP) address of the MMS server or the
	  NetBIOS name of the MMS server.
	
	2. The Your Metadirectory dialog box is displayed. In the lower left-hand side
	  of the dialog box, click the Install Zoomit Compass arrow.
	
	3. After the installation begins, click Next.
	
	4. Verify the destination folder, and then click Next.
	
	5. Click Finish to complete Setup.
	
	The Compass icon is now displayed on the desktop.
	
	How to Configure Compass to Run Locally on the MMS Server
	---------------------------------------------------------
	
	1. Double-click the Compass icon.
	
	2. The Metadirectory Logon dialog box is displayed.
	
	3. In the Name box, type the Simple Mail Transfer Protocol (SMTP) address of the
	  logon account.
	
	  After a new installation, the Administrator account is the only account in the
	  database by default. This account is set to the following format:
	
	  <ServerName>@<FullyQualifiedServerIPName>
	
	  For example:
	
	  someone@someone.dns.microsoft.com
	
	  When additional accounts are created in the database, you log on using the
	  SMTP address (stored as the mail attribute) and the correct password.
	
	4. In the Password box, type the password, and then click OK.
	
	  NOTE: The password is case sensitive.
	
	5. In the Servers dialog box, make sure the name of the server is selected, and
	  then click OK to log on to the MMS server.
	
	How to Configure Compass to Connect to a Remote MMS Server
	----------------------------------------------------------
	
	1. Double-click the Compass icon.
	
	2. The Metadirectory Logon dialog box is displayed.
	
	3. In the Name dialog box, type the SMTP address of the logon account.
	
	4. Click to select the "Select server manually" check box in advanced settings.
	  If you do not select this check box, a broadcast mechanism is used to find
	  the server to which the logon account belongs.
	
	5. In the Password box, type the password, and then click OK.
	
	6. When the Servers dialog box is displayed, click Configure.
	
	7. In the Configure Server dialog box, click New.
	
	8. In the Name box, type the server name.
	
	9. In the Host Name or Address box, type the host name or IP address.
	
	10. Keep the value in the Port box set to its default (389), unless you need to
	  change the value (for example, if the port is being used by another
	  program).
	
	11. Click Apply, and then click OK.
	
	12. Click OK, and then log on to the specified MMS server.
	
	For more information about the Compass client and how to administer an MMS
	server, refer to the online documentation.
	
	Additional query words: splash screen splashscreen via zoomit
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbMMSSearch kbMMS210 kbMMS220 kbMMS220SP1
	Version           : :2.1,2.2,2.2 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
