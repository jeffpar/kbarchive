---
layout: page
title: "Q137769: Baseball Daily 1995: How to Download Previous Issues"
permalink: kb/137/Q137769/
---

## Q137769: Baseball Daily 1995: How to Download Previous Issues

	Article: Q137769
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During the current season, Complete Baseball Guide provides a way to download
	previous issues of Baseball Daily you may have missed.
	
	You can also download issues for dates prior to when you registered for Baseball
	Daily (back issues).
	
	MORE INFORMATION
	================
	
	NOTE: The following steps involve finding and editing .ini files. For more
	information about how to accomplish this task in Windows, see your Windows
	printed documentation or online help.
	
	To download previous issues of the Baseball Daily, do the following:
	
	1. Change the following line, located in the [BS95OL] section of the
	  Mssports.ini file,
	
	        [BS95OL]
	        LastDownload=YYYYMMDD.MVB
	
	  (where YYYY=1995, MM=Month, and DD=Day)
	
	  to one day before the issue you would like to download. The file can be edited
	  in a text editor such as WordPad or Notepad.
	
	  NOTE: The file Mssports.ini is located in the Windows folder.
	
	  For example, suppose you would like to set the date to August 2, 1995 and
	  continue downloading copies up to the current date. The LastDownload= entry
	  should look like the following:
	
	        LastDownload=19950802.MVB
	
	2. Move, rename or delete the current days *.mvb file from the Msbs95\Bs95_dly
	  folder.
	
	After completing these changes, you can use Baseball Daily to download back
	issues.
	
	Additional query words: kbhowto 1995 multi media multimedia multi-media mmtitles kbmm receive receiving
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbCompleteBaseballSearch kbCompleteBaseball1995
	Version           : WINDOWS:
	
	=============================================================================
	
