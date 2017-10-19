---
layout: page
title: "Q263890: XWEB: OWA Hangs During Log On If One Server Is Unavailable"
permalink: /kb/263/Q263890/
---

## Q263890: XWEB: OWA Hangs During Log On If One Server Is Unavailable

	Article: Q263890
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If multiple Exchange Server computers service Outlook Web Access (OWA) and one
	of those servers becomes inaccessible, OWA stops responding (or "hangs") for the
	users that are trying to log on to the inaccessible server and also the users
	that are trying to log on to the other servers until the attempt to log on to
	the inaccessible server times out.
	
	RESOLUTION
	==========
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	OWA also stops responding when the Microsoft Windows NT domain is synchronized.
	During this replication process no OWA users are authenticated, which causes OWA
	to stop responding.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Component         : Kluane
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
