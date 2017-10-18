---
layout: page
title: "Q148987: Err Msg: &quot;NETBIOS AddName Failure&quot;"
permalink: kb/148/Q148987/
---

## Q148987: Err Msg: &quot;NETBIOS AddName Failure&quot;

	Article: Q148987
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	When you are using the Windows NT Server RemoteBoot service for Windows 95 and you receive the error message "NETBIOS AddName Failure" in the early stages of starting a remoteboot workstation, it means that you have given the workstation a NetBIOS name that is already registered on this segment of the network.
	
	Every computer must ensure that its NetBIOS name is unique by broadcasting
	the name. A conflict might occur because another computer already has this
	name, or because a user is logged on under this name.
	
	NOTE: Some network cards can be very persistent about defending their
	NetBIOS names, even when a computer crashes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
