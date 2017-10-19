---
layout: page
title: "Q174245: Err Msg: An Unknown Error Has Occurred: 501 Invalid Address"
permalink: /kb/174/Q174245/
---

## Q174245: Err Msg: An Unknown Error Has Occurred: 501 Invalid Address

	Article: Q174245
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtlc kbmsn
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	- Microsoft Internet Mail and News version 1.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send or receive e-mail using Internet Mail, you may receive the
	following error message:
	
	- 
	
	  An Unknown error has occurred: 501 Invalid Address
	
	CAUSE
	=====
	
	This behavior may occur for any of the following reasons:
	
	- The e-mail address specified in your Internet Mail settings may not be
	  correct.
	
	- The Microsoft Client for Microsoft Networks may not be installed.
	
	- Your computer's network name may not conform to the naming conventions.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Start Internet Mail, and then click Options on the Mail menu.
	
	2. Click the Server tab, and then type your correct e-mail address in the Email
	  Address box. Note that the e-mail address must not contain any spaces.
	
	3. Click OK, and then click Outbox in the Folders box.
	
	4. Delete any e-mail in your Outbox by right-clicking a message, and then
	  clicking Delete. Repeat this step until all messages are removed.
	
	5. Quit Internet Mail.
	
	6. Test to determine if the issue is resolved by starting Internet Mail and
	  trying to send or receive e-mail. If the issue is resolved, skip the
	  remaining steps. If the issue is not resolved, click Outbox in the Folders
	  box, right-click a message, and then click Delete. When all of the e-mail in
	  the Outbox is deleted, quit Internet Mail.
	
	7. Click Start, point to Settings, click Control Panel, and then double- click
	  Network.
	
	8. On the Configuration tab, verify that Client For Microsoft Networks is listed
	  in the "The following network components are installed" box. If Client for
	  Microsoft Networks does not appear, add the Microsoft Client for Microsoft
	  Networks by using the following steps:
	  a. Click Add, click Client, and then click Add.
	
	  b. In the Manufacturers box, click Microsoft.
	
	  c. In the Network Clients box, click Client for Microsoft Networks, and then
	     click OK.
	
	9. Click the Identification tab.
	
	10. Change the computer name so that it consists only of any combination of
	  letters (A-Z) and numerals (0-9). Do not use non-alphanumeric characters or
	  blank spaces in the computer name.
	
	11. Click OK. When you are prompted to restart the computer, click Yes.
	
	Additional query words: 1.00 msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtlc kbmsn 
	Technology        : kbMSNSearch kbIMNSearch kbMSN250 kbIMN100Win95
	Version           : WINDOWS:1.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
