---
layout: page
title: "Q281218: XADM: LoadSim Error Message: STG_E_FILENOTFOUND"
permalink: kb/281/Q281218/
---

## Q281218: XADM: LoadSim Error Message: STG_E_FILENOTFOUND

	Article: Q281218
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Initialize Test phase of LoadSim Setup, the
	following error message is displayed:
	
	  OLE: STGOPENSTORAGE (Ups1k.msg): Error: STG_E_FILENOTFOUND
	
	CAUSE
	=====
	
	This issue can occur if the current simulation file points to the wrong path.
	The simulation (.sim) file is saved when you quit the LoadSim tool. This file is
	automatically reloaded when you restart LoadSim.
	
	LoadSim is installed into C:\Program Files\Load Simulator, by default. If the
	.sim file is saved in a different folder, when you restart LoadSim, the .sim
	file that was previously used is reloaded, but it is unable to find any of the
	.msg files. This behavior occurs because the .sim file references the .msg files
	with relative paths, and assumes that the .msg files are in the same folder as
	the .sim file.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that the .sim file that you are using is in the
	same folder as the .msg files that LoadSim installs.
	
	
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
