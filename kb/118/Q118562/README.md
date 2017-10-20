---
layout: page
title: "Q118562: SMTP: Cannot Export Address List Using ODI Drivers"
permalink: /kb/118/Q118562/
---

## Q118562: SMTP: Cannot Export Address List Using ODI Drivers

{% raw %}

	Article: Q118562
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A problem with the SMTPGET function affects both the Microsoft Mail Gateway to
	SMTP and the Microsoft Mail Gateway to AT&T. When an address list is
	exported from one postoffice to another indirectly via the SMTP or AT&T
	gateway (backboning), you get the following AT&T gateway error when you try
	to process the exported address lists:
	
	  [01-28-94 07:47:55] Sent a Message From User: DEERFIELD/SENSOR3/*SPECIAL
	  [01-28-94 07:47:55] A P1 Message Recipient: SENSOREUR/EURGER/*SPECIAL
	  [01-28-94 07:47:55] The Message Size That Was Sent: 3644
	  [01-28-94 07:47:55] Err=-9702 Function=MMFF_DequeueMsg No KeywordFound:
	
	  [Garbage here]
	
	  [01-28-94 07:48:22] Processing a Message
	
	CAUSE
	=====
	
	The SMTPGET function fails to extract the address list contained in an
	attachment when you use ODI network drivers on Novell LANs. Here are the
	AUTOEXEC.BAT entries for the ODI drivers:
	
	  c:\netware\lsl.com
	  c:\netware\ipxodi.com
	  c:\netware\netx.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 2.1 and 3.0 of the
	Microsoft Mail Gateway to SMTP. This problem was corrected in version 3.04.6 of
	SMTPGET.EXE. If you do not have version 3.04.6, you can download SMTPGE.EXE, a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile SMTPGE.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get SMTPGE.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download SMTPGE.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 2.10 3.00 po postoffice
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
