---
layout: page
title: "Q128627: PC Ext: Err Msg: &#91;004&#93; Message Circular Route Detected"
permalink: /kb/128/Q128627/
---

## Q128627: PC Ext: Err Msg: &#91;004&#93; Message Circular Route Detected

{% raw %}

	Article: Q128627
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mail External program (EXTERNAL.EXE) may record the following error in the
	SYSTEM.LOG:
	
	  [004] Message circular route detected...
	
	CAUSE
	=====
	
	This happens under three conditions:
	
	1. When the postoffice where Mail is processed has a Network or Postoffice name
	  that is nine characters in length.
	
	2. The Network name and Postoffice name match the first nine characters of the
	  Network name and Postoffice name, respectively, in the hop trace.
	
	3. At least one / character has been processed in the hop trace.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2.16 of the Mail
	External program. This problem was corrected in version 3.2.17 of EXTERNAL.EXE.
	If you do not have version 3.2.17 (or later), you can download EXTUPD.EXE, a
	self-extracting file, on the following services:
	
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
	
	Additional query words: 3.20 circular routing
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
