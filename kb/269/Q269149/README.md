---
layout: page
title: "Q269149: Code Page Specific Fonts Lost in DOS Graphics Mode"
permalink: /kb/269/Q269149/
---

## Q269149: Code Page Specific Fonts Lost in DOS Graphics Mode

{% raw %}

	Article: Q269149
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 05-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer runs a different system default locale other than U.S. English,
	and uses an OEM/ASCII code page other than code page 437, and you have an MS-DOS
	program which uses extended characters based on your specific locale, the
	following behavior may occur:
	
	When your MS-DOS program switches to Graphics mode, and then back to Text mode at
	a screen attribute of 80x25 characters, these extended characters are not shown
	correctly when you run your program in Full Screen mode.
	
	CAUSE
	=====
	
	The Microsoft Windows NT Virtual DOS Machine (NTVDM) cannot reload the missing
	font information that was lost when you switched back from Graphics mode. This
	behavior can occur for all code pages other than code page 437.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use any of the following methods:
	
	- After you return to Text mode, switch the console to Windowed mode. You may
	  use the full screen when you are in Windowed mode.
	
	- Run the DOS program at a higher row count such as 43 or 50.
	
	- After you switch back from Graphics mode, run a tool (available from
	  Microsoft Support) from the DOS program to reload the correct font
	  information.
	
	  NOTE: Tools for this process are available from Microsoft for Russian (code
	  page 866) and Turkish (code page 857) languages.
	
	- Install a similar tool that reloads the font information as an INT 10h
	  handler DOS call implemented in a terminate-and-stay-resident (TSR).
	
	  NOTE: At present this tool is unavailable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To support extended code page fonts, the font image is loaded into the A000:0000
	memory allocation space for the VGA adapter to use. When the computer's mode is
	changed to Graphics mode, that allotted memory space is used for the graphics
	plane and the font image data is removed.
	
	In DOS, the font image is also removed. DOS continues to work because when the
	mode is changed to Text mode, the font image is reloaded by the Display.sys
	file. This file hooks the INT 10h handler DOS call and reloads the font image.
	If you call the original INT 10H handler DOS call (located in the VGA BIOS), the
	same problem can occur.
	
	In NTVDM DOS, the Display.sys file does not exist. The INT 10h handler DOS call
	only changes the mode and does not reload the font image.
	
	The difference between Windowed mode and Full Screen mode is that INT 10h handler
	DOS calls are passed directly to the BIOS of the VGA adapter and the hooks
	provided by NTVDM are not used. Also, if the DOS program runs with a row count
	of 43 or 50, the VGA BIOS reloads.
	
	
	Additional query words: bulgarian polish russian hungarian latvian estonia belarussian ukranian hebrew greek czech 852 864 855 863 865 869 862 932 934 936 866 938
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
