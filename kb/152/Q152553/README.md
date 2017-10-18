---
layout: page
title: "Q152553: Print Jobs from MAC OTI Clients May Hang in WinNT Print Queue"
permalink: kb/152/Q152553/
---

## Q152553: Print Jobs from MAC OTI Clients May Hang in WinNT Print Queue

	Article: Q152553
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print to a Windows NT Server with Services for Macintosh installed from
	an Apple Macintosh client running (OTI) Open Transport Protocol, the print jobs
	will hang in the Windows NT print queue for up to 30 minutes. The print jobs
	hang indefinitely in a "spooling" state.
	
	This problem is caused when you send a print job to Windows NT from a Macintosh
	client running OTI. When the Macintosh client finishes sending the job to
	Windows NT, the LaserWriter driver sends out its PAP EOF and ATP EOM, then it
	sets up a data structure and waits for the transaction release (TRel) coming
	back from the Windows NT Server. The result is that the client never sees the
	TRel and never breaks down the connection before it receives an OpenConn PAP
	request. The TRel is coming back from Windows NT before the LaserWriter driver
	is ready to handle the TRel, resulting in the job staying in a spooling state on
	the Windows NT Server.
	
	MORE INFORMATION
	================
	
	This problem was fixed in the latest Apple LaserWriter driver. For information
	about obtaining this driver please contact Apple Computer, Inc.
	
	This issue has been seen most commonly with the following printer:
	
	- Apple Laserwriter 16/600 PS
	
	Additional query words: SFM 16 600
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
