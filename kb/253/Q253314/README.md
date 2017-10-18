---
layout: page
title: "Q253314: &quot;SNABASE Not Started&quot; Error Occurs When Using Terminal Server"
permalink: kb/253/Q253314/
---

## Q253314: &quot;SNABASE Not Started&quot; Error Occurs When Using Terminal Server

	Article: Q253314
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp2 kbsna400sp3
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Terminal Server client from either a workstation or the server
	to connect through a Windows NT Terminal Server that has SNA Server 4.0 client
	for Windows NT installed, the following error message may occur when trying to
	establish a 3270 session:
	
	  SnaBase not started
	
	The 3270 screen may also be blank with no errors logged in the event log on the
	client, the Terminal Server, or the SNA Server. The 3270 applet is able to
	establish a connection if you run it directly from the Terminal Server.
	
	CAUSE
	=====
	
	The compatibility script included on the Terminal Server CD for SNA Server is
	not compatible with SNA Server 4.0 SP2 and SP3.
	
	RESOLUTION
	==========
	
	Use the correct compatibility script that corresponds to the SNA Server service
	pack that is installed.
	
	MORE INFORMATION
	================
	
	For additional information on installing and obtaining the correct compatibility
	scripts, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q251349 3270 Applet Stops Responding at Blank Screen on Terminal Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
