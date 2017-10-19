---
layout: page
title: "Q128927: Err Msg: Remote Control Agent Cannot Load IDIS_IPX.DLL"
permalink: /kb/128/Q128927/
---

## Q128927: Err Msg: Remote Control Agent Cannot Load IDIS_IPX.DLL

	Article: Q128927
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbMaintMan smsmaintman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Remote Control on a NetWare client running Windows version 3.x in
	Microsoft Systems Management Server version 1.0, the following error message
	appears:
	
	  Remote Control Agent cannot load idis_ipx.dll
	
	CAUSE
	=====
	
	This problem occurs if one or all of the following files are not present in the
	NetWare client computer:
	
	  NWNETAPI.DLL
	  NWCALLS.DLL
	  NWIPXSPX.DLL
	
	These files are included with the NetWare client software and are available in
	the Novell public forum on CompuServe. If you install and run a NetWare client
	in MS-DOS, the three files above are not required. NWCALLS.DLL and NWIPXSPX.DLL
	are installed for NetWare clients running Windows version 3.x.
	
	RESOLUTION
	==========
	
	To correct this problem, install the NWNETAPI.DLL file on the NetWare client.
	
	To allow Microsoft Systems Management Server to install the file, place the file
	in the SITE.SRV\MAINCFG.BOX\CLIENT.SRC\X86.BIN directory on the site server. The
	Maintenance Manager will replicate the file to all NetWare logon servers. The
	file will be installed to the MS\SMS\BIN directory on all NetWare clients when
	users run Client Setup (either manually or through their login script).
	
	The NetWare products discussed here are manufactured by Novell, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbMaintMan smsmaintman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
