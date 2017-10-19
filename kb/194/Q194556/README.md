---
layout: page
title: "Q194556: X400: Foreign MTA Cannot Restore Connection Using PConnect"
permalink: /kb/194/Q194556/
---

## Q194556: X400: Foreign MTA Cannot Restore Connection Using PConnect

	Article: Q194556
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a message through the Microsoft Mail Gateway to X.400 from a foreign
	system on which the message transfer agent (MTA) is configured for a checkpoint
	size greater than zero, and then the connection ends unexpectedly before the
	message is completely transferred, the foreign MTA may attempt to restore the
	connection using a PConnect data element. The Microsoft Mail Gateway to X.400
	may not allow the connection to be established, and entries similar to the
	following may appear in the X.400 log file:
	
	- 13:17:37 ERROR 1 (RTS): Failed to decode PConnect
	
	- 13:17:37 ERROR 1 (RTS): Protocol error occurred in state 0
	
	- 13:17:37 ERROR 3 (RTS): Association aborted
	
	The problem occurs repeatedly until the foreign MTA no longer attempts to restore
	the connection. When this occurs, the foreign MTA may no longer consider the
	Microsoft Mail Gateway to X.400 computer a valid MTA.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name      Version
	  ----------------------
	  X400gate.exe   3.2.6
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	WORKAROUND
	==========
	
	To prevent this problem from occurring, use one of the following methods:
	
	- Configure the foreign MTA for a checkpoint size of zero.
	
	-or-
	
	- Configure the foreign MTA so that it does not attempt to restore the
	  connection when the connection ends unexpectedly before the message is
	  completely transferred.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	version 3.2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
