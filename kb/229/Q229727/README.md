---
layout: page
title: "Q229727: Display Problems Occur with NvRunCmd"
permalink: /kb/229/Q229727/
---

## Q229727: Display Problems Occur with NvRunCmd

	Article: Q229727
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NvRunCmd, the following problems may occur:
	
	- Blank lines do not display correctly.
	
	- The Output in the Display session maybe mixed up.
	
	- The Truncation message is not in a single line.
	
	- An "Invalid Data Received" error message is returned, rather than the data.
	
	CAUSE
	=====
	
	- NvRunCmd ignores blank lines.
	
	- When a single line is longer than 222 characters, the line is split into two
	  lines.
	
	- When the amount of data to be passed to the Host is greater than the maximum
	  amount the Host Task DSIGDS can process, a truncation message occurs in order
	  to indicate that not all data can be displayed. This message is added
	  directly at the end of the data, rather than being in a separate line.
	
	- The NVRunCMD service is only designed to return up to 32 KB of data for each
	  command. This problem is only partially resolved, as described in Q196571.
	
	For additional information regarding the original problem, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q196571 NVRunCmd Does Not Return More Than 32 KB of Data Per Command
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2. This problem was first
	corrected in SNA Server version 3.0 Service Pack 4 and SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	Even with the fix applied as described in Knowledge Base article Q196571, the
	"Invalid Data Received" error message may still occur when the response of a
	NVRunCMD command from the host contains more than 32 KB of data.
	
	The following is an example of a host error message that occurs when you issue a
	TYPE command for a file larger than 32 KB using NVRunCMD:
	
	  * IP659 RUN SP=R2841, APPL=NVRUNCMD CMD TYPE D:\TEMP\JUNK\A.TXT
	  - DSIGDS DSI296I RUN FAILED. INVALID DATA RECEIVED FROM R2841
	
	When this occurs, none of the returned data is displayed on the host.
	
	With the original update, NVRunCMD returns up to 31,700 bytes of data for each
	NVRunCMD command issued. In addition, NVRunCMD truncates responses that contain
	more than 31,700 bytes and appends a truncation message to the end of the data
	to indicate that the data has been truncated.
	
	The Host Task "DSIGDS" is able to accept 32,600 bytes of data. The original
	update truncates after 31,700 bytes "pure" data and does not consider the amount
	of additional bytes caused by the NMVT Text Data Major Vector and the
	Self-Defining Text Message Subvector used to pass the data. Therefore, under
	certain conditions, the amount of data may exceed the maximum amount the host
	task can accept.
	
	NvRunCmd now truncates responses if the total size of data and Major Vectors and
	Subvectors is greater than 32,337 bytes.
	
	Additional query words: NvrunCmd, NetView
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
