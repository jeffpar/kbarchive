---
layout: page
title: "Q45679: &quot;DPATH&quot; Utility Causes ILINK Error and R6005 Error"
permalink: /kb/045/Q45679/
---

## Q45679: &quot;DPATH&quot; Utility Causes ILINK Error and R6005 Error

{% raw %}

	Article: Q45679
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_QuickASM | mspl13_c
	Last Modified: 28-JUN-1989
	
	The following errors:
	
	   ILINK returned -1
	
	or
	
	   R6005: not enough memory on Exec
	
	will occur when compiling or linking inside the QuickC 2.00/2.01
	environment if the following utilities are loaded into memory:
	
	   DPATH or IBM File Facility
	
	Both of these utilities are similar to the APPEND command in DOS.
	
	The DPATH utility should not be confused with a "dpath" command. The
	dpath  command is used only in the OS/2 environment and works much the
	same way the "path" command does, except that dpath is used by an
	application to search for data files, whereas path is used by commands
	and utilities outside of applications.
	
	Only the OS/2 applications that are written to take advantage of dpath
	will use the data path specified.

{% endraw %}
