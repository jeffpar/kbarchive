---
layout: page
title: "Q118298: PC DirSync: Template Information Sent with TEMPLATE=NO"
permalink: kb/118/Q118298/
---

## Q118298: PC DirSync: Template Information Sent with TEMPLATE=NO

	Article: Q118298
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	For versions 3.0 and 3.2 of Microsoft Mail for PC Networks, the directory
	synchronization (Dir-Sync) server will send template information to a Microsoft
	Mail for AppleTalk Networks server, even though the Dir-Sync import request
	message contains TEMPLATE=NO.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. This problem was corrected in Connection Name
	Utility (CNU) version 3.4.
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile CNUUPD.HQX, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get CNUUPD.HQX
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download CNUUPD.HQX.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	MORE INFORMATION
	================
	
	When participating in Dir-Sync, the Microsoft Mail for AppleTalk Networks'
	server acts as a foreign Dir-Sync requester via the Connection Name Utility
	(CNU) component of the version 3.2 of Mail Connection Gateway. If the Network
	Manager generates an import request message via the Connection Name Utility, the
	Dir-Sync transaction information will include:
	
	  From: Network Manager
	  To: NETWORK/POSTOFFICE/$SYSTEM
	  Subject: Directory Exchange Profile
	  Date: 1994-04-04 09:12
	  Priority:
	  -----------------------------------------------------------
	  [DIRSYNC]
	  TASK=IMPORTREQ
	  NAME=PCM:MACNET/MACPO
	  TYPES=PCM|CSI|profs
	  TEMPLATE=NO
	  SRVSEQ=0000000644
	  TRANSACTIONS=INATTACHMENT
	
	Notice: Under the [DIRSYNC] section of this transaction, the TEMPLATE setting is
	TEMPLATE=NO.
	
	The Dir-Sync server will respond to the import request by sending a mail message
	to the Network Manager's inbox. Attached to this mail message will be a
	TMPTRANS.GLB file which contains the Mail for PC Networks' user names and
	address detail.
	
	[DIRSYNC-TRANSACTIONS]
	0000000645 User Number 1                    PCM:NETWORK/POSTOFFICE/USER1
	- Phone:/(206) 635-7022
	- FAX:/(206) 635-7022
	0000000647 User Number 2                    PCM:NETWORK/POSTOFFICE/USER2
	- Phone:/(206) 635-7022
	- FAX:/(206) 635-7022
	
	NOTE: For this instance, the Dir-Sync server responded to the CNU generated
	import request (that specified TEMPLATE=NO) with a TMPTRANS.GLB file containing
	template information.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
