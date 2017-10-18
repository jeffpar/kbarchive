---
layout: page
title: "Q80274: PC DOS: Using the Micro or Monitor TSRs on NetBIOS Networks"
permalink: kb/080/Q80274/
---

## Q80274: PC DOS: Using the Micro or Monitor TSRs on NetBIOS Networks

	Article: Q80274
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Notification may not occur when you use the Microsoft Mail for PC Networks Micro
	utility (MICRO.EXE) unless it is set up properly for the network protocol.
	
	CAUSE
	=====
	
	If Microsoft Mail for PC Networks was installed for an IBM Network, Mail assumes
	NetBIOS as the default. The Micro and Monitor utilities also assume NetBIOS as
	the default. However, if Mail is installed as a Novell network, NetBIOS is not
	used and Micro or Monitor may require the -x option to disable the NetBIOS
	compatibility.
	
	MORE INFORMATION
	================
	
	This is just the opposite of the MAIL.EXE program where -x is used to signify
	the use of the NetBIOS protocol.
	
	For more information about the use of command-line parameters, consult the
	"Microsoft Mail for PC Networks Administrator's Guide."
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
