---
layout: page
title: "Q93134: PC Win: Mail Message File (MMF) Compression"
permalink: /kb/093/Q93134/
---

## Q93134: PC Win: Mail Message File (MMF) Compression

{% raw %}

	Article: Q93134
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.0 of Microsoft Mail for Windows does not compress the data in the Mail
	message file (MMF); however, it does eliminate free space left behind when
	messages are deleted. As a result, Mail keeps the MMF file as small as
	possible.
	
	Although Mail does not do data compression, some people refer to the cleanup
	process as "compression" or "background compression" and ask about "compression
	ratios." This article explains exactly what Mail does to clean up the MMF file
	after you delete objects. It also gives the amount of space used in the MMF file
	by various objects.
	
	MORE INFORMATION
	================
	
	An empty MMF file is about 32K in size. The MMF file grows as you add objects
	(messages, attachments, folders, personal addresses, linked objects, or embedded
	objects) to the MMF file. Each message requires about 128 bytes of overhead
	space and about 256 bytes for each attachment or OLE object.
	
	Because Mail does not do data compression, a 100K text file takes 100K to store
	in the MMF file.
	
	When you delete an object, Mail reuses that space in the MMF file whenever
	possible rather than constantly shrinking the MMF file because the freed space
	is usually in the middle of the MMF file. To shrink the MMF file, Mail uses a
	background process to move objects around in the MMF file, filling the holes
	left by deleted objects. By default, Mail doesn't start the background process
	until there is 300K of free space in the MMF file. It stops when there is 100K
	free. Entries can be placed in the MSMAIL.INI file to change both of these
	values.
	
	MMF File Space Used by Various Objects
	--------------------------------------
	
	1. Folders -- use anywhere from 42 to 300 bytes per entry. A quick survey of a
	  few folders in a few MMF files shows that the average is about 75 to 80 bytes
	  per entry. In addition, each folder uses about 30 bytes in the folder list
	  (the list you see to the left of a message center viewer.
	
	2. 5000K text file -- uses 5000K plus 256 bytes plus the size of the icon if the
	  text file is an attachment.
	
	3. 100K binary attachment -- uses 100K plus 256 bytes plus the size of the icon.
	
	4. Address directory with 10,000 name entries of 500 characters per entry --
	  only Personal Address Book (PAB) entries are kept in the MMF file. A PAB
	  entry of 500 characters would use about 720 bytes in the MMF file. It is
	  unlikely that anyone would have 10,000 names in their PAB. Address
	  directories other than PABs take up space in the postoffice, not in the MMF
	  file.
	
	Additional query words: 3.00 store
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
