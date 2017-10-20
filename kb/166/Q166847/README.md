---
layout: page
title: "Q166847: XFOR: AS/400 DXA on RISC Computer"
permalink: /kb/166/Q166847/
---

## Q166847: XFOR: AS/400 DXA on RISC Computer

{% raw %}

	Article: Q166847
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The AS/400 directory synchronization agent that ships with Microsoft Exchange
	Server5.0 can only run on a CISC AS/400 because four of the objects do not
	convert automatically from 48-bit to 64-bit.
	
	RESOLUTION
	==========
	
	To resolve this problem and run the AS/400 DXA on a RISC computer:
	
	1. The tape provided contains four objects to replace the four objects currently
	  located in the DXA400 library.
	
	  These objects are:
	
	  ADDDAT, ADDTIM, TAADATAC, TAATIMAC
	
	  Use the command DLTOBJ to delete the four objects mentioned above from the
	  DXA400 library, and use the command RSTOBJ to retrieve the four objects from
	  the tape to the DXA400 library.
	
	2. The AS/400 DXA uses the command DSPDIR, which has been replaced by DSPDIRE.
	  In order for the AS/400 DXA to access the AS/400 directory, copy the DSPDIR
	  object from QSYS/DSPDIRE to DXA400/DSPDIR.
	
	3. The physical file QRYDST with member QRYDST has maximum record length of 246
	  when it should be 251. The following command re-creates the file with the
	  proper record length:
	
	  " CRTPF FILE(DXA400/QRYDST) RCDLEN(251)" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	This behavior is by product design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
