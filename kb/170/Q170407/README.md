---
layout: page
title: "Q170407: WD97: ErrMsg Saving Graphic File to Read Only Share"
permalink: /kb/170/Q170407/
---

## Q170407: WD97: ErrMsg Saving Graphic File to Read Only Share

{% raw %}

	Article: Q170407
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kberrmsg kbusage winword word97
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Photo Editor, version 3.0.2.3 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to save a file in Microsoft Photo Editor, you may receive the
	following error message:
	
	  Error opening
	  <Share\Share Directory\Filename>
	
	Clicking OK closes the dialog box with no opportunity to save the file.
	
	CAUSE
	=====
	
	This problem occurs when you open a graphic file from a read-only shared network
	directory (share), make a change to the file, and then click Save on the File
	menu.
	
	WORKAROUND
	==========
	
	To work around this problem follow these steps to save the file to another
	location:
	
	1. On the File menu, click Save As.
	
	2. In the Save In box, navigate to a folder that is not a read-only share.
	
	3. In the File Name box, enter the name of the file, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Photo Editor 97.
	
	MORE INFORMATION
	================
	
	For additional information about Photo Editor, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q169938 OFF97: General Information About Microsoft Photo Editor
	
	  Q165812 OFF97: Photo Editor Is Not Installed by the ValuPack
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kberrmsg kbusage winword word97 
	Technology        : kbWordSearch kbHomeProdSearch kbPowerPtSearch kbPhotoEd97
	Version           : :97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
