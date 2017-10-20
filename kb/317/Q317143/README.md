---
layout: page
title: "Q317143: STOP 0x0000001E When You Use Lexmark Optra Printer Drivers"
permalink: /kb/317/Q317143/
---

## Q317143: STOP 0x0000001E When You Use Lexmark Optra Printer Drivers

{% raw %}

	Article: Q317143
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): ocsso
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print from Microsoft Windows NT 4.0, you may see STOP errors.
	The following parameters may be returned with the following Stop errors:
	
	  STOP:0x0000001E(0xC0000005,0xFEF68219,0x00000000,0x00000008)
	
	  or
	
	  STOP:0x00000050(0xa8db0002, 0x00000000, 0x00000000, 0x00000000)
	
	The STOP screen lists Lmpclna.dll as the source of the STOP error.
	
	This behavior may also occur if you run Windows NT 4.0 as a print server with the
	Lexmark Optra printer drivers installed.
	
	CAUSE
	=====
	
	This behavior may occur in the following situation:
	
	- You have the Lexmark Optra printer drivers installed.
	
	  -and-
	
	- The printer drivers are outdated or corrupted.
	
	The Lmpclna.dll file is a Lexmark Optra printer driver file. If this file is
	outdated or becomes corrupted, you may experience a fatal system error (STOP
	error) when Windows performs printing tasks.
	
	RESOLUTION
	==========
	
	To resolve this issue, update your printer with the latest available driver
	files. To obtain drivers for your Lexmark printer, browse to the following
	Lexmark Web site:
	
	  http://www.lexmark.com/drivers/index.html
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	For information about how to contact Lexmark, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : ocsso 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
