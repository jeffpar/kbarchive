---
layout: page
title: "Q169204: Renegotiate CNOS After Connection Reestablishment"
permalink: kb/169/Q169204/
---

## Q169204: Renegotiate CNOS After Connection Reestablishment

	Article: Q169204
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP2,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP2, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	CNOS (change number of sessions) is a general data stream (GDS) variable that is
	used to negotiate the number of sessions that can be used between an LU-LU pair.
	This takes place during connection startup after the SNA Server service has
	started. If the connection is stopped (without stopping the SNA Server service),
	and then restarted, CNOS is not renegotiated.
	
	NOTE: There are other cases where CNOS is renegotiated. These are outlined in the
	"Registry Entries Only Used on an SNA Server" section of the "SNA Server
	Reference Guide."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 Service
	Pack 2 (SP2) and 3.0 SP1. This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, Snaservr.exe renegotiates CNOS after a connection is
	stopped and restarted without ever bringing down the SNA Server service. In
	addition, after you apply the fix, you need to edit the registry as described
	below.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	     HKEY_LOCAL_ MACHINE\System\CurrentControlSet\Services\ 
	     SNAServer\Parameters
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	  "Value Name: RenegCNOSAtReconnect
	  Data Type: REG_SZ
	  Value: YES" (without the quotation marks)
	
	4. Exit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11 SP2,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
