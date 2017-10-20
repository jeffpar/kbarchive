---
layout: page
title: "Q260258: PC NTMMTA: Path Restrictions for NTMMTA Setup Folder"
permalink: /kb/260/Q260258/
---

## Q260258: PC NTMMTA: Path Restrictions for NTMMTA Setup Folder

{% raw %}

	Article: Q260258
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to run the Windows NT multitasking message transfer agent (NTMMTA)
	setup on any computer that has long file name capabilities, you may receive the
	following error message:
	
	  GetModuleFileName()did not return a full path
	
	CAUSE
	=====
	
	The MS-DOS-based code for this program cannot understand long file names.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that no folders in the path of the setup
	folder contain any of the following in the folder name:
	
	- More than eight characters
	
	- Spaces
	
	- Any MS-DOS-excluded characters, such as the following:
	
	  
	
	  < > (angle brackets)
	  ?   (question mark)
	  /   (slash mark)
	  \   (backslash)
	  #   (number sign)
	  !   (exclamation point)
	  %   (percent)
	  *   (asterisk)
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q260253 PC NTMMTA: Windows NT Multitasking Message Transfer Agent Setup on
	  Windows 2000 Advanced Server May Not Work If Started from Graphical User
	  Interface
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN3xSearch
	Version           : WINDOWS:3.x
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
