---
layout: page
title: "Q253678: HOWTO: Detect 16-Bit CD-ROM Drives in Windows 95 and Windows 98"
permalink: /kb/253/Q253678/
---

## Q253678: HOWTO: Detect 16-Bit CD-ROM Drives in Windows 95 and Windows 98

	Article: Q253678
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbFileIO kbKernBase kbOSWin95 kbOSWin98 kbDSupport kbGrpDSKernBase
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application may need to detect whether the CD-ROM driver employs a 16-bit or
	32-bit driver. Because 16-bit CD-ROM drivers do not multitask well, a multimedia
	application may choose not to stream information directly from the CD-ROM if a
	16-bit driver is being used. This article explains how to detect this system
	configuration.
	
	MORE INFORMATION
	================
	
	An application can detect whether MSCDEX (the 16-bit driver) or CDFS (the 32-bit
	driver) is being used to access the CD-ROM drive by inspecting the number of
	sectors per cluster. MSCDEX reports one sector per cluster, whereas CDFS reports
	sixteen sectors per cluster. Microsoft Windows NT always uses a 32-bit driver.
	
	The following sample code demonstrates how to use the GetVersion and
	GetDiskFreeSpace functions to detect whether the CD-ROM driver is 16-bit or
	32-bit:
	
	  #include <windows.h>
	  #include <stdio.h>
	
	  /*
	   * pszDriveRoot is a string value such as "D:\".
	   * It is assumed that the caller has
	   * already verified that it refers to a CD-ROM drive.
	   */ 
	  BOOL IsCDROM16Bit(char *pszDriveRoot)
	  {
	      DWORD dwSectorsPerCluster, dwDummy;
	
	      /* If Windows NT, then driver is always 32-bit. */ 
	      if (!(GetVersion() & 0x80000000))
	      {
	          return FALSE;
	      }
	
	      /* Get the sectors per cluster. */ 
	      if (!GetDiskFreeSpace(pszDriveRoot, 
	              &dwSectorsPerCluster,
	              &dwDummy, 
	              &dwDummy,
	              &dwDummy))
	      {
	          return FALSE;
	      }
	
	      /* If sectors per cluster is 1, then we are using MSCDEX. */ 
	      return dwSectorsPerCluster == 1;
	  }
	
	  int main(int argc, char *argv[])
	  {
	      LPSTR lpstrCDROMDrive = "D:\\";
	
	      if(argc > 1)
	          lpstrCDROMDrive = argv[1];
	
	      if (GetDriveType(lpstrCDROMDrive) == DRIVE_CDROM)
	      {
	          printf("Drive %s is using %d-bit CDROM drivers", lpstrCDROMDrive, IsCDROM16Bit(lpstrCDROMDrive) ? 16 : 32);
	      }
	      else 
	      {
	          printf("Drive %s is not a CDROM", lpstrCDROMDrive);
	      }
	      return 0;
	  }
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFileIO kbKernBase kbOSWin95 kbOSWin98 kbDSupport kbGrpDSKernBase 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95,98,98 Second Edition
	Issue type        : kbhowto
	
	=============================================================================
	
