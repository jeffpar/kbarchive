---
layout: page
title: "Q196021: Windows NT 4.0 SP4 Does Not Update MTS Files"
permalink: /kb/196/Q196021/
---

## Q196021: Windows NT 4.0 SP4 Does Not Update MTS Files

	Article: Q196021
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Transaction Server (MTS) files are not replaced by the updated file
	versions during the Windows NT 4.0 Service Pack 4 (SP4) installation process.
	
	CAUSE
	=====
	
	If MTS was installed into a directory other than the default directory,
	<systemroot>\Program Files\Mts, the Windows NT SP4 installation process
	will not detect the MTS files and will not update them.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  11/10/98  11:29a               139,024 Update.exe    (x86)
	  11/10/98  08:21a               143,434 Update.inf    (x86)
	
	  11/10/98  11:29a               205,072 Update.exe    (Alpha)
	  11/10/98  11:31a               137,618 Update.inf    (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	This hotfix includes a revised version of the Service Pack 4 installation
	files.
	
	Instructions to implement the hotfix:
	
	1. Locate the extracted SP4 files in a folder on a hard drive.
	
	
	2. Copy the Update.exe and Update.inf files from the hotfix into the I386\Update
	  folder of the extracted service pack (or the Alpha\Update folder for Alpha
	  computers).
	
	3. Open the command prompt window and change the folder to
	
	  <path to expanded SP files>\I386\Update
	
	  -or-
	
	  <path to expanded SP files>\Alpha\Update
	
	  (depending upon whether you have an x86 or Alpha CPU) and type:
	
	  UPDATE
	
	4. Follow the instructions that appear on the screen.
	
	REFERENCES
	==========
	
	For additional information about downloading and extracting Service Pack 4,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Additional query words: sp4 mts update replace default
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : :4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
