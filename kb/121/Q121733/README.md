---
layout: page
title: "Q121733: PC Ext: Err: &#91;012&#93; This Corrupt Message Cannot Be Delivered..."
permalink: /kb/121/Q121733/
---

## Q121733: PC Ext: Err: &#91;012&#93; This Corrupt Message Cannot Be Delivered...

{% raw %}

	Article: Q121733
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The External Mail program (EXTERNAL.EXE) may generate the following entry in the
	SYSTEM.LOG files of a destination postoffice:
	
	  [012] This corrupt message cannot be delivered. Contact your administrator.
	
	The originator of the message may receive a similar message that also includes
	the returned mail item. The returned message shows no apparent corruption.
	
	CAUSE
	=====
	
	This error can occur when multiple recipients are specified for one postoffice
	and one of the recipients experiences a delivery problem. As the External Mail
	program tries to create the SYSTEM.LOG report, memory can be corrupted. This
	memory corruption can cause the External Mail program to stop responding (hang),
	or to produce a SYS3175 message in the OS/2 environment or a general protection
	error in the NT environment.
	
	When you restart the External Mail program, the [012] error message may be
	generated during the External Mail program's "Delivering new mail" cycle. The
	012 message is not generated consistently and seems to depend on the combination
	of messages with which External is working.
	
	This problem does not occur for mail sent from user to user within one
	postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2.9 of the External
	Mail program. This problem was corrected in version 3.2.12 of EXTERNAL.EXE. If
	you do not have version 3.2.12 (or later), you can download EXTUPD.EXE, a
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
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
