---
layout: page
title: "Q117310: &quot;Copy to Word&quot; Missing from Bookshelf Edit Menu"
permalink: /kb/117/Q117310/
---

## Q117310: &quot;Copy to Word&quot; Missing from Bookshelf Edit Menu

{% raw %}

	Article: Q117310
	Product(s): Microsoft Home Multimedia Titles
	Version(s): '96-'97,1994 edition,1995 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows versions 1994 edition, 1995 edition 
	- Microsoft Bookshelf '96-'97 for Windows 
	- Microsoft Word for Windows and Bookshelf 1994 edition 
	- Microsoft Office for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the option to integrate with Word for Windows is not selected during the
	installation of Bookshelf, the Copy To Word choice will be missing from the Edit
	menu in the Bookshelf versions listed above.
	
	MORE INFORMATION
	================
	
	To manually add this choice to the Edit menu, place the following Integration=
	line in the [Bookshelf] section of the WIN.INI file.
	
	For Bookshelf 1994 or 1995(standard edition):
	
	  Integration=2
	
	For the Word for Windows and Bookshelf edition:
	
	  Integration=3
	
	For the Office Professional and Bookshelf edition
	
	  Integration=3
	
	For Bookshelf '96-'97 (16-Bit):
	
	1. Open the Bshelf96.ini file and add the following section:
	
	  [Word]
	  Wordpath=C:\Msoffice\Winword\winword.exe
	
	  NOTE: The Winword path may be different depending on installation.
	
	2. Save and close the Bshelf96.ini file.
	
	3. Open File Manager.
	
	4. From the File menu click Copy.
	
	5. In the From Line enter:
	
	  "D:\Office\Bsh.wll" (without the quotation marks)
	
	  Where D is the drive letter of your CD-ROM drive.
	
	6. In the To Line enter:
	
	  "C:\Msoffice\Winword\Startup" (without the quotation marks)
	
	NOTE: The Winword path may be different depending on installation.
	
	Additional query words: kbhowto msn_bookshelf 1994 multi media multimedia multi- error text picture information selection option kbmm winword
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbOfficeSearch kbHomeMMsearch kbBookshelfSearch kbBookShelf1994 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbWordBookshelf94
	Version           : :'96-'97,1994 edition,1995 edition
	
	=============================================================================
	

{% endraw %}
