---
layout: page
title: "Q115203: MS-DOS Setup Deletes 3 Files from &#92;DOS on Stacker Host Drive"
permalink: /kb/115/Q115203/
---

## Q115203: MS-DOS Setup Deletes 3 Files from &#92;DOS on Stacker Host Drive

{% raw %}

	Article: Q115203
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install MS-DOS 6.22 Upgrade Setup on a machine running Stacker, Setup
	properly updates the files in the root directory on the Stacker host drive, but
	Setup deletes the following three MS-DOS files from the DOS directory on the
	Stacker host drive.
	
	  COMMAND.COM
	  ATTRIB.EXE
	  CHKDSK.EXE
	
	RESOLUTION
	==========
	
	To correct this problem, copy these three files from the directory that contains
	your MS-DOS files to the DOS directory on your host drive. For example, if the
	directory containing your MS-DOS files is C:\DOS and your Stacker host drive is
	H, type the following at the MS-DOS command prompt and then press ENTER:
	
	  "copy c:\dos\command.com h:\dos" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	Stacker is manufactured by STAC Electronics, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
