---
layout: page
title: "Q143396: Cannot Add Address Book Entries to Personal Address Book"
permalink: /kb/143/Q143396/
---

## Q143396: Cannot Add Address Book Entries to Personal Address Book

{% raw %}

	Article: Q143396
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add an entry to your personal address book in Microsoft
	Exchange, you may receive the following error message:
	
	  A new entry could not be added. [82040116]
	
	CAUSE
	=====
	
	This error can occur if a template file is missing or damaged on the post office
	or your local hard disk.
	
	RESOLUTION
	==========
	
	Download the latest address list from the post office. To do so, follow these
	steps:
	
	1. In Microsoft Exchange, click Microsoft Mail Tools on the Tools menu.
	
	2. Click Download Address Lists.
	
	If you continue to receive the error message after you download the address
	
	list, contact your network administrator for additional information.
	
	MORE INFORMATION
	================
	
	Microsoft Mail template files (such as Smtp.tpl) are located in the TPL folder
	on the post office. If you choose to use a local copy of the address list,
	certain folders and files are copied to the Windows\ Msremote.sfs folder on your
	local hard disk. If any or all of the template files are missing or damaged, the
	error message stated above can occur.
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
