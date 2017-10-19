---
layout: page
title: "Q176013: Err Msg: An Unknown Error Has Occurred. Account: 'MSN Mail'..."
permalink: /kb/176/Q176013/
---

## Q176013: Err Msg: An Unknown Error Has Occurred. Account: 'MSN Mail'...

	Article: Q176013
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtlc kbmsn
	Last Modified: 31-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send or receive e-mail on MSN, The Microsoft Network, using
	Microsoft Outlook Express, you may receive an error message similar to the
	following:
	
	  An unknown error has occurred. Account: 'MSN Mail', Server:
	  'smtp.email.msn.com', Protocol: 'SMTP', Port: 25, Secure(SSL): No, Server
	  Response: '501 Invalid Address', Server Error: 501.
	
	CAUSE
	=====
	
	This behavior may occur for any of the following reasons:
	
	- The e-mail address specified in your MSN e-mail account settings may not be
	  correct.
	
	- The e-mail address specified on the To: line may not be correct.
	
	- The Microsoft Client for Microsoft Networks may not be installed.
	
	- Your computer's network name may not conform to the naming conventions.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Start Outlook Express. If the MSN Sign-In screen appears, click Cancel.
	
	2. On the Tools menu, click Accounts.
	
	3. On the Mail tab, click MSN Mail, and then click Properties.
	
	  NOTE: The name of your MSN e-mail account may vary depending on how you
	  configure Outlook Express. MSN Setup creates a default MSN e-mail account
	  named "MSN Mail."
	
	4. On the General tab, under User Information, type your correct e-mail address
	  in the E-mail Address box. Note that the e-mail address must not contain any
	  spaces.
	
	5. Click OK, and then click Close.
	
	6. Open the Outbox folder.
	
	7. Right-click an e-mail message and then click Delete. Repeat this step until
	  all e-mail messages are deleted from the Outbox.
	
	8. Close Outlook Express.
	
	Start Outlook Express and attempt to send or receive e-mail. Verify that the
	e-mail address specified on the To: line is typed in the correct format. Make
	sure there are no spaces or extra or missing periods in the e-mail address.
	
	If the issue is resolved, skip the remaining steps. If the behavior continues to
	occur, repeat steps 6-8, and then use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, verify that Client For Microsoft Networks is listed
	  in the "The following network components are installed" box. If Client for
	  Microsoft Networks does not appear, add the Microsoft Client for Microsoft
	  Networks by using the following steps:
	
	  a. Click Add, click Client, and then click Add.
	
	  b. In the Manufacturers box, click Microsoft.
	
	  c. In the Network Clients box, click Client for Microsoft Networks, and then
	     click OK.
	
	4. Click the Identification tab.
	
	5. Change the computer name so that it consists only of any combination of
	  letters (A-Z) and numerals (0-9). Do not use non-alphanumeric characters or
	  blank spaces in the computer name.
	
	6. Click OK. When you are prompted to restart the computer, click Yes.
	
	MORE INFORMATION
	================
	
	You can obtain additional information about the cause of this behavior by
	creating an Smtp.log file and then noting the lines immediately prior to the
	"501 Invalid Address" error message.
	
	For more information about how to create and interpret an Smtp.log file, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q176442 How to Create an Smtp.log file for Outlook Express
	
	  Q155455 How to Enable and Interpret the Smtp.log File
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. outexw95
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtlc kbmsn 
	Technology        : kbMSNSearch kbMSN250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	
