---
layout: page
title: "Q132524: Popup Message Queue Can Only Receive 6 Messages"
permalink: kb/132/Q132524/
---

## Q132524: Popup Message Queue Can Only Receive 6 Messages

	Article: Q132524
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The messenger service accepts and displays at the most six messages. If it
	receives more than six messages, and if the previous messages are not
	acknowledged (by choosing the OK button in the popup window), all messages sent
	after the sixth message are ignored and not displayed.
	
	This can also show up with other combinations of messages and confirmations, such
	as in the following transaction example:
	
	  Sent                  Acknowledged  Displayed
	  ---------------------------------------------------------------
	  NET SEND USER1 Test1  None          Yes
	  NET SEND USER1 Test2  None          Yes
	  NET SEND USER1 Test3  None          Yes
	  NET SEND USER1 Test4  None          Yes
	  NET SEND USER1 Test5  None          Yes
	  NET SEND USER1 Test6  None          Yes
	  NET SEND USER1 Test7  None          No
	  <Nothing Sent>        Test1         N/A
	  NET SEND USER1 Test8  None          Yes (Test7 not displayed)
	  NET SEND USER1 Test9  None          No
	
	CAUSE
	=====
	
	The maximum queue size for the messenger service is hardcoded to five (starting
	at zero).
	
	
	RESOLUTION
	==========
	
	To work around this problem, acknowledge each message as it appears by choosing
	OK, to prevent the message queue from reaching its maximum size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodnt 3.50 3.51 pop up pop-up
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search
	Version           : WINDOWS:2000; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
