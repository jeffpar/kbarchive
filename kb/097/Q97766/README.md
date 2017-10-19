---
layout: page
title: "Q97766: Using IBM LAN Server 1.3 with Windows for Workgroups"
permalink: /kb/097/Q97766/
---

## Q97766: Using IBM LAN Server 1.3 with Windows for Workgroups

	Article: Q97766
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	This article contains information about using Windows for Workgroups
	with third-party products or configurations that have not been tested
	and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, use a supported configuration or contact the manufacturer of
	the third-party product for more information.
	
	SUMMARY
	=======
	
	The IBM LAN Server 1.3 network operating system is a Server Message Block (SMB)
	compliant network and can be accessed from Windows for Workgroups workstations
	with Microsoft LAN Manager connectivity using the procedure outlined in this
	article.
	
	Microsoft can ensure connectivity between Windows for Workgroups and Microsoft
	LAN Manager or Novell NetWare only. Although the information stated in this
	article may allow Windows for Workgroups and LAN Server to coexist, Microsoft
	does not ensure the stability of Windows for Workgroups running with this
	configuration.
	
	MORE INFORMATION
	================
	
	Use the following procedure to access a LAN Server network:
	
	1. At least one Windows for Workgroups machine on the network MUST use the LAN
	  Server Domain name as its Workgroup name.
	
	2. To install Microsoft LAN Manager as a secondary network, open Control Panel
	  and choose the Network icon.
	
	  Similar to Microsoft LAN Manager, IBM LAN Server is an SMB-compliant network
	  that can interact with Windows for Workgroups as long as the same transport
	  protocol (NetBEUI, for example) is used. The LAN Manager driver must be
	  selected because Windows for Workgroups does not contain a specific LAN
	  Server driver that would allow access and logon to a LAN Server Domain.
	
	3. Under Options, select Networks.
	
	4. Select Microsoft LAN Manager and choose the Add button so that it appears in
	  the Other Networks In Use section.
	
	5. Select Microsoft LAN Manager, choose the Settings button, and then select the
	  appropriate Domain and/or Password settings.
	
	6. The above procedure should permit LAN Server LOGON, but the HOME directory
	  may still be inaccessible.
	
	For more information on connecting to a LAN Server HOME directory, query on the
	following words in the Microsoft Knowledge Base:
	
	  directory and home and ibm and lan and server and share
	
	Windows for Workgroups will automatically reestablish the connection to the HOME
	directory (although it may be inaccessible) and any other directory that the
	user has rights to each time Windows for Workgroups is started. A user can also
	access two separate servers using the same user identification without the
	passwords being identical with Windows for Workgroups. With a LAN Server-only
	connection, this function would require that the passwords be identical.
	
	For additional information, contact IBM Technical Support.
	
	LAN Server is manufactured by IBM, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 3.11 Lanserver
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
