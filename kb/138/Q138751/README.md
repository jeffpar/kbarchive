---
layout: page
title: "Q138751: Netware Login Script Fails to Capture Printer"
permalink: kb/138/Q138751/
---

## Q138751: Netware Login Script Fails to Capture Printer

	Article: Q138751
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows 95 Netware Login script processor fails to process a CAPTURE command
	for a print queue on the Netware Network. When this happens, the login script
	processor returns the following error message:
	
	  Auto Endcap has been disabled.
	  An unknown flag name was encountered.
	  Usage; Capture /Show /Job=Jobname /Server=Fileserver
	  /Queue=Queuename /Local=N /Form=Form or N
	  /Create=Path /Copies=N (1-255) /Timeout=N /Keep
	  /Tabs=n (1-18) /No Tabs /Banner=Bannername /Name=Name
	  /No Banner /Formfeed /No Formfeed /AutoEndCap /No AutoEnd
	  /Notify /No Notify /Domain=Domain /EndCapture /Cancel /All
	  Automatic EndCap has been disabled
	
	The login process then continues as expected.
	
	CAUSE
	=====
	
	The S_LOGIN environment variable in the login script has not been set.
	
	RESOLUTION
	==========
	
	NOTE: The following edits to the Netware Login script can only be performed by a
	user with the correct Netware privileges enabled.
	
	To resolve this problem, edit the login script and verify that the following line
	is placed at the very beginning of the login script:
	
	  dos set S_LOGIN="%LOGIN_NAME
	
	MORE INFORMATION
	================
	
	For more information about configuring your Netware login script, contact your
	Netware administrator or Novell.
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
