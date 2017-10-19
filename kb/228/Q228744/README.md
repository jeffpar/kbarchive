---
layout: page
title: "Q228744: Runtime Error 1512 for String &#91;Input&#93; Parameter -- Korean Window"
permalink: /kb/228/Q228744/
---

## Q228744: Runtime Error 1512 for String &#91;Input&#93; Parameter -- Korean Window

	Article: Q228744
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The problem occurs when using COM Transaction Integrator (COMTI) on a computer
	running the Korean version of Windows NT Server. The locale specified for the
	COMTI Remote Environment (RE) is also Korean. Code pages 933 (IBM EBCDIC -
	Korean) and 949 (ANSI - Korean/Hangul) are used.
	
	When a COMTI application method is invoked, the following runtime error entry
	appears in the application event log. It relates to an [input] parameter of the
	"String" type. The string is initialized to an empty string, or a single null
	character, by the client application code.
	
	  Event ID: 102
	  Source: COMTI
	  Type: Error
	  Category: General
	
	  (102) COM Transaction Integrator reported the following exception to the
	  client:
	  Component: GSCS0UQRY1.clsGSCS0UQRY1.1
	  Method: GSCS0UQRY1
	
	  Exception description:
	  (1512) An error occurred when converting character parameter IN_DEPT in method
	  GSCS0UQRY1. Verify that a code page capable of mapping the character set
	  conversions has been specified for the COM Transaction Integrator Remote
	  Environment.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in COM Transaction Integrator for
	CICS and IMS, version 4.0 SP2. This problem was first corrected in SNA Server
	version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
