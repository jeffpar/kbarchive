---
layout: page
title: "Q124794: FFAPI: Corrupted From: Field with Large Gateway Put"
permalink: /kb/124/Q124794/
---

## Q124794: FFAPI: Corrupted From: Field with Large Gateway Put

{% raw %}

	Article: Q124794
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the LGTWPUT.EXE program, a corrupted From: field may result.
	
	CAUSE
	=====
	
	This corruption occurs if you run EDIT.COM before you run LGTWPUT.EXE.
	
	LGTWPUT.EXE is inheriting some bits that EDIT leaves in memory, and this triggers
	corruption in the MAI and P1 files. The From: field becomes corrupted. Once the
	error occurs, all subsequent mail reflects the same error condition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0 of Microsoft Mail
	Software Development Kit (SDK): File Format Application Programming Interface
	(FFAPI) for Applications and Gateways. This problem was corrected in LGTWPUT.EXE
	version 3.04.7. If you do not have version 3.04.7 (or later), you can download
	GWPUT.EXE, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile GWPUT.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get GWPUT.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download GWPUT.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailFFAPI300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
