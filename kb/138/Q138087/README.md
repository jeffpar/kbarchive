---
layout: page
title: "Q138087: No &quot;To&quot; Column in Sent Items Subfolder in Microsoft Exchange"
permalink: /kb/138/Q138087/
---

## Q138087: No &quot;To&quot; Column in Sent Items Subfolder in Microsoft Exchange

	Article: Q138087
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are viewing messages in a folder within the Sent Items folder in
	Microsoft Exchange, the "To" column is missing. Instead, there is a "From"
	column, which is always blank.
	
	CAUSE
	=====
	
	By default, when you create a new folder in Microsoft Exchange, the following
	columns are displayed in the folder:
	
	  Importance
	  Item Type
	  Attachment
	  From
	  Subject
	  Received
	  Size
	
	However, in the Sent Items folder, the "From" column is replaced with the "To"
	column, in keeping with the folder's functionality. When you create a folder
	within the Sent Items folder, the new folder uses the default columns listed
	above, rather than the default columns for the Sent Items folder.
	
	RESOLUTION
	==========
	
	To enable a "To" column, follow these steps:
	
	1. Click the folder in the Sent Items folder.
	
	2. On the View menu, click Columns.
	
	3. In the Show The Following Columns box, click "From," and then click Remove.
	
	4. In the Available Columns box, click "To," and then click Add.
	
	5. Click OK.
	
	Additional query words: 4.0 inbox
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	
	=============================================================================
	
