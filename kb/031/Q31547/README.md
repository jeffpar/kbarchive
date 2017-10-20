---
layout: page
title: "Q31547: Environment Variables Used by the Microsoft Editor"
permalink: /kb/031/Q31547/
---

## Q31547: Environment Variables Used by the Microsoft Editor

{% raw %}

	Article: Q31547
	Product(s): See article
	Version(s): 1.00
	Operating System(s): OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 16-JUN-1988
	
	The Microsoft Editor uses the following environment variables:
	
	   1. TMP: This directory stores all temporary files.
	   2. INIT: This directory stores the TOOLS.INI, M.TMP, and temporary
	files if TMP is not set.
	
	   Please note, if neither environment variable is set, all temporary
	files except M.TMP are written to the root directory of the disk being
	used. M.TMP is written to the current directory.
	   The environment variables usually are set in the AUTOEXEC.BAT file.
	For example the following lines can be placed in the AUTOEXEC.BAT
	file:
	
	    SET INIT=c:\init
	    SET TMP=c:\temp
	
	   Also, if the TMP environment variable ends with a semicolon, the
	temporary files (i.e., swapping files) will not be created. The editor
	will try to use the semicolon in the name of the file that is created.

{% endraw %}
