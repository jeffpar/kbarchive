---
layout: page
title: "Q172581: Golf 3.0: Cannot Use Devil's Island Golf Course"
permalink: /kb/172/Q172581/
---

## Q172581: Golf 3.0: Cannot Use Devil's Island Golf Course

{% raw %}

	Article: Q172581
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage
	Last Modified: 29-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Golf, version 3.0 does not recognize Access Software's Devil's Island
	fantasy golf course even when the golf course is on the hard disk.
	
	CAUSE
	=====
	
	The golf course system file, Devils_i.crh, is not in the Golf 3.0 folder.
	
	  -or -
	
	There is an apostrophe in the name Devil's Island in the Msglfcrs.ini file. The
	apostrophe must be removed before playing the course in Golf 3.0.
	
	RESOLUTION
	==========
	
	If Devils_i.crh is in the Golf 3.0 directory, you will need to edit the
	Msglfcrs.ini file to remove the apostrophe in the name Devil's Island.
	
	Use the following steps to edit the Msglfcrs.ini file:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. Double-click the Program Files folder, and then double-click the Microsoft
	  Games folder or the folder in which you installed Golf 3.0.
	
	3. Double-click the Golf 3.0 folder, then double-click the Msglfcrs.ini file to
	  open it.
	
	4. In the Msglfcrs.ini file, under the [Courses] section, remove the apostrophe
	  between the "l" and "s" in the word Devil's. Devil's Island should now appear
	  as Devils Island.
	
	5. Save and exit the file.
	
	6. Start Golf 3.0.
	
	NOTE: If there are no quotation marks around the name "Devils Island", then the
	Devils_i.crh file may be damaged. For Golf 3.0 to use a correct version of the
	course, remove the Devils_i.crh file from your hard disk, and then copy a new
	version of the file from the compact disc Devils_i folder on your hard disk.
	
	Additional query words: 3.00 Access links fantasy devil devils 386 pro install
	
	======================================================================
	Keywords          : kb3rdparty kbusage 
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
