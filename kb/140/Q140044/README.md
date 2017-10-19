---
layout: page
title: "Q140044: Visual Basic Menus Disappear Using Shell Technology Preview"
permalink: /kb/140/Q140044/
---

## Q140044: Visual Basic Menus Disappear Using Shell Technology Preview

	Article: Q140044
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your Windows NT computer running the Shell Technology Preview for Windows NT
	3.51, toolbars, tooltips, and/or menus display incorrectly or not at all in
	applications created in Visual Basic.
	
	CAUSE
	=====
	
	The Shell Technology Preview has not been fully tested and should not be
	deployed in production environments. There is currently no official Microsoft
	Product Support Services support available for using the Shell Technology
	Preview on Windows NT version 3.51. If you wish to join other customers who are
	using and exchanging feedback on the Shell Technology Preview, Section 15 of the
	MSDR forum on CompuServe has been created for this type of member-to-member
	communication.
	
	If you wish to report a problem, please do so through our CompuServe or Internet
	services as follows. These are not support locations, but may be used to submit
	problems you encounter, using PROBREP.TXT (the problem report template included
	with the NewShell files).
	
	CompuServe: Upload PROBREP.TXT to the WINNT forum, Library 3.
	
	FTP: Connect to ftp.microsoft.com
	
	  ftp>cd e: ftp>cd incoming/bussys/winnt/probrep ftp>bin ftp>put
	  probrep.txt
	
	Internet mail: send to ntbug@microsoft.com
	
	RESOLUTION
	==========
	
	To correct these problems it is necessary to remove the New Shell by running
	SHUPDATE.CMD /U. This command will remove the Shell Technology Preview Update
	and reinstall Program Manager from the previous Windows NT 3.51 configuration.
	
	STATUS
	======
	
	These problems will be corrected in the next released version of Windows NT
	incorporating the new Shell Technology.
	
	Additional query words: SUR
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
