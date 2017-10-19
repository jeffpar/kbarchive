---
layout: page
title: "Q92439: PC DB: Preventing .KEY Files from Locking Up on Networks"
permalink: /kb/092/Q92439/
---

## Q92439: PC DB: Preventing .KEY Files from Locking Up on Networks

	Article: Q92439
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 2.1x or 3.0 of Microsoft Mail for PC Networks, your .KEY file may
	become locked open, causing your computer to stop responding (hang). This may
	happen when a network error occurs on your workstation while you have a Mail
	client minimized or in the background that does not use the Mail Message File
	(.MMF) format. For example, Microsoft Mail for Windows, version 2.1x, Microsoft
	Mail for MS-DOS, and Microsoft Mail for AppleTalk Networks do not use the .MMF
	format.
	
	CAUSE
	=====
	
	It is likely that Microsoft Mail was in the process of polling for new mail. By
	default, when Microsoft Mail polls for new mail, it opens the key file. If a
	network error occurs, the key file may become locked open when the network
	operating system experiences a network fault on a file that, by default, lacks
	sharable attributes.
	
	RESOLUTION
	==========
	
	To resolve the problem, you need to change the network security attributes on
	the key files. The exact nature of the change depends on which network operating
	system you use. In Novell NetWare versions 2.1x through 3.11, you need to break
	the connection that is holding the key file open, and then place read (r), write
	(w), and sharable (s) attributes on all existing key files by using the NetWare
	FLAG command. The syntax is as follows:
	
	     FLAG *.* srw
	
	By default, the key files have only read and write attributes. When you add a new
	user to your Microsoft Mail system, remember to use the FLAG command to mark the
	new user's key files as sharable.
	
	Additional query words: 2.1x 3.00 MMF key share
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0
	
	=============================================================================
	
