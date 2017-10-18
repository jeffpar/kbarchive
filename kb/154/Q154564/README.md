---
layout: page
title: "Q154564: Access Denied Using CHNGPASS When Logged On to FPNW"
permalink: kb/154/Q154564/
---

## Q154564: Access Denied Using CHNGPASS When Logged On to FPNW

	Article: Q154564
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 30-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are logged on to a Windows NT server running File and Print Services
	for NetWare (FPNW) and you are also attached to a NetWare server that is being
	controlled by Windows NT Directory Service Manager for NetWare (DSMN), you
	receive an "access denied" error message.
	
	CAUSE
	=====
	
	Passwords cannot be changed on NetWare servers whose account database is being
	controlled by DSMN.
	
	RESOLUTION
	==========
	
	Login.exe has been modified to correct this problem. It now checks what types of
	servers the client is attached to when it does a CHNGPASS against an FPNW server
	and is attached to a NetWare server that is being controlled by DSMN.
	
	When it determines that the server is a NetWare server, Login.exe checks, via a
	NCP:read property value, if the following are present:
	
	  NCP: Command = Read Property Value
	  NCP: Object Type = 0x06BB
	  NCP: Object Name = MS_WINNT
	  NCP: Property Name = SYNCPDC
	
	Login.exe then determines that the NetWare server accounts database is being
	controlled by DSMN and it does not need to change the password, as the server
	running DSMN will take care of the password change.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt Novell
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
