---
layout: page
title: "Q137112: Select Drive Button Available with Only One Compressed Drive"
permalink: /kb/137/Q137112/
---

## Q137112: Select Drive Button Available with Only One Compressed Drive

{% raw %}

	Article: Q137112
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click Stop, or click Pause and then click Exit, while you are
	recompressing files with Compression Agent, you receive the following message:
	
	  Compression Agent has not finished recompressing drive <drive>.
	
	  You can resume work on drive <drive>, select a different drive, or exit.
	  Your choice will not affect the work Compression Agent has already completed
	  on drive <drive>.
	
	If you then click Select Drive, Compression Agent may not give you the option to
	recompress a different drive. Instead, the compression process may stop.
	
	CAUSE
	=====
	
	This problem can occur when you run Compression Agent on a computer with only
	one compressed drive.
	
	RESOLUTION
	==========
	
	To prevent the compression process from being stopped, click Resume instead of
	Select Drive.
	
	NOTE: There is no risk of data loss if you click Select Drive and the compression
	process stops. To restart the compression process, click Start in the main
	Compression Agent window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Select Drive button is intended to let you select a different compressed
	drive to recompress on computers with more than one compressed drive.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
