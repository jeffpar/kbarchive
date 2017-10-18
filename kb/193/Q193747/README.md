---
layout: page
title: "Q193747: SMS: File Token Generator - Filetokn.exe"
permalink: kb/193/Q193747/
---

## Q193747: SMS: File Token Generator - Filetokn.exe

	Article: Q193747
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory kbsmsUtil smsinv smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Filetokn.exe, a utility available in the Microsoft BackOffice Resource Kit,
	generates token information about a file, which can be used to inventory a file.
	The information includes checksum, Cyclic Redundancy Check (CRC), date, time,
	size, and so forth.
	
	MORE INFORMATION
	================
	
	FILETOKN Syntax
	---------------
	
	  filetokn filename [/b offset] [/l offset] [/w offset] [/c offset length]
	  [/r offset length] [/s] [/t] [/x]
	
	Options                    Description
	---------------------------------------------------------------------------
	
	/b offset                  Gets an 8-bit token.
	
	/c offset length           Gets a 32-bit checksum at offset for length
	                          bytes.
	
	/l offset                  Gets a 32-bit long-integer token.
	
	/r offset length           Gets a CCITT_CRC (Consultative Committee for
	                          International Telephone and Telegraph Cyclic
	                          Redundancy Check) at offset for length bytes.
	
	/s                         Shows string tokens and offsets.
	
	/t                         Terse mode. Less output is displayed on the
	                          screen.
	
	/w offset                  Gets a 16-bit integer token.
	
	/x                         Output values are displayed in hexadecimal.
	
	/?                         Provides a usage statement.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbInventory kbsmsUtil smsinv smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA MIPS x86
	Issue type        : kbinfo
	
	=============================================================================
	
