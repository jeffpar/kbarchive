---
layout: page
title: "Q104367: PC DOS: Err Msg: Notice 33 More Mail at Postoffice..."
permalink: /kb/104/Q104367/
---

## Q104367: PC DOS: Err Msg: Notice 33 More Mail at Postoffice...

	Article: Q104367
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1 and 3.0 of Microsoft Mail for PC Networks, MS-DOS workstation, may
	not appear to be receiving new mail if there are more messages in the inbox than
	there are headers selected to be viewed. If there is more mail in your mailbag
	(MBG) than can be displayed, you receive the following error message:
	
	  Notice 33
	
	  More mail at postoffice than displayed.
	
	  Press Enter to continue
	
	CAUSE
	=====
	
	The MS-DOS client has a feature that allows you to specify the maximum number of
	mail items that can be displayed in the inbox. This can restrict you from being
	able to view all of the messages that are currently in the inbox if you have
	more messages than are allowed to be viewed.
	
	RESOLUTION
	==========
	
	To resolve this problem, increase the number of headers, move mail into private
	folders, or delete old mail.
	
	You can also increase the number of headers that can be viewed in the inbox by
	selecting Options, Configure, Headers.
	
	MORE INFORMATION
	================
	
	There is another feature that allows you to specify the sorting criteria. To use
	this option, select Options, Configure, Sortkey. The default is to sort by date
	in descending order. This feature can result in new mail not being visible when
	the number of messages in the inbox exceeds the number of headers that can be
	displayed.
	
	The MS-DOS client will only sort the first X number of headers that are flagged
	as being not deleted in the MBG file. Therefore, if there are no deleted records
	in the first X records, the new mail message will be placed further down in the
	MBG and will not be displayed in the inbox.
	
	Additional query words: 2.10 3.00 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	
