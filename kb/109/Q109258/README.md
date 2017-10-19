---
layout: page
title: "Q109258: CONN: Full Import Removes Manually Entered Recipients"
permalink: /kb/109/Q109258/
---

## Q109258: CONN: Full Import Removes Manually Entered Recipients

	Article: Q109258
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of the Microsoft Mail Connection for PC and AppleTalk Networks,
	manually entered gateway recipients that have been added to the Mail for
	AppleTalk Networks All list by the Network Manager are removed when a full
	directory import of the Connection Name Utility (CNU) is requested.
	
	RESOLUTION
	==========
	
	You can retain gateway recipients by using the Connection Installer Copy
	Accounts And Recipients option before you request the full directory import.
	After processing the directory import, you can restore the saved recipients by
	using the Connection Installer Install Accounts And Recipients option.
	
	Restoring the saved gateway recipients does not overwrite identical addresses
	added by the directory import request.
	
	Additional query words: 3.20 CNU Gateway Recipient
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
