---
layout: page
title: "Q170913: WD97: GPF in Module Unidrv.dll Printing to Fax Drivers"
permalink: kb/170/Q170913/
---

## Q170913: WD97: GPF in Module Unidrv.dll Printing to Fax Drivers

	Article: Q170913
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbprint word97kbfaq
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97 for Windows, when you use the print to fax feature, you may
	receive the following error message:
	
	  Word caused a General Protection Fault in Module UNIDRV.DLL. If you choose
	  Close, your Word session will terminate and you will lose any unsaved changes
	  to your document. If you choose Ignore:, you may be able to continue and the
	  Fax software may work despite the error.
	
	The following fax drivers are reported to exhibit this behavior:
	
	  Brother MFC-4550
	  U.S. Robotics RapidComm version 1.2
	  U.S. Robotics Voice Print
	
	
	RESOLUTION
	==========
	
	To resolve this problem, contact the fax driver manufacturer and obtain the
	latest version of the fax driver.
	
	For the RapidComm version 1.2 driver, upgrade to version 1.3 or later.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the fax drivers listed at the
	beginning of this article when faxing from Microsoft Word 97 for Windows. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information about troubleshooting fax problems, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q169755 WD97: Troubleshooting Fax Problems from Word
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3com US
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbprint word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
