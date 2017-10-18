---
layout: page
title: "Q128578: PC WSPlus: Timex Data Link Error - Cannot Find VFORMS.DLL"
permalink: kb/128/Q128578/
---

## Q128578: PC WSPlus: Timex Data Link Error - Cannot Find VFORMS.DLL

	Article: Q128578
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Timex Data Link software with Schedule+ for Windows, the user
	may receive the following error message:
	
	  Cannot find VFORMS.DLL
	
	The problem will only affect users who are running Microsoft Windows 3.1, not
	Microsoft Windows for Workgroups.
	
	RESOLUTION
	==========
	
	This problem was corrected in VFORMS.DLL version 3.2.0.4064. If you do not have
	version 3.2.0.4064 (or later), the following self-extracting file is available
	for download from the Microsoft Software Library:
	
	  ~ Vformupd.exe
	  (http://support.microsoft.com/download/support/mslfiles/Vformupd.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q96747 Mail for Windows VFORMS.DLL 3.2.0.4064 Update
	
	
	MORE INFORMATION
	================
	
	Schedule+ for Windows does not include this DLL on any of the four installation
	disks. VFORMS.DLL is a file used by Microsoft Mail for Windows versions 3.0b and
	later. If you are running Windows for Workgroups, you have Mail built-in;
	therefore, you have the DLL. Windows does not include Mail or the DLL.
	
	Data Link for Windows is manufactured by Timex Corporation. For further
	information, contact Timex technical support at 800-328-2677.
	
	Additional query words: schedule plus 1.00 1.00a datalink
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
