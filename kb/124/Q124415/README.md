---
layout: page
title: "Q124415: Cinemania 1995: Manual Setup Err Msg: &quot;Path Not Found&quot;"
permalink: /kb/124/Q124415/
---

## Q124415: Cinemania 1995: Manual Setup Err Msg: &quot;Path Not Found&quot;

{% raw %}

	Article: Q124415
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1995 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Pss.bat file located in the Aamsstp\Manual folder on the
	Microsoft Cinemania 1995 compact disc, you receive the error message "Path not
	found" after the first seven files are copied.
	
	RESOLUTION
	==========
	
	To work around this problem, do the following:
	
	1. Run the Pss.bat file.
	
	2. Make the system changes described in the Msetup.txt file.
	
	3. At an MS-DOS prompt, copy all the files from the Aamsstp\System folder
	  (subdirectory) on the compact disc to the Windows\System folder on your hard
	  disk. For example, if your CD-ROM drive is drive X, and your hard disk drive
	  is drive C, to copy the files, type the following line and press ENTER:
	
	  "copy x:\aamsstp\system\*.* c:\windows\system" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The manual installation batch file for Cinemania 1995 does not specify the
	correct path name for most of the files it is supposed to copy. The batch file
	specifies the System directory as the source for the files, but the files are
	actually in the Aamsstp\System folder.
	
	CAUTION: The manual installation batch file for Cinemania 1995 should not be used
	on computers running Microsoft Windows 95 or Microsoft Windows NT.
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles set up error message pathing bat man installation
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1995
	Version           : :1995 edition
	
	=============================================================================
	

{% endraw %}
