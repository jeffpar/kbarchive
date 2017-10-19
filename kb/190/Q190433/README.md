---
layout: page
title: "Q190433: XWEB: Err Msg: Current Password Is About to Expire in 0 Days"
permalink: /kb/190/Q190433/
---

## Q190433: XWEB: Err Msg: Current Password Is About to Expire in 0 Days

	Article: Q190433
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to an Exchange Server 5.5 Service Pack 1 computer using the
	Outlook Web Access client, you may receive the following error message:
	
	  Your current password is about to expire in 0 days.
	
	CAUSE
	=====
	
	There are two possible causes for this error message:
	
	- If your Windows NT account password on the domain controller has expired, you
	  are prompted with this message.
	
	- If your account is located in the local account database of a member server,
	  and not on a domain controller, you are prompted with this message each time
	  you log on, unless you disable the Change Password option on the member
	  server.
	
	  You may have an account on the local database in addition to the Windows NT
	  account on the primary domain controller that allows access to the Exchange
	  mailbox. Using those credentials would cause this error to occur.
	
	WORKAROUND
	==========
	
	The following workarounds prevent this error from occurring:
	
	- If your Windows NT account password has expired:
	
	  1. Log on to the Outlook Web Access client, and click OK when prompted with
	     this error message.
	
	  2. Click the Options icon in the Outlook bar.
	
	  3. Click Change Password.
	
	  4. From the Internet Service Manager dialog box, enter the appropriate
	     information in the Account Name, Old Password, New Password, and Confirm
	     New Password fields.
	
	  5. Click OK to confirm your choices.
	
	- If your account is located in a local account database of a member server,
	  you must disable the Change Password option on the Windows NT member server
	  by editing the Constant.inc file located in the Exchsrvr\WebData\USA folder.
	  Follow these steps to disable this option:
	
	  1. Using Notepad, open Constant.inc.
	
	  2. Under Administrative Settings, locate the following line:
	
	  fEnablePasswordMenu = true
	
	  3. Change this entry to read:
	
	  fEnablePasswordMenu = false
	
	  4. On the File menu, click Save.
	
	  5. On the File menu, click Exit.
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q262902 XWEB: 'Your Current Password Is About to Expire in 0 Days' Error in
	  OWA
	
	Additional query words: OWA XWeb
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
