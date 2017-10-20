---
layout: page
title: "Q176153: Bookshelf: Right-click Define Feature Does Not Function"
permalink: /kb/176/Q176153/
---

## Q176153: Bookshelf: Right-click Define Feature Does Not Function

{% raw %}

	Article: Q176153
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:7.0,7.0a,97
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbsetup kbtool kbui kbimukbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 98 for Windows 
	- Microsoft Bookshelf 99 
	- Microsoft Bookshelf 2000 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you right-click a word in Microsoft Word for Windows 95 or Microsoft Word
	97 and then click Define, Bookshelf may not open to the dictionary article for
	the selected word.
	
	CAUSE
	=====
	
	This behavior can occur if some of the Office integration files are not
	installed properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that all of the Office integration files are
	installed properly. To do this, use the following methods in the order in which
	they are presented.
	
	Remove and Reinstall Bookshelf
	------------------------------
	
	To remove and then reinstall Bookshelf, follow these steps:
	
	1. Click Start, point to Settings, then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Bookshelf 1998 (Remove ONLY) or Microsoft Bookshelf 1999
	  (Remove ONLY), and then click Add/Remove.
	
	4. Click OK.
	
	5. Insert the Bookshelf 98 or Bookshelf 99 CD-ROM into the CD-ROM drive. If the
	  installation program does not start automatically, follow these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "<cd-rom>:\setup.exe" (without the quotation
	     marks), and then click OK, where <cd-rom> is the drive letter for
	     the CD-ROM drive.
	
	6. Click Continue, and then follow the instructions on the screen to install
	  Bookshelf.
	
	Test if the issue is resolved. If the issue continues to occur, proceed to the
	next method.
	
	Manually Copy the Bsh32.wll and Msreftl.dll Files to the Hard Disk
	------------------------------------------------------------------
	
	To manually copy the Bsh32.wll and Msreftl.dll files to the proper folder on the
	hard disk, follow these steps:
	
	1. Quit Microsoft Word and Bookshelf.
	
	2. Insert the Bookshelf 98 or Bookshelf 99 CD-ROM into the CD-ROM drive. Press
	  and hold down the SHIFT key as you insert the CD-ROM to prevent the program
	  from starting automatically.
	
	3. Click Start, and then click Run.
	
	4. In the Open box, type the appropriate line for your version of Microsoft
	  Bookshelf, and then click OK
	
	  Bookshelf 98:
	
	  <cd-rom>:\office
	
	  Bookshelf 2000 or Bookshelf 99:
	
	  <cd-rom>:\bshelf
	
	  where <cd-rom> is the drive letter for the CD-ROM drive.
	
	5. Right-click the Bsh32.wll file, and then click Copy.
	
	6. Click Start, and then click Run.
	
	7. If you use Word for Windows 95, type the following line in the Open box, and
	  then click OK
	
	  <drive>:\msoffice\winword\startup
	
	  If you use Word 97, type the following line (with the quotation marks) in the
	  Open box, and then click OK
	
	  "<drive>:\program files\microsoft office\office\startup"
	
	  where <drive> is the drive letter for the hard disk on which Microsoft
	  Office is installed.
	
	8. On the Edit menu, click Paste.
	
	9. Close the Startup window.
	
	10. In the Office window, right-click the Msreftl.dll file, and then click Copy.
	
	11. Close the Office window.
	
	12. Click Start, and then click Run.
	
	13. In the Open box, type the following line (with the quotation marks), and
	  then click OK
	
	  "<drive>:\Program Files\Common Files\Microsoft Shared\Reference Titles"
	
	  where <drive> is the drive letter for the hard disk on which Windows is
	  installed.
	
	14. On the Edit menu, click Paste.
	
	15. Close the Reference Titles window.
	
	
	Additional query words: 97 98 99 multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbenv kbinterop kbsetup kbtool kbui kbimu kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord95Search kbHomeMMsearch kbZNotKeyword2 kbBookshelfSearch kbWord95 kbWord95a kbBookShelf1998 kbBookShelf2000 kbBookShelf1999
	Version           : WINDOWS:7.0,7.0a,97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
