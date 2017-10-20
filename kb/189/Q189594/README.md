---
layout: page
title: "Q189594: RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 3.0 Release Notes"
permalink: /kb/189/Q189594/
---

## Q189594: RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 3.0 Release Notes

{% raw %}

	Article: Q189594
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbFEA kbWinNT400sp4fix kbWinNT400sp4fea
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the Routing and Remote Access Upgrade for
	Microsoft Windows NT 4.0 Server Hotfix Pack 3.0 Release Notes. For your
	convenience, the English version of this post-Service Pack 3 (SP3) hotfix has
	been posted to the following Internet location. However, Microsoft recommends
	that you install Windows NT 4.0 Service Pack 4 (SP4) to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP3/rras30-fix/
	
	MORE INFORMATION
	================
	
	Routing and Remote Access Upgrade 3.0 for Microsoft Windows NT(r) 4.0 Server Release Notes:
	
	Please use this document to address questions which may arise during the
	installation of this Routing and Remote Access Upgrade 3.0 for Microsoft Windows
	NT 4.0 Server.
	
	---------------------------------------------------------------------
	Contents
	
	- Information on Installation
	
	- Security Features in this Upgrade
	
	- Fixes and Features included from Hotfix Update 2.0
	
	- Known Problems in the 2.0 Hotfix Update
	
	- Fixes and Features included from Hotfix Update 1.0
	
	---------------------------------------------------------------------
	
	Information on Installation
	---------------------------
	
	This upgrade requires that you already have Routing and Remote Access Service
	(RRAS) for Windows NT 4.0 Server installed on your system. Note that you must
	first apply the Windows NT 4.0 PPTP Upgrade before you apply the RRAS upgrade
	3.0.
	
	IMPORTANT:Do not to restart your computer between installations of the Windows NT
	PPTP upgrade and the RRAS upgrade.
	
	For more information, please refer to the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q189595
	  TITLE : PPTP Performance & Security Upgrade for WinNT 4.0 Release Notes
	
	This release includes the features and fixes from both the Routing and Remote
	Access Hotfix Update 1.0 and 2.0 releases and is packaged in an auto-install
	format. Copy the Upgrade to a temporary directory, and double-click the
	executable name or type the executable name "rrasfixi.exe" for x86, or
	"rrasfixa.exe" for alpha at a command prompt to install.
	
	The files can also be extracted from the Upgrade pack without installing them. To
	do this, copy the Upgrade to a temporary directory, and type "rrasfixi /x" or
	"rrasfixa /x" (without the quotation marks) at a command prompt. After
	extracting the files, the Upgrade can be installed by typing "hotfix" (without
	the quotation marks) at a command prompt.
	
	To uninstall this upgrade, extract the files to a directory using the "/x"
	command as mentioned above and then type "HOTFIX -Y" (without the quotation
	marks) from the same directory you copied the files to.
	
	Output of "HOTFIX -?" :
	
	HOTFIX [-y] [-f] [-n] [-z] [-q] [-m] [-l]
	
	     -y Perform uninstall (only with -m or -q)
	     -f Force apps closed at shutdown
	     -n Do not create uninstall directory
	     -z Do not reboot when update completes
	     -q Quiet Mode -- no user interface
	     -m Unattended mode
	     -l List installed hotfixes
	
	Security Features in this Upgrade
	---------------------------------
	
	This upgrade provides several RAS/PPTP security enhancements for the Routing and
	Remote Access Upgrade for Microsoft Windows NT 4.0 Server. This upgrade also
	includes the performance improvements and other fixes that were included in
	previously released hotfixes.
	
	- A new version of MSCHAP (MSCHAP V2) has been implemented for VPN connections.
	  This new protocol provides mutual authentication, stronger initial data
	  encryption keys, and different encryption keys for the transmit and receive
	  paths. To minimize the risk of password compromise during MSCHAP exchanges,
	  MSCHAP V2 drops support for the MSCHAP password change V1, and will not
	  transmit the LMHash encoding of the password.
	
	  For VPN connection requests, a Windows NT server offers MSCHAP V2 before
	  offering the legacy MSCHAP. Updated Windows clients (all platforms) accepts
	  MSCHAP V2 when it is offered. This behavior affects only VPN connections;
	  dial-up connections are not affected.
	
	- A new registry key, SecureVPN, has been defined to force use of MSCHAP V2.
	  When this variable is absent it has a default value of zero. When set to one
	  on a Windows NT server, this registry key causes the server to drop any VPN
	  connections that do not authenticate using MSCHAP V2. This prevents legacy
	  VPN clients from presenting their credentials in an MSCHAP (or CHAP or PAP)
	  exchange, and is a likely configuration for networks that require a more
	  secure authentication method for VPN connections.
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\RasMan\PPP
	
	  DWORD: SecureVPN
	  Value: 0x00000001 == force MSCHAP V2 for VPN connections
	  Value: 0x00000000 == do not force secure MSCHAP V2 (default)
	
	  When set to one on a Windows NT 4.0 client, the SecureVPN registry key forces
	  the client to use MSCHAP V2 for all VPN (PPTP) connections. Dial-up
	  connections are not affected by this registry setting.
	
	  NOTE: Most users do not need to use the Secure VPN flag. This flag should be
	  used with care because it affects the behavior of all VPN connections from a
	  client. In general, the required use of MSCHAP V2 can be enforced more easily
	  on the server.
	
	- This release also provides a registry variable, UseLmPassword, which can be
	  set to prevent clients from sending the LM response to a legacy MSCHAP
	  challenge or in an MSCHAP change password exchange. When this variable is
	  absent it has a default value of one, allowing use of the LM response (in
	  order to maintain compatibility with legacy systems).
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\RasMan\PPP\Chap
	
	  DWORD: UseLmPassword
	  Value: 0x00000001 == send LMHash of the password (default)
	  Value: 0x00000000 == do not send LMHash of the password
	
	  Setting this variable to zero on a server causes the server to drop any
	  connection request which uses the LM response in an MSCHAP exchange. Setting
	  this variable to zero on a client prevents the client from using LM responses
	  in MSCHAP exchanges. This variable affects both dial-up and VPN connections.
	
	  NOTE: Most users do not need to use this registry variable. The new secure
	  mode MSCHAP V2 will not send the LMHash response, so this registry value is
	  most useful when connecting to older access servers which use the original
	  MSCHAP.
	
	- Other fixes in this upgrade:
	
	  Two-way authentication with Demand-Dial Interfaces has been corrected in this
	  upgrade.
	
	Fixes and Features included from Hotfix Update 2.0
	--------------------------------------------------
	
	NT Issues Performance Issues:
	
	- This release includes an enhancement to TCP/IP that improves the performance
	  of TCP-based applications over high latency and networks that experience high
	  packet loss, such as the Internet.
	
	Routing Issues:
	
	- Added new Demand dial filters. You can now keep demand dial interfaces from
	  dialing by setting filters using the Routemon.exe command with a new
	  "Filtertype= Dial" option. The new syntax for this is the same for setting
	  Input and Output filters using Routemon.exe, and can be seen by typing
	  "routemon ip set filter /?" at a command prompt.
	
	  The following is an example of the syntax used to prevent a demand dial
	  interface from dialing:
	
	  C:\>routemon ip add filter myremoterouter dial 0.0.0.0 0.0.0.0
	  0.0.0.0 0.0.0.0 any
	
	  C:\>routemon ip set filter myremoterouter dial forward
	
	  NOTE: The first example above is one line; it has been wrapped for
	  readability.
	
	  For more information on using the Routemon.exe command to set filters, please
	  see the Routing and Remote Access Administrator's Guide.
	
	- Added the capability to filter fragmented IP packets. Two registry keys
	  control this functionality.
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\IPFilterDriver\Parameters
	
	  DWORD: EnableFragmentChecking
	  Value: 0x00000001 == enables fragment checks
	  Value: 0x00000000 == disables fragment checks (default)
	
	  DWORD: DefaultForwardFragments
	  Value: 0x00000001 == filterdriver forwards fragments (default)
	  Value: 0x00000000 == filterdriver drops fragments if they don't match
	  a previous header
	
	- Changes were made to the Router's Remote Authentication Dial-In User Service
	  (RADIUS) client to resolve a duplicate Acct-Session-Id accounting problem, as
	  well as an issue that caused the reversal of the Framed-IP-Address returned
	  from a RADIUS server. In addition, the RADIUS client has been enhanced to now
	  support the transmission of the NAS-Port-Type and Acct-Session-Time
	  attributes.
	
	- Resolved issue that used to cause an Access Violation notice when adding a
	  Virtual Interface right after configuring an Area under OSPF routing.
	
	- Adjusted the RIP Authentication type to 2 instead of 1, per RFC 1388.
	
	  NOTE: This upgrade must be applied to all Routing and Remote Access routers if
	  you are using RIP2 authentication.
	
	- Resolved issue which could cause Mprouter to stop responding when doing an
	  "ipconfig /release"
	
	- Made an improvement that ensures that periodic RIP route updates resumes each
	  time a demand-dial interface is reactivated.
	
	Known Problems in the 2.0 Hotfix Update
	---------------------------------------
	
	- Although there is a checkbox in the Global IP Config dialog to enable/disable
	  filtering, at this time the only functionality it has is to visually show you
	  if any filters have been configured on your interface(s). Regardless, the
	  filter driver is always enabled. In order to disable filtering on an
	  interface, you must use the per interface option in the Interface IP Config
	  dialog.
	
	- Even though the "Filtertype= Dial" option has been properly configured for a
	  demand dial interface using Routemon.exe, it may still be possible for that
	  interface to dial. This only occurs if you are pinging from the command line
	  of the Routing and RAS server in which the demand dial interface is
	  configured.
	
	Fixes and Features included from Hotfix Update 1.0
	--------------------------------------------------
	
	New Features Added in Hotfix 1.0:
	
	- Allowing PPP clients to connect without authentication
	
	  This can be accomplished by altering the default registry key as shown:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Rasman\PPP
	
	  DWORD: ForceEncryptedPassword
	  Value: 0x00000003 == allows the server to accept incoming PPP clients
	  without authentication.
	
	- Using MS-CHAP with RADIUS authentication
	
	  In order to enable MS-CHAP with RADIUS authentication, you must add a registry
	  value:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Rasman\PPP\CHAP
	
	  DWORD: OfferMSCHAP
	  Value: 0x00000001 == Once this is enabled every incoming PPP
	  connection will be offered MS-CHAP, and MS-CHAP
	  will be used to authenticate each PPP user
	  against the RADIUS server that your RAS server
	  is using.
	
	List of Issues Fixed in Hotfix Update 1.0:
	
	All bug fixes contained in hotfix 1.0 are listed below. You can query the
	Microsoft Knowledge Base (KB) to find an article about a specific bug by using
	the KB Q<xxxxxx> number that is assigned to the bug. The Microsoft
	Knowledge Base can be located at the following Microsoft Web site at:
	http://msdn.microsoft.com/support.
	
	+-------------------------------------------------------------------------+
	| KB#     | Brief Description                                             | 
	+-------------------------------------------------------------------------+
	| Q172290 | Routing and Remote Access "Out of Buffers" Event Logs         | 
	+-------------------------------------------------------------------------+
	| Q176689 | RRAS Requires hotfix when Using Proxy 2.0                     | 
	+-------------------------------------------------------------------------+
	| Q173533 | WinNT Radius Client Sends Incomplete Accounting Information   | 
	+-------------------------------------------------------------------------+
	| Q176506 | Radius Accounting Only Logs One Entry for Multilink Client    | 
	+-------------------------------------------------------------------------+
	| Q173532 | Radius Authentication Causes Access Violation in Mprouter.exe | 
	+-------------------------------------------------------------------------+
	| Q172512 | Routing and Remote Access Event ID 20100                      | 
	+-------------------------------------------------------------------------+
	| Q176502 | RAS Authentication Rechallenge Resets Compression Flag        | 
	+-------------------------------------------------------------------------+
	| Q176209 | RAS or RRAS Server Fails to Answer Incoming Calls             | 
	+-------------------------------------------------------------------------+
	| Q167038 | RAS Clients Run Winsock and RPC Applications Slowly           | 
	+-------------------------------------------------------------------------+
	| Q171061 | RIP Does Not Advertise Zero Subnets                           | 
	+-------------------------------------------------------------------------+
	| Q160517 | RRAS May Decrement Local Static Route Metric                  | 
	+-------------------------------------------------------------------------+
	| Q176082 | RRAS Server Updates Link State Database but not Route Table   | 
	+-------------------------------------------------------------------------+
	| Q162834 | RRAS Stops Routing After Encountering Zero Checksum           | 
	+-------------------------------------------------------------------------+
	| Q104296 | RRAS Uses Larger MTU Than Other OSPF Routers                  | 
	+-------------------------------------------------------------------------+
	
	Information in this document is subject to change without notice and is provided
	for informational purposes only. The entire risk of the use or results of the
	use of this document remains with the user, and Microsoft Corporation makes no
	warranties, either express or implied. The names of companies, products, people,
	characters, and/or data mentioned herein are fictitious and are in no way
	intended to represent any real individual, company, product, or event, unless
	otherwise noted. Complying with all applicable copyright laws is the
	responsibility of the user. No part of this document may be reproduced or
	transmitted in any form or by any means, electronic or mechanical, for any
	purpose, without the express written permission of Microsoft Corporation.
	
	Microsoft may have patents, patent applications, trademarks, copyrights, or other
	intellectual property rights covering subject matter in this document. Except as
	expressly provided in any written license agreement from Microsoft, the
	furnishing of this document does not give you any license to these patents,
	trademarks, copyrights, or other intellectual property.
	
	(c) 1998 Microsoft Corporation. All rights reserved.
	
	Microsoft, MS-DOS, MS, Windows, Windows NT, are either registered trademarks or
	trademarks of Microsoft Corporation in the U.S.A. and/or other countries.
	
	Other product and company names mentioned herein may be the trademarks of their
	respective owners.
	
	Additional query words: RRAS steel head steelhead ntrouter
	
	======================================================================
	Keywords          : kbfile kbFEA kbWinNT400sp4fix kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
