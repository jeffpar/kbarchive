---
layout: page
title: "Q142991: Using Wildcard Characters with the Find Command on MSN"
permalink: /kb/142/Q142991/
---

## Q142991: Using Wildcard Characters with the Find Command on MSN

	Article: Q142991
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3,2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use wildcard characters when you use the Find
	command to search for information on MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	The Find feature locates only information matching the exact word you type. For
	example, if you type "art", the Find feature does not locate "arts" or
	"artist".
	
	To locate variations of a word, you can use the wildcard characters "*" and "?".
	Use "?" as a wildcard for one character. Use "*" as a wildcard for no, one, or
	multiple characters. For example:
	
	- "art?" finds "arts" and "arty" but not "artist."
	
	- "art*" finds "art," "arts," "artist," and any other word beginning with
	  "art."
	
	The following rules apply to using the "*" wildcard character:
	
	- You can use "*" only at the end of a search string. For example, "*art" is
	  not valid. The Find feature ignores the "*" character and finds only "art."
	
	- Multiple instances of the "*" character are treated as a single instance.
	
	- When the "*" character is followed by another character or wildcard, every
	  character after "*" is ignored. For example, "ar*s" and "ar*?" are the same
	  as "ar*."
	
	The following rules apply to using the "?" wildcard character:
	
	- You can place the "?" anywhere in a search string except the beginning. For
	  example, "ar?s" is valid, but "?art" is not. If you search for "?art," the
	  Find feature ignores the "?" character and locates only "art."
	
	- You can use more than one "?" character in a search string.
	
	- You cannot search for "?" alone. You will receive the error message "Letter
	  or number required."
	
	REFERENCES
	==========
	
	For additional information about the Find command, see the "Find" topic in MSN
	Help.
	
	Additional query words: msn asterisk question mark 2.50 2.60
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN252 kbMSN130 kbMSN251 kbMSN260 kbMSN105 kbMSN250 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3,2.5,2.51,2.52,2.6
	Issue type        : kbinfo
	
	=============================================================================
	
