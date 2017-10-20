---
layout: page
title: "Q118994: FAX: ErrMsg: Cannot Find or Open M:&#92;FAX&#92;&#42;.ICX file"
permalink: /kb/118/Q118994/
---

## Q118994: FAX: ErrMsg: Cannot Find or Open M:&#92;FAX&#92;&#42;.ICX file

{% raw %}

	Article: Q118994
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an incoming fax image is received, the Microsoft Mail Gateway to FAX may
	generate the error message "Cannot find or open *.ICX" if you are using the
	spool printing option on a Novell Netware network. (The option sends the fax
	image to the printer on receipt. When it is on, the PROFILE.GLB file has the
	FAXIn Mode set to SPOOL orVIEW+SPOOL.)
	
	CAUSE
	=====
	
	The FAX Gateway spawns the program MAKEDCX.EXE and generates the *.ICX file,
	which the PPB.EXE program uses to print the fax image. The error indicates that
	the MAKEDCX.EXE program is failing to create or open the *.ICX file because the
	network operating system is not finding the file.
	
	RESOLUTION
	==========
	
	Use the Novell MAP ROOT command to define the Microsoft Mail database and
	executables drives and directories to be at the root level.
	
	
	Additional query words: 3.00 3.00a Novell
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300 kbMailGateFax300a
	Version           : MS-DOS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
