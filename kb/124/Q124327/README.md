---
layout: page
title: "Q124327: How To Calculate a Person's Current Age"
permalink: /kb/124/Q124327/
---

## Q124327: How To Calculate a Person's Current Age

{% raw %}

	Article: Q124327
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; MS-DOS:2.6a; WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To calculate a person's current age, enter the following commands in the Command
	window:
	
	     m.DOB = {12/03/62}
	     m.age = ROUND(((DATE() - m.DOB) / 365.25),0)
	     ? m.age
	
	NOTES: The value 365.25 accounts for leap years, and the question mark tells
	FoxPro to print the age to the screen. You may need to minimize open windows to
	see the printed value.
	
	Additional query words: VFoxWin FoxWin FoxDos FoxMac birthday birthdate
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260aDOS kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.6a; MS-DOS:2.6a; WINDOWS:2.6a,3.0
	
	=============================================================================
	

{% endraw %}
