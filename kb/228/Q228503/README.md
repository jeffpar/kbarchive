---
layout: page
title: "Q228503: Err 1215 When IMS Transaction Program Name is All Numeric Chars."
permalink: /kb/228/Q228503/
---

## Q228503: Err 1215 When IMS Transaction Program Name is All Numeric Chars.

	Article: Q228503
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	COM Transaction Integrator returns a runtime error (1215) to the client
	application and writes the following entry to the application event log.
	
	  Event ID: 102
	  Source: COMTI
	  Type: Error
	  Category: General
	
	  (102) COM Transaction Integrator reported the following exception to the
	  client:
	
	  Component: LLLLLLLL.IIIIIIII.1
	  Method: MMMMMMMM
	
	  Exception description:
	  (1215) The COM Transaction Integrator component library property 22 is missing
	  or corrupted. Use Component Builder to create a new copy of the component
	  library.
	
	In the above event log data, LLLLLLLL is the component library name, IIIIIIII is
	the interface name, and MMMMMMMM is the method name.
	
	CAUSE
	=====
	
	The Transaction Program name, as defined using the COMTI Component Builder, is
	specified with all numeric characters.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Place one or more alphabetic characters in the Transaction Program name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in COM Transaction Integrator for
	CICS and IMS, version 4.0 SP2. This problem was first corrected in SNA Server
	version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
