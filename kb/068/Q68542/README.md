---
layout: page
title: "Q68542: Windows Err Msg: Insufficient Memory to Run App (with HELP)"
permalink: /kb/068/Q68542/
---

## Q68542: Windows Err Msg: Insufficient Memory to Run App (with HELP)

{% raw %}

	Article: Q68542
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is displayed when you select one of the options
	under Help from any Windows 3.0 application:
	
	  Insufficient memory to run application; close one or more applications to
	  increase available memory and try again
	
	CAUSE
	=====
	
	The Microsoft Windows 3.0 Help engine file "WINHELP.EXE" may still be in the
	compressed format from the Windows disks. You can verify if the WINHELP.EXE file
	is compressed by looking at the file size. If the file size is 100335 bytes,
	then it is compressed.
	
	RESOLUTION
	==========
	
	You need to use the EXPAND.EXE utility to decompress the WINHELP.EXE file..
	EXPAND.EXE is located on the Windows 3.0 disk 2 for all three disk formats. For
	information on how to use the EXPAND.EXE utility, from the MS-DOS command
	prompt, type "expand" (without the quotation marks) and press ENTER.
	
	MORE INFORMATION
	================
	
	The file information for WINHELP.EXE is listed below:
	
	                                    COMPRESSED   DECOMPRESSED
	  FORMAT            LOCATION        FILE SIZE    FILE SIZE
	  ------            --------        ----------   ------------
	
	  5.25-inch 1.2M    Disk 1          100335       193552
	  3.5-inch 720K     Disk 1          (same)       (same)
	  5.25-inch 360K    Disk 3          (same)       (same)
	
	Additional characteristics that may occur when this message appears include the
	following:
	
	- The caption bar of this error message is titled "WINHELP".
	
	- An MS-DOS icon labeled "WINHELP" is listed among the currently running
	  applications, if any.
	
	Additional query words: 3.00 win30 3.00A
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
