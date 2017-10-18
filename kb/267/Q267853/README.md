---
layout: page
title: "Q267853: Err Msg: Installation of This Application Has Been Corrupted"
permalink: kb/267/Q267853/
---

## Q267853: Err Msg: Installation of This Application Has Been Corrupted

	Article: Q267853
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2001 
	- Microsoft Streets and Trips 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs listed at the beginning of this article, you
	may receive the following error message:
	
	  The installation of this application has become corrupted. Run Setup again
	  from the location from which you originally installed it. (5-40003-7)
	
	CAUSE
	=====
	
	This behavior can occur if registry settings for Microsoft Office 2000 templates
	are incorrect.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the path to the folder in which templates are
	saved in Microsoft Word 2000. To do this:
	
	1. Start Word 2000.
	
	2. On the Tools menu, click Options.
	
	3. Click the File Locations tab.
	
	4. Under "File types", click "User templates",and then click Modify.
	
	5. In the Folder name box, type the following:
	
	Windows 95, Windows 98, or Windows Millennium Edition:
	
	  "c:\windows\application data\microsoft\templates" (without the quotation
	  marks)
	
	Windows 2000:
	
	  "c:\winnt\profiles\allusers\application data\microsoft\templates" (without
	  the quotation marks)
	
	Windows XP:
	
	  "c:\windows\profiles\allusers\application data\microsoft\templates" (without
	  the quotation marks)
	
	6. Click OK, and then click OK again.
	
	7. Quit Word 2000.
	
	The program should now start successfully.
	
	Additional query words: mp2001 st2001 map point streets trips installs
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbMapptSearch kbMapPoint2001 kbExpediaStreets2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
