---
layout: page
title: "Q275181: &quot;SNAOLE - FIELD CONFLICT. UNABLE TO CHANGE&quot; Opening SNA Manager"
permalink: /kb/275/Q275181/
---

## Q275181: &quot;SNAOLE - FIELD CONFLICT. UNABLE TO CHANGE&quot; Opening SNA Manager

	Article: Q275181
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is displayed when Systems Network Architecture (SNA)
	Server Manager is started:
	
	  SNAOLE
	  FIELD CONFLICT. UNABLE TO CHANGE"
	
	NOTE: This error does not prevent SNA Server Manager from functioning normally.
	
	CAUSE
	=====
	
	This error message is displayed when the properties of a link service are
	modified after a connection has already been defined to use the particular
	link/adapter.
	
	SNA Server Manager still works correctly because SNA Server Manager doesn't
	actually allow the change; however, the error is displayed.
	
	WORKAROUND
	==========
	
	To work around this issue, change the properties of the link service back to
	what is shown in the Connection Properties.
	
	For example, in the Attachmate Advanced SDLC Link Service example that is
	described in the "More Information" section, change the link service back from
	"Switched: Modem-Stored Number" to "Leased."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	In the following, Attachmate Advanced SDLC Link Service is used as an example:
	
	1. Add Attachmate Advanced SDLC Link Service (use External Link Services), and
	  then configure it with a line type of Leased.
	
	2. Add an SDLC connection that uses this link service. Notice that it shows up
	  as a Leased Line in SNA Server Manager when you view the connection
	  properties.
	
	3. Modify Attachmate Advanced SDLC Link Service such that the line type is
	  changed to something other than Leased (for example, Switched: Modem-Stored
	  Number).
	
	After you make this change, the SNAOLE error message is displayed every time SNA
	Server Manager is started.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	
	=============================================================================
	
