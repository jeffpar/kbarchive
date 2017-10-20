---
layout: page
title: "Q110162: Windows for Workgroups 3.11 Disk 8 Contains Disk 1 Files"
permalink: /kb/110/Q110162/
---

## Q110162: Windows for Workgroups 3.11 Disk 8 Contains Disk 1 Files

{% raw %}

	Article: Q110162
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In several of the 3.5-inch Windows for Workgroups version 3.11 disk sets, Disk 8
	contains the Disk 1 files.
	
	You can obtain these files by contacting Microsoft Product Support Services (PSS)
	Windows for Workgroups support.
	
	MORE INFORMATION
	================
	
	The following installation and usage instructions are included on the
	READNOW.TXT file included in the MSWFW8.EXE self-extracting EXE file:
	
	To create a Windows for Workgroups version 3.11 3.5-inch, 1.44 megabyte Disk 8:
	
	1. Create a temporary directory on your hard disk drive. For example, type "MD
	  C:\MSWFW8" (without the quotation marks) at the MS-DOS command prompt and
	  then press ENTER.
	
	2. Copy MSWFW8.EXE to the temporary directory created in step 1. For example,
	  type "copy a:mswfw8.exe c:\mswfw8" (without the quotation marks) at the
	  MS-DOS command prompt and then press ENTER.
	
	3. Change to drive C by typing "c:" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	4. Change to the MSWFW8 directory by typing "cd \mswfw8" (without the quotation
	  marks) at the MS-DOS command prompt and then press ENTER.
	
	5. Run MSWFW8.EXE by typing "c:\mswfw8\mswfw8" (without the quotation marks) at
	  the MS-DOS command prompt and then pressing ENTER. This expands the Windows
	  for Workgroups 3.11 files.
	
	6. Delete MSWFW8.EXE from the temporary directory. For example, type "del
	  c:\mswfw8\mswfw8.exe" (without the quotation marks) at the MS-DOS command
	  prompt and then press ENTER.
	
	7. Copy the remaining files to newly formatted a high-destiny (1.44 megabyte),
	  3.5-inch disk. For example, type "copy c:\mswfw8\*.* a:" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	8. Change the volume label on the floppy disk to MSWFW8 using the LABEL program.
	  For example, type "label a: mswfw8" (without the quotation marks) at the
	  MS-DOS command prompt and then press ENTER.
	
	9. Delete the files in the temporary directory on your hard disk drive. For
	  example, type "del c:\mswfw8\*.*" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	10. Remove the temporary C:\MSWFW8 directory. For example, type "rd c:\mswfw8"
	  (without the quotation marks) at the MS-DOS command prompt and then press
	  ENTER.
	
	You should now be able to use your newly created Windows for Workgroups Disk 8 to
	install Windows for Workgroups.
	
	Additional query words: 3.11 disk1 disk8
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
