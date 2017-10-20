---
layout: page
title: "Q128462: PROFS: VMGATE Log .MAI File Errors"
permalink: /kb/128/Q128462/
---

## Q128462: PROFS: VMGATE Log .MAI File Errors

{% raw %}

	Article: Q128462
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following errors occur in the VMGATE log:
	
	  [15:24] - ERROR: scanning data fields in: L:MAI\MAC\0001594C.MAI [15:24] -
	  ...will try again at NEXT time, processing continues
	
	  [15:26] - ERROR: scanning data fields in: L:MAI\MAC\0001594C.MAI [15:26] -
	  ...will try again at NEXT time, processing continues
	
	  [15:28] - ERROR: scanning data fields in: L:MAI\MAC\0001594C.MAI
	  [15:28] - ...SYSTEM.LOG entry written, diagnostic sent to:
	
	After the .MAI file fails for the third time, the mail is returned to the sender
	and the following message is logged in the system log:
	
	  System log entry on: 12-15-94 15:28
	  VMGATE program has detected a mail problem
	  Message data:
	
	  From: IES/TOWER/SZHJZG
	  Date: 12-15-94
	  Time: 15:29
	  Subject: MMIS year end processing issues
	  Mail retry count exceeded sending to: VMGATE
	
	CAUSE
	=====
	
	The program was not reading data properly if a particular field was bigger than
	the buffer size, and started within the current buffered data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.4a of Microsoft Mail
	Gateway to PROFS. This problem was corrected in VMGATE.EXE version 3.40.0042.
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Vmga.exe now
	  (http://download.microsoft.com/download/pcmail/Update/23/WIN/EN-US/vmga.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 3.40a
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340a
	Version           : :3.4a
	
	=============================================================================
	

{% endraw %}
