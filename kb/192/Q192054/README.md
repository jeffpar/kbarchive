---
layout: page
title: "Q192054: SMTP: Mail from SMTP Gateway Has Incorrect Sent Date and Time"
permalink: kb/192/Q192054/
---

## Q192054: SMTP: Mail from SMTP Gateway Has Incorrect Sent Date and Time

	Article: Q192054
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0a; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0a 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When viewing mail on a Microsoft Exchange Server computer sent from the
	Microsoft Mail SMTP gateway, the SENT date/time as displayed in the message is
	not accurate.
	
	CAUSE
	=====
	
	The SMTP gateway was incorrectly sending the sent date/time time zone
	information in the format
	
	  DOW, DAY  MMM YYYY HH:MM:SS +/-NN
	
	where NN = number of hours offset from GMT. This format is incorrect according to
	RFC 822, and should be
	
	  DOW, DAY  MMM YYYY HH:MM:SS +/-NNNN
	
	where NNNN = number of hours and minutes from GMT. As a result, the Microsoft
	Exchange Internet Mail Service ignored this offset and displayed the SENT
	date/time as if no time zone information had been sent.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	the following fix.
	
	This fix should have the following time stamp:
	
	  21/08/98  17:05   71,739 SMTPLMN.EXE Microsoft LAN Manager for MS-DOS
	
	  21/08/98  17:05   80,721 SMTPFTP.EXE PC/TCP Kernel from FTP Software, Inc.
	
	  21/08/98  17:05   74,643 SMTPNVL.EXE Novell LAN WorkPlace for DOS
	
	  21/08/98  17:05   76,179 SMTPWIN.EXE Excelan EXOS 205T Intelligent
	                                       Ethernet Controller with LAN
	                                       WorkPlace Network Software
	                                       (version 3.4)
	
	  21/08/98  17:05   80,473 SMTPXLN.EXE WIN/TCP for DOS RunTime (version
	                                       4.1) from The Wollongong Group,
	                                       Inc.
	
	Change the name of the appropriate EXE file above to Smtpgate.exe, and replace
	this file on your gateway.
	
	A new command-line option, -Z, has been added to this version. If the -Z
	command-line parameter is not used, the SMTP gateway will format the time zone
	in the way it always did. With the fix, the correct format will be used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Mail SMTP Gateway
	version 3.0a.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: msmail timezone sent
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300a
	Version           : MS-DOS:3.0a; winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
