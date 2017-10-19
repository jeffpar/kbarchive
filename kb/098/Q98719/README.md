---
layout: page
title: "Q98719: Error M0052 Installing Compaq EISA DualSpeed TRing Card"
permalink: /kb/098/Q98719/
---

## Q98719: Error M0052 Installing Compaq EISA DualSpeed TRing Card

	Article: Q98719
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When installing the Compaq EISA DualSpeed token ring card, you encounter the
	following error :
	
	  M0052 : Bad PROTOCOL.INI - Drivername CPQTOK$ not found
	
	CAUSE
	=====
	
	The driver name must be specified in uppercase in the line:
	
	  drivername = cpqtok$
	
	or it will not load.
	
	RESOLUTION
	==========
	
	Change the line to say:
	
	  drivername = CPQTOK$
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
