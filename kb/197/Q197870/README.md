---
layout: page
title: "Q197870: XFOR: Exchange Notes Connector Stops on Corrupted Message"
permalink: kb/197/Q197870/
---

## Q197870: XFOR: Exchange Notes Connector Stops on Corrupted Message

	Article: Q197870
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Notes Connector may stop when processing a corrupted message from
	Lotus Notes to Exchange Server with the following error messages in the browser
	log:
	
	  1998/11/27 15:52:56- LME-NOTES-NTSMEX(01d2) 2 41301:Notes returned
	  code: 2c5 (hex)
	   >> ntshcint(1012)
	  1998/11/27 15:52:56- LME-NOTES-NTSMEX(01d2) 2 41300:Notes Package ID:
	  Notes Storage Facility (NSF). Extended Reason String: Object size
	  cannot be zero
	   >> ntshcint(1024)
	  1998/11/27 15:52:56- LME-NOTES-NTSMEX(01d2) 2 41363:Error cannot
	  retrieve message attachment
	   >> ntshcm(4058)
	  1998/11/27 15:52:56- LME-NOTES-NTSMEX(01d2) 2 54006:Error {GRC:2808}:
	  Notes to Exchange Attachment XFM failed
	   >> nts2mex(2352)
	  1998/11/27 15:52:56- LME-NOTES-NTSMEX(01d2) 2 00500:An ABNORMAL
	  SHUTDOWN request has been received
	   >> stdmain(920)
	  1998/11/27 15:52:56- LME-NOTES-NTSMEX(01d2) 3 00505:LME-NOTES-NTSMEX is
	  ending, last return code was {A shutdown request was made}
	
	CAUSE
	=====
	
	In this case, opening this message from Exchange.box on the Notes server, and
	trying to either view, launch, or detach the attachment, produced the following
	error message:
	
	  Lotus Notes
	  Object size cannot be zero.
	
	  Could not detach to file C:\TEMP\filename.doc
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: NOTESMC
	
	+--------------------------+
	| File name    | Version   | 
	+--------------------------+
	| Lsntxmex.exe | 5.05.2527 | 
	+--------------------------+
	| Lsntshc.dll  | 5.05.2527 | 
	+--------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
