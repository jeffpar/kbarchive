---
layout: page
title: "Q149281: Adding Extensions to Macintosh File Names for Windows 95"
permalink: /kb/149/Q149281/
---

## Q149281: Adding Extensions to Macintosh File Names for Windows 95

	Article: Q149281
	Product(s): Microsoft Windows NT
	Version(s): 3.1; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Macintosh allows files to be saved without extensions. When a Windows 95 client
	examines the file with Explorer, the files will appear as the default document
	icon with the Windows logo.
	
	MORE INFORMATION
	================
	
	Windows NT provides a method to add extensions to file names in an orderly
	fashion for any program that requires an extension. The method can be broken
	down into the following steps:
	
	1. On a Windows NT Server running Services for Macintosh "SFM" create a
	  Macintosh volume for each of the extensions needed. For example, if your
	  converting Excel, Word, and PowerPoint files, create new folders for each of
	  these programs in the Windows NT Macintosh volume.
	
	2. Copy all the files to their respective volume share on the Windows NT Server.
	
	3. Go to a Windows NT command prompt, then go to the Microsoft Word directory
	  and type:
	
	  " ren *.* *.doc " (without the quotation marks)
	
	4. Switch to the Microsoft Excel and PowerPoint directories and do the same,
	  typing:
	
	  " ren *.* *.xls
	  ren *.* *.ppt
	  " (without the quotation marks)
	
	5. Examine the files using Windows 95 Explorer and you will see that the files
	  now have the correct icon and can be easily opened with Explorer and the
	  parent application.
	
	There are three consideration to take into account with this process. The first
	limitation is that Windows 95 is not Unicode aware. While Macintosh clients can
	save files with file names such as 2/6/96, Windows 95 programs will be unable to
	open or rename these files. To correct this problem, rename them from a
	Macintosh client or from Windows NT server.
	
	
	The second consideration is the current file name length. If by adding the ".doc"
	extension, the Macintosh file name exceeds 31 characters, the file name will be
	converted on the Macintosh side to an MS-DOS short name. However, you will still
	be able to see all the characters from Office 95. Thus, if you had a Macintosh
	file named: "Spooky Kitty lost his Katnip," it would get renamed to "Spooky
	Kitty lost his Katnip.doc." And because this causes the file name to exceed 31
	characters, SFM would display it to Macintosh users as "Spooky~1.DOC." This
	display issue comes from a Macintosh limitation, which states that the file
	names cannot be longer than 31 characters.
	
	Finally, when the Macintosh file contains several periods in the name, The
	process above will place the extension after the first period. For example, if
	the Macintosh saved the file as "Spooky.Kitty.likes.Katnip," when the conversion
	process is completed the file while be renamed "Spooky.Doc."
	
	Additional query words: prodnt 3.10 3.50 3.51 4.00 application unicode
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : :3.1; winnt:3.5,3.51,4.0
	
	=============================================================================
	
