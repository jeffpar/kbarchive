---
layout: page
title: "Q212756: PC DB: Non-Delivery Report &quot;Recipient's Inbox Does Not Exist or"
permalink: kb/212/Q212756/
---

## Q212756: PC DB: Non-Delivery Report &quot;Recipient's Inbox Does Not Exist or

	Article: Q212756
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user sends mail, the user may receive the following non-delivery report
	(NDR):
	
	  Recipient's Inbox does not exist or is busy
	
	CAUSE
	=====
	
	This NDR can occur if two people send mail to the same user at the same time, or
	if the recipient's .MBG or .KEY files have been cached in an open state. It can
	also occur if one or more mailbags are missing, corrupted, or locked open. Make
	sure that the mailbags exist, are not corrupted (check size), and are not
	locked.
	
	RESOLUTION
	==========
	
	To resolve this issue if the sender and recipient are on the same postoffice,
	make sure that the .KEY and .MBG files for the recipient's mailbag are not
	locked open. If the mailbag is missing or corrupted, recreate the mailbag. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q104279 PC DB: Creating or Resetting a .KEY and .MBG Pair
	
	If the mailbag is locked, remove the lock from the server.
	
	To resolve this issue if the sender and recipient are on different postoffices
	(postoffice A and postoffice B, respectively) and the NDR is returned
	immediately, check the outbound mailbag for postoffice B on postoffice A. If the
	NDR is returned after a few minutes, check recipient's mailbag on postoffice B.
	If the mailbag is missing or corrupted, recreate the mailbag. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q104279 PC DB: Creating or Resetting a .KEY and .MBG Pair
	
	If the mailbag is locked, remove the lock from the server.
	
	WORKAROUND
	==========
	
	If this behavior occurs infrequently, it should not be a problem. To work around
	this issue, check LISTUSER.EXE (click on the link below) to determine what
	hexadecimal numbered .MBG and .KEY files belong to whom. With this information,
	you can find out who or what is locking the recipient's .MBG or .KEY files.
	
	  Listuser.exe
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	Issue type        : kbprb
	
	=============================================================================
	
