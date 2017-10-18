---
layout: page
title: "Q128216: SCHDPLUS.INI File Appears in Root Directory"
permalink: kb/128/Q128216/
---

## Q128216: SCHDPLUS.INI File Appears in Root Directory

	Article: Q128216
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SCHDPLUS.INI file reappears in the root directory of the hard disk even
	after you delete it.
	
	CAUSE
	=====
	
	You selected "Fax Only" when you installed Microsoft At Work PC Fax (AWFAX) in
	Windows for Workgroups 3.11.
	
	RESOLUTION
	==========
	
	1. Exit and sign out of Mail.
	
	2. Delete or rename the EFAXPUMP.INI file.
	
	3. Use any text editor (such as Notepad) to edit the MSMAIL.INI file. In the
	  [Providers] section, place a semicolon (;) at the beginning of the line that
	  reads
	
	        Name=PABNSP faxnsp
	
	  so that it looks like:
	
	        ;Name=PABNSP faxnsp
	
	4. Save and close the MSMAIL.INI file.
	
	5. Run the AWFAX Setup program again. Select "Email and Fax" instead of "Fax
	  Only."
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge base as it becomes available.
	
	Additional query words: 3.11 dir awfax msfax
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
