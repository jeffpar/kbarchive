---
layout: page
title: "Q165506: Print Job Continuously Restarts Spooling But Never Prints"
permalink: kb/165/Q165506/
---

## Q165506: Print Job Continuously Restarts Spooling But Never Prints

	Article: Q165506
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a line printer remote (LPR) printer port from Windows NT,
	print jobs may not print, and you may experience the following symptoms:
	
	- The print job may appear to spool, then restart and spool from the beginning.
	  This behavior continues until it is cancelled.
	
	- The print job hangs in the queue with an error status.
	
	- The print job hangs in the queue with a spooling status
	
	CAUSE
	=====
	
	This is caused by the idle-timeout setting on the printer's TCP/IP settings
	being set too low. The default setting is 90 seconds. When this value is set to
	an extremely low number, such as 1, the printer will respond to the computer
	sending the print job with a frame size of zero. This can be seen in a network
	trace by checking the Window setting in the TCP portion of the printer's
	acknowledgement frame. That number is the largest frame size the printer will
	accept.
	
	RESOLUTION
	==========
	
	Increase the TCP/IP idle-timeout setting using the printer's control panel or by
	using a telnet session. The default setting is 90.
	
	Consult your JetDirect manual for information on how to make this change. If the
	setting is low enough to cause this problem, it may be extremely difficult to
	use a telnet session to make the change, since the session will constantly
	time-out before the commands can be entered.
	
	
	MORE INFORMATION
	================
	
	The different symptoms appear according to how the printer responds. If the
	printer responds with a zero Window size but does not include the Reset flag,
	the server will hang in an error state until the printer responds with a larger
	window size. In the trace you can see the server retrying the connection, and
	the printer responding with an acknowledgement, but still with the zero Window
	size.
	
	If the printer responds with a zero Window size, but does not include the reset
	flag, the server will re-spool the job and try again from the beginning. In the
	printer window, the job will spool to its full size, sit for a moment, then
	start spooling over again, until it is canceled.
	
	Additional query words: hung
	
	======================================================================
	Keywords          : kb3rdparty kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
