---
layout: page
title: "Q105791: MS-DOS Setup Appears to Corrupt or Damage Windows .INI Files"
permalink: /kb/105/Q105791/
---

## Q105791: MS-DOS Setup Appears to Corrupt or Damage Windows .INI Files

{% raw %}

	Article: Q105791
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS Setup may appear to corrupt or damage your SYSTEM.INI, WINFILE.INI, or
	PROGMAN.INI files.
	
	CAUSE
	=====
	
	This problem occurs due to the difference in how MS-DOS and Windows interpret
	corrupted SYSTEM.INI, WINFILE.INI, or PROGMAN.INI files. While Windows simply
	ignores garbage in corrupted .INI files, MS-DOS may interpret such characters as
	an end-of-file (EOF) marker (depending on the type of data corruption).
	
	RESOLUTION
	==========
	
	To first determine if your .INI file problems are the result of existing
	corruption and then to correct such problems, use the following steps:
	
	1. Copy the unmodified backup .INI file over the corrupted one. For example,
	  type "copy c:\windows\progman.bak c:\windows\progman.ini" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	2. Edit the .INI files with a hexadecimal editor and remove the data
	  corruption.
	
	  MS-DOS Setup ignores any data corruption involving the standard character set
	  (that is, incorrect text or corrupted text in your .INI file is ignored).
	  However, incorrect formatting characters or other values can cause problems.
	  For this reason, you need to look at the files with a hexadecimal editor.
	
	
	3. Run SETUP /E to install the optional programs (Microsoft Backup, Microsoft
	  Anti-Virus, and Microsoft Uninstall).
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
