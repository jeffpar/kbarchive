---
layout: page
title: "Q154388: Encarta 1996: How to Reinstall Without Losing Yearbook Updates"
permalink: /kb/154/Q154388/
---

## Q154388: Encarta 1996: How to Reinstall Without Losing Yearbook Updates

	Article: Q154388
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove and reinstall Microsoft Encarta 1996 Encyclopedia, you are
	unable to access your Yearbook Builder update files.
	
	CAUSE
	=====
	
	Removing and reinstalling Encarta 1996 Encyclopedia overwrites the Yearbook
	Builder information file (Ybstate.dat) on your hard drive.
	
	RESOLUTION
	==========
	
	To preserve your Encarta Yearbook Builder updates when you remove and reinstall
	Encarta, use the following steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "ybstate.dat" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, click the Ybstate.date file, on the File menu,
	  click Rename.
	
	4. Type "ybstate.sav" (without the quotation marks), and then press ENTER.
	
	5. Run Encarta 1996 Encyclopedia Setup, and then select the Remove All Setup
	  option.
	
	6. When Setup is finished removing the program, run Encarta Setup again to
	  reinstall the program.
	
	7. Locate the new Ybstate.dat file. For information about how to find a file,
	  see step 2 above.
	
	8. Rename the file "Ybstate.new" (without quotation marks). See steps 3 and 4
	  for information about how to rename a file.
	
	9. Locate the Ybstate.sav file you renamed in steps 3 and 4, and rename the file
	  "Ybstate.dat" (without quotation marks).
	
	Your Yearbook Builder update files are now preserved in your current installation
	of Encarta.
	
	MORE INFORMATION
	================
	
	Encarta 1996 Encyclopedia is installed as a 16-bit application under Windows 3.1
	and as a 32-bit application under Windows 95 and Windows 98. The 16-bit version
	of Encarta is not compatible with Windows 95/98. If you installed Encarta 1996
	Encyclopedia before you installed Windows 95/98, you need to remove Encarta and
	then run the Encarta Setup program again for Encarta to function properly.
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996
	Version           : WINDOWS:
	
	=============================================================================
	
