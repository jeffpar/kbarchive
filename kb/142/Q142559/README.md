---
layout: page
title: "Q142559: Creating Tag Files for IIS Gopher Service"
permalink: kb/142/Q142559/
---

## Q142559: Creating Tag Files for IIS Gopher Service

	Article: Q142559
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	All information about a file that is sent to a client comes from tag
	files.
	This information includes the name of a file displayed for the client.
	Typical tag files contain the following:
	
	  Display name
	  Host name
	  Port number
	
	If you are running Gopher Plus, you can add more information to each tag
	file, such as the server administrator's name and e-mail name, the file's
	date of creation, and date of last modification. You must first create the
	file and then store it on the server.
	
	NOTE: If your server is configured for NTFS, you must move the tag file
	manually when you move the corresponding data files. To move the tag file,
	first make it visible, because tag files are hidden files. Then move the
	file, and make it hidden again. (You can use File Manager to make files
	hidden or visible.)
	
	NOTE: If disk space is critical, make sure that you include the hidden tag
	files when you calculate how much space your files will take up.
	
	Creating Tag Files
	------------------
	
	To create a tag file, type the following syntax on the command line:
	
	  gdsset -c -gn -f "description of file" -a "administrator's name" -e
	  e-mail filename
	
	  -c Use this flag to edit or create a new file.
	
	  -gn The value for n can be any single-digit code from 0 to 9. If you omit this
	  flag, the code for the file type will default to 9, binary.
	
	  -a "administrator's name" The value between the quotation marks is the
	  administrator's name. If you omit this flag, the value defaults to the
	  service administrator's name in the Service dialog box of the Microsoft
	  Internet Service Manager.
	
	  -e e-mail The value is the administrator's e-mail address. If you omit this
	  flag, the value defaults to the service administrator's e-mail name in the
	  Service dialog box of the Microsoft Internet
	
	  "filename" The value is the name of the tag file you're creating or editing
	  (without the quotation marks).
	
	  NOTE: This command line automatically hides the tag files you create.
	
	To create a batch command to tag a series of files that have the same
	type, such as a series of text files, use the following syntax:
	
	  for %1 in (*.txt) do <echo %i&& gdsset -c -gn -f %i %i
	
	Interpreting Item Types
	-----------------------
	
	The following list shows all possible Gopher item type codes and what they
	mean (the first character is the type code):
	
	 
	
	  0 A file, usually a flat text file
	  1 A Gopher directory
	  2 A CSO phone-book server
	  3 An error
	  4 A BinHex'ed Macintosh(r) file
	  5 An MS-DOS(r) binary archive
	  6 A UNIX(r) Uuencoded file
	  7 An index-search server
	  8 A Telnet session
	  9 A binary file
	  c A calendar or calendar of events
	  g A graphic interchange file (GIF) graphic
	  h An HTML World Wide Web hypertext page
	  i An in-line text that is not an item
	  I Another kind of image file
	  m A BSD format mbox file
	  P A PDF document
	  T A TN3270 mainframe session
	  : A bitmap Image (use Gopher Plus information for type of image)
	
	Additional query words: prodiis1
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0
	
	=============================================================================
	
