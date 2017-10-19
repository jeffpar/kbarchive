---
layout: page
title: "Q195659: WD97: How to Use Conditional Field to Specify Number of Digits"
permalink: /kb/195/Q195659/
---

## Q195659: WD97: How to Use Conditional Field to Specify Number of Digits

	Article: Q195659
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to specify a numeric format switch within a nested
	{IF} field to control the number of leading zeros in a numeric result. The
	formula allows you to format numbers that contain an unequal number of digits,
	such as 10, 100, and 1000, as numbers that contain an equal number of digits,
	such as 0010, 0100, and 1000.
	
	MORE INFORMATION
	================
	
	Use a numeric picture switch (\#) to specify the number of digits for the
	result. For example, if your number is to contain five digits, use the following
	numeric picture switches within the conditional formula:
	
	  \# 0000#
	  \# 000##
	  \# 00###
	  \# 0####
	
	Create the following conditional {IF} field:
	
	  {if { MERGEFIELD number } > "9" { if { MERGEFIELD number } > "99" { if 
	  {MERGEFIELD number } > "999" { if { MERGEFIELD number } > "9999" { 
	  MERGEFIELD number } { MERGEFIELD number \# 0#### } }{ MERGEFIELD number \# 
	  00### } }{ MERGEFIELD number \# 000## } }{MERGEFIELD number \# 0000# } }
	
	Additional query words: nested conditional 8.0 8.00
	
	======================================================================
	Keywords          : kbdta kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
