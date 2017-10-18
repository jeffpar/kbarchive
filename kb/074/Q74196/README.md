---
layout: page
title: "Q74196: EDIT.COM Will Convert Eight Spaces to a Tab in Some Cases"
permalink: kb/074/Q74196/
---

## Q74196: EDIT.COM Will Convert Eight Spaces to a Tab in Some Cases

	Article: Q74196
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some situations, EDIT.COM will convert eight leading spaces to a tab
	character. This reduces the total size of the file by seven bytes for each set
	of spaces converted to a tab.
	
	MORE INFORMATION
	================
	
	If a file containing tab characters is loaded into Edit, all lines with eight or
	more leading spaces will have groups of eight spaces converted to tab
	characters. The following steps will reproduce the symptoms:
	
	1. Create a two-line file with Edlin as follows:
	
	             EDLIN NEW.TXT
	        1i
	        <TAB>LINE ONE
	        <6 SPACES>LINE TWO
	        ^C
	        E
	
	2. Edit the file with EDIT.COM and append the following line:
	
	     <8 SPACES>SPACES
	
	3. Save the file. The third line will now be <tab>SPACES.
	
	4. To verify this, bring the file up under Edlin.
	
	5. Press 3 and press ENTER.
	
	6. Press the F1 key. The cursor will jump to the right one tab (six spaces). Any
	  other groups of eight or more spaces at the front of a line will have groups
	  of eight spaces replaced by tabs.
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
