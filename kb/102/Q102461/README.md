---
layout: page
title: "Q102461: FIX: BROWSE KEY 0 Causes Errors When No Database Order Set"
permalink: /kb/102/Q102461/
---

## Q102461: FIX: BROWSE KEY 0 Causes Errors When No Database Order Set

{% raw %}

	Article: Q102461
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5,2.5a,2.5b,2.6,3.0; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.
	Operating System(s): 
	Keyword(s): kbvfp kbvfp250bug
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, versions 2.5, 2.5a, 2.5b, 2.6, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the BROWSE KEY 0 command when no order is set in the database causes an
	uninterruptible "Record Out of Range" error in releases of FoxPro version 2.0
	for MS-DOS dated earlier than March 25, 1992. In FoxPro versions 2.5 and 2.5a
	for MS-DOS and in FoxPro versions 2.5 and 2.5a for Windows, an unrecoverable
	error of "Index Does Not Match Table Recreate Index" error occurs. The only way
	to exit from this error is to reboot your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	Additional query words: BROW INDEX CLAUSE FAR kbvfp600fix kbvfp300 kbvfp500 kbvfp500a
	
	======================================================================
	Keywords          : kbvfp kbvfp250bug 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP500a
	Version           : MACINTOSH:2.5,2.5a,2.5b,2.6,3.0; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
