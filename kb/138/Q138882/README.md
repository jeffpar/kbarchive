---
layout: page
title: "Q138882: SNA Server Windows 95 Client 5250 Applet Print Screen Fails"
permalink: kb/138/Q138882/
---

## Q138882: SNA Server Windows 95 Client 5250 Applet Print Screen Fails

	Article: Q138882
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to print from the SNA Server Windows 95 client 5250 Applet,
	printing fails to produce any printed output even though it appears to process
	the Print command successfully.
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\SYSTEM\WIN5250.EXE
	  <snaroot>\SYSTEM\SNASRV.EXE
	
	NOTE: Install these files on the SNA Server Windows 95 client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.10 2.11 screen prtscrn win95
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
