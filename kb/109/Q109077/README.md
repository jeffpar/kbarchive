---
layout: page
title: "Q109077: Event 624 Logs Improper File Name in Explanation Text"
permalink: /kb/109/Q109077/
---

## Q109077: Event 624 Logs Improper File Name in Explanation Text

{% raw %}

	Article: Q109077
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Event 624 appears in the System log, the dump file name included in the
	event explanation incorrectly appears as follows:
	
	  COMDUMPSNABASE.EXE.DMP
	
	The following is an excerpt from the System log:
	
	  Event ID: 624
	  Source: SNA Server
	  Creating dump file C:\SNA\traces\snadump.log for SNABASE.EXE
	
	  EXPLANATION
	  A process (SNABASE.EXE) ended abnormally due to a protection
	  violation or similar condition and a dump file
	  COMDUMPSNABASE.EXE.DMP has been created that contains
	  information about the state of the process at the time of the
	  exception. Register information is contained in your Windows
	  NT root directory in the file DRWTSN32.LOG.
	
	CAUSE
	=====
	
	SNA Server logs the Event 624 explanation text incorrectly.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 corrects the dump file name forming problem. With
	this update applied, the correct name is now logged:
	
	- For Windows NT:
	
	  SNADUMP.LOG
	
	- For OS/2 clients:
	
	  COMDUMP?.DMP
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
