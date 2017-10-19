---
layout: page
title: "Q159654: XADM: Problems Converting Chinese Microsoft Mail Postoffice"
permalink: /kb/159/Q159654/
---

## Q159654: XADM: Problems Converting Chinese Microsoft Mail Postoffice

	Article: Q159654
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you migrate a Traditional Chinese Microsoft Mail 3.5 postoffice to
	Microsoft Exchange Server, some Chinese characters in the resulting public
	folder may be damaged.
	
	CAUSE
	=====
	
	This problem can occur when the Msfs32.dll file that is included with U.S.
	Microsoft Exchange Server is located in the Winnt\System32 folder when you
	migrate the postoffice.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, extract the Msfs32.dll file from the
	Traditional Chinese Microsoft Exchange Client CD-ROM, and then copy the file to
	your Winnt\System32 folder before you migrate the postoffice. To do so, follow
	these steps:
	
	1. Rename the Msfs32.dll file in your Winnt\System32 folder to Msfs32.xxx.
	
	2. Extract the Msfs32.dll file from the Cht\Winnt\I386 folder on the Traditional
	  Chinese Microsoft Exchange Client CD-ROM to your Winnt\System32 folder. To do
	  so, type a command similar to the following at a command prompt, and then
	  press ENTER:
	
	  extract /l c:\winnt\system32 exchng4.cab msfs32.dll
	
	Additional query words: dbcs
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
