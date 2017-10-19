---
layout: page
title: "Q142302: Information About the WINSDMP.EXE Utility"
permalink: /kb/142/Q142302/
---

## Q142302: Information About the WINSDMP.EXE Utility

	Article: Q142302
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WINSDMP.EXE utility that is provided in the Windows NT 3.51 Resource Kit
	dumps Windows Internet Name Service (WINS) database information to the screen;
	this information can also be piped to a file as follows:
	
	  WINSDMP 130.0.7.1 > WINSDATA.TXT
	
	MORE INFORMATION
	================
	
	The following is an example of the information that WINSDMP provides:
	
	  130.10.10.10,"TEST ",0,17,3,0,0,502,0,820870950,1,130.0.25.14
	
	The following table lists each item in the example above on the left side and the
	corresponding explanation for the example item on the right side:
	
	  Example Item        Explanation for Example Item
	 -----------------------------------------------------------------------
	
	  130.10.10.10        The IP Address of the owner of the entry
	  "TEST           "   The NetBIOS name of the entry
	  0                   The 16th character of the NetBIOS name
	  17                  The number of characters in the name (15 for
	NetBIOS
	                      name + 2 for ID)
	  3                   Type of Record
	  0                   State of Record
	  0                   Version ID (High order)
	  502                 Version ID (Low order)
	  0                   Static Flag
	  820870950           Time Stamp
	  1                   Number of records in entry
	  130.0.25.14         IP Addresses assigned to entry
	
	The possible Record Type values are defined as:
	
	  UNIQUE        = 0
	  NORMAL GROUP  = 1
	  SPECIAL GROUP = 2
	  MULTIHOMED    = 3
	
	The possible Record State values are defined as:
	
	  ACTIVE    = 0
	  RELEASED  = 1
	  TOMBSTONE = 2
	
	Additional query words: prodnt 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51 4.0
	
	=============================================================================
	
