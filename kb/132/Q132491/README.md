---
layout: page
title: "Q132491: FAX: Fax Gateway Stops with Corrupt RRS.FAX"
permalink: /kb/132/Q132491/
---

## Q132491: FAX: Fax Gateway Stops with Corrupt RRS.FAX

	Article: Q132491
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.0.1 of Microsoft Mail Gateway to Fax can experience a critical error
	that halts the program. The critical error may be caused by a corrupt RRS.FAX
	file. The gateway screen will show the following message:
	
	  A Critical error has occurred (10:0:2:0)
	
	  Attempted operation: CREATE File affected: M:\FAX\RRS.FAX
	
	On the first attempt to restart the gateway, the following messages may occur:
	
	  A Critical error has occurred (10:0:2:0)
	
	  Database function failure
	
	A second attempt to restart results in the following message:
	
	  [<time>] - RRS.FAX file is corrupted
	
	  [<time>] - >>> Press any key to shutdown
	
	CAUSE
	=====
	
	The errors mentioned above are the result of a corrupt RRS.FAX file.
	
	The RRS.FAX file can be corrupted under the following circumstances:
	
	- A fax message is sent with a bad phone number.
	
	- No other valid recipients are in the message.
	
	- The faxout cycle begins with more than one mail item in the fax queue.
	
	- The bad message follows a good message.
	
	The corruption is due to a failure in resetting a pointer in the RRS.FAX file.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name    Version
	  --------------------
	  Faxgtw.exe   3.0.2
	
	This hotfix has been posted to the following Internet location as Faxgy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to Fax
	version 3.0.1.
	
	MORE INFORMATION
	================
	
	After the sequence of events mentioned in the "Symptoms" section above, it is
	not possible to compress the RRS.FAX file. It has been renamed to TMPRRS.FAX,
	and it still contains the corruption.
	
	To recover, restore the RRS.FAX file from the installation disk. The initial
	RRS.FAX file is four 00 bytes. When the RRS.FAX file is reset, the messages in
	the FAX queue should be returned or deleted using the Microsoft Mail
	Administrator's program (ADMIN.EXE).
	
	Additional query words: 3.00.1
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3
	Version           : MS-DOS:3.0.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
