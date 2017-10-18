---
layout: page
title: "Q174108: Error Message: This Folder Has Been Damaged. It Will Now Be..."
permalink: kb/174/Q174108/
---

## Q174108: Error Message: This Folder Has Been Damaged. It Will Now Be...

	Article: Q174108
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kberrmsg kbmsn
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	- Microsoft Internet Mail and News 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Internet Mail and News by double- clicking
	the MSN E-Mail icon on the desktop, you may receive the following error
	message:
	
	  This folder has been damaged. It will now be repaired.
	  Outbox
	
	When you click OK, you may receive the following error message:
	
	  Some of the messages in the Outbox could not be sent.
	
	CAUSE
	=====
	
	This error message can occur when the Internet Mail Outbox is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "Outbox.*" (without quotation marks), and then click
	  Find Now.
	
	3. Rename the Outbox.mbx file and the Outbox.idx file. By default, these files
	  are located in the following folder
	
	  C:\Program Files\Internet Mail and News\<username>\Mail
	
	  where <username> is the name you used to log on to Windows.
	
	  For information about how to rename a file, click Start, click Help, click the
	  Index tab, type "renaming" (without quotation marks), and then double-click
	  the "Renaming files" topic.
	
	4. Double-click the MSN E-Mail icon on the desktop. The Outbox.mbx and
	  Outbox.idx files are automatically re-created and Internet Mail should
	  function normally.
	
	5. Re-create and re-send any messages that were not delivered before you renamed
	  the Outbox.mbx and Outbox.idx files.
	
	Additional query words: 1.00 4.00 msnet microsoft-net m.s.n. outexw95
	
	======================================================================
	Keywords          : kberrmsg kbmsn 
	Technology        : kbMSNSearch kbIMNSearch kbMSN250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	
