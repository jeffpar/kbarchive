---
layout: page
title: "Q127001: PC WRmt Ext: Err Msg: Postoffice Has Not Accepted Mail Item"
permalink: /kb/127/Q127001/
---

## Q127001: PC WRmt Ext: Err Msg: Postoffice Has Not Accepted Mail Item

{% raw %}

	Article: Q127001
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Mail Remote for Windows has mail queued up and dials into the External
	machine at the postoffice, the following error may be displayed after a
	connection has been established:
	
	  Postoffice has not accepted mail item
	
	External will receive the message in its entirety, but will not process it. It
	will log the following error in the SESSION.LOG file on the External
	postoffice.
	
	  Unable to send message text
	
	CAUSE
	=====
	
	This error may be displayed when a mail message contains more than 35
	attachments.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in EXTERNAL.EXE version 3.2a,
	included with Microsoft Mail for PC Networks. This problem was corrected in
	EXTERNAL.EXE version 3.2.16. If you do not have version 3.2.16 (or later), you
	can find EXTUPD.EXE, a self-extracting file, on the following services:
	
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
	
	  On the Edit menu, click Go To, and then click Other Location. Type "mssupport"
	  (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area. Locate and Download EXTUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	MORE INFORMATION
	================
	
	
	The External program will also generate this error when receiving messages with
	35 or more attachments from users on another postoffice connected via modem.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
