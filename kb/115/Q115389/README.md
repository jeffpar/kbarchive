---
layout: page
title: "Q115389: Obtaining Knowledge Base Articles on the Internet"
permalink: /kb/115/Q115389/
---

## Q115389: Obtaining Knowledge Base Articles on the Internet

{% raw %}

	Article: Q115389
	Product(s): Microsoft Product Support Information
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JUN-2002
	
	SUMMARY
	=======
	
	The Microsoft Product Support Knowledge Base contains articles that are
	available on the Internet through an FTP service (ftp.microsoft.com). This
	service includes technical support articles for the following product
	categories:
	
	- BUSSYS: LAN Manager, Windows NT, Microsoft Client, SQL Server, Open Data Base
	  Connectivity (ODBC), and Microsoft Mail.
	
	- DESKAPPS: Desktop Applications, including Microsoft Excel, Word for Windows,
	  and Office.
	
	- DEVELOPR: Development tools and languages.
	
	- PEROPSYS: Desktop Systems, including Microsoft Windows, Windows for
	  Workgroups, and MS-DOS.
	
	In addition to Knowledge Base articles, the Internet FTP server contains the
	complete Microsoft Software Library for downloading. The Software Library file
	tree (SOFTLIB) contains drivers, patches, Application Notes, and other support
	files from Microsoft Product Support Services. In addition to the SOFTLIB
	category, the following other sections are available.
	
	- MSEDCERT: Microsoft education and certification materials.
	
	- MSFT: Microsoft annual reports, sharholder information.
	
	- TECHNET: Information on TechNet.
	
	MORE INFORMATION
	================
	
	The Microsoft Knowledge Base is a primary Microsoft product information source
	for Microsoft support engineers and is also available to Microsoft customers.
	This comprehensive database contains more than 40,000 detailed articles with
	technical information about Microsoft products, fix lists, documentation errors,
	and answers to commonly asked technical support questions. These articles are
	also available through the Microsoft TechNet CD-ROM, and the Microsoft Developer
	Network CD-ROM.
	
	Connection to the Microsoft Internet server requires a "live" session to the
	Internet through a file transfer program (FTP) service provider.
	
	Opening a Connection to the Microsoft FTP Site
	----------------------------------------------
	
	1. Log on to your Internet account.
	
	2. At the Internet prompt, type
	
	  " open ftp.microsoft.com " (without the quotation marks)
	
	  or use the following IP address:
	
	  " open 207.46.133.140 " (without the quotation marks)
	
	3. When prompted for a user name, type
	
	  " anonymous " (without the quotation marks)
	
	4. When asked for a password, type your full electronic mail address (for
	  example, johndoe@test.com).
	
	Accessing a Product Group Area
	------------------------------
	
	Knowledge Base articles are located in a subdirectory below a product directory.
	The product areas are located under the product group area directories listed
	above. The Personal Operating System area is used as an example in these
	instructions. This category is located in the PEROPSYS directory on the FTP
	server. To access the PEROPSYS directory, type the following at the FTP prompt:
	
	  " cd /peropsys " (without the quotation marks)
	
	
	For more details about the products found in the current tree, use the GET
	command to retrieve any README.TXT files that are located in the group areas.
	(The GET command is outlined below.)
	
	Each group area contains subdirectories for each product contained in the group
	area. Under the PEROPSYS directory, the following subdirectories are available:
	
	  WINDOWS -  Microsoft Windows and Windows for Workgroups
	  MSDOS -  Microsoft MS-DOS
	  HARDWARE -  Microsoft Mouse and other hardware
	
	Use the CD command from the FTP prompt to select the subdirectory you are
	interested in. Each product subdirectory contains a KB subdirectory in which the
	actual Knowledge Base articles are stored.
	
	Log on to the KB subdirectory with the CD command (type "cd kb" (without the
	quotation marks)). Once you are in the KB directory, download the README.TXT and
	INDEX.TXT files located in that directory. README.TXT contains important
	information regarding Knowledge Base articles on the Internet FTP server.
	INDEX.TXT contains a list of article titles and article IDs for each article.
	You must determine the article ID before you can download the article. (There is
	no search mechanism other than downloading and searching the INDEX.TXT file.)
	
	To download these files, type the following at the FTP prompt:
	
	  " get readme.txt
	  get index.txt " (without the quotation marks)
	
	Once you review README.TXT and determine the article ID that you are interested
	in, you are ready to download a Knowledge Base article.
	
	The Knowledge Base articles are stored in a tree structure, with each article ID
	translated into a two-digit filename and stored two subdirectories under the KB
	directory. This method avoids storing thousands of articles in one subdirectory,
	which would slow server performance.
	
	You do not need to change to the directory that contains the Knowledge Base
	article you want to download. The directory structure is consistent and the GET
	command can be used to obtain an article from the KB directory.
	
	Steps to Download (GET) a Knowledge Base Article
	------------------------------------------------
	
	The following steps outline how to obtain an article after logging on to the FTP
	server. This example includes downloading an actual article contained in the
	WIN3X area. The sample article ID to download is Q91679, "Terminal: Sending
	Incoming Text Data to a Text File."
	
	
	1. After logging on to the FTP server, change to the PEROPSYS directory:
	
	  " cd /peropsys " (without the quotation marks)
	
	2. Change to the WINDOWS directory:
	
	  " cd WINDOWS " (without the quotation marks)
	
	3. Change to the KB directory:
	
	  " cd kb " (without the quotation marks)
	
	  NOTE: These three steps can be substituted with "cd/peropsys/windows/kb"
	  (without the quotation marks).
	
	4. Translate the article ID into a GET command. There are three parts of the
	  article ID to be divided before using the GET command. Reading the article ID
	  backwards, translate using this formula (article ID Q91679 is used as an
	  example):
	
	  The filename is the last two digits plus the .TXT extension (79.TXT). The
	  subarea is the first digit to the left of the filename (6). The primary area
	  is the remaining characters to the left, including the "Q". To use the GET
	  command, place a forward slash (/) between the filename, subarea, and primary
	  area (primary/sub/filename).
	
	  If the article ID is six digits (including the "Q"), the article ID translates
	  to:
	
	     Q91679 = Q91/6/79.TXT
	
	  If the article ID is seven digits, it translates to:
	
	     Q107409 = Q107/4/09.TXT
	
	5. Use the GET command at the FTP prompt to transfer the article to your system
	  as follows:
	
	     get Q91/6/79.TXT Q91679.TXT
	
	  -or-
	
	     get Q107/4/09.TXT Q107409.TXT
	
	  The "Q91679.TXT" part of the above example is the destination name for the
	  file. The destination name is the name of the file as it appears on your hard
	  disk drive.
	
	6. To close the connection with the server for most FTP clients, type the
	  following from the FTP prompt:
	
	  " bye " (without the quotation marks)
	
	If you receive an "access denied" error during any transfers, you do not have
	write access in the current working directory on your client system. Contact the
	system administrator for assistance if you receive this error.
	
	Additional query words: 3.10 Q113070 MSN telnet gopher
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
