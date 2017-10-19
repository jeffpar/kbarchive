---
layout: page
title: "Q136151: SFM Print Service is Limited to 127 Printers"
permalink: /kb/136/Q136151/
---

## Q136151: SFM Print Service is Limited to 127 Printers

	Article: Q136151
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Macintosh clients cannot print to printers shared by Windows NT Services for
	Macintosh (SFM) print servers. The following error message appears on the
	Macintosh client:
	
	  A communication error has occurred.
	
	The following error is logged in the event log on the Windows NT SFM Server:
	
	  Macprint Event ID 2019 - Semaphore timeout.
	
	Macintosh clients may also be unable to see the shared SFM printers. Also, you
	may receive the following event ID:
	
	  Event ID 10022
	
	This can occur when more than 127 AppleTalk-connected printers are configured as
	target printers regardless if the Windows NT Appletalk printers are being
	accessed by Macintosh clients. When this occurs, print jobs queued to the
	AppleTalk printers are stalled.
	
	CAUSE
	=====
	
	This problem is caused by an AppleTalk Printer Access Protocol (PAP)
	limitation.
	
	In response to a connection request from a Macintosh client, Windows NT sends the
	socket on which the client can respond. When there are more than 127 printers
	shared on a Windows SFM server, Windows NT will exhaust the range of available
	sockets on the first node, and then move to the next node (a node is a set of
	sockets.) But there is no provision in the protocol to tell the client which
	node to use. The client continues to use the first node, but uses the new
	socket. That pair corresponds to some other printer, which drops the request and
	causes the errors.
	
	This is a limitation in Apple's design of Appletalk.
	
	WORKAROUND
	==========
	
	A workaround exists that involves creating a service account specifically for
	Print Services for Macintosh and then denying that account access to certain
	printers using the Control Panel Printers tool. This will disallow Print
	Services for Macintosh access to share specified printers for Macintosh clients
	only.
	
	To accomplish this, perform the following steps:
	
	1. On the Windows NT SFM server, create an account in User Manager to use as a
	  service account for Print Services for Macintosh. Click to clear the "User
	  must change password at next logon" checkbox and select the Password never
	  expires checkbox. Specify a desired password.
	
	2. Start the Control Panel Services tool. Click Startup for Print Services for
	  Macintosh. Click This account and specify the macprint account and password
	  information created in Step 1.
	
	3. Start the Control Panel Printers tool. Right-click on the printer(s) that SFM
	  should not share. Click Properties, and then click the Security tab. Click
	  Permissions, and then select No Access for the macprint account.
	
	Additional query words: MAC sfmprint
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
