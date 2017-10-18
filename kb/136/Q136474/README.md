---
layout: page
title: "Q136474: PC Win: Long File Name Attachment Support"
permalink: kb/136/Q136474/
---

## Q136474: PC Win: Long File Name Attachment Support

	Article: Q136474
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 3.x of Mail for PC Networks, you can send attachments with your mail
	messages. Both Microsoft Windows NT and Microsoft Windows 95 support Long File
	Names (LFN). However, Mail 3.x does not support LFN.
	
	You can still send attachments; however, the filename will be truncated. For
	example, the attachment named Longfilenames.dos will become Longfi~1.dos.
	
	MORE INFORMATION
	================
	
	Below is a table that shows the support of LFN between clients.
	
	NOTE: PCM refers to the version 3.x Microsoft Mail for PC Networks driver to
	allow the Microsoft Exchange client to connect to existing 3.x postoffices.
	
	  To                 Mail 3.2    Mail NT Client    Exchange PCM driver
	-----------------------------------------------------------------------
	MSMail 3.2               N/A           N/A                N/A
	MSMail NT Client         C              A                  A
	Exchange PCM driver      B              B                  A
	
	A = LFN Preserved
	B = LFN Not Preserved
	C = LFN Preserved if on Windows 95 but cannot double-click to access attachment.
	See Note.
	
	NOTE: When you send a message from a Windows NT client to a Mail 3.x client on
	Windows 95, the LFN will be preserved. However, when you double-click the
	attachment, you will get the following error:
	
	  No application is associated with the attached file 'xxxxx'. Use the File
	  Manager to create an association.
	
	When you run File Manager or Explorer, you may see an association; however, you
	will not be able to launch the attachment by double-clicking it. To view the
	attachment, click Save Attachment on the File menu.
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
