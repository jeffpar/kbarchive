---
layout: page
title: "Q119414: PC WRmt: Mail Remote for Windows Address List Creation"
permalink: /kb/119/Q119414/
---

## Q119414: PC WRmt: Mail Remote for Windows Address List Creation

{% raw %}

	Article: Q119414
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Remote for Windows derives all of its addressing
	information from one file, RNETWORK.GLB. This file is created by the Microsoft
	Mail administrator and is placed on the user's data disk during the Remote,
	Init_Disk process. When the remote user requests an update of address lists, an
	updated version of this file is downloaded from the postoffice.
	
	During the installation of the data disk:
	
	- The remote client parses RNETWORK.GLB and creates a pseudo postoffice in the
	  WINDOWS\MSMAIL\MSRMT subdirectory. The pseudo postoffice consists of the ATT,
	  GLB, INF, KEY, MAI, MBG, NME, P1, TPL, USERINFO, USR, and XTN directories.
	
	- Once RNETWORK.GLB has been converted to the postoffice addressing scheme, a
	  REBUILD routine (a modified version of Dir-Sync GAL REBUILD) is invoked to
	  build the GAL comprising of GAL.NME, GALINDEX.GLB, and GALNETPO.GLB.
	
	MORE INFORMATION
	================
	
	If EXTERNAL.EXE is active around 4 A.M., it will regenerate the default view for
	the remote users (for example, RNETWORK.GLB). External will not regenerate
	custom views that are stored in xxxxxxxx.GLB.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
