---
layout: page
title: "Q103528: Removing SWITCHES=/F/N from the DBLSPACE.INI File"
permalink: /kb/103/Q103528/
---

## Q103528: Removing SWITCHES=/F/N from the DBLSPACE.INI File

{% raw %}

	Article: Q103528
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	You can add SWITCHES=/N, SWITCHES=/F, and SWITCHES=/F/N to the DBLSPACE.INI file
	with the following commands:
	
	  dblspace /switches=f
	  dblspace /switches=n
	  dblspace /switches=fn
	
	However, since there is no DoubleSpace command to remove these entries, you must
	do so using a text editor.
	
	MORE INFORMATION
	================
	
	To remove the SWITCHES entries from the DBLSPACE.INI file:
	
	1. Remove the Read-Only, System, and Hidden file attributes on the DBLSPACE.INI
	  file. For example, if drive H is your host drive, type the following at the
	  MS-DOS command prompt and press ENTER:
	
	  " attrib h:\dblspace.ini -r -s -h" (without the quotation marks)
	
	  NOTE: To determine which drive is your host drive, type "dblspace /list"
	  (without the quotation marks) at the MS-DOS command prompt.
	
	2. Using MS-DOS Editor, edit the DBLSPACE.INI file and remove the SWITCHES=
	  entries.
	
	3. Save the DBLSPACE.INI file and quit MS-DOS Editor.
	
	4. Use the ATTRIB command to reset the file attributes on DBLSPACE.INI. For
	  example, if your host drive is drive H, type the following command and press
	  ENTER:
	
	  " attrib h:\dblspace.ini +r +s +h" (without the quotation marks)
	
	For more information on the SWITCHES entry, type "help switches" (without the
	quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
