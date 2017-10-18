---
layout: page
title: "Q130012: PROFS: PWASETUP Version 3.4a.041 Update"
permalink: kb/130/Q130012/
---

## Q130012: PROFS: PWASETUP Version 3.4a.041 Update

	Article: Q130012
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the PWASETUP EXEC program (PWASETUP.CEX)
	that is included with version 3.4a of Microsoft Mail Gateway to PROFS.
	
	For complete information about obtaining and installing the program files, see
	the following sections below:
	
	- To download the updated file
	
	- To update your PWASETUP file
	
	MORE INFORMATION
	================
	
	This update resolves the following problem:
	
	- Various out of storage conditions occur in MS GATE, MS-CSM, or MS-GRF.
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Pwasetup.exe now
	  (http://download.microsoft.com/download/pcmail/Update/18/DOS/EN-US/Pwasetup.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download PWASETUP.EXE to a clean directory, run it (by typing
	"pwasetup" (without the quotation marks) at the MS-DOS prompt) to extract the
	contents of the file. You should receive the following files:
	
	  PWASETUP.CEX (23,552 bytes, dated 08-04-94, 4:14 P.M.)
	  README.TXT
	
	To update your PWASETUP file
	----------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER:
	
	  " SEND PWASETUP.CEX PWASETUP CEXEC ( LRECL F RECFM 1024 " (without the
	  quotation marks)
	
	Additional query words: 3.40a
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340a
	Version           : :3.4a
	
	=============================================================================
	
