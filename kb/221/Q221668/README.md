---
layout: page
title: "Q221668: FIX: Component Gallery Places Focus in Linked Item Folder"
permalink: /kb/221/Q221668/
---

## Q221668: FIX: Component Gallery Places Focus in Linked Item Folder

{% raw %}

	Article: Q221668
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When deleting a pasted link in the Component Gallery, focus will be returned to
	the folder that the link was originally copied from rather than remaining in the
	current folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Component Gallery.
	
	2. Select an item.
	
	3. Right-click this item and choose Copy.
	
	4. Select another folder in the Component Gallery.
	
	5. Right-click and choose Paste Link.
	
	6. Delete this newly-pasted link.
	
	You will notice that focus has been shifted from the folder where the item was
	pasted back to the folder where the item was originally copied.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
