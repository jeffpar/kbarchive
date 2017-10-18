---
layout: page
title: "Q159507: PC Ext: Supported WAN Environments with MS Mail for PC Networks"
permalink: kb/159/Q159507/
---

## Q159507: PC Ext: Supported WAN Environments with MS Mail for PC Networks

	Article: Q159507
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can run the MS-DOS or Windows NT External.exe (referred to as "MTA" in this
	article from here on) across a WAN to deliver mail from one postoffice to
	another. Depending on the speed of the WAN connection, your configuration may or
	may not be supported by Microsoft Technical Support.
	
	MORE INFORMATION
	================
	
	If the speed of the WAN is less than 64 KB, there will need to be an MTA at both
	ends of the WAN connection and the WANDrives parameter will need to be used.
	Please refer to chapter 12 in the "Microsoft Mail Administrator's Guide" for
	more information on the WANDrives parameter.
	
	If the speed of the WAN is less than 32 KB, there may be intermittent mail
	failures, even with an MTA at each end of the connnection. This will be because
	of the inherent limitations of the MS Mail shared file architecture. In this
	situation, it is recommended that a dial up async connection be used or that the
	speed of the WAN connection be increased to 64 KB or greater.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	
	=============================================================================
	
