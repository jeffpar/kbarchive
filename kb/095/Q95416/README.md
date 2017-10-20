---
layout: page
title: "Q95416: Video: Unexpected Exit Error Message During Setup"
permalink: /kb/095/Q95416/
---

## Q95416: Video: Unexpected Exit Error Message During Setup

{% raw %}

	Article: Q95416
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains why the following error message may be generated when you
	install Video for Windows:
	
	  Unexpected exit, please report this to Microsoft Product Support
	
	This error is generated if you have McAfee's virus protection software Vshield
	version 5.1 v97 installed on your system. To successfully install Video for
	Windows, temporarily disable Vshield by using the MS-DOS REM command to remark
	out the Vshield entries in the AUTOEXEC.BAT and CONFIG.SYS files. (For
	information about how to use the REM command, see your MS-DOS documentation)
	
	There may be similar products that produce this error message.
	
	McAffee's virus protection software Vshield is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	If you suspect that your computer has a virus and you are using MS-DOS 6.0 or
	later, run Microsoft Anti-Virus. If you are running an earlier version of
	MS-DOS, either obtain MS-DOS 6.0 or later, or obtain help from a third- party
	virus-correction service or vendor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
