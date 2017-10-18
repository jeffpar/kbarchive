---
layout: page
title: "Q164634: SNA Client Fails on SNA Server 3.0 on French WinNT 3.51"
permalink: kb/164/Q164634/
---

## Q164634: SNA Client Fails on SNA Server 3.0 on French WinNT 3.51

	Article: Q164634
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The version of the Security.dll file in Microsoft Windows NT 3.51 French
	version, does not support data encryption. The Microsoft SNA version 3.0 client
	will fail to work when trying to connect to an SNA 3.0 Server running on the
	French version of Microsoft Windows NT Server 3.51. The client connection will
	be rejected and an event 722 will be generated in the application event log.
	
	CAUSE
	=====
	
	The problem occurs when encryption is enabled on the SNA Server (even though the
	emulator being used does not support it or does not have it checked). It will
	only occur if Named Pipes/Microsoft Networking is selected as the client-server
	protocol.
	
	NOTE: To enable Data Encryption, the administrator should go to the Properties
	page for the appropriate user/group, and then click "Use Client/Server
	Encryption" on the User Properties tab.
	
	RESOLUTION
	==========
	
	As a workaround, disable data encryption support because the underlying
	Security.dll does not have this functionality.
	
	The following files have been updated to correct this problem:
	
	  <snaroot>\system\snaserver.exe
	  <snaroot>\system\snadmod.dll
	  <snaroot>\system\snaevent.dll
	  <snaroot>\system\snanw.dll
	  <snaroot>\system\snaat.dll
	  <snaroot>\system\snabv.dll
	  <snaroot>\system\snanb.dll
	  <snaroot>\system\snaip.dll
	  <snaroot>\system\snalm.dll
	  <snaroot>\system\adloc.dll
	  <snaroot>\system\snabase.exe
	  <snaroot>\system\snacfg.dll
	  <snaroot>\system\sfcapi.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snaencrypt sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
