---
layout: page
title: "Q121320: MS-DOS 6.22 StepUp Appears to Have Duplicate Files"
permalink: /kb/121/Q121320/
---

## Q121320: MS-DOS 6.22 StepUp Appears to Have Duplicate Files

{% raw %}

	Article: Q121320
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some files included with MS-DOS 6.22 StepUp appear to be duplicated, having the
	same filenames as other files, but with filename extensions that include an
	underscore (_), caret (^), or number sign (#).
	
	MORE INFORMATION
	================
	
	MS-DOS 6.22 StepUp contains two types of binary patch files:
	
	- Files with the filename extension .XX#. These files contain MS-DOS 6.0
	  checksums to patch MS-DOS 6.0 files to the MS-DOS 6.22 level. (Examples
	  include XCOPY.EX# and SHARE.EX#.)
	
	- Files with the filename extension .XX^. These files contain MS-DOS 6.2 (or
	  MS-DOS 6.0/6.2 upgraded to MS-DOS 6.21) checksums to patch appropriate files
	  to the MS-DOS 6.22 level. (Examples include XCOPY.EX^ and SHARE.EX^.)
	
	Files with the filename extension .XX_ are standard compressed files that are
	expanded during the setup process. (Examples include DELOLDOS.EX_ and
	COUNTRY.TX_.)
	
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
