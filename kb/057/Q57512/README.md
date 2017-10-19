---
layout: page
title: "Q57512: Cannot Print Source Code If Notepad or Errors Window Active"
permalink: /kb/057/Q57512/
---

## Q57512: Cannot Print Source Code If Notepad or Errors Window Active

	Article: Q57512
	Product(s): See article
	Version(s): 2.00 2.01
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_quickasm buglist2.00 | mspl13_c
	Last Modified: 17-JAN-1990
	
	Printing source code while the active window is either the Notepad or
	Errors window will produce unexpected results in QuickC 2.00 and 2.01.
	If you choose the Print option (ALT+F P) and select Source File, only
	a portion of your source code will be printed.  Printing from within
	the Debug, Locals, Registers, Help and Output windows will print the
	entire file.
	
	Microsoft has confirmed this to be a problem in QuickC Version 2.00.
	We are researching this problem and will post new information here as
	it becomes available.
	
	If you select File.Print.Source File from within the Notepad window,
	QuickC will print lines of source code equal to the number of lines
	plus one (or two) in the Notepad window.
	
	Printing from the Errors window produces similar results. If there are
	no errors in the Error window, two lines of the source code will be
	printed. If there are errors in the window, QuickC will print lines of
	source code equal to the number of errors plus one.
