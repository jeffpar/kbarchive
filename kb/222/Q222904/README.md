---
layout: page
title: "Q222904: HOWTO: Create Macintosh Associations for Nondefault File Extensi"
permalink: /kb/222/Q222904/
---

## Q222904: HOWTO: Create Macintosh Associations for Nondefault File Extensi

	Article: Q222904
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to create Macintosh file associations for nondefault file types
	on Services for Macintosh (SFM) volumes.
	
	To create these associations, follow these steps:
	
	1. On a Macintosh computer with Resedit installed, open Resedit. (Resedit is a
	  file utility found on Macintosh computers.) Opening Resedit brings up the
	  browse window.
	
	2. Select one of the files of the file type for which you want to add
	  associations.
	
	3. After this file opens, go to the File menu and click "Get info for
	  <filename>".
	
	  This brings up a window that shows you the Type and Creator for the file you
	  opened.
	
	4. Write down the Type and Creator for the file.
	
	5. On the server running SFM, click Start, click Run, type "winfile.exe"
	  (without the quotation marks), and then click OK.
	
	6. Go to Macfile, and select Associate.
	
	7. Click Add and then fill in the Creator and Type information you got from
	  Resedit. Click OK; the description is optional.
	
	8. In the "Macintosh Document Creator and Type" window, select your newly
	  created entry.
	
	9. In the "File with MS-DOS Extensions" drop-down box, type the three-character
	  MS-DOS extension of the file type (for example, .xls).
	
	10. Click Associate.
	
	MORE INFORMATION
	================
	
	The following registry key shows the file extensions that are currently
	available for association. You should see your newly created association here.
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MacFiles\Paramteres\Extentions
	
	Additional query words: mac macfile
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
