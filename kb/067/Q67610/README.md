---
layout: page
title: "Q67610: Accessing Help with the CodeView Upgrade for QuickC"
permalink: /kb/067/Q67610/
---

## Q67610: Accessing Help with the CodeView Upgrade for QuickC

{% raw %}

	Article: Q67610
	Product(s): See article
	Version(s): 2.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_CODEVIEW | mspl13_c
	Last Modified: 12-DEC-1990
	
	When installing CodeView version 3.11 for QuickC, you must set the
	environment variable HELPFILES to the QC25\BIN directory (or the
	correct directory on your system) in order to access help from
	CodeView.
	
	The correct setting for HELPFILES on a system where QuickC is
	installed on drive C in a directory called "\QC25\BIN" is:
	
	   SET HELPFILES=C:\QC25\BIN\*.HLP
	
	This is not covered in the CodeView for QuickC printed documentation,
	but is stated clearly in the CodeView for QuickC Setup program.

{% endraw %}
