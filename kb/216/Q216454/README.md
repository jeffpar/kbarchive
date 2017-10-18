---
layout: page
title: "Q216454: Print Jobs Formatted Incorrectly If Using &quot;No Line Formatting&quot;"
permalink: kb/216/Q216454/
---

## Q216454: Print Jobs Formatted Incorrectly If Using &quot;No Line Formatting&quot;

	Article: Q216454
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	3270 print jobs may print with incorrect formatting if the 3270 print session is
	configured to use the "No Line Formatting" option. The incorrect formatting
	appears in the form of missing spaces that result in print data not being
	properly positioned on the printed page.
	
	The following example illustrates the problem:
	
	- Expected print output
	
	  
	
	  This is a sample print job               Date
	                                        2/2/1999
	
	- Actual print output because of the problem described here.
	
	  
	
	  This is a sample print job               Date
	       2/2/1999
	
	The problem is that the data on the second line is not printed in the correct
	position.
	
	CAUSE
	=====
	
	SNA Server's Host Print service fails to send all of the spaces (which are
	denoted by EBCDIC X'40'characters) it receives to the printer when the "No Line
	Formatting" option is selected in some circumstances.
	
	
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
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2. This problem was first corrected in SNA
	Server version 3.0 Service Pack 4 and SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about the "No Line Formatting" option, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q178514 No Line Formatting" Option isn't Explained in SNA Server Help
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
