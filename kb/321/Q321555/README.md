---
layout: page
title: "Q321555: Types of Encryption Included with SNA Server and HIS 2000"
permalink: /kb/321/Q321555/
---

## Q321555: Types of Encryption Included with SNA Server and HIS 2000

{% raw %}

	Article: Q321555
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the three types of data encryption that are included with
	SNA Server and Host Integration Server 2000:
	
	- Server-to-server
	
	- Client sponsor connection
	
	- Client-to-server application
	
	MORE INFORMATION
	================
	
	About Data Encryption
	---------------------
	
	- Data encryption with SNA Server and Host Integration Server is implemented by
	  using the Security Support Provider Interface (SSPI).
	
	- The supported data encryption levels are 40-bit, 56-bit, and 128-bit.
	
	- The level of encryption that is used is determined by the operating system
	  (OS), not by either the SNA or Host Integration Server client or by the SNA
	  or Host Integration Server application.
	
	- The level of encryption is determined by the maximum encryption strength that
	  is possible over the Secure Sockets Layer (SSL). For example, if a client
	  supports 40-bit encryption and the server supports 128-bit encryption, the
	  negotiated encryption level will be at the 40-bit level.
	
	Any third-party emulator or application that is written to use the SNA Server or
	Host Integration Server client application programming interface (API) will
	automatically benefit if encryption is enabled.
	
	Server-to-Server Data Encryption
	--------------------------------
	
	Encryption of data is possible between two computers that are running SNA Server
	or Host Integration Server when you use the Distributed Link Service (DLS). You
	can use DLS encryption to provide secure communications across your network, the
	Internet, or any other wide area network (WAN).
	
	When you use DLS, consider whether or not trust exists between the two Windows NT
	or Windows 2000 domains.
	
	If trust does exist, note that for pass-through authenticaton to work, the branch
	(remote) SNA Server/Host Integration Server computer must run under a domain
	user account that can be authenticated by the domain where the central (remote)
	SNA Server/Host Integration Server computer resides. For example, the branch
	server's link service would be SNAREMx, that is,
	<\\Central_Server\SnaDlcx>.
	
	If no Trust exists between the domains, the user account and password that the
	branch (remote) server is running under (for example, SNAREMx, that is,
	<\\Central_Server\SnaDlcx>) must also exist in the central (remote)
	accounts domain for authentication to occur.
	
	Also note that you cannot encrypt data by running the SNAREMx service under the
	local system account.
	
	For more information about the Distributed Link Service, visit the following
	TechNet Web site:
	
	  SNA Open Gateway Architecture
	  (http://www.microsoft.com/technet/treeview/default.asp?url=/TechNet/prodtechnol/host/proddocs/hisdoc/getstrt/dep_sna_open_gateway_architecture.asp)
	
	Client Sponsor Connection Data Encryption
	-----------------------------------------
	
	When an SNA or Host Integration Server client connects to a SNA Server or Host
	Integration Server computer over the sponsor connection, various messages are
	sent to the client. When you add the SecureSponsor registry parameter on the
	server that is running SNA Server or HIS, all sponsor connection data is
	encrypted.
	
	For additional information about how to use the SecureSponsor registry parameter,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q159351 SecureSponsor Disables SNA 3.0 Win 3.x Password Change Feature
	
	For additional information about the sponsor connection, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q160849 How the SNA Server Client Chooses a "Sponsor" SNA Server
	
	  Q317805 Sponsor Connection Changes in Host Integration Server 2000
	
	Client-to-Server Application Data Encryption
	--------------------------------------------
	
	Client-to-server encryption prevents information from being sent in clear text
	between an SNA or Host Integration Server client and an SNA Server or Host
	Integration Server computer. You can enable client/server encryption on either a
	group or user-by-user basis.
	
	To configure users for client-server encryption, follow these steps:
	
	1. In the SNA Server Manager console tree, double-click Configured Users.
	
	2. Right-click the user or group that you want to configure, and then click
	  Properties.
	
	3. On the Properties tab, click to select the Use Client/Server Encryption check
	  box, and then click OK.
	
	4. In the Action list, click Save configuration.
	
	5. Restart the computer that is running SNA Server or Host Integration Server
	  for the changes to take effect.
	
	NOTE: SSL support is not available for TN3270 and TN5250. Therefore, encryption
	is not available when you use either of these TN services with SNA Server or
	HIS.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
