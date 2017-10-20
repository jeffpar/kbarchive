---
layout: page
title: "Q111042: PC DOS: Missing Message File Aborts Saving Mail to Folder"
permalink: /kb/111/Q111042/
---

## Q111042: PC DOS: Missing Message File Aborts Saving Mail to Folder

{% raw %}

	Article: Q111042
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save messages to a folder, the Save Mail to Folder feature will abort
	if it encounters a missing message (MAI) file. The following error message will
	be displayed:
	
	  Notice 16
	  Error reading mail
	  (possibly previously deleted).
	  Press Enter to continue
	
	The message that was missing and all subsequent messages that were flagged as
	waiting to be saved to the folder will not be saved to the folder. The missing
	message and all of the remaining messages will stay in the inbox. This is true
	regardless of whether or not the "Delete inbox item after Storage Save?" was set
	to either "Yes" or "No."
	
	RESOLUTION
	==========
	
	The remaining messages can be saved to the folder by tagging all of the
	remaining messages without including the missing message. The missing message
	should be deleted from the inbox using the Delete menu option.
	
	Additional query words: 2.1x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	

{% endraw %}
