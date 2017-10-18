---
layout: page
title: "Q123449: PPT: &quot;1 3/4.PPT. Sorry, the File Cannot Be Found&quot; Error"
permalink: kb/123/Q123449/
---

## Q123449: PPT: &quot;1 3/4.PPT. Sorry, the File Cannot Be Found&quot; Error

	Article: Q123449
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbviewer
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the playlist in either PowerPoint or PowerPoint Viewer, you
	get one of the following error messages:
	
	  1 3/4.PPT
	  Sorry, the file cannot be found
	
	  -or-
	
	  1 3/4.PPT
	  Sorry, the filename is invalid
	
	CAUSE
	=====
	
	Your playlist is not in text file format. If you created the playlist in
	Microsoft Write and saved the file in any format other than Text, your playlist
	file will contain unwanted formatting data. PowerPoint and PowerPoint Viewer can
	only read a pure text file that has no additional formatting.
	
	RESOLUTION
	==========
	
	To successfully create a playlist file in Microsoft Write, save the file using
	the following steps:
	
	1. From the File menu, choose Save As.
	
	2. From the Save File As Type list, select Text Files (*.TXT).
	
	3. Give the file a name with eight or fewer characters, and change the .TXT
	  extension to .LST.
	
	4. Choose OK to save the file.
	
	MORE INFORMATION
	================
	
	Microsoft PowerPoint and the PowerPoint Viewer use playlists to show several
	consecutive presentation files. A playlist is a text file that contains the name
	of each presentation to be played on a separate line.
	
	Additional query words: 3.00 4.00 4.00a 4.00c power point powerpt macppt winppt
	
	======================================================================
	Keywords          : kberrmsg kbviewer 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
