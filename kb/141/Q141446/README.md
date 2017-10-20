---
layout: page
title: "Q141446: HOWTO: Download &quot;Mastering&quot; KB Articles from the Internet"
permalink: /kb/141/Q141446/
---

## Q141446: HOWTO: Download &quot;Mastering&quot; KB Articles from the Internet

{% raw %}

	Article: Q141446
	Product(s): Microsoft Mastering Series
	Version(s): WINDOWS:1.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbmm
	Last Modified: 07-JUN-2001
	
	1.00
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Mastering Products, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Knowledge Base (KB) articles and Microsoft Software Library (MSL)
	files included with the Microsoft products listed at the beginning of this
	article are available for downloading from the Internet by using a File Transfer
	Program (FTP) service (ftp.microsoft.com). The MSL file tree (softlib) contains
	drivers, patches, and other support files from Microsoft Product Support
	Services. This article describes how to open a connection to the Microsoft FTP
	site and how to download individual KB articles that apply to the Mastering
	compact disc titles listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	How to Open a Connection to the Microsoft FTP Site
	--------------------------------------------------
	
	Connection to the Microsoft Internet server requires a live session to the
	Internet by way of an FTP (File Transfer Program) service provider.
	
	1. Log on to your Internet account.
	
	2. At the Internet prompt, type:
	
	  open ftp.microsoft.com
	
	  -or-
	
	  Use the following IP address:
	
	  open 207.46.133.140
	
	3. When prompted for a user name, type:
	
	  anonymous
	
	4. When prompted for a password, type your full e-mail address, for example:
	
	  johndoe@test.com
	
	How to Download Individual KB Articles
	--------------------------------------
	
	This example shows how to download an actual article (Q86087), which explains how
	to obtain a print utility for Mastering Visual FoxPro. KB articles are stored in
	a directory tree by their unique identification number also known as their Q
	number.
	
	1. After logging onto the FTP server, use the CD command at the FTP prompt to
	  change to the correct directory:
	
	  cd /developr/gen_info/kb
	
	
	1. Use the GET command to retrieve the Index.txt file. It contains a complete
	  list of all the article titles and their Q numbers. If you already know the Q
	  number you want, you don't need to look in the Index.txt file. To download
	  the Index.txt file, type the following from the FTP prompt:
	
	  get index.txt
	
	2. Once you have the Q number (for example, Q86087) of the KB article you want,
	  use the GET command to download it.
	
	  KB articles are stored in a directory tree structure with each Q number
	  represented as two subdirectories and a two-digit file name. This method
	  avoids storing thousands of articles in one subdirectory, which would slow
	  server performance.
	
	  You can translate the Q number into a GET command. There are three parts to
	  each Q number. Reading backwards, the file name is the last two characters
	  plus a .txt extension. For example, the file name for Q86087 is 87.txt. The
	  sub area is the first digit to the left of the file name (0 in this example),
	  and the primary area is the remaining characters to the left including the Q
	  (Q86 in this example).
	
	  In the GET command, place a forward slash (/) between the file name, sub area,
	  and primary area (primary/sub/filename). For example, a six-digit Q number
	  translates to:
	
	  Q86087 = Q86/0/87.txt
	
	  A seven-digit Q number translates to:
	
	  Q139007 = Q139/0/07.txt
	
	  Use the GET command from the FTP prompt to download the article:
	
	  get Q86/0/87.txt Q86087.txt
	
	  The "Q86087.txt" part at the end is the destination name for the file -- the
	  name of the file as it will appear on your hard drive.
	
	3. To close the connection with the server for most FTP clients, type the
	  following from the FTP prompt:
	
	  bye
	
	
	Additional query words: 1.00 1995 multimedia multi-media multi media mmtitles
	
	======================================================================
	Keywords          : kbmm 
	Technology        : kbMSPressSearch
	Version           : WINDOWS:1.0,3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
