---
layout: page
title: "Q231525: MapPoint 2000 Err Msg: There Was a Problem Opening this File..."
permalink: kb/231/Q231525/
---

## Q231525: MapPoint 2000 Err Msg: There Was a Problem Opening this File...

	Article: Q231525
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to link data in a Microsoft Excel workbook to Microsoft
	MapPoint 2000, you may receive the following error message:
	
	  There was a problem opening this file: <filename>. Could not decrypt
	  the file.
	
	CAUSE
	=====
	
	This behavior can occur if you are required to enter a password to open the
	Excel workbook.
	
	NOTE: This behavior does not occur if you are required to enter a password to
	modify the workbook.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the password required to open any Excel workbook
	from which you want to link data. To do this:
	
	1. Open an Excel workbook from which you want to link data.
	
	2. On the File menu, click Save As.
	
	3. On the Tools menu, click General Options.
	
	4. Delete the characters in the Password To Open box.
	
	5. Click OK, and then click Save. If you are prompted to replace the existing
	  file, click Yes.
	
	6. Repeat steps 1-5 for each Excel workbook from which you want to link data.
	
	Additional query words: mp2000 protected secure security
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
