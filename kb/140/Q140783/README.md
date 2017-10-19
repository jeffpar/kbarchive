---
layout: page
title: "Q140783: Access Violation on RAS Client Dialing Into Windows 95"
permalink: /kb/140/Q140783/
---

## Q140783: Access Violation on RAS Client Dialing Into Windows 95

	Article: Q140783
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When dialing into a Windows 95 Dial-up Network server from a Windows NT Remote
	Access Service (RAS) client, the Windows NT client will hang when the prompt
	"Registering your computer on the remote network" appears, and a Dr. Watson
	popup appears, claiming an access violation occurred 0xc0000005 in RASMAN.EXE.
	
	CAUSE
	=====
	
	The error occurs when the Windows 95 Dial-up network server does NOT have a
	network card installed, and NetBEUI is the only protocol that is installed for
	the Dial-up network adapter.
	
	WORKAROUND
	==========
	
	On the Windows 95 machine, install another protocol, like IPX/SPX Compatible
	transport or TCPIP. Note that if using IPX/SPX, you must enable NetBios for that
	protocol by going into IPX/SPX Protocol Properties/NetBIOS/enable. If using
	TCPIP, you must assign it an IP address by going into TCPIP Protocol
	Properties/IP address
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51
	
	=============================================================================
	
