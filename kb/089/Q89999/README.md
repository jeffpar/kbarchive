---
layout: page
title: "Q89999: Removing Time Separator Causes Incorrect Time in File Manager"
permalink: /kb/089/Q89999/
---

## Q89999: Removing Time Separator Causes Incorrect Time in File Manager

	Article: Q89999
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the colon (:) separator in the International - Time Format dialog box is
	removed, File Manager truncates the minutes and seconds of the file date.
	
	MORE INFORMATION
	================
	
	If the separator is enabled, the File Manager time stamp has a reading such as
	"9:14:55 AM." If the separator is disabled, the File Manager time stamp has a
	reading such as "9." File Manager does not round the time to the nearest hour;
	for example, "9:59:59" becomes "9" when the separator is disabled.
	
	Additional query words: 3.10 3.11 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWFW310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	
