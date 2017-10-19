---
layout: page
title: "Q269130: Migrating NIS NETGROUP File to Active Directory May Not Work"
permalink: /kb/269/Q269130/
---

## Q269130: Migrating NIS NETGROUP File to Active Directory May Not Work

	Article: Q269130
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): w2000sfu kbUNIXService
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to migrate the Network Information service (NIS) NETGROUP file
	into Active Directory by using Windows Services for UNIX 2.0, you may receive a
	a "Failure" error message.
	
	CAUSE
	=====
	
	This behavior is caused by a space after the comma in the data for a group name
	entry.
	
	RESOLUTION
	==========
	
	Remove the spaces after any commas.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The UNIX NIS NETGROUP file (or map) contains the definitions of NIS groups. The
	file is in text format; you can open it with a word processor or text editor
	(such as Notepad). Windows Services for UNIX 2.0 can migrate NIS maps into
	Windows 2000 Active Directory. The expected format in the NETGROUP file is:
	
	  <groupname> (<hostname>,<username>,<domain>)
	
	If an entry has spaces after the commas, the migration does not succeed.
	
	An easy way to remove extra spaces is to open the NETGROUP file in Notepad. Click
	Replace on the Edit menu. In the Find What box, type ", " (without the quotation
	marks). In the Replace With box, type "," (without the quotation marks). This
	removes all trailing spaces after commas.
	
	Additional query words: nis2ad sfu solar coaster solarcoaster
	
	======================================================================
	Keywords          : w2000sfu kbUNIXService 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
