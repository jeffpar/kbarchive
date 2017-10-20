---
layout: page
title: "Q121732: PC Ext: Failure Delivering User Mail Due to Mailbag Contention"
permalink: /kb/121/Q121732/
---

## Q121732: PC Ext: Failure Delivering User Mail Due to Mailbag Contention

{% raw %}

	Article: Q121732
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the External Mail program (EXTERNAL.EXE) encounters a mailbag contention
	problem, the SYSTEM.LOG report generated may be incorrect. It is also possible
	that no report will be generated and External may stop responding (hang or
	crash).
	
	If the report is generated, it may list recipients that actually did receive the
	message rather than list only the recipient whose mailbag could not be accessed.
	
	CAUSE
	=====
	
	These errors can occur when multiple recipients are specified for one postoffice
	and one of the recipients experiences a delivery problem. As the External Mail
	program tries to create the SYSTEM.LOG report, memory can be corrupted.
	
	This problem does not occur for mail sent from user to user, within one
	postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2.9 of the External
	Mail program. This problem was corrected in version 3.2.12 of EXTERNAL.EXE. If
	you do not have version 3.2.12 (or later), you can download EXTUPD.EXE, a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon.
	
	  Click Knowledge Base, and select the product. Enter kbfile EXTUPD.EXE, and
	  click GO!
	
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com Change to the Softlib/Mslfiles
	  folder. Get EXTUPD.EXE
	
	- The Microsoft Network On the Edit menu, click Go To, and then click Other
	  Location. Type "mssupport" (without the quotation marks).
	
	  Double-click the MS Software Library icon.
	
	  Find the appropriate product area. Locate and Download EXTUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
