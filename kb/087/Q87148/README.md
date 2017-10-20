---
layout: page
title: "Q87148: Mac Wkst: Contents of Cache File and Data File for User"
permalink: /kb/087/Q87148/
---

## Q87148: Mac Wkst: Contents of Cache File and Data File for User

{% raw %}

	Article: Q87148
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two types of local data used by version 3.1 of Microsoft Mail for the
	Macintosh. They are classified as general cached data and user-specific data.
	
	The general cache data is stored in a file called "MS Mail Cache." This data
	includes the entire set of forms, the Address and the Special addressing panes,
	the Help resources, any Gateway addressing screens, and the localized address
	list. The cache file also contains information regarding the last chosen server
	and any logon information contained in the Chooser setup screen. The server copy
	of the address book is periodically checked to determine if a new copy needs to
	be downloaded to that user's data file. This check occurs at logon, and upon any
	change to the address book.
	
	User-specific cached data, such as local mail and Personal Address books, is
	stored in one file for each user. The name of the file is the username. This
	filename should not be changed. If the username is longer than 31 characters, it
	will be truncated at 30 characters, and be followed by ellipses.
	
	The MS Mail Cache file is located in the Preferences folder in System 7. The
	local user data file is located inside the MS Mail Local Folder which is located
	in the Preferences folder in System 7. Both files are located within the System
	folder if System 6 is being used. Neither file uses encryption.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
