---
layout: page
title: "Q102848: SYS0234 Error &quot;MoreData is Available&quot; with NetUserEnum()"
permalink: /kb/102/Q102848/
---

## Q102848: SYS0234 Error &quot;MoreData is Available&quot; with NetUserEnum()

{% raw %}

	Article: Q102848
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Sometimes an application issues an API giving a buffer of insufficient size for
	the returned data. This can happen, for example, when getting information on a
	large user accounts system (UAS) using NetUserEnum() with a detail level that
	returns more than the maximum 64K of data.
	
	MORE INFORMATION
	================
	
	The UAS is limited to 16,000 users and 256 groups. All 16,000 users can be put
	into a single group (for example, USERS) but then cannot all be seen at one
	time.
	
	The NetUserEnum API call function is defined as follows:
	
	API_FUNCTION NetUserEnum (const char far * pszServer,
	
	                         short            slevel,
	                         char far *       pbBuffer,
	                         unsigned short   cbBuffer,
	                         unsigned short far * pcEntriesRead,
	                         unsigned short far * pcTotalAvail
	                        )
	
	The term "pbBuffer" points to a buffer where the API call stores the returned
	data, which on a successful return contains a sequence of user_info_x data
	structures. The API is usually passed a 64K buffer, which can hold only so many
	of these user_info_x structures. The 500-user limit specified in the "LAN
	Manager Administrator's Reference" is only an approximation, but if the UAS
	contains more than 500 users the returned data will exceed the maximum 64K
	buffer at some point.
	
	The buffer passed to the API does not always have to be this size. To create a
	buffer of a specific size: call for one with a size of zero (which returns
	ERR-MORE-DATA), put the size of data in the TOTAL AVAIL field, then ALLOCS a
	buffer of that size.
	
	The correct programming procedure is to issue the API with the least detail
	required (level 0), then iterate through the resultant list with GetInfo() calls
	to get the other information required.
	
	This limitation has been circumvented with some APIs such as NetFileEnum2, but
	there is no NetUserEnum2.
	
	
	REFERENCES
	==========
	
	LAN Manager Programmer's Reference, p. 625.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
