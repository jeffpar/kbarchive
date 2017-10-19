---
layout: page
title: "Q131069: PC WRmt: Receiving mail fails, other processes are successful"
permalink: /kb/131/Q131069/
---

## Q131069: PC WRmt: Receiving mail fails, other processes are successful

	Article: Q131069
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Downloading headers and sending mail is successful. However, receiving mail
	fails.
	
	CAUSE
	=====
	
	Not being able to receive mail remotely may not always be a script issue. It is
	possible that some corruption exists in INBOX.KEY or INBOX.MBG, the key and mbg
	pair for the receiving mail process. They are located under the
	\<win_root>\MSMAIL\MSRMT\KEY and \<win_root>\MSMAIL\MSRMT\MBG
	directories, respectively.
	
	RESOLUTION
	==========
	
	Reset the INBOX.KEY and INBOX.MBG by performing the steps listed in Q104279.
	
	NOTE: Both downloading headers and sending mail have key and mbg pairs designated
	for those processes, as well. If problems exist for those processes, resetting
	their respective key and mbg pair can resolve those problems. The key and mbg
	pair for downloading headers is POBOX.KEY and POBOX.MBG. And, the key and mbg
	pair for sending mail is OUTBOX.KEY and OUTBOX.MBG.
	
	Additional query words: 3.20 pcmailfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : :3.2
	
	=============================================================================
	
