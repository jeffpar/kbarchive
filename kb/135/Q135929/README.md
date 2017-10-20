---
layout: page
title: "Q135929: PC Adm: Do Not Use CONTROL.EXE from the July TechNet CD"
permalink: /kb/135/Q135929/
---

## Q135929: PC Adm: Do Not Use CONTROL.EXE from the July TechNet CD

{% raw %}

	Article: Q135929
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: CONTROL.EXE should not be used under any condition.
	
	Included with the July Microsoft TechNet CD is a utility, CONTROL.EXE, located in
	the Mail Resource Kit. The intent of the program is to open the CONTROL.GLB file
	and allow the you to see the next mailbag (.MBG) and the next mail message
	(.MAI) file name.
	
	CONTROL.EXE will actually write to CONTROL.GLB if the first and/or second byte
	pairs (read in reverse notation) are not 00.
	
	NOTE: CONTROL.EXE is being removed from future versions of the Microsoft TechNet
	CD.
	
	
	Additional query words: 3.00 3.00a 3.20 3.x
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a,3.2
	
	=============================================================================
	

{% endraw %}
