---
layout: page
title: "Q256014: PC WIN: SFS: Error Message: The Message Could Not Be Sent Due..."
permalink: /kb/256/Q256014/
---

## Q256014: PC WIN: SFS: Error Message: The Message Could Not Be Sent Due...

	Article: Q256014
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users attempt to send a text message using Outlook 97, Outlook 98, or
	Outlook 2000 with a profile that uses the Microsoft Mail information service,
	they may receive the following non-delivery report (NDR) immediately:
	
	  
	
	  From:	System Administrator
	  To:	administrator
	  Sent:	Wednesday, March 01, 2000 2:07 PM
	  Subject:	Undeliverable: Test message
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:	Test message
	     Sent:	3/1/2000 2:07 PM
	
	  The following recipient(s) could not be reached:
	
	     administrator on 3/1/2000 2:07 PM
	           The message could not be sent due to an unknown failure. 
	           Try sending the message again. If the message cannot be sent, 
	           contact your administrator.
	
	NOTE: If users attempt to send a text message with the Microsoft Mail Client for
	MS-DOS (Mail.exe) or the Microsoft Mail client for Windows, the message
	successfully reaches its destination. However, messages sent with attachments
	with all clients fail.
	
	CAUSE
	=====
	
	The Att subfolder of the postoffice database is missing or damaged.
	
	RESOLUTION
	==========
	
	If the Att subfolder is missing or damaged, you may need to restore it and all
	of its 16 subfolders from a valid backup. If a backup is not available, you can
	recreate the folders manually. To do so, from a command prompt:
	
	1. Change to the root of the postoffice database. This is usually drive M.
	
	2. Create the ATT folder by using the makedir or md command. For example:
	
	  md att
	
	3. Change to the root of the ATT folder, for example:
	
	  cd att
	
	4. Create the Att subfolders by using the makedir or md command. The subfolders
	  are:
	
	  At0
	  At1
	  At2
	  At3
	  At4
	  At5
	  At6
	  At7
	  At8
	  At9
	  Ata
	  Atb
	  Atc
	  Atd
	  Ate
	  Atf
	
	5. Copy the Populate.msm file from another subfolder of the postoffice database
	  to the root of the Att folder and all of the subfolders created in the
	  previous steps.
	
	  NOTE: If the folders must be rebuilt manually, you may have some users
	  reporting errors when they open some of their messages with attachments.
	  These users should request that the sender resend the message with the
	  attachment.
	
	MORE INFORMATION
	================
	
	The Att folder is where message attachments are stored. The Populate.msm file is
	a placeholder file to ensure that the folder is not completely empty.
	
	
	Additional query words: ol97 ol98 ol2k winmail
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbMailSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5; :
	Issue type        : kbprb
	
	=============================================================================
	
