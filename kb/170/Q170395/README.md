---
layout: page
title: "Q170395: MTG: MTA Fails with Error Code 914:ce on NetWare 4.11"
permalink: kb/170/Q170395/
---

## Q170395: MTG: MTA Fails with Error Code 914:ce on NetWare 4.11

	Article: Q170395
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using MS-DOS MTA and Dispatch with Dynadmin results in a failure to connect to a
	Netware 4.11 server. The following sample is from External.log:
	
	  03-31-97 13:27 Dynamically connecting T: to FNIO-XDV-
	  TAFT\EMAIL:COURIER.DAT.
	  03-31-97 13:27 An unknown error code (914:ec) was returned.
	  03-31-97 13:27 Reading master file. Could not connect to drive.
	
	CAUSE
	=====
	
	The NLSP that ships with NetWare version 4.11 causes Dynadmin to fail. The
	Novell utility, NLSP, provides a link state approach to routing and is
	automatically enabled during a NetWare 4.11 installation. This link state
	routing protocol provides backwards compatibility and, in theory, should operate
	successfully in a mixed NLSP and RIP routing environment. Novell Technical
	Support has been made aware of this issue.
	
	WORKAROUND
	==========
	
	Disable the default NLSP routing on NetWare 4.11 file servers. This is
	accomplished through editing the Autoexec.ncf file and running UNLOAD IPXRTR at
	the file server console or by selecting RIP in the INETCFG utility. The server
	must then be restarted.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbprb
	
	=============================================================================
	
