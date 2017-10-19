---
layout: page
title: "Q131714: Custom PCL Separator File Example"
permalink: /kb/131/Q131714/
---

## Q131714: Custom PCL Separator File Example

	Article: Q131714
	Product(s): Microsoft Windows NT
	Version(s): 3.1; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may wish to create your own printer control language (PCL) separator file.
	This article provides you with an example after which you can pattern your own
	separator file.
	
	This article includes the following sections:
	
	- Non-Annotated Separator File Text Example
	
	- Annotated Separator File Text Example
	
	- Description of Output From the Separator File Example
	
	- Separator File Command Summary
	
	Additional references for more information on the structure of the PCL language
	are listed at the end of this article.
	
	NOTE: Microsoft is responsible for solving problems with the Windows NT separator
	file processor, but not for developing custom printer-language code.
	
	MORE INFORMATION
	================
	
	To create a separator file:
	
	1. Type or paste the text from the example below into an ASCII text file.
	
	2. Save the file to the print server hard disk drive.
	
	3. Reconfigure Print Manager to use the separator file:
	
	  a. From the Printer menu, choose Properties.
	
	  b. Choose Details.
	
	  c. Type the path to the separator file in the Separator File text box.
	
	  d. Choose OK, and then choose OK again.
	
	4. After you have test the file, modify it to meet your needs.
	
	Non-Annotated Separator File Text Example
	-----------------------------------------
	
	  \ 
	  \H1B\L%-12345X@PJL ENTER LANGUAGE=PCL
	  \H1B\L&l1T\0
	  \H1B\L(19U\H1B\L(s1p16v0s0b16602T
	  \H1B\L&a10L\L\LDate: \D\H1B\L&a60L\LJob: \I\H1B\L&a94L\LTime: \T
	  \9\5
	  \H1B\L(19U\H1B\L(s1p36v0s0b16602T
	  \H1B\L&a17L
	  \H5C\H5C\LServer\H5C\LShare
	  \9\6
	  \H1B\L(19U\H1B\L(s1p96v1s0b4116T
	  \H1B\L&a10L\N
	  \H1B\LE
	
	Annotated Separator File Text Example
	-------------------------------------
	
	Like most PCL separator files, this example contains a mix of separator file
	commands and PCL code. The individual PCL commands are a combination of the
	value and the command. For example, 16v indicates a 16 point font. Only the last
	command in the PCL string should be capitalized (to indicate the end of the
	command). Although there can be multiple PCL commands per line, each new command
	string must start with an <Esc> code.
	
	NOTE: Some variable must be strung together in a specific order to function
	correctly. For more information, see the PCL references mentioned at the end of
	this article.
	
	\
	
	  The first line of any separator file is a delimiter character by itself. The
	  separator file interpreter looks for the backslash (\) character on the first
	  line, and uses it as the delimiter for its command strings in the rest of the
	  separator file.
	
	\H1B\L%-12345X@PJL ENTER LANGUAGE=PCL
	
	  If you want to send printer language commands, and those commands include
	  unprintable characters, you must send those characters by writing "\H"
	  followed by the character's hexadecimal value. Because most PCL commands
	  begin with an ESC character (hex value 0x1B) and are followed by printable
	  text, many PCL separator file lines begin with \H1B, followed by \L, and then
	  a literal string containing the rest of the PCL command. Remember that PCL
	  commands are case sensitive. The line above tells HP print devices with
	  multiple languages ("personalities") to switch to PCL.
	
	\H1B\L&l1T\0
	
	  This line toggles job separation and moves the cursor down one line.
	
	\H1B\L(19U\H1B\L(s1p16v0s0b16602T
	
	  There are two PCL commands in this line; the first sets the symbol set and
	  the second sets the font spacing, size, and name:
	
	  <ESC>(19U sets symbol set to 19U (Windows 3.1 Latin 1)
	  <ESC>(s1p sets spacing to 1 (1=proportional, 0=fixed)
	  16v sets font size to 16 points
	  0s0b16602T sets font to Arial (Plain)
	
	  If you want to use a different symbol set, size, or font, you need to change
	  this command (spacing is usually defined by the font, and is not
	  configurable). To get a list of the available fonts on an HP 4 Si print
	  device, use its front panel: from the TEST menu, choose the PCL TYPE LIST
	  entry and push the ENTER key. The resulting pages include lines that provide
	  the commands to set the font spacing and name. For example:
	
	  Arial Scale
	
	  <esc>(<xx><esc>s1p<yy>v0s0b16602T I 029
	
	  where <xx> represents an open box symbol designating "Symbol set" and
	  <yy> represents a closed box symbol designating "Point size"
	
	  Note: You will see the above all on one line.
	
	  The <xx> box is a placeholder for the symbol set value. The example PCL
	  command above sets this value to 19U; other useful values are 579L
	  (Wingdings), 19M (Symbol), 10U (PC-8, code page 437), and 12U (PC-850,
	  Multilingual). Symbol set lists are available in many printer user manuals,
	  and in Appendix C of the PCL 5 Comparison Guide (available from
	  Hewlett-Packard).
	
	  The <yy> box is a placeholder for the point size.
	
	\H1B\L&a10L\LDate: \D\H1B\L&a60L\LJob: \I\H1B\L&a94L\LTime: \T
	
	  The PCL command <ESC>&a#L sets the horizontal cursor position on
	  the current line to column #. This line positions the Date:, Job:, and Time:
	  labels horizontally at columns 10, 60, and 94, respectively, and prints the
	  current date, the job number, and the time after their respective labels.
	
	\9\5
	
	  This line moves the cursor position down 14 lines. The \n separator file
	  command moves the cursor down n lines. Although n must be a single digit (0
	  through 9) number, you can move nine lines, and then five lines, to move a
	  total of 14 lines.
	
	\H1B\L(19U\H1B\L(s1p36v0s0b16602T
	
	  This line redefines the current font, increasing the size from 16 to 36
	  points.
	
	\H1B\L&a17L
	\H5C\H5C\LServer\H5C\LShare
	\9\6
	
	  These lines set the left margin at column 17, print "\\Server\Share", and
	  then move down 15 lines. You can change the "Server" and "Share" strings to
	  the names of your print server and it's print share. This command sets the
	  left margin at 17 because this roughly centers the text "\\Server\Share"
	  horizontally. If your server and share name create a longer or shorter
	  string, you may want to adjust this margin to maintain the centering. There
	  is no separator file command to center text automatically.
	
	\H1B\L(19U\H1B\L(s1p96v1s0b4116T
	
	  This line redefines the current font to 96-point Marigold Windows 3.1 Latin 1
	  symbol set). This example uses the Marigold font simply to demonstrate that
	  you can get multiple fonts on the same page; you can change it to the font of
	  your choice.
	
	\H1B\L&a10L\N
	
	  This line sets the left margin to column 10 and then prints the user's name.
	
	\H1B\LE
	
	  There are two final lines in the file. The first is a PCL printer reset
	  command (<ESC>E), and the second is the carriage return-linefeed pair
	  that follows the printer reset command. Don't forget the carriage
	  return-linefeed pair.
	
	Description of Output From the Separator File Example
	-----------------------------------------------------
	
	The precise output you get when you use the sample separator file varies
	depending on the values for the date, job number, time, the share specified, and
	the user's name. However, the basic layout of the page may be described as
	follows: near the top of the separator page you will see one line with the word
	"date" with a value on the left, the word "job" and a number in the center, and
	the label "time" and its current value at the right. The text in this line will
	be in Arial 16 font. Roughly centered on the page will be the "\\Server\Share"
	name in the Arial 36 point font. On the lower half of the sheet, and also
	centered left to right on the page, will be the user name in a 96 point script
	font.
	
	Separator File Command Summary
	------------------------------
	
	Escape Code   Function
	----------------------
	 \           On its own line, at the very beginning of the
	             separator file, defines the "\" character to be the command
	             delimiter character for this separator file.
	
	 \N          Prints the user name of the person that submitted the job.
	
	 \I          Prints the job number.
	
	 \D          Prints the date the job was printed. The representation of
	             the date is the same as the Date Format in Control Panel
	             (International).
	
	 \T          Prints the time the job was printed. The representation of
	             the time is the same as the Control Panel (Time).
	
	 \Lxxx       Prints all the characters (xxxx) following it until another
	             escape code is encountered.
	
	 \Fpathname  Prints the contents of the file specified by pathname,
	             starting on an empty line. The contents of this file are
	             copied directly to the print device without any processing.
	
	 \Hnn        Sends the nn (hexadecimal) ASCII character. \Hnn is often
	             used to send a printer-specific control sequence. To
	             determine appropriate control sequences, see your printer
	             manual.
	
	 \Wnn        Sets the width of the separator page. The default width is
	             80; the maximum width is 256. Any printable characters beyond
	             this width are truncated.
	
	 \B\S        Prints text in single-width block characters until \U is
	             encountered.
	
	 \E          Ejects a page from the printer. Use this code to start a new
	             separator page or to end the separator page file. If you get
	             an extra blank separator page when you print, remove this
	             code from your separator page file.
	
	 \n          Skips n lines, where n is a digit from 0 through 9. Skipping
	             0 lines simply moves printing to the next line.
	
	 \B\M        Prints text in double-width block characters until \U is
	             encountered.
	
	 \U          Turns off block character printing.
	
	REFERENCES
	==========
	
	For more information on the PCL language see:
	
	"PCL 5 Printer Language Technical Reference Manual," Hewlett Packard, HP Part No.
	5961-0509, October 1992.
	
	"PCL 5 Comparison Guide," Hewlett Packard, HP Part No. 5961-0634, May 1994.
	
	For more information on the PostScript Language see:
	
	"PostScript Language Program Design," Adobe Systems, Imprint by Addison-Wesley,
	1988.
	
	"PostScript Language Reference Manual(New Red Book), Adobe Systems, Imprint by
	Addison-Wesley, 1990.
	
	"PostScript Language Tutorial and Cookbook," Adobe Systems, Imprint by
	Addison-Wesley, 1985.
	
	Additional query words: prodnt 3.10 post script pcl5
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1; winnt:3.5,3.51,4.0
	
	=============================================================================
	
