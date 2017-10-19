---
layout: page
title: "Q126592: PC DOS: 3.x DOS Client Displays Garbage in Address List"
permalink: /kb/126/Q126592/
---

## Q126592: PC DOS: 3.x DOS Client Displays Garbage in Address List

	Article: Q126592
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.x of the Mail for PC Networks, MS-DOS workstation may show garbage in
	the address list. When you select an address list with more than 32,768
	addresses from the MS-DOS client, and select a letter (such as z, where the
	first address beginning with the letter z is past the 32768th address), the
	address list will not move to the z addresses.
	
	If you press a key, such as the down arrow, garbage will begin to appear in the
	address list. You can back out by pressing the ESCAPE key (ESC). This problem
	does not occur if you select to go to the end of the list by pressing the END
	key.
	
	MORE INFORMATION
	================
	
	Most .USR files in the mail system database will not grow past:
	
	  (500 addresses/PO)*(53 bytes/address)=26500 bytes
	
	This calculation is based on that Microsoft Mail postoffices are limited to a
	maximum of 500 local users and that the record size of a .USR file is 53
	bytes/record. It is possible to have .USR files that are larger than this
	because the .USR file may also contain local groups for that postoffice.
	However, SNADS and PROFS gateways also use .USR files; thus, larger USR files
	may exist.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
