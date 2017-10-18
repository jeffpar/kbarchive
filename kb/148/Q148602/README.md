---
layout: page
title: "Q148602: Running SNA Server 2.11 on the Windows NT 4.0"
permalink: kb/148/Q148602/
---

## Q148602: Running SNA Server 2.11 on the Windows NT 4.0

	Article: Q148602
	Product(s): Microsoft SNA Server
	Version(s): 2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This article lists six known problems and their workarounds for SNA Server 2.11
	running on Windows NT 4.0 (Build 1381 - Final Release).
	
	STATUS
	======
	
	Microsoft has confirmed these problems in SNA Server version 2.11 and 2.11
	Service Pack 1. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	1. The SNA Server Administrator program will encounter an application exception
	  when using the Select Domain dialog to change focus to another domain when
	  running on the Windows NT 4.0.
	
	  Another possible symptom of this problem is a series of LAN Manager error
	  messages that appear after selecting the Select Domain option in the SNA
	  Server Administrator program.
	
	  To work around this problem, rename the following SNA Administrator file:
	
	  rename <snaroot>\system\snasfd.dll snasft.211
	
	
	2. SNA Server 2.11 overwrites an older version of license manager (Liccpa.cpl)
	  on Windows NT 4.0, causing new Windows NT 4.0 license system features (such
	  as replication and support for secure certificates) to be disabled.
	
	  To resolve this problem, reapply the Windows NT 4.0 version of Liccpa.cpl to
	  the <winntroot>\System32 directory.
	
	3. Eicon WAN Services from SNA Server 2.11 SP1 only works on Windows NT 3.51.
	  SNA Server 2.11 Service Pack 1 includes Eicon WAN Services v3r3, though this
	  version only works on Windows NT 3.51.
	
	  Contact Eicon for an update to Eicon WAN Services to use on Windows NT 4.0.
	
	4. On the Help menu, when you click About SNA Server, the following incorrect
	  information is diplayed:
	
	  Microsoft SNA Server for Windows NT
	  December Server Beta
	
	  Administration Program
	  Version 2.0.0.0
	
	  Copyright 1992 Microsoft Corp
	
	This does NOT indicate that an old version of SNA Server is being used and should
	be ignored. To determine the actual revision level of SNA Server, run the
	"SNAVER" command, click Browse and select the
	<snaroot>\system\SNAADMIN.EXE program. If SNA Server 2.11 SP1 is being
	used, the lower portion of the message box will show:
	
	  SNAADMIN.EXE Version 2.11.0.309.
	
	5. Server-to-server communication over IP routers fails if WINS is used.
	
	  See the following knowledge base article for more information on this
	  problem.
	
	  Q155883 NT 4.0 Breaks SNA Server 2.x Server Communication over IP
	
	  This article documents the availability of a Windows NT hotfix for this
	  problem, available through Microsoft product support.
	
	6. When you invoke SNARAS connection, Windows NT STOP screen 0x0000001E
	  appears.
	
	  When using the SNA Server 2.11 SP1 SNARAS feature on top of Windows NT 4.0,
	  the following STOP screen will occur:
	
	  STOP 0x1E (unhandled kernel exception)
	  Parameters: c0000005 80111391 00000000 8014bec0
	
	  This problem is fixed in Windows NT 4.0 Service Pack 2. This problem does not
	  occur when running SNA Server 2.11 SP1 SNARAS on Windows NT 3.51.
	
	
	Microsoft SNA Server 2.11 is supported on Microsoft Windows NT 4.0. This article
	will be updated as problems are found and as updates or workarounds are
	determined. It is recommended that the latest SNA Server 2.11 service pack be
	applied if running on Windows NT 4.0. Microsoft SNA Server 2.0 and 2.1 are not
	supported on Windows NT 4.0.
	
	Additional query words: prodsna SUR
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : :2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
