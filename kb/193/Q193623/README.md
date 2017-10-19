---
layout: page
title: "Q193623: HOWTO: Determine the Logical Drives on a System"
permalink: /kb/193/Q193623/
---

## Q193623: HOWTO: Determine the Logical Drives on a System

	Article: Q193623
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the GetLogicalDrives() API function to find which logical drives are
	present in a system. The GetLogicalDrives() function returns a 32-bit value in
	which each bit represents whether the logical drive exists. For example, if the
	system has an A drive, bit 0 will be set, and if the system has a drive Z, bit
	25 will be set.
	
	MORE INFORMATION
	================
	
	The following program demonstrates the use of the GetLogicalDrives() API
	function. The sample program calls the function and loops through each bit of
	the return value, using the FoxPro Bittest() function to determine if a
	particular drive is present or not. It displays all the drives on the system and
	their drive types in a message box.
	
	Sample Code
	-----------
	
	     * This program enumerates all drives on a Win32 system and
	     * displays a message box containing the drive letters and
	     * types of all logical drives on the system.
	     *
	
	     * Constants for drive types.
	     #DEFINE DRIVE_UNKNOWN 0
	     #DEFINE DRIVE_NO_ROOT_DIR 1
	     #DEFINE DRIVE_REMOVABLE 2
	     #DEFINE DRIVE_FIXED 3
	     #DEFINE DRIVE_REMOTE 4
	     #DEFINE DRIVE_CDROM 5
	     #DEFINE DRIVE_RAMDISK 6
	     #DEFINE CR CHR(13)
	
	     DECLARE INTEGER GetLogicalDrives IN Win32API
	     DECLARE INTEGER GetDriveType IN Win32API STRING RootPath
	
	     PRIVATE lcDrivestring, lcDriveRoot, liDrivelist, lcDrives, i
	     lcDrives = ""
	
	     * GetLogicalDrives returns a 32-bit value containing a list of
	     * available drives. If the specific bit is ON, the drive letter
	     * corresponding to that position exists.
	     liDrivelist = GetLogicalDrives()
	
	     * Check each of the bits
	     FOR i = 0 TO 31
	        IF BITTEST(liDrivelist, i)
	     * If the 0th bit is ON, that means drive 'A:',
	     * the 2nd bit is 'C:", etc.
	           lcDriveRoot = CHR(65 + i) + ":\"
	     * Perform a GetDriveType to determine if it is a floppy, CD, etc.
	           lcDrivetype = GetDriveType(lcDriveRoot)
	           DO CASE
	              CASE lcDrivetype = DRIVE_UNKNOWN
	                 lcDrivestring = "Cannot be determined"
	              CASE lcDrivetype = DRIVE_NO_ROOT_DIR
	                 lcDrivestring = "Root directory does not exist"
	              CASE lcDrivetype = DRIVE_REMOVABLE
	                 lcDrivestring = "Floppy/removable drive"
	              CASE lcDrivetype = DRIVE_FIXED
	                 lcDrivestring = "Hard drive/nonremovable drive"
	              CASE lcDrivetype = DRIVE_REMOTE
	                 lcDrivestring = "Remote/Network drive"
	              CASE lcDrivetype = DRIVE_CDROM
	                 lcDrivestring = "CD-ROM drive"
	              CASE lcDrivetype = DRIVE_RAMDISK
	                 lcDrivestring = "RAM disk"
	           ENDCASE
	           lcDrives = lcDrives + lcDriveRoot + " " + lcDrivestring + CR
	        ENDIF
	     NEXT
	
	     =MESSAGEBOX(lcDrives, ;
	        0 + 64 + 0)
	
	REFERENCES
	==========
	
	"Advanced Windows", Third Edition, Jeffrey Richter, pages 615-695, Microsoft
	Press, 1997.
	
	Additional query words: kbVFp600 kbAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
