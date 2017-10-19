---
layout: page
title: "Q138987: Novell Clients are Denied Access Logging on to FPNW Servers"
permalink: /kb/138/Q138987/
---

## Q138987: Novell Clients are Denied Access Logging on to FPNW Servers

	Article: Q138987
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Novell Server is replaced with a Windows NT Server running Microsoft File
	and Print Services for NetWare, Novell clients may start receiving Access Denied
	messages when trying to connect. In addition, the domain controller that the
	FPNW server has a secure channel with may no longer be visible on the network.
	
	CAUSE
	=====
	
	When a printer is configured for NetWare, JetAdmin is run to give the printer a
	server name and a user name to logon with. The printer then tries to logon to
	the specified server. If the Novell server is removed and a Windows NT Server is
	put in its place with the FPNW server software configured with the same name as
	the old Novell server, the printers will contact the FPNW server to logon. Since
	the Windows NT computer is a resource server, it must pass the logon request to
	a domain controller (DC). The code through LSA that is run by FPNW requests
	contains a path where a security object is opened, but never closed. The
	printers exacerbate the leak Because they continually try to logon.
	
	WORKAROUND
	==========
	
	Correctly configuring the printers so they no longer attempt to logon will
	eliminate the handle leak as well as the extra RPC traffic on the network.
	Installing the fix for the LSA handle leak will eliminate the handle leak.
	However, unless the printers are configured correctly, you will still have the
	additional RPC traffic that is generated when trying to authenticate the printer
	logon requests.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06724
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack and
	Windows NT 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
