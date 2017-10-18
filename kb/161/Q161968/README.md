---
layout: page
title: "Q161968: NetBT Tears Down TCP Session with Many Concurrent File Transfers"
permalink: kb/161/Q161968/
---

## Q161968: NetBT Tears Down TCP Session with Many Concurrent File Transfers

	Article: Q161968
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Copying files from one computer running Windows NT to a UNC path on a second
	computer running Windows NT may fail if the Windows NT machine is under heavy
	stress. This usually occurs when there are multiple, concurrent, file transfers
	in progress. If the file transfers are initiated by an application, the
	application initiating the file transfer may log events with error 59 ("An
	unexpected network error occurred"). A network sniff of the failure will show a
	TCP RESET segment being sent by the computer running Windows NT that is doing
	the writing.
	
	CAUSE
	=====
	
	When under a heavy load, Windows NT may send multiple server message blocks
	(SMBs) in the same network segment. Rdr.sys was incorrectly assuming the
	response to the Session Setup & X would be the only SMB in the segment and
	was taking more data than it should.
	
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	To resolve this problem, obtain the following fix for Windows NT 3.51:
	
	  01/26/98  04:58p               260,384  Rdr.sys (Intel)
	  01/26/98  04:55p               471,664  Rdr.sys (Alpha)
	
	NOTE: Service Pack 5 must be applied to Windows NT 3.51 prior to applying this
	fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
