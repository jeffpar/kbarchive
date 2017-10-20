---
layout: page
title: "Q170750: INFO: End of Line Character Settings for Visual SourceSafe"
permalink: /kb/170/Q170750/
---

## Q170750: INFO: End of Line Character Settings for Visual SourceSafe

{% raw %}

	Article: Q170750
	Product(s): Microsoft SourceSafe
	Version(s): MACINTOSH:3.01,3.02,3.04,3.1; WINDOWS:3.02,3.04,3.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304 kbSSafe302 kbSSafe301
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft SourceSafe for Macintosh, versions 3.01, 3.02, 3.04, 3.1 
	- Microsoft SourceSafe for UNIX, versions 3.02, 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS (including WINDOWS), UNIX, and Macintosh operating systems all use
	different characters to designate the end of a line within a text file.
	
	- MS-DOS and WINDOWS: Use a Carriage Return/Line Feed combination (CR/LF).
	
	- UNIX: Uses a Line Feed only (LF).
	
	- MAC: Uses a Carriage Return only (CR).
	
	Visual SourceSafe always stores files internally using the CR/LF character
	combination. This means that when you are working with a Macintosh or UNIX
	operating system, SourceSafe has to translate the CR/LF combination into the
	appropriate End-Of-Line character (EOL) when you get or check out a file.
	SourceSafe also has to translate the EOL character back into the CR/LF
	combination when you check the file back in.
	
	SourceSafe is designed this way so that UNIX, Macintosh, and PC users can all
	check the same files in and out and always see the file displayed correctly.
	
	MORE INFORMATION
	================
	
	Visual SourceSafe translates the CR/LF characters into the appropriate EOL
	character when you get or check out a file. It changes the EOL character back
	into a CR/LF combination when you check the file back in.
	
	It's important to notice that in this one instance, SourceSafe alters the
	contents of your text file. While this type of change is necessary for text
	files, it would cause unpredictable results for binary files. Therefore, this
	operation is never performed on a binary file.
	
	You can change this default behavior by adding the EOL switch in the user's
	Ss.ini file. You can set the EOL variable to either an "r" (Carriage Return),
	"n" (Line Feed), or "rn" (Carriage Return/Line Feed). For example:
	
	  EOL = n
	
	This forces SourceSafe to translate the CR/LF combination into a line feed when
	you get or check out a file.
	
	You can also accomplish this by using the -g switch from the command line. The
	syntax is as follows:
	
	  ss Get -g(EOL) where EOL can be r, n, or rn
	
	For Example:
	
	  ss Get -gr <Filename>
	
	This forces SourceSafe to translate the CR/LF combination into a carriage return
	when you get or check out a file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304 kbSSafe302 kbSSafe301 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe301Mac kbSSafe304Mac kbSSafe310Mac kbSSafe302UNIX kbSSafe304UNIX kbSSafe310UNIX kbSSafe302Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : MACINTOSH:3.01,3.02,3.04,3.1; WINDOWS:3.02,3.04,3.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
