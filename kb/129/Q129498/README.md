---
layout: page
title: "Q129498: Mac Wkst: Summary Window Missing Column Headings"
permalink: /kb/129/Q129498/
---

## Q129498: Mac Wkst: Summary Window Missing Column Headings

{% raw %}

	Article: Q129498
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you sign into the Microsoft Mail for AppleTalk Networks workstation, the
	Summary window is missing column headings (for example, From, Subject, or
	Received), and the column width can not be adjusted.
	
	CAUSE
	=====
	
	This can occur when your MS Mail Local Folder is corrupt.
	
	RESOLUTION
	==========
	
	Use the Mail Tools application to do a Rebuild Local Mail File on your local
	folder. Delete the MS Mail Cache file in the System Folder.
	
	NOTE: The local mail file is located in the System Folder, Preferences, MS Mail
	Local Folders. It is named the same as your sign in name.
	
	Additional query words: 3.10 Macmail headers
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
