---
layout: page
title: "Q172364: XCON: Move User Operation may Cause Mail to Stall or NDR"
permalink: /kb/172/Q172364/
---

## Q172364: XCON: Move User Operation may Cause Mail to Stall or NDR

	Article: Q172364
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	During a move user operation, messages sent to users that are being moved from
	one Microsoft Exchange Server to another may result in a Non Delivery Report
	(NDR) or the message being stranded in the Microsoft Exchange Server Message
	Transfer Agent (MTA) queue.
	
	The NDRs will look similar to the following:
	
	  From:System Administrator
	  To:JoeUser
	  Sent:Thursday, April 02, 1998 8:09 AM
	  Subject:Undeliverable: RE:
	  Your message did not reach some or all of the intended recipients.
	
	  Subject:RE:
	  Sent:4/2/98 8:09 AM
	
	The following recipient(s) could not be reached:
	
	  JoanneUser on 4/2/98 8:09 AM
	  Unable to deliver the message due to a communications failure
	  MSEXCH:MSExchangeMTA:50site:SERVER50
	
	CAUSE
	=====
	
	During normal operation, the MTA will perform address lookups against the
	Microsoft Exchange Directory to determine the location of message recipients.
	When a user is being moved, the MTA may read the Directory and think the user is
	located on their original Server, when in fact the user has now been moved to
	the new Server. When this happens, the originator will receive an NDR stating
	that the user name was not found.
	
	When both the originator and recipient are being moved and this happens, the
	message may become stranded in the Private Information Store queue.
	
	There is a very small window of opportunity for this problem to occur, but the
	window does exist.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	There are two things the Exchange Administrator can do to prevent this problem
	from occuring:
	
	1. Perform the move user command when the users are offline. If there is no mail
	  being processed, this problem will not occur. This is the recommended method.
	
	-OR-
	
	2. Start the Windows NT Registry Editor and go to the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\ 
	  Paramters\ds_read cache latency (secs)
	
	  By default, the MTA will cache Directory entries for up to 60 seconds to speed
	  address resolving. By setting this to 0, the MTA will always make a call to
	  the Directory. This solves the above issue, but has the price of impacting
	  system performance.
	
	  If this method is performed, it is recommended that after you make the change
	  you stop and restart the MTA service and move the users. After the users have
	  been moved, edit the registry entry again, set it back to the default, and
	  stop and restart the MTA service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
