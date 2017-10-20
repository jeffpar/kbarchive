---
layout: page
title: "Q50012: Undocumented Switch &quot;Sethelp&quot; for M Version 1.02"
permalink: /kb/050/Q50012/
---

## Q50012: Undocumented Switch &quot;Sethelp&quot; for M Version 1.02

{% raw %}

	Article: Q50012
	Product(s): See article
	Version(s): 1.02   | 1.02
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_basic
	Last Modified: 24-JAN-1991
	
	If you have the M (or MEP) Editor version 1.02 configured for online
	help, you can use the undocumented "Sethelp" switch to load additional
	help files within the editor by using the following syntax:
	
	   Arg textarg Sethelp      ;ALT+A textarg ALT+S
	
	Textarg corresponds to the full pathname of the .HLP file you want to
	load. By default, the sethelp function is mapped ALT+S.
	
	For example, load the QC.HLP help file that comes with QuickC with the
	following command:
	
	   ALT+A D:\QC\QC.HLP ALT+S
	
	Now you could place the cursor on printf (or any other C language item
	that is in the Help file) and press F1 to get help on that topic.

{% endraw %}
