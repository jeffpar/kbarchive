---
layout: page
title: "Q108818: WFWG May Hang at Startup with 32-Bit File Access &amp; NoEmmDriver"
permalink: kb/108/Q108818/
---

## Q108818: WFWG May Hang at Startup with 32-Bit File Access &amp; NoEmmDriver

	Article: Q108818
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have the setting NoEMMDriver=On in the [386Enh] section of your
	SYSTEM.INI file, your system may stop responding (hang) at startup with the
	Windows Logo screen displayed after you enable 32-bit file access.
	
	
	WORKAROUND
	==========
	
	If you delete the NoEMMDriver=ON entry, your system may be able to start
	Windows.
	
	NOTE: This works only if your system configuration requires the RMM.D32 file for
	32-bit file access. The RMM.D32 file is required for 32-bit file access with
	MS-DOS 6.2 DoubleSpace, Stacker, and hard disk drive controllers that are not
	INT 13 compatible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When the entry NoEMMDriver= is set to ON, it prevents Windows 386 enhanced mode
	from installing the expanded memory driver. This differs from setting EMMSize=0,
	which prevents upper memory blocks (UMBs) from being allocated but does not
	prevent the EMM driver from being loaded.
	
	The default value for NoEMMDriver= is OFF.
	
	A number of third-party software applications recommend placing this line in the
	SYSTEM.INI file to optimize Windows. If you experience any problems with your
	applications after you remove this entry, contact the manufacturer of the
	application.
	
	
	KBCategory: kbenv kbbuglist kbfasttip kbtshoot
	KBSubcategory: wfw wfwg
	
	Additional query words: vfat PCTOOLS Noemmdriver=true tshoot NDW noemm
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
