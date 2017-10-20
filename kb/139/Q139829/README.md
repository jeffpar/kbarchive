---
layout: page
title: "Q139829: 500 Nations: Icon Missing in Program Manager After Reinstall"
permalink: /kb/139/Q139829/
---

## Q139829: 500 Nations: Icon Missing in Program Manager After Reinstall

{% raw %}

	Article: Q139829
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 500 Nations, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete the 500 Nations icon from Program Manager, and then reinstall
	the program, Setup does not recreate the icon.
	
	CAUSE
	=====
	
	If the Nations.ini is detected during the Setup routine, the program does not
	recreate the icon.
	
	RESOLUTION
	==========
	
	To correct this problem, use one of the following two methods:
	
	Method 1
	--------
	
	Delete the Nations.ini file from the Windows folder. After you delete the .ini
	file, reinstall 500 nations. This enables Setup to create the icon.
	
	For more information about how to accomplish this task in Windows, see your
	Windows printed documentation or online Help.
	
	Method 2
	--------
	
	Recreate the program icon. To recreate the program icon, do the following:
	
	1. On the File menu in Program Manager, click New.
	
	2. Select Program Item, and click OK.
	
	3. In the Program Item Properties box, enter the following information:
	
	     Description: 500 Nations
	     Command Line: d:\nations.exe (where d is the CD-ROM drive letter)
	     Working Directory: d:\(where d is the CD-ROM drive letter)
	
	  Click OK.
	
	4. When the Network Path Specified confirmation dialog box appears, click Yes.
	
	The 500 Nations icon now appears in the active Program Manager group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft 500 Nations version
	1.00. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: progman multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kb500Nations100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
