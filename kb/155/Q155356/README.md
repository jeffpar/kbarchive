---
layout: page
title: "Q155356: Cannot Save Changes to Bootsector using Dskprobe"
permalink: /kb/155/Q155356/
---

## Q155356: Cannot Save Changes to Bootsector using Dskprobe

{% raw %}

	Article: Q155356
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 03-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Windows NT 4.0 Resource Kit application Dskprobe to edit a boot
	sector, the changes are not saved or written to disk if the currently loaded
	sector is not a recognized boot sector.
	
	MORE INFORMATION
	================
	
	Dskprobe performs a string compare on the OEM String field to determine if the
	data in the sector buffer is a boot sector. This is an eight-character field
	that begins at offset 0x03 in the boot sector. Only the first four characters
	are compared, and the comparison is case sensitive. Dskrobe recognizes the
	following values:
	
	  Value     Description
	  ---------------------
	  MSDOS     FAT formatted under MS-DOS or Windows NT 3.X on X86 platforms.
	  MSWIN     FAT formatted under Windows 95.
	  WINNT     FAT formatted under Windows NT 3.X or 4.0 on RISC platforms.
	  NTFS      NTFS formatted under Windows NT 3.X or 4.0 on any platform.
	
	If the OEM String field is invalid, it is still possible to edit Bootsector field
	values in a Bootsector view by changing the value in the OEM String field to
	match an accepted value. Use the following procedure to change the OEM String to
	allow editing fields in either Windows NT File System (NTFS) or File Allocation
	Table (FAT) Bootsector View:
	
	1. Read the sector into memory. Be sure only a single sector is loaded into
	  memory.
	
	2. On the View menu, click the appropriate boot sector view.
	
	3. Edit the OEM String field so that the first four characters match one of of
	  the expected values. Remember that FAT Bootsector View will not accept "NTFS"
	  and NTFS Bootsector View will not accept any of the FAT values.
	
	4. On the View menu, click Byte View.
	
	5. On the Sectors menu, click Write. Be sure the handle, starting sector, and
	  number of sectors are correct, and then write the change to disk.
	
	6. On the Sectors menu, click Read. Read the current sector into memory.
	
	7. Switch to the appropriate boot sector view and edit the desired field.
	  Changes will now be saved correctly.
	
	Additional query words: prodnt Reskit DiskProbe
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
