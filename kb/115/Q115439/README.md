---
layout: page
title: "Q115439: X400: Longer-than-Maximum Address Map Values Displayed"
permalink: /kb/115/Q115439/
---

## Q115439: X400: Longer-than-Maximum Address Map Values Displayed

	Article: Q115439
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use an editor to create an address map with more input than the X.400
	Gateway field maximum length, then:
	
	- X400CMAP the address file
	
	- start X400ADM.EXE
	
	- select Customized Mapping
	
	- select the map
	
	every field can display more characters than its maximum field length.
	
	For example:
	
	  MSM:NETWORK003x/POSTOFFICEx/MAILBOX001x x400:c=CAx;a=16character_Admdx
	
	System software is lenient when validating input, in order to accommodate values
	already existing in operating gateway systems. For instance, if your system has
	a five-character country code, its values are "incorrect" in a four-character
	maximum system. The utility allows the five-character values to be retained, but
	allows you only to shorten it--you can't change it to another five-character (or
	longer) expression. You could, in such an instance, go through and change all
	the values to four characters, but if the code is already in place and it works,
	it's more sensible to leave it than to attempt to "fix" it, possibly disrupting
	things unacceptably.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
