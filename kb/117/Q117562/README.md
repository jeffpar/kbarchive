---
layout: page
title: "Q117562: PC Ext: IMPORT.EXE Autocreate Fails if EXTERNAL.EXE Running"
permalink: /kb/117/Q117562/
---

## Q117562: PC Ext: IMPORT.EXE Autocreate Fails if EXTERNAL.EXE Running

{% raw %}

	Article: Q117562
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 3.0 and 3.2 of Microsoft Mail for PC Networks, running IMPORT.EXE
	with the autocreate option turned on, can fail against a postoffice with
	EXTERNAL.EXE running against it in high mail traffic situations. IMPORT.EXE
	reports:
	
	  Fatal [59] Error autocreating postoffice: XXXXXXXXXX
	
	CAUSE
	=====
	
	EXTERNAL.EXE opens the *.XTN files as "Read-Share Deny Write" while IMPORT.EXE
	is trying to write to them. Under normal circumstances, EXTERNAL.EXE keeps an
	.XTN file open for a very short interval, so the problem is avoided.
	
	WORKAROUND
	==========
	
	Try increasing the IntervalRegular time (or -n<time>) parameter on
	EXTERNAL.EXE so that it checks the postoffice and locks the XTN files less
	frequently.
	
	The autocreate IMPORT.EXE problem is less likely with low mail traffic
	postoffices because the EXTERNAL.EXE program is not delivering as many messages
	and requires shorter periods of access to XTN files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. This problem was corrected in EXTERNAL.EXE
	version 3.2.8. If you do not have version 3.2.8 (or later), you can download
	EXTUPD.EXE, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile EXTUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get EXTUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download EXTUPD.EXE.
	
	- Microsoft Partner Network (MSPN)
	
	  On MSPN Desktop, double-click the Software Library icon.
	  Search for EXTUPD.EXE.
	  Display results and download.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	
	Additional query words: 3.00 3.20 locked
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
