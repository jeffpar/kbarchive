---
layout: page
title: "Q170834: Take Ownership Remotely Does Not Log Security Event"
permalink: kb/170/Q170834/
---

## Q170834: Take Ownership Remotely Does Not Log Security Event

	Article: Q170834
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Taking ownership of a file or folder remotely does not log a security event the
	same way as taking ownership locally.
	
	If, when taking ownership locally, the only audit policy enabled is "Use of User
	Rights," several "Privilege Use" events are logged. When taking ownership
	remotely over the network (through another Windows NT-based workstation or
	server or a Macintosh client connecting through Services for Macintosh), no
	events are generated in the security log.
	
	CAUSE
	=====
	
	When you take ownership of an object, there are two ways to get access to take
	ownership:
	
	- Use the "Take Ownership of files or other objects" User Right.
	
	  -or-
	
	- Have WRITE_OWNER access to the object. WRITE_OWNER is part of Full Control in
	  the Access Control List (ACL) so, if you grant Full Control to a user through
	  NTFS permissions, the user can take ownership locally or remotely.
	
	Therefore, when you take ownership remotely, you are not using the "Take
	Ownership" user right so no "Use of User Right" event is generated.
	
	RESOLUTION
	==========
	
	To get an audit event when taking ownership remotely, you need to have the "File
	and Object Access" audit policy turned on. The events are logged but can be
	difficult to find because there are so many events (every time an object is
	selected, an event is generated). Here is a sample of the event generated when
	taking ownership remotely:
	
	  Event ID: 560
	  Source: Security
	  Category: Object Access
	  Description:
	
	  Object Open:
	     Object Server: Security
	     Object Type: File
	     Object Name: C:\users\jdoe
	     New Handle ID: 868
	     Operation ID: {0,94189}
	     Process ID: 4285605632
	     Primary User Name: SYSTEM
	     Primary Domain: SYSTEM
	     Primary Logon ID: (0x0,0x3E7)
	     Client User Name: jdoe
	     Client Domain: DOMAINX
	     Client Logon ID: (0x0,0x16A08)
	     Accesses  WRITE_OWNER
	        ReadAttributes
	     Privileges     -
	
	MORE INFORMATION
	================
	
	When you take ownership locally and "Use of User Rights" is enabled, four Event
	578s are logged and the last Event 578 gives the detail about the actual
	ownership transaction, as is shown in the following example:
	
	  Event ID: 578
	  Source: Security
	  Category: Privilege Use
	  Description:
	
	  Privileged object operation:
	     Object Server: Security
	     Object Handle: 232
	     Process ID: 4289438976
	     Primary User Name: jdoe
	     Primary Domain: DOMAINX
	     Primary Logon ID: (0x0,0xDC4)
	     Client User Name: jdoe
	     Client Domain: DOMAINX
	     Client Logon ID: (0x0,0xDC4)
	     Privileges: SeTakeOwnershipPrivilege
	
	STATUS
	======
	
	This audit process is by design.
	
	Additional query words: owner permission remote sfm macfile ntw nts
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	
