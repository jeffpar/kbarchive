---
layout: page
title: "Q189287: Exchange Server Databases Not Sent To Recycle Bin When Deleted"
permalink: /kb/189/Q189287/
---

## Q189287: Exchange Server Databases Not Sent To Recycle Bin When Deleted

{% raw %}

	Article: Q189287
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Server databases may not be sent to the Recycle Bin when deleted,
	even though the "Confirm File Delete - Are you sure you want to send "filename"
	to the Recycle Bin?" dialog box appears.
	
	CAUSE
	=====
	
	The space reserved and the maximum size of Recycle Bin is less than the size of
	the database or file that was deleted.
	
	This occurs with any file of any type on the system.
	
	WORKAROUND
	==========
	
	There is no option to recover the deleted file; however, the Recycle Bin can be
	configured to lessen the chance of this occurring again.
	
	Configure the Maximum Size of Recycle Bin (percentage of drive) to allow greater
	space to be used for the Recycle Bin.
	
	MORE INFORMATION
	================
	
	To configure the Recycle Bin, in Explorer, select the Recycle Bin and choose
	File Properties, or right-click the Recycle Bin icon and choose properties.
	
	Additional query words: RecycleBin
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
