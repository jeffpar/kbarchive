---
layout: page
title: "Q313728: HIS 2000 Clients Using Active Directory Fail to Get Host Session"
permalink: kb/313/Q313728/
---

## Q313728: HIS 2000 Clients Using Active Directory Fail to Get Host Session

	Article: Q313728
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Host Integration Server (HIS) 2000 clients that are configured to locate servers
	through the use of Active Directory may be unable to connect to a host session.
	This problem will most likely effect 3270 display and print sessions, but it can
	also affect Advanced Program-to-Program Communications (APPC) and logical unit
	application (LUA) sessions.
	
	The symptoms may vary depending on what application (for example, a 3270
	emulator) that you are using. When you use the 3270 client (Win3270.exe) that is
	included with HIS 2000, the 3270 client will show a blank screen (with no error
	message) and stop responding.
	
	CAUSE
	=====
	
	HIS 2000 clients that are configured to locate HIS 2000 servers through Active
	Directory issue Windows Management Instrumentation (WMI) queries to obtain
	various configuration information, such as what resources (for example, 3270
	sessions) are assigned to the user. In order to execute these WMI queries, HIS
	2000 requires that the Manage Client process (Mngcli.exe) is running. If this
	process is not running, the HIS 2000 management components will start it, under
	the user context that is specified in the incoming WMI query.
	
	If this user context does not have administrator permissions on the HIS 2000
	server, the current WMI query will stop responding, as will all subsequent WMI
	queries. This prevents users from being able to obtain host sessions on HIS 2000
	clients that must issue WMI queries to get requested configuration information.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+---------------------------------+
	| File name   | Date       | Time | 
	+---------------------------------+
	| Mngbase.dll | 12/17/2001 | 9:36 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	Reconfigure the HIS 2000 clients to locate HIS 2000 servers through the use of a
	subdomain name or server name instead of through the Active Directory. HIS 2000
	clients that are configured to locate servers through the subdomain or server
	name are not affected by this problem because WMI queries are not used in this
	configuration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	This problem is most likely to affect applications that use 3270 display or
	print logical units (LUs) because user security is enabled for 3270 LUs by
	default. If user security is enabled for APPC and LUA LUs, applications that use
	these types of LUs will also be susceptible to this problem because the HIS 2000
	client will need to determine which LUs are assigned to the user's user/group
	record in SNA Manager.
	
	The following is an example of what an SNA application 3270 message trace
	(Climsg1.atf) might look like when you use the 3270 client and this problem
	occurs:
	
	Get 3270 LU list for User from OU OU=his2000,DC=hisdomain,DC=net
	Connecting to WMI server HISSERVER
	Connected to WMI server HISSERVER
	Run query SELECT LU, IsPool, Model, IsAssociatedPrinterLU, ModelOverridable
	FROM MsSna_AccountAssigned3270 WHERE Wks="HISCLIENT" AND 
	IPAddress="123.123.12.123" AND MACAddress="400012345678" AND Account="*"
	
	NOTE: The last three lines of this trace are a single query. Line breaks have
	been added for readability.
	
	The last statement in the trace sample shows the WMI query that you used to
	obtain the 3270 LUs that are assigned to the user record for the user who is
	running the 3270 client. This WMI query stops responding on the HIS 2000 server.
	The 3270 client also stops responding at this point.
	
	You use the HIS 2000 Client Resource Location Wizard to configure the client so
	that it can locate and connect to HIS 2000 servers. This is where you configure
	the client to locate HIS 2000 servers through the use of either a subdomain or
	Active Directory.
	
	Use a Subdomain to Locate Servers
	---------------------------------
	
	This option configures HIS 2000 clients to use a sponsor connection. This is
	basically the same way that previous versions of the SNA Server client locate
	SNA Servers. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q160849 INFO: How the SNA Server Client Chooses a "Sponsor" SNA Server
	
	After you select this option, you specify how the "sponsor" client will locate
	the server-side SnaBase service:
	
	- Locate servers by subdomain. You must specify the name of the HIS 2000
	  subdomain that the client participates in. For this option to work, the
	  server must be able to receive a broadcast or multicast message from the
	  client computer. When you use TCP/IP, this option does not work if there is
	  an IP router between the client and server.
	
	- Locate servers by server name. The server name or TCP/IP addresses are
	  explicitly configured. This is the recommended option when you use a sponsor
	  connection because it will work when routers are located between the client
	  and server.
	
	Use Active Directory to Locate Servers
	--------------------------------------
	
	To configure the client for Active Directory support, add the fully qualified
	Active Directory organization unit (OU) name or names that the client will use
	to locate HIS 2000 resources.
	
	After you apply the update, the context that the Manage Client (Mngcli.exe)
	process will run under is:
	
	- the Local System account if the Manage Client process is initiated by an
	  incoming WMI query. The WMI (Winmgmt.exe) service also runs under this
	  account.
	
	- The User account of the user who opens the SNA Manager Microsoft Management
	  Console (MMC) Snap-in if Manage Client has not been started due to a previous
	  WMI query.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
