---
layout: page
title: "Q138001: AS/400 Shared Folders Users See Each Other's Folders"
permalink: kb/138/Q138001/
---

## Q138001: AS/400 Shared Folders Users See Each Other's Folders

	Article: Q138001
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attach to shared folders on an AS/400, where the security level is set
	to 30 or higher, and security has been set on the folders to allow limited
	access, after the first user connects to a shared folder, all subsequent users
	acquire the first user's access permissions to shared folders.
	
	This problem occurs when SNA Server is sharing a single Local APPC LU when
	communicating to an AS/400.
	
	CAUSE
	=====
	
	The security for shared folders on the AS/400 (when security is set to level 30
	or higher), is tied to the controller. In this case, the AS/400 views the
	controller as its Remote LU, or SNA Server's Local APPC LU.
	
	The transaction program which supports the shared folders function on the AS/400
	identifies a user based on the SNA Server Local APPC LU name being used.
	Therefore, if multiple SNA Server users are sharing the same Local APPC LU for
	use with shared folders, you are able to view each other's AS/400 folders. Due
	to the design of the AS/400 shared folders feature, the first shared folder's
	user to connect over a Local APPC LU determines the AS/400 security rights for
	the remaining users who connect over the same Local APPC LU.
	
	WORKAROUND
	==========
	
	Create a separate LU (Local to the SNA Server) for each user and pair each LU
	with the AS/400's LU. Then each user accesses a separate controller and has
	appropriate access to shared folders. In addition, each shared folder's client
	application must be configured with a unique Local APPC LU alias. If you prefer
	to leave this field empty, the SNA Server administrator can assign a default
	Local APPC LU alias for each user using SNA Admin (2.x) or SNA Server Manager
	(3.x) configured on the user record.
	
	
	STATUS
	======
	
	IBM has stated that this is "by design," since shared folders were originally
	intended to be accessed directly and not over parallel sessions from a single
	LU-LU pair.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211
	Version           : WINDOWS:2.11,3.0
	
	=============================================================================
	
