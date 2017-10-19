---
layout: page
title: "Q175109: 3270 Users Fail to Get Sessions to SNA 3.0 After 2.11 Upgrade"
permalink: /kb/175/Q175109/
---

## Q175109: 3270 Users Fail to Get Sessions to SNA 3.0 After 2.11 Upgrade

	Article: Q175109
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade from SNA Server version 2.11 to SNA Server 3.0 or later, users
	may be denied access to 3270 LU based resources that they previously had access
	to. This problem manifests itself through certain third-party 3270 emulation
	packages by presenting a security message, indicating that SNA Server is denying
	access to the resource being requested.
	
	The actual errors displayed by the emulator may vary. When this problem occurs,
	the SNA Server client reports the following error message to the emulator:
	
	  LU not verified (Error 0x53, or decimal 83)
	
	
	CAUSE
	=====
	
	When a client 3270 emulator initializes, it can retrieve the 3270 LUs assigned
	to the user/group or workstation as defined on the SNA Server, referred to as
	the 3270 user record. The record passed from the server to the emulator contains
	information about which LUs and pools are available for the user as well as the
	number of sessions associated with each. Typically the LUs and pools obtained
	from the server are presented to the user in a protected or trusted drop-down
	list box within the emulation package. Certain 3270 emulation packages, however,
	allow users to manually specify an LU or a pool name through an optional dialog
	box. Unlike SNA Server 2.11, SNA Server 3.0 denies access to all resources that
	are not specified in the trusted list box.
	
	See the following Knowledge Base article, which discusses the 3270 user record
	retrieval process:
	
	  Q158775 3270 Emulator Fails To Enforce SNA User/Group Assignments
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0 has been updated to exhibit the same security behavior found in
	version 2.11. When a user opens a 3270 session, the SNA Server computer checks
	the LU list assigned to the user's specific user record as well as any groups
	that the user is a member of.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, and 3.0 Service Pack 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	If a user is assigned 3270 LUs through one or more accounts, such as group and
	individual accounts, the LUs do not accumulate. Instead, one account determines
	access for that user. Determination of access is the account found first in the
	following search order:
	
	1. User accounts (highest priority)
	
	2. Domain groups
	
	3. Local groups
	
	4. Well-known groups such as Everyone (lowest priority)
	
	For example, if a 3270 LU called LU1 is assigned to a user account (a high-
	priority account) called GREGORYS, and at the same time an LU named LU2 is
	assigned to a local group (a low-priority account) of which GREGORYS is a
	member, GREGORYS will be given access to LU1, not LU2. This example is true for
	all versions of SNA Server. However, in version 2.11, if the emulator allows the
	user to specify LU2, then SNA Server grants access to this even though this is
	not specified in the emulator drop-down list. Specifying LU2 using SNA Server
	version 3.0 would result in an access denied message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
