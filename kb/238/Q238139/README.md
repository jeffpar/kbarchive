---
layout: page
title: "Q238139: FP98: Importing Files from Unix Server Will Not Import All Files"
permalink: kb/238/Q238139/
---

## Q238139: FP98: Importing Files from Unix Server Will Not Import All Files

	Article: Q238139
	Product(s): Word Front Page
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q200804.
	
	For a Microsoft FrontPage 97 version of this article, see Q238138.
	
	SYMPTOMS
	========
	
	If you import files with the same name but with different case from a Unix
	server into a Windows-based server, hyperlinks to at least one of the files will
	break.
	
	CAUSE
	=====
	
	Unix operating systems are case sensitive. For example, files called
	"mypage.htm" and "Mypage.htm" are recognized as different files on the Unix
	operating system. Because Windows-based operating systems are not case
	sensitive, these two files are recognized as being the same file.
	
	RESOLUTION
	==========
	
	Save the file with lowercase letters from a Web browser. Change the name of the
	file, and then import it into FrontPage.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:
	
	=============================================================================
	
