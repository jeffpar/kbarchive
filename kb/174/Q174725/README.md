---
layout: page
title: "Q174725: XFOR: Packing List Code Page 10000 or 437 May Cause Mismatch"
permalink: kb/174/Q174725/
---

## Q174725: XFOR: Packing List Code Page 10000 or 437 May Cause Mismatch

	Article: Q174725
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are migrating users from another mail system to Exchange, some
	characters may be mismatched after the import process has completed.
	
	MORE INFORMATION
	================
	
	The Migration Wizard uses the code page information in the packing list file to
	determine how to convert characters that exist in the migrated data. When the
	packing list has code page 10000 or 437 specified, some characters may be
	mismatched. The following characters were incorrectly mapped to the letter
	specified after the "to":
	
	  Not equal to ?
	  Infinity to 8
	  Less than or equal to
	  Greater than or equal to
	  Delta to ?
	  Sigma to ?
	  Pi to ?
	  Function symbol to ?
	  Approximately equal to ~
	  Delta symbol to ?
	  Diamond to ?
	  fi to ?
	  fl to ?
	  i with no dot to I
	  Brave to ?
	  cp 10000 to chars 250 252 253 ?
	  Reverse not to not
	  Alpha to a
	  Gamma to G
	  Tau to t
	  Phi to F
	  Theta to T
	  Omega to O
	  Epsilon to e
	  Union to n
	  Exactly equal to
	  Square root to v
	  Superscript n to n
	  cp 437 to chars 244 245 ?
	
	Please note that some characters could not be displayed due to the text editor
	limitations.
	
	Additional query words: xbeta migwiz gwise collabra groupwise ccmail lotus notes profs snads mac sfs
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
