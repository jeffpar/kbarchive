---
layout: page
title: "Q158124: XCLN: ShivaRemote with Exchange - RAS Considerations"
permalink: /kb/158/Q158124/
---

## Q158124: XCLN: ShivaRemote with Exchange - RAS Considerations

{% raw %}

	Article: Q158124
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A white paper on ShivaRemote is located on Microsoft TechNet and can also be
	found on the following World Wide Web location:
	
	  http://www.microsoft.com/ExchangeSupport/
	
	ShivaRemote 3.59, which ships with Microsoft Exchange, can be used with the
	Microsoft Exchange client to allow users to remotely access a computer running
	Microsoft Exchange Server (either through a computer running Windows NT Server
	with RAS or Shiva LanRover). This article discusses server settings necessary to
	allow a Microsoft Exchange client to connect over Shiva.
	
	NOTE: ShivaRemote version 3.59 will connect to any Point-to-Point Protocol (PPP)
	dial-up server, but the Microsoft Exchange client over a ShivaRemote connection
	is only supported specifically dialing into either a Shiva LanRover or a
	computer running Windows NT 3.51 with RAS. (Dialing into NT 4.0 is not supported
	with Shivaremote 3.59)
	
	
	MORE INFORMATION
	================
	
	If possible, prior to testing ShivaRemote from a client computer, test dialing
	into the computer running Windows NT Server with RAS from either a computer
	running Windows NT Workstation (with RAS) or from a Windows 95 client (with
	Dial-up Networking). This will help eliminate the RAS server as the source of
	the problem. There are updated modem scripts for Windows NT that may also be
	necessary for proper operation, depending on the modem being used on the server
	and client computers.
	
	If you are unable to connect from a computer running Windows 95 or Windows NT
	Workstation, see the Microsoft Knowledge Base for information on setting up RAS
	under Windows NT or contact Microsoft technical Support for assistance.
	
	Specifically for an Exchange client to connect properly over ShivaRemote through
	a computer running Windows NT Server with RAS:
	
	1. Access must be granted to all remote users in the Remote Access Administrator
	  utility. Open the utility (Windows NT creates a Remote Access group when RAS
	  is installed on the server), click Users/Permissions, click each user you
	  want to allow dial-in capabilities, and select the "Grant dial-in permission
	  to user" check box.
	
	2. In Control Panel Network, click Remote Access Service, click Configure, and
	  click Network. Ensure the "Require Microsoft encrypted authentication" check
	  box is not selected in the Network Configuration dialog box of Windows NT
	  RAS. Check either the "Allow any authentication including clear text" or the
	  "Require Encrypted Authentication" check box.
	
	  If the "Require Microsoft encrypted authentication" check box is selected, the
	  Client computer will receive the following error message when connecting:
	
	  Unable to negotiate LCP connection. Please check that remote device is
	  installed and configured, and that dial-in is enabled.
	
	3. Ensure the Windows NT account does NOT have the "User Must Change Password at
	  Next Logon" check box selected.
	
	  If you have this check box selected, you will receive the following error
	  message when attempting to log on to Microsoft Exchange :
	
	  The MS Exchange directory service could not be opened. You must change your
	  password before logging on for the first time.
	
	4. If IPX is desired as the protocol for connectivity over ShivaRemote, either
	  Microsoft File and Print Services for NetWare (FPNW) or a NetWare server must
	  be configured to respond to the find_nearest_server query. For FPNW, this
	  option is set through Control Panel FPNW, "respond to Find_Nearest_Server
	  request."
	
	5. ShivaRemote 3.59 requires a local account to be granted dial-in access
	  (version 3.59 does not understand Domains). A RAS server primary domain
	  controller (PDC) or backup domain controller (BDC) is recommended.
	
	  If the computer running RAS is only a member server, you must grant dial-in
	  access to a local account on the server running RAS by first creating a local
	  account via User Manager for Domains (with the same username and password as
	  the domain account), selecting User/Select Domain and typing the machine name
	  of the computer running Windows NT Server with RAS.
	
	  Then access must be granted to that local user via the Remote Access Admin
	  utility by selecting Server/Select Domain and typing the machine name of the
	  RAS server, then selecting the local account you wish to grant access to.
	
	  Windows NT PDC's or BDC's "local accounts" are also the Domain accounts,
	  (unlike a computer running Windows NT Server that has two sets of accounts:
	  the local accounts for the machine and the domain accounts). Because of this,
	  it is recommended to have the computer running Windows NT Server with RAS set
	  up as a PDC or BDC.
	
	REFERENCES
	==========
	
	Updated modem scripts for use with ShivaRemote can be found on Shiva's web page
	at www.shiva.com under "support"/modem scripts.
	
	Additional configuration information may also be found in the Config.hlp file
	installed during installation of the ShivaRemote software.
	
	The following articles in the Microsoft Knowledge Base describe additional
	supported Shiva configurations for use with Microsoft Exchange:
	
	  Q158074 XCLN: Using ShivaRemote with Exchange (DOS/real-mode IPX)
	
	  Q157740 XCLN: Using ShivaRemote with Exchange (DOS/LanMan TCP/IP)
	
	  Q158095 XCLN: ShivaRemote with Exchange (Windows 3.x/LanMan NetBEUI)
	
	  Q158077 XCLN: Using ShivaRemote with Exchange (Windows 3.x/Real-Mode IPX)
	
	  Q158111 XCLN: ShivaRemote with Exchange (WFW 3.11/WFW TCP/IP or NetBEUI)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words: remote mail
	
	======================================================================
	Keywords          : kbenv kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
