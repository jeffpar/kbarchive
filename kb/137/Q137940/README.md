---
layout: page
title: "Q137940: Error Message: The File C:&#92;W95undo.dat Cannot Be Read"
permalink: /kb/137/Q137940/
---

## Q137940: Error Message: The File C:&#92;W95undo.dat Cannot Be Read

{% raw %}

	Article: Q137940
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to uninstall Windows 95, you may receive one of the following error
	messages:
	
	  - The file C:\W95undo.dat cannot be read.
	  Error Code -6: Unexpected end of file.
	
	  - The file C:\W95undo.dat is invalid or incomplete.
	  Error code -4: Invalid signature.
	
	CAUSE
	=====
	
	The W95undo.dat file is missing or damaged. You cannot uninstall Windows 95
	automatically if this file is missing or damaged.
	
	RESOLUTION
	==========
	
	To restore your previous version of Windows, follow these steps:
	
	1. Restart your computer using an MS-DOS boot disk that contains the Sys.com
	  file.
	
	2. At the MS-DOS prompt, type the following line and then press ENTER:
	
	  " a:sys c: " (without the quotation marks)
	
	  NOTE: If drive C is compressed, substitute the letter of the host drive (such
	  as H) for drive C.
	
	3. Delete the Windows folder.
	
	  NOTE: The Windows folder may contain files use by other Windows-based
	  programs. If you delete the Windows folder, you must reinstall all your
	  Windows-based programs.
	
	4. Reinstall Windows 3.x.
	
	MORE INFORMATION
	================
	
	When you install Windows 95, you are prompted to back up the current system
	files. If you choose to do so, the Windows folder and all its contents are
	backed up to a hidden, compressed file called W95undo.dat. This file is used to
	restore the previous version of Windows.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
