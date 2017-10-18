---
layout: page
title: "Q165311: SNA Server 3.0 Windows 95 Clients Hang when Using Encryption"
permalink: kb/165/Q165311/
---

## Q165311: SNA Server 3.0 Windows 95 Clients Hang when Using Encryption

	Article: Q165311
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows 95 SNA Server 3.0 clients appear to stop responding (hang) when they are
	trying to connect to an SNA Server that exists in a non-trusted Windows NT
	server domain.
	
	This problem occurs under either of the following conditions:
	
	Case 1: "Use Client/Server Encryption"
	--------------------------------------
	
	The "Use Client/Server Encryption" option is selected for the configured
	users/groups in SNA Server Manager.
	
	Case 2: "Use Windows NT Domain Password"
	----------------------------------------
	
	The "Use Windows NT domain password" option is not selected in the Windows 95 SNA
	Server client configuration. This option is available by selecting the Advanced
	tab after running the SNA Client Configuration program.
	
	CAUSE
	=====
	
	There is a different cause for each condition described in the "Symptoms"
	section of this article.
	
	Case 1: "Use Client/Server Encryption"
	--------------------------------------
	
	If Client/Server Encryption is being used, the client/server encryption check
	fails because the client is in a non-trusted domain causing the client to hang.
	
	Case 2: "Use Windows NT Domain Password"
	----------------------------------------
	
	The Windows 95 SNA Server client uses the LsaLogonUser() call when attempting to
	log the user on, even though the "Use Windows NT domain password" option is not
	selected. This was causing the logon attempt to fail and this caused the Windows
	95 client to hang.
	
	RESOLUTION
	==========
	
	Two problems were corrected to resolve the problem.
	
	Case 1: "Use Client/Server Encryption"
	--------------------------------------
	
	The SNA Server client transports were updated, such that the SNA Server client is
	disconnected if the client/server encryption check fails. The updated modules
	for this fix are:
	
	  <Snaroot>\System\Snaat.dll
	  <Snaroot>\System\Snabv.dll
	  <Snaroot>\System\Snalm.dll
	  <Snaroot>\System\Snalm.dll
	  <Snaroot>\System\Snanb.dll
	  <Snaroot>\System\Snanw.dll
	  <Snaroot>\System\Snadmod.dll
	  <Snaroot>\System\Snaevent.dll
	
	Case 2: "Use Windows NT Domain Password"
	----------------------------------------
	
	The Windows 95 SNA Server 3.0 client has been updated to use the NTLM logon
	process instead of the LsaLogonUser() logon procedure when the "Use Windows NT
	domain password" option is not selected. The updated modules for this fix are:
	
	  <Snaroot>\System\Snabase.exe
	  <Winroot>\System\Snakrnl.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
