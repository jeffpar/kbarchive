---
layout: page
title: "Q126591: PC Mac: Err Msg: Application Unknown Has Unexpectedly Quit"
permalink: /kb/126/Q126591/
---

## Q126591: PC Mac: Err Msg: Application Unknown Has Unexpectedly Quit

	Article: Q126591
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 3.0 of Microsoft Mail for PC Networks, Macintosh
	workstation and you attempt to send to an X.400 message from the Macintosh
	client, the following error may occur:
	
	  The application "unknown" has unexpectedly quit
	  because an error of type 1 occurred.
	
	CAUSE
	=====
	
	The error can occur when the address contains country code, Administrative
	Management Domain, Private Management Domain, or Domain Defined Attribute type
	and value for the full address (For example, =us/admd=a/prmd=p/dda.type=r-1
	/dda.value=aaaa bbbbb (c)).
	
	WORKAROUND
	==========
	
	Use additional address fields, such as Personal Name, Organization Name,
	Organization Unit Name, User Agent Identifier, or X.121 Address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem in version 3.0 of Microsoft Mail for
	PC Networks, Macintosh workstation. This problem was corrected in Macintosh
	workstation version 3.0.5. If you do not have version 3.0.5 (or later), you can
	find MACLIENT.HQX or MACLIENT.SEA, a self-extracting file, on the following
	services:
	
	NOTE: MACLIENT.HQX is on the Microsoft FTP Web site.
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MACLIENT.HQX, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MACLIENT.HQX
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download MACLIENT.HQX.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0
	
	=============================================================================
	
