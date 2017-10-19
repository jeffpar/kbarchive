---
layout: page
title: "Q148754: File Names Seem to Be Limited to Less Than 255 Characters"
permalink: /kb/148/Q148754/
---

## Q148754: File Names Seem to Be Limited to Less Than 255 Characters

	Article: Q148754
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or both of the following symptoms when you attempt to
	create a file in Windows 95:
	
	- When you attempt to use Windows Explorer or another program to create a file
	  in a folder other than the root folder of a drive, the length of the file
	  name seems to be limited to less than 255 characters. If you use Windows
	  Explorer to move or copy a file with a very long file name to a folder other
	  than the root folder of a drive, you may receive the following error
	  message:
	
	  Cannot copy <file name>. The file name you specified is invalid or too
	  long. Specify a different filename.
	
	- When you attempt to use Windows Explorer to create a file in the root folder
	  of a drive, the length of the file name seems to be limited to 250
	  characters.
	
	These symptoms occur even though the Windows 95 documentation states that a file
	name in Windows 95 can include up to 255 characters.
	
	CAUSE
	=====
	
	Long file names are limited to 255 characters in Windows 95. However, the
	maximum path length in Windows 95 is 259 characters. The maximum path length
	represents the length of the file name, plus the number of characters used to
	represent the drive and folder where the file is located. For example, the path
	length for the file
	
	  C:\Windows\LongFileName.extension
	
	is 33 characters, but the file name is only 22 characters.
	
	Because the path length is limited to 259 characters, a long file name is limited
	to less than 255 characters if more than five characters are needed to represent
	the drive and folder where the file is located. If five characters or less are
	needed to represent the drive and folder where the file is located, the long
	file name is limited to 255 characters, even if the total path length is less
	than 259 characters. For example, if a file is located in the root folder of a
	drive, the long file name is still limited to 255 characters, even though 256
	characters could be used before the maximum path length is reached.
	
	When you use Windows Explorer to create a file, the length of the file name is
	limited to 250 characters instead of 255 characters. This is a known problem
	that occurs with Windows Explorer in Windows 95. However, if you use another
	program to create a file with a file name longer than 250 characters, the entire
	file name is visible in Windows Explorer.
	
	RESOLUTION
	==========
	
	To work around these problems, use the appropriate method:
	
	- If you are attempting to use Windows Explorer or another program to create a
	  file in a folder other than the root folder of a drive, and the length of the
	  file name is limited to less than 255 characters, you may be able to use a
	  longer file name if you create the file in a different folder. If you create
	  the file in a folder with fewer characters in the folder name, or in a folder
	  that has fewer parent folders, fewer characters are needed to represent the
	  drive and folder where the file is located. This allows you to use more
	  characters for the file name before the 259-character maximum path length is
	  reached.
	
	- If you are attempting to use Windows Explorer to create a file in the root
	  folder of a drive, and the length of the file name is limited to 250
	  characters, you may be able to work around this problem by using a different
	  program to create the file. For example, if you are attempt- ing to create a
	  new text document (.txt) file, use Notepad to create the file instead of
	  Windows Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed that the 250-character file name limit on files created
	in Windows Explorer is a problem with Windows 95. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	For information about limitations on the length of file names when you are
	creating files from a command prompt, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q121059 Command-Line File Names Appear Limited to 127 Characters
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
