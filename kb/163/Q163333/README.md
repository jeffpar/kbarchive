---
layout: page
title: "Q163333: Autosynch Compatible COM Applications May Fail w/ FIFO Enabled"
permalink: /kb/163/Q163333/
---

## Q163333: Autosynch Compatible COM Applications May Fail w/ FIFO Enabled

	Article: Q163333
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The released version of the Windows NT 4.0 serial port driver (Serial.sys) does
	not delimit data in a manner compatible with the Hayes AutoSynch standard when
	FIFO is enabled on the COM port. For example, IBM PCOMM implements the Hayes
	AutoSynch standard and requires that data to be delimited be compliant with the
	AutoSynch standard to operate reliably.
	
	CAUSE
	=====
	
	The Hayes AutoSynch standard requires that data be delimited with an escape
	character followed by a line status error with data. The last part of an
	AutoSynch frame is indicated by line status error data with the parity error bit
	enabled followed by 02. In this case, FIFO was enabled, buffering data on the
	COM port, and Serial.sys would return only part of the data delimited
	correctly.
	
	For example the following data
	
	  FF BF FB BD
	
	should return from Serial.sys as
	
	  7D 01 E1 FF 7D 01 E1 BF 7D 01 E1 FB 7D 01 E1 BD 7D 01 E5 02
	
	where 7D is an escape character, 01 indicates a line status error, and E1 is the
	line status error data (E5 is line status error data with the parity error bit
	enabled). The released version of the Windows NT 4.0 Serial.sys driver returns
	the following unusable stream:
	
	  FF 7D 01 E1 BF FB 7D 01 E1 BD 02
	
	RESOLUTION
	==========
	
	The file Serial.sys was modified to correctly insert an escape character
	followed by a line status error with data when returning buffered data from
	FIFO.
	
	The updated file has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP2/serial-fix
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
