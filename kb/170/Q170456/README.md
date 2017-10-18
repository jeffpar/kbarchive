---
layout: page
title: "Q170456: Less Conventional Memory Available in European OSR2"
permalink: kb/170/Q170456/
---

## Q170456: Less Conventional Memory Available in European OSR2

	Article: Q170456
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbfile osr2 diskmem kbgraphxlinkcritical kbDiskMemorykbfixlist
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some localized non-English versions of Windows 95 OEM Service Release 2 and
	2.1 (OSR2), there may be less conventional memory available to MS-DOS-based
	programs.
	
	In these versions, the MEM /C command may show Himem.sys occupying approximately
	44K of conventional memory. In the English version of OSR2, the MEM /C command
	shows Himem.sys occupying approximately 1K of conventional memory.
	
	This issue is known to affect the following language versions of OSR2: Brazilian,
	Danish, Dutch, Finnish, French, German, Italian, Norwegian, Portuguese, and
	Spanish.
	
	CAUSE
	=====
	
	The increased conventional memory used by Himem.sys occurs because Io.sys
	occupies more memory in the high memory area (HMA), forcing Himem.sys to be
	relocated in conventional memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 OEM Service
	Release 2 and 2.1. An update to address this problem is now available, but
	should be applied only to computers experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft does not recommend
	implementing this update at this time. Contact the vendor of your OEM version of
	Windows 95 for additional information about the availability of this update, or
	obtain the update from the Microsoft Download Center, as described below.
	
	This issue is resolved by the following updated files for OSR2:
	
	  Brazilian:  Winboot.sys dated 12/31/96 (214,836 bytes)
	  Danish:     Winboot.sys dated 01/09/97 (214,836 bytes)
	  Dutch:      Winboot.sys dated 01/06/97 (214,836 bytes)
	  Finnish:    Winboot.sys dated 01/15/97 (214,836 bytes)
	  French:     Winboot.sys dated 12/31/96 (214,836 bytes)
	  German:     Winboot.sys dated 01/06/97 (214,836 bytes)
	  Italian:    Winboot.sys dated 12/31/96 (214,836 bytes)
	  Norwegian:  Winboot.sys dated 12/31/96 (214,836 bytes)
	  Portuguese: Winboot.sys dated 02/17/97 (214,836 bytes)
	  Spanish:    Winboot.sys dated 12/31/96 (214,836 bytes)
	
	To install this update, follow these steps:
	
	1. Download the appropriate Iosys<xxx>.exe file from the Microsoft
	  Download Center to an empty folder.
	
	     Language version   Download this file
	     -------------------------------------
	     Brazilian          Iosysbrz.exe
	     Danish             Iosysdan.exe
	     Dutch              Iosysdut.exe
	     Finnish            Iosysfin.exe
	     French             Iosysfrn.exe
	     German             Iosysger.exe
	     Italian            Iosysitn.exe
	     Norwegian          Iosysnor.exe
	     Portugese         Iosyspor.exe
	     Spanish            Iosysspa.exe
	
	2. In My Computer or Windows Explorer, double-click the file you downloaded in
	  step 1.
	
	3. Follow the instructions on the screen.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Download Iosysbrz.exe now
	
	  Download Iosysdan.exe now
	
	  Download Iosysdut.exe now
	
	  DownloadDownload Iosysfin.exe now (http://support.microsoft.com/download
	  /support/mslfiles/Iosysfin.exe)
	
	  Download Iosysfrn.exe now
	
	  Download Iosysger.exe now
	
	  Download Iosysitn.exe now
	
	  Download Iosysnor.exe now
	
	  Download Iosyspor.exe now
	
	  Download Iosysspa.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	This symptom occurs whether the computer boots from the hard disk or from an
	Emergency Recovery Disk.
	
	To resolve this issue on computers that already have the affected versions of
	OSR2 installed, run the appropriate Iosys<xxx>.exe file to update your
	OSR2 installation. This will check that your computer is running OSR2 and
	replace the Io.sys file on the boot drive.
	
	To update an existing OSR2 Emergency Recovery Disk (ERD), use the SYS A: (or SYS
	B: as appropriate) command at a command prompt or in the Run dialog box. Make
	sure that the ERD is not write protected.
	
	
	Note that there is a fix available for Microsoft Windows 98 as well, for the
	following languages:
	
	  Finnish, Polish, and Brazilian/Portugese
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q197030 Less Conventional Memory in European Versions of Windows 98
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kbfile osr2 diskmem kbgraphxlinkcritical kbDiskMemory kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
