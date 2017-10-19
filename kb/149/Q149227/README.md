---
layout: page
title: "Q149227: XSRV: Using the 1.0b Connection Gateway with Microsoft Exchange"
permalink: /kb/149/Q149227/
---

## Q149227: XSRV: Using the 1.0b Connection Gateway with Microsoft Exchange

	Article: Q149227
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although Microsoft Exchange provides the Microsoft Mail Connector for
	connectivity with Microsoft Mail for AppleTalk Networks, administrators might
	choose to use the Microsoft Mail for AppleTalk Networks Connection Gateway
	version 1.0b.
	
	This is accomplished by changing the Microsoft Exchange Connector postoffice to
	route mail through the actual postoffice that hosts the 1.0b gateway.
	
	MORE INFORMATION
	================
	
	A copy of the Microsoft Mail for AppleTalk Networks Connection Gateway 1.0b
	Setup program is supplied with Microsoft Exchange for this purpose. The program
	can be found in the following location:
	
	  <exchsrvr>\connect\msmcon\bin\macsetup.exe
	
	The steps to perform are:
	
	1. Run MACSETUP.EXE and press ENTER after the first screen.
	
	2. Choose to Remove (option #3).
	
	3. Enter the path to the Exchange MAILDATA directory:
	
	       <exchsrvr>\connect\msmcon\maildata
	
	4. The following message will be displayed at the bottom of the screen:
	
	     Convert Gateway Postoffice to Downtream Postoffice (Y/N):
	     Choose "Y" to continue
	
	5. On the next two prompts, enter the Network and Postoffice name through which
	  Mac-bound mail should be routed. This is the postoffice where the old 1.0b
	  gateway is installed.
	
	6. Enter the path to the Microsoft Exchange Connection executables:
	
	     (<exchsrvr>\connect\msmcon\bin)
	
	7. Enter the path to the Microsoft Exchange Connection postoffice:
	
	     (<exchsrvr>\connect\msmcon\maildata)
	
	  Press ENTER after this last step.
	
	Failure to complete these steps causes all outbound Mac mail to be queued up in
	the 00000002.MBG mailbag because Microsoft Exchange assumes that the ATMTA will
	pick it up from there.
	
	
	Additional query words: 4.00 quarterdeck starnine macmail Quarterdeckmail
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
