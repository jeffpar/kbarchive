---
layout: page
title: "Q131415: Multimedia Composer Titles May Stop Responding on Exit"
permalink: /kb/131/Q131415/
---

## Q131415: Multimedia Composer Titles May Stop Responding on Exit

{% raw %}

	Article: Q131415
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Mozart for Windows, versions 1.0, 1.0a 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to exit one of the programs listed at the top of this article, your
	computer may stop responding (hang) and require you to restart the system.
	
	If you try to restart the computer by pressing and holding down the CTRL key and
	the ALT key while you press the DEL key (CTRL+ALT+DEL), you may receive the
	following message:
	
	  The following application has stopped responding:
	
	  MMTASK.EXE
	
	You may have to turn the computer off to restart.
	
	RESOLUTION
	==========
	
	This problem can occur when OLE 2.02 system files are installed on the
	computer.
	
	To correct this problem, copy the file Compobj.dll from the CD into the
	Multimedia composer application directory on the hard drive.
	
	MORE INFORMATION
	================
	
	Recopying Compobj.dll onto the Hard Drive
	-----------------------------------------
	
	For example, type the following at the MS-DOS command prompt and press ENTER
	
	  "copy d:\schubert\msstp\system\compobj.dll c:\schubert" (without the
	  quotation marks)
	
	where D is the drive letter for your CD-ROM drive, C:\SCHUBERT is the path where
	Schubert is installed, and Schubert is the multimedia title you are installing.
	
	Determining the Version of OLE2 System Files
	--------------------------------------------
	
	To verify your version of OLE files, check the size of the following files found
	in the Windows\System directory:
	
	File                OLE 2.0               OLE 2.01         OLE 2.02
	-------------------------------------------------------------------
	
	Compobj.dll          89,088                102,400          108,544
	              (or) 101,888
	
	Ole2disp.dll         90,112                 90,128          164,832
	                                      (or) 90,144
	                                      (or) 98,336
	
	If the versions of Compobj.dll and Ole2.dll are mismatched, a full set of matched
	OLE files should be obtained.
	
	An update to OLE 2.03 is available from Microsoft.
	
	For additional information about obtaining this update, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q123087 OLE Version 2.03
	
	
	Additional query words: 1.00a mmtitles reboot hang freeze crash frozen lock up lockup crashes hangs bombs bombed gp gpf general protection fault object linking embedding
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMMozart100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
