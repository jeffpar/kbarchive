---
layout: page
title: "Q103761: Adaptec 1742 Controller Traps when LM Install is Restarted"
permalink: /kb/103/Q103761/
---

## Q103761: Adaptec 1742 Controller Traps when LM Install is Restarted

	Article: Q103761
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	A machine with an Adaptec 1742 controller traps when you try to continue a LAN
	Manager installation after installing OS/2.
	
	CAUSE
	=====
	
	The Adaptec 1742 controller comes with a utility that you use to build an
	alternate installation disk A and install OS/2. When you finish installing OS/2
	and reboot the machine to continue installing LAN Manager, the machine traps
	because the alternate disk A fails to copy its BID file to C:\.
	
	RESOLUTION
	==========
	
	Copy the BID file from the alternate disk A to C:\ before continuing to install
	LAN Manager.
	
	Additional query words: 2.20 2.10 2.1 2.10a 2.1a 2.2 adaptec 1742 scsi
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
