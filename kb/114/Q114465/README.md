---
layout: page
title: "Q114465: FIX: Error Message When Comparing Large Strings"
permalink: kb/114/Q114465/
---

## Q114465: FIX: Error Message When Comparing Large Strings

	Article: Q114465
	Product(s): Microsoft FoxPro
	Version(s): 2.50a 2.50b 2.60 2.60a 3.00 | 2.
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5a, 2.5b, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.5a, 2.5b, 2.6x 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FoxPro for Windows or FoxPro for MS-DOS, when you try to compare two very
	large string variables while a nonmachine collating sequence is in effect,
	FoxPro generates an "insufficient stack space" error message.
	
	In FoxPro for Macintosh on a 68K Macintosh, FoxPro may give the following error
	when comparing two character strings if there is a CODEPAGE=AUTO line in the
	FoxPro configuration file and a collation sequence other than Machine:
	
	  The application "unknown" has unexpectedly quit because an error of type 28
	  occurred.
	
	In FoxPro for Macintosh on a PowerPC Macintosh, FoxPro may produce an Internal
	Consistency Error. The PowerPC may not produce an error initially. Reissuing the
	SET COLLATE TO 'general' command has been reported to cause a Type 11 error. In
	short, the error message and results on a PowerPC may be inconsistent.
	
	CAUSE
	=====
	
	These problems occur because FoxPro builds a key for the left and right sides of
	the equation. To ensure that the result will work in all languages (English,
	French, Spanish, and so on), FoxPro asks for a stack that is four times as long
	as the string being made into a key.
	
	This behavior makes sense if you understand how international keys are
	constructed -- there could be a diacritical mark (accent) on each character in
	the string, and some characters could be expansions where a single character
	represents two characters. For example, the German beta character represents ss.
	For these reasons, FoxPro asks for 2*2*n bytes.
	
	With a large string such as an entire memo field, FoxPro may ask for more stack
	space than is available. The problems listed in the Symptoms section of this
	article may occur when one of the strings is around 10,000 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type "CODEPAGE=AUTO" (without the quotation marks) in the configuration file.
	
	2. Start FoxPro.
	
	3. Create a program named TEST, and give it the following content:
	
	     PARAMETER sequence, strlen
	     SET TALK OFF
	     SET COLLATE TO sequence
	     a=REPLICATE('X',strlen)
	     b='Z'
	     ?a=b
	
	This program creates two memory variables of type character. Then it compares the
	two variables. You pass the desired collation sequence to the parameter
	sequence. The problem occurs with all collation sequences except "machine." The
	following examples all use the 'general' collation sequence for illustration
	purposes only. You will pass the desired string length for "a" to the parameter,
	strlen.
	
	NOTE: The values for strlen provided here cause the problem in each version of
	FoxPro, as noted. However, these values may vary. To produce the error, you may
	want to increase the second parameter that you pass to the above code. The
	REPLICATE command is being used to create long character strings for comparison.
	You will pass the desired string length for "a" to the parameter, strlen.
	
	In FoxPro version 2.5a or 2.5b for Windows, this worked:
	
	     DO test WITH 'general',8926
	
	But changing the value of strlen to 8927 produced a general protection (GP)
	fault, and FoxPro remained in memory. You could use a memory monitor to see that
	User memory and physical memory are reduced after loading FoxPro. After the GP
	fault, memory is not recovered, so you must restart Windows.
	
	In the 16-bit version of FoxPro version 2.5a or 2.5b for MS-DOS, this worked:
	
	     DO test WITH 'general', 3899
	
	But changing the value of strlen to 3900 produced an "Internal consistency
	error." Changing the value of strlen to 8925 caused the computer to reboot.
	Changing the value of strlen to 8926 caused the computer to hang (stop
	responding). In this situation the computer could not be warm-booted. It
	required a cold or hard boot.
	
	In the 32-bit version of FoxPro version 2.5a or 2.5b for MS-DOS, this worked:
	
	     DO test WITH 'general',8776
	
	But changing the value of strlen to 8777 causes FoxPro to display what appears to
	be a corrupted alert window with the "Internal consistency error" message.
	Increasing the value of strlen can also result in an "abnormal termination. Page
	fault" error message.
	
	In FoxPro version 2.5b for Macintosh, this worked:
	
	     DO test WITH 'general',9912
	
	But changing the value of strlen to 9913 produced this alert:
	
	  The application "unknown" has unexpectedly quit because an error of type 28
	  occurred.
	
	In FoxPro version 2.6 for Windows, this worked:
	
	     DO test WITH 'general',8927
	
	But changing the value of strlen to 8928 caused an "Insufficient stack space"
	error.
	
	In the 16-bit version of FoxPro version 2.6 for MS-DOS, this worked:
	
	     DO test WITH 'general',3898
	
	But changing the value of strlen to 3899 produced an "Internal consistency error"
	message. In the 32-bit version of FoxPro version 2.6 for MS-DOS, this worked:
	
	     DO test WITH 'general',8774
	
	But changing the value of strlen to 8775 displayed what appears to be a corrupted
	alert window with the "Internal consistency error" message. Increasing the value
	of strlen to 8790 produced an "Insufficient stack space" error message.
	
	In Visual FoxPro, this worked:
	
	     DO test WITH 'general',8929
	
	But changing the value of strlen to 8930 caused an "Insufficient stack space"
	error.
	
	Additional query words: VFoxWin FoxWin FoxMac FoxDos 2.60 buglist2.50a buglist2.50b buglist2.60 buglist2.60a fixlist3.00b buglist3.00 err msg errmsg GPF ICE crash non-machine hung frozen
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.50a 2.50b 2.60 2.60a 3.00 | 2.
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
