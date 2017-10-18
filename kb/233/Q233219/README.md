---
layout: page
title: "Q233219: XFOR: Self-Registration of Inetcomm.dll Fails"
permalink: kb/233/Q233219/
---

## Q233219: XFOR: Self-Registration of Inetcomm.dll Fails

	Article: Q233219
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 29-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Internet Mail Service on an Exchange Server
	computer, the following error message may be displayed:
	
	  Self registration of the DLL c:\winnt\system32\inetcomm.dll failed.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Manually register the Inetcomm.dll file located on your hard disk. To do so,
	  click Start, click Run, type "regsvr32 c:\winnt\system32\inetcomm.dll"
	  (without the quotation marks), and then press ENTER.
	
	2. Restart the computer, and then attempt to install the Internet Mail Service
	  again.
	
	If the problem still occurs, you may need to replace the Inetcomm.dll file on
	your hard disk with the version of the file on the Exchange Server 5.5 CD-ROM.
	To do so:
	
	1. Rename the Inetcomm.dll file in the Winnt\System32 folder on your hard disk
	  to Inetcomm.old.
	
	2. Copy the Inetcomm.dll file from the Exchange Server 5.5 CD-ROM to the
	  Winnt\System32 folder on your hard disk.
	
	3. Manually register the Inetcomm.dll file as described above, restart the
	  computer, and then attempt to install the Internet Mail Service again.
	
	MORE INFORMATION
	================
	
	For information about a similar problem that causes this same error message to
	be displayed, please see the following article in the Microsoft Knowledge Base:
	
	  Q194820 XADM: Cannot Install 5.5 After Internet Explorer 4.01 SP1
	
	Additional query words: ims internet mail connector imc
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
