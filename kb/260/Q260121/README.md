---
layout: page
title: "Q260121: PC NTMMTA: Setup Does Not Work on Windows 2000"
permalink: /kb/260/Q260121/
---

## Q260121: PC NTMMTA: Setup Does Not Work on Windows 2000

	Article: Q260121
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5; WINDOWS:2000,3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	- Microsoft Mail for PC Networks, version 3.x 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install the Microsoft Mail Multitasking MTA for Windows NT (NTMMTA) on
	a computer that is running Windows 2000 Server or Windows 2000 Advanced Server,
	you may receive the following error message
	
	  Setup has encountered a problem.
	  Please report File=COMMON\INFO1.C, Line=<###> to Microsoft Product
	  Support Services.
	
	where <###> is the line number (for example, 251). The exact line number
	will vary.
	
	A dialog box is displayed that informs you that the NTMMTA installation did not
	finish successfully, and then the installation stops.
	
	CAUSE
	=====
	
	This problem can occur because the NTMMTA setup checks for Microsoft Windows NT
	Server version 3.51 before the NTMMTA setup proceeds to the file coping process.
	Other versions of Windows are automatically rejected.
	
	NOTE: The NTMMTA is not supported on the Microsoft Windows 95, Microsoft Windows
	98, or Microsoft Windows NT for Workstations platforms.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-----------------------+
	| File name | Version   | 
	+-----------------------+
	| Setup.exe | 3.05.0002 | 
	+-----------------------+
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Mail Multitasking
	MTA for Windows NT, Version 3.5.
	
	Additional query words: FAILED
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin2000 kbOSWinSearch kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN3xSearch kbMailMMTA350NT
	Version           : :3.5; WINDOWS:2000,3.x
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
