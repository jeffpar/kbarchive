---
layout: page
title: "Q130068: PC Ext: External Stops Mail with DrivesWan Option"
permalink: /kb/130/Q130068/
---

## Q130068: PC Ext: External Stops Mail with DrivesWan Option

	Article: Q130068
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Mail External program (EXTERNAL.EXE) is run with the Netbios option, it
	stops delivering mail after it receives a Netbios datagram (for a priority 5
	mail message) from a postoffice (PO) that is connected using the DrivesWAN
	option.
	
	CAUSE
	=====
	
	The MTA (for example, EXTERNAL.EXE) configured to use the DrivesWAN option that
	is connected to the PO where the high-priority message originated also receives
	the datagram and tries to process it. However, External is not configured to
	process the datagram, and the datagram enters an infinite loop.
	
	The MTA connected to the PO using the DrivesWAN option also receives the datagram
	and tries to process it. Because it not designed to process the datagram, it
	enters into an infinite loop. As a result, the messages in the queue are not
	processed until the Mail External program (EXTERNAL.EXE) on the MTA is
	restarted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in EXTERNAL.EXE version 3.2.16.
	This problem was corrected in EXTERNAL.EXE version 3.2.18. If you do not have
	version 3.2.18 (or later), you can find EXTUPD.EXE, a selfextracting file, on
	the following services:
	
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
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	
	Additional query words: 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
