---
layout: page
title: "Q195848: SAMPLE: ADSIPrnt.exe Demonstrates ADSI Print Job Control"
permalink: /kb/195/Q195848/
---

## Q195848: SAMPLE: ADSIPrnt.exe Demonstrates ADSI Print Job Control

	Article: Q195848
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0; winnt:2.5
	Operating System(s): 
	Keyword(s): kbfile kbsample kbADSI kbvfp600 kbDSupport
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ADSPrnt.exe is a self-extracting executable file that contains the Visual FoxPro
	form files ADSIPrintjob.scx and ADSIPrintjob.sct. This sample demonstrates how
	to control print jobs using the Active Directory Services Interface (ADSI).
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ADSIPRNT.exe
	  (http://download.microsoft.com/download/vfox60/demo4/1/WIN98/EN-US/ADSIPRNT.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	  FileName                 Size
	  ---------------------------------------------------------
	
	  ADSIPrintjob.Scx          4,194 bytes
	  ADSIPrintjob.Scx         21,184 bytes
	
	NOTE: To use the sample, you must install the Active Directory Service Interfaces
	from your MSDN CD or from the following Web site:
	
	  http://www.microsoft.com/backoffice/downloads.htm
	
	ADSI is a COM-based interface for accessing directory services. Each element of
	the network (that is, users, printers, and computers), can be treated as an
	object.
	
	To use the ADSIPrintjob form, run ADSIPrnt.exe to extract the form files. Run the
	form from within Visual FoxPro by typing the following in the command window:
	
	     DO FORM ADSIPrintjob
	
	Enter a domain name and a server name where you want to look for print queues. A
	domain name is not required, but omitting the domain name will increase the time
	of the search. Once the server is found and the list box is populated, you can
	select a print queue from the list. You can use the Queue Control buttons to
	pause, resume, or purge the print queue.
	
	Once you select a queue, the print jobs in that queue are listed in the second
	list box. When you select a print job, you can use the Job Control buttons to
	pause, resume, or delete a print job. The More Info button displays additional
	information about the print job.
	
	REFERENCES
	==========
	
	For more information about ADSI, see the following Web site:
	
	  http://www.microsoft.com/NTServer/
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words: ADSIPRNT
	
	======================================================================
	Keywords          : kbfile kbsample kbADSI kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0; winnt:2.5
	Issue type        : kbinfo
	
	=============================================================================
	
