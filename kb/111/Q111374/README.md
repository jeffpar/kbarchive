---
layout: page
title: "Q111374: PC Win: Mail Fails on Wollongong TCP/IP and LAN Manager 2.2"
permalink: /kb/111/Q111374/
---

## Q111374: PC Win: Mail Fails on Wollongong TCP/IP and LAN Manager 2.2

	Article: Q111374
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Wollongong TCP/IP with Microsoft LAN Manager version 2.2, the Mail
	Windows client may fail when you access the Mail message file. Error conditions
	include:
	
	- Mail cannot send or receive messages because of problems downloading a
	  message.
	
	- Microsoft Mail caused segment load failure in module USER.EXE.
	
	- An unexpected memory or network error occurred. Computer informed user that
	  changes may have been lost and to quit mail and restart.
	
	- Mail is unable to save information to message file.
	
	- Folder could not be accessed.
	
	- Error occurred while views were being saved. Some views may not be restored
	  at start up next time.
	
	- Some information could not be written to disk. Changes may have been lost.
	
	CAUSE
	=====
	
	This problem is caused by Wollongong's TCP, which does not support the full
	command set of Microsoft TCP. When a session is broken, Wollongong TCP does not
	inform the workstation, causing Mail to exhibit the behavior above.
	
	When you run LAN Manager version 2.2, the opportunistic locking function (called
	Oplocks and designed to enhance performance by caching server data on the
	workstation) disconnects Mail's session. Mail normally opens the Mail message
	file twice (for STORE.DLL and MSSFS.DLL). When one of the DLLs writes to the
	Mail message file, the server issues an Oplock Broken command that is supposed
	to inform all users of the file to flush their buffers and re-read the server
	file. This is to ensure that the cached data on the workstation is current. If
	the re-read operation does not occur within a time-out period (definable in the
	server heuristics) then the connection is broken by the server to ensure the
	data on the workstation is valid. When this happens to Mail, one of the two DLLs
	(the one that hasn't written to the Mail message file yet) still attempts to use
	the (now invalid) session. The DLL fails and one of the error conditions above
	occurs.
	
	
	RESOLUTION
	==========
	
	Do one of the following to eliminate the problems:
	
	- Substitute Microsoft TCP/IP for Wollongong TCP/IP.
	
	- Move the Mail message file to a local storage location.
	
	- Turn the server's Oplock function off. See the LAN Manager Administrator's
	  Reference for the specific heuristic value.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
