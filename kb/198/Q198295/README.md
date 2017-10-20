---
layout: page
title: "Q198295: WD97: How to Read Postal Bar Codes"
permalink: /kb/198/Q198295/
---

## Q198295: WD97: How to Read Postal Bar Codes

{% raw %}

	Article: Q198295
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenvelope word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to read a postal bar code in order to determine
	whether Microsoft Word created the correct bar code.
	
	MORE INFORMATION
	================
	
	A postal bar code is composed of three main components: framing bars, number
	bars, and checksum bars.
	
	The first bar on the left side and the last bar on the right side of the postal
	bar code are framing bars for the postal bar code. You can ignore these.
	
	To read the bar code, start with the second bar. Group the bars into groups of
	five bars each. Each number in a postal bar code consists of five bars.
	
	The following address is used as an example:
	
	||,|,,|,,|,||,,,,|,|,,,|,|,||,,,,||,|,|,,|,|,,||,,,,,,|||,,|,|
	Microsoft Corporation
	1 Microsoft Way
	Redmond, WA.  98052-6399
	<BR/><BR/>
	Postal Bar Code Legend:
	
	  | represents a tall bar
	  , represents a short bar
	
	  Number   Bar code                Number    Bar code
	  ------   --------                ------     --------
	    0       ||,,,                   5        ,|,|,
	    1       ,,,||                   6        ,||,,
	    2       ,,|,|                   7        |,,,|
	    3       ,,||,                   8        |,,|,
	    4       ,|,,|                   9        |,|,,
	
	Breakdown of Sample Bar Code:
	
	Framing Bar                                                       
	Checksum
	-----------                                                       
	--------
	|                                                                     8
	v                                                                   /   
	| |,|,, |,,|, ||,,, ,|,|, ,,|,| ,||,, ,,||, |,|,, |,|,, ||,,, ,,,|| |,,|,
	|
	
	 \   / \   / \   / \   / \   / \   / \   / \   / \   / \   / \   /      
	^
	   9     8     0     5     2     6     3     9     9     0     1        
	|
	                                                                        
	|
	                                                                 Framing
	|
	                                                                     Bar
	|
	                                                               
	---------+
	           9 8 0 5 2                   6 3 9 9             0 1
	           ---------                   -------      -----------------
	           Zip Code                    Zip+4        Last Two Digits
	                                                    of Street Address
	
	The checksum is the smallest number that, when added to the total of the other
	digits, gives a result that is a multiple of 10. The checksum in this example is
	8. When you add 8 to 52 (the sum of the other digits)-- the result is 60, a
	multiple of 10.
	
	For additional information about adding or creating postal bar codes in Word, or
	if the bar code produces incorrect results, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q112252 Word Assigns a Delivery Point Bar Code (DPBC) of 99
	
	  Q126863 Delivery Point Bar Code Use 99 in Last Two Digits of Address
	
	  Q105576 Position of Bar Codes is Certified by U.S. Postal Service
	
	Additional query words: word6 macword98
	
	======================================================================
	Keywords          : kbenvelope word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
