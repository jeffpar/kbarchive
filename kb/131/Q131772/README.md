---
layout: page
title: "Q131772: INFO: Setting Compare to Checksum Speeds GET Command"
permalink: /kb/131/Q131772/
---

## Q131772: INFO: Setting Compare to Checksum Speeds GET Command

	Article: Q131772
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By setting Compare to Checksum, you can increase the speed of the Get command.
	This may, however, provide unexpected results unless you are aware of the way
	SourceSafe compares the checksum.
	
	MORE INFORMATION
	================
	
	SourceSafe computes the checksum with the Update command. For the sake of
	efficiency, if Compare is not set to Checksum, SourceSafe doesn't compute the
	checksum value. As a result, when you first set Compare equal to Checksum, the
	checksum value is not available for comparison. When you use the Get command,
	SourceSafe continues to get the files until they are Updated. To resolve this
	issue, update the files immediately after setting Compare to Checksum.
	
	NOTE: Because the checksum is computed on each update, all SourceSafe users
	should set Compare equal to Checksum if one user does.
	
	For more information on how to improve the performance of the Get command by
	using the Compare to Time setting, please see the following article in the
	Microsoft Knowledge Base.
	
	  Q131773 Setting Compare to Time Increases Speed of GET Command
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304Mac kbSSafe310Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch kbSSafe304NT kbSSafe310NT
	Issue type        : kbinfo
	
	=============================================================================
	
