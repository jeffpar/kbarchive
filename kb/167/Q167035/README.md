---
layout: page
title: "Q167035: Print Queue May Stop Responding When Running LPR on Server"
permalink: /kb/167/Q167035/
---

## Q167035: Print Queue May Stop Responding When Running LPR on Server

	Article: Q167035
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP5,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP5, 4.0 
	- Microsoft Windows NT Server versions 3.51 SP5, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use LPR to print a job to the LPD service on the same computer, the
	fourth print job may fail.
	
	CAUSE
	=====
	
	Microsoft changed its code to allow for more than the eleven ports that the
	current RFC 1179 allocates for LPR and LPD.
	
	Prior to Windows NT 3.51 Service Pack 5 and Windows NT 4.0, the LPD service used
	Port 515 and LPR used source ports (Port 721 through Port 731 inclusive), which
	follows the specifications in RFC 1179. This prevents LPR from using the same
	port as LPD.
	
	In Windows NT 3.51 Service Pack 5 and Windows NT 4.0, LPR can now use Port 512
	through Port 1023, so it is possible that LPR and LPD could both use Port 515 at
	the same time. When this port conflict occurs, LPR fails to print the job.
	
	RESOLUTION
	==========
	
	LPR has been changed so that port 515 is not used as an LPR port.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q179156 Updated TCP/IP Printing Options for Windows NT 4.0 SP3 and Later
	
	Additional query words: rfc1179
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351search kbWinNTS351sp5 kbWinNTW351sp5
	Version           : :3.51 SP5,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
