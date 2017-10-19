---
layout: page
title: "Q222942: IBM S/36 Displays &quot;Unexpected Data Received From Printer&quot;"
permalink: /kb/222/Q222942/
---

## Q222942: IBM S/36 Displays &quot;Unexpected Data Received From Printer&quot;

	Article: Q222942
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the SNA Print Service against an IBM S/36 system, the S/36 console
	displays the following error message whenever a print job is printed:
	
	  Unexpected data received from printer (print device)
	
	When this error occurs, the S/36 console operator must acknowledge this message
	before further print jobs are spooled to the printer.
	
	CAUSE
	=====
	
	When the S/36 finishes sending a print job to SNA Server Print Server, the S/36
	gives direction to the printer. The print server responds by sending a print
	status message and providing direction to the S/36. This causes the S/36 to
	detect an error and log the following error to the S/36 console:
	
	  Unexpected data received from printer (print device)
	
	The S/36 appears to expect the print emulator to have the send state on the
	conversation after the print job has completed, and wait until the S/36 asks for
	conversation direction. This is different from AS/400 printing, where an AS/400
	printer always provides direction back to the AS/400 along with a print status
	message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0, 4.0 SP1, 4.0
	SP2. This problem was first corrected in SNA Server version 4.0 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
