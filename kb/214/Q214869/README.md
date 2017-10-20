---
layout: page
title: "Q214869: SMS: Requirements for Integrating Novell Netware with SMS 2.0"
permalink: /kb/214/Q214869/
---

## Q214869: SMS: Requirements for Integrating Novell Netware with SMS 2.0

{% raw %}

	Article: Q214869
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbConfig kbSecurity kbServer kbsms200 kbsms200bug kbBindery kbCAP kbN
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server 2.0 supports interaction with certain
	versions of Novell Netware. This article provides a quick list of requirements
	for installing logon points, client access points (CAPs), or distribution points
	onto Netware servers.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Supported Operating Systems and Service Packs
	---------------------------------------------
	
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Site System                       | Supported Operating Systems and Service Packs                                                                                               | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Primary site server               | Windows NT 4.0 with Service Pack 4 and higher, or Windows 2000 Server and higher                                                            | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Secondary site server             | Windows NT 4.0 with Service Pack 4 and higher, or Windows 2000 Server and higher                                                            | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| SMS or software metering database | Windows NT 4.0 with Service Pack 4 and higher, or Windows 2000 Server and higher                                                            | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Client access point               | Windows NT 4.0 with Service Pack 3 and higher, Windows 2000 Server and higher, Netware Bindery 3.x or NDS 4.x                               | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Component servers                 | Windows NT 4.0 with Service Pack 3 and higher, Windows 2000 Server and higher                                                               | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Distribution point                | Windows 3.51 Service Pack 5a, Windows NT 4.0 with Service Pack 3 and higher, Windows 2000 Server and higher, Netware Bindery 3.x or NDS 4.x | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Logon point                       | Windows 3.51 Service Pack 5a, Windows NT 4.0 with Service Pack 3 and higher, Windows 2000 Server and higher, Netware Bindery 3.x or NDS 4.x | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	Requirements for Using Novell Netware
	-------------------------------------
	
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Netware Version                | Comments                                                                                                                                              | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Netware Bindery 3.21 or higher | The site server needs to have either the Novell client or Windows NT Server Gateway Services for Netware.                                             | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Netware NDS 4.1x               | The Novell client has to be installed on the site server.                                                                                             | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Netware NDS 5.1                | The Novell client has to be installed on the site server. Service Pack 2 for Systems Management Server 2.0 must be installed for Netware 5.1 support. | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	MORE INFORMATION
	================
	
	The Connection Account is specified in the Site Systems dialog box under
	Connection Accounts in the Systems Management Server Administrator console.
	
	The following table lists the security and account information required for
	Novell Netware site component servers:
	
	Netware Servers
	---------------
	
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Component Name            | Security and Account Requirements                                                                                                                                                                   | Comments                                                                                                                                                                         | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Client access point (CAP) | Verify that the connection account has full rights to the volume designated as a CAP. If the designated volume is on Netware NDS, permissions are set to the container in which the volume resides. | If some clients log on to Novell Netware and not to Windows NT, you must have a CAP in the Netware environment for these computers to access the Systems Management Server site. | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Distribution point        | Verify that the connection account has full rights to the volume designated as a distribution point.                                                                                                |                                                                                                                                                                                  | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Logon point               | Verify that the connection account has full rights to the volume designated as a logon point.                                                                                                       |                                                                                                                                                                                  | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	Netware Clients
	---------------
	
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Component Name            | Security and Account Requirements                                                                                                                                                             | Comments                                                                                                                                                                                                              | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Client access point (CAP) | Verify that the Everyone group was created on NetWare 4.x bindery emulation before the new CAP was designated in Site Systems in the Systems Management Server Administrator console.         | On NetWare NDS, permissions should be set manually using the Admin account for the NDS tree.  Ensure that users have Read permission to the container object in which the volume specified as the distribution point. | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Distribution point        | Verify that the Everyone group was created on NetWare 4.x bindery emulation before the distribution point was specified for a package.                                                        | On NetWare NDS, permissions should be set manually using the Admin account for the NDS tree.  Ensure that users have Read permission to the container object in which the volume specified as the distribution point. | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Logon point               | Verify that the Everyone group was created on NetWare 4.x bindery emulation before the new logon point was designated in Site Systems in the Systems Management Server Administrator console. | If a site server is running Novell Netware, it is necessary to have a client access point in Netware or to have the IPX protocol installed on the server and the Microsoft Redirector installed on the client.        | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	REFERENCES
	==========
	
	For more detailed information and instructions, please refer to the "Integrating
	Microsoft Systems Management Server 2.0 With Novell NetWare" technical white
	paper. This paper is available for public download at the following location:
	
	  http://www.microsoft.com/smsmgmt/deployment/default.asp
	  (http://www.microsoft.com/smsmgmt/deployment/default.asp)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsetup kbConfig kbSecurity kbServer kbsms200 kbsms200bug kbBindery kbCAP kbNDS kbOSNovell kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
