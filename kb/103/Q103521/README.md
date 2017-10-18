---
layout: page
title: "Q103521: DEVICEHIGH Uses UMB from Previous DEVICEHIGH Command"
permalink: kb/103/Q103521/
---

## Q103521: DEVICEHIGH Uses UMB from Previous DEVICEHIGH Command

	Article: Q103521
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	If you have a DEVICEHIGH statement without an explicit /L parameter, MS-DOS uses
	the same upper memory block (UMB) as the last DEVICEHIGH command that did have
	an explicit /L parameter. For example, if you have the following commands in
	your CONFIG.SYS file, RAMDRIVE.SYS loads into region two:
	
	  devicehigh/l:1=c:\dos\ansi.sys
	  devicehigh/l:2=c:\dos\dblspace.sys
	  devicehigh=c:\dos\ramdrive.sys
	
	If you remove the DEVICEHIGH command for DBLSPACE.SYS, RAMDRIVE.SYS loads into
	region one.
	
	NOTE: This example assumes both UMBs are large enough to hold RAMDRIVE.SYS.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
