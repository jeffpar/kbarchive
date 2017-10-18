---
layout: page
title: "Q192711: Users Unable to Update Their Host Cache Using UDConfig"
permalink: kb/192/Q192711/
---

## Q192711: Users Unable to Update Their Host Cache Using UDConfig

	Article: Q192711
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users who have the Host Security Configuration tool (UDConfig.exe) installed
	with the SNA Server Windows 95 or Windows NT Workstation client cannot change
	their own Host Account Cache entries unless they have "log on locally" rights or
	are part of the Administrators or Domain Admins group.
	
	Steps to Reproduce the Problem:
	
	1. Open Host Account Manager.
	
	2. The following expected message from UDCONFIG appears: You do not have
	  sufficient privilege to change the configuration of other users. You can
	  change your own configuration.
	
	3. Click OK and make a change in the Host Account Cache from either the mapped
	  entries or the replicated entries. Click Update Cache.
	
	4. A dialog box appears, prompting you for the current Windows NT password. Type
	  it in, and then click OK.
	
	5. The following message from UDCONFIG appears: The operation failed because
	  your password could not be verified. Would you like to retry the operation?
	
	CAUSE
	=====
	
	SNA Server Password Management Process (PMP) was trying to authenticate the user
	with logon type = LOGON32_LOGON_INTERACTIVE, which required the "log on
	locally[ASCII 148] right for the user. To correct this, a change was made to
	Snapmp.exe, removing this requirement and changing type to logon type =
	LOGON32_LOGON_NETWORK. This allows all domain users the ability to change their
	own cache configuration.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 (all
	service packs), 4.0, and 4.0 SP1. This problem was first corrected in SNA Server
	3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Below is an example of an SNA WinNT Account Synchronization trace (Pmpintx.atf),
	showing where the failure occurs:
	
	  Logon Attempt Failed. Error: 1385
	  Target PDC: \\<NT_Server_Name>
	  Administrators Group: ADMINISTRATORS
	  Checking for group Membership
	  Entering MemberOfLocalGroup
	  MachineName : <NT_Server_Name>, NT Major Version: 4
	  Group: <Same_Name_as_Host_Security_Domain_Name>
	  Group: Users
	  Group not found.
	  No Administrator Privilege
	  User rights could not be validated, err e1900021
	  ProcessRequest returned 0xE1900021
	  ProcessRequest no out message
	  SrvrRpcProcessRequestInternal end
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
