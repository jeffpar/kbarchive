---
layout: page
title: "Q126291: PC MAPI: How MAPIResolveName Works"
permalink: kb/126/Q126291/
---

## Q126291: PC MAPI: How MAPIResolveName Works

	Article: Q126291
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MAPIResolveName is used to resolve the names found in the Address Books
	associated with Microsoft Mail for PC Networks. MAPIResolveName uses the same
	searching routine as Microsoft Mail for Windows.
	
	MORE INFORMATION
	================
	
	MAPIResolveName will first search the address list that is selected as the
	default address book. If no matches are found, it will search the Global Address
	List (GAL). If available, the Personal Address Book (PAB) is searched next.
	
	The GAL will be the second address list searched, when not selected as the
	default address list. However, once one or more matches are found with the
	current address list, MAPIResolveName stops searching. MAPIResolveName will not
	continue to parse an additional address list.
	
	MAPIResolveName searches only the friendly names associated with a given mail
	account. It uses a space character found in the friendly names as a delimiter.
	This allows both first names and last names to be returned. This type of search
	procedure that includes indexing can optimize searching large objects, such as
	GALs that can have several thousand separate addresses.
	
	For example, If you search on the text string "Car," the following names are
	found in the address list selected as the default address list:
	
	  Carrol, Hendrikson
	  Michael, Carter
	  The fast car ran off the road
	
	All three addresses will be returned. However, a second or third address list
	will not be searched.
	
	Additional query words: 3.00 3.20 MAPIResolveName
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
