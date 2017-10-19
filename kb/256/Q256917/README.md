---
layout: page
title: "Q256917: BUG: Windows 2000 Upgrade Fails to Convert System Drive to NTFS"
permalink: /kb/256/Q256917/
---

## Q256917: BUG: Windows 2000 Upgrade Fails to Convert System Drive to NTFS

	Article: Q256917
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbOSWin2000bug kbDSupport
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you upgrade a computer running Windows NT 4.0 with the Windows 2000 CD-ROM
	and you choose to convert the drive to NTFS, the drive may not be converted.
	This problem only occurs on systems that have been created using the System
	Preparation Tool for Windows NT 4.0 (Sysprep).
	
	RESOLUTION
	==========
	
	To resolve this problem, you can convert the drive after installation of Windows
	2000 using the Convert.exe utility. To do so, from a command prompt type:
	
	  "convert c: /fs:ntfs" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Install Windows NT 4.0.
	
	2. Run Sysprep for Windows NT 4.0.
	
	3. Reboot and complete minisetup.
	
	4. Boot Windows NT 4.0.
	
	5. Insert the Windows 2000 CD-ROM.
	
	6. Choose to upgrade the system.
	
	7. Select convert the drive to NTFS.
	
	8. Complete Windows 2000 Setup.
	
	The system drive is not converted to NTFS.
	
	
	For additional information about Sysprep for Windows NT 4.0, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q180962 How to Identify When the System Preparation Tool Is Used
	
	Additional query words: sysprep convertNTFS upgrade kbopk kbsbk
	
	======================================================================
	Keywords          : kbOSWin2000 kbOSWin2000bug kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
