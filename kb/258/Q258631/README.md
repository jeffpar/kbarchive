---
layout: page
title: "Q258631: SNA Print Sessions May Not Use PDT File"
permalink: /kb/258/Q258631/
---

## Q258631: SNA Print Sessions May Not Use PDT File

{% raw %}

	Article: Q258631
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA print service does not search for Printer Definition Table (PDT) files
	before it starts the SNA print sessions. The PDT files are located and loaded
	when each print job is started. If the PDT is corrupt or cannot be found, the
	print job completes successfully without any error messages; however, the PDT
	file is not used to format the job or send commands to the printers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server, versions
	3.0 (all service packs), 4.0, 4.0 SP1, 4.0 SP2. This problem was first corrected
	in Microsoft SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	With SNA Server 4.0 SP3 installed, the SNA print service validates PDT files
	before it starts the print session. SNA print sessions that use PDT files do not
	start if the PDT file is corrupt or cannot be found. The status of these
	sessions remains inactive. The SNA Virtual Print Driver logs the following error
	message in event ID 24 in the Application event log:
	
	  The SNA Virtual Print Driver cannot load the specified PDT file.
	  Please check that the file has been configured correctly.
	
	  PDT file name: C:\SNA\SYSTEM\HPLJ2.PDT
	  Driver: WINSPOOL
	  Printer: \\SNASERVER\PrintSession1
	
	Additional query words: snaprint
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	

{% endraw %}
