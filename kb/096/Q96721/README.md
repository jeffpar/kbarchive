---
layout: page
title: "Q96721: PC WRmt: Direct Export to Primary Message File Clears PAB"
permalink: /kb/096/Q96721/
---

## Q96721: PC WRmt: Direct Export to Primary Message File Clears PAB

{% raw %}

	Article: Q96721
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail Remote version 3.2 for Windows, do not use the Export command
	on the File menu to copy folders between the primary transport messages files
	(in other words, between MSMAIL.MMF and MS_ATT.MMF).
	
	If you use the Export command to copy folders, Mail clears the Personal Address
	Book (PAB) in the destination message file and copies the PAB associated with
	the current driver to the destination message file.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
