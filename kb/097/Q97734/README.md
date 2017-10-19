---
layout: page
title: "Q97734: PC Win: Network Error Using Mail Conversion Program"
permalink: /kb/097/Q97734/
---

## Q97734: PC Win: Network Error Using Mail Conversion Program

	Article: Q97734
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 3.0 of the Microsoft Mail Conversion Program to convert
	Mail 2.x folders to Mail 3.0 or 3.2, CONVERT.EXE may report a network error and
	then exit.
	
	CAUSE
	=====
	
	The CONVERT.EXE program assumes the owner field in the .IDX file is in all
	uppercase letters and does not know how to handle hexadecimal numbers in
	lowercase letters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. This problem was corrected in version 3.2a.
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base:
	
	  mailupd
	
	Additional query words: 3.00 3.00a 3.00b 3.20 kbbug3.00a kbbug3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
