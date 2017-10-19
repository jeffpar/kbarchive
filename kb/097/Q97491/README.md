---
layout: page
title: "Q97491: Duplicate LOGON Names Can Disrupt Messenger Service"
permalink: /kb/097/Q97491/
---

## Q97491: Duplicate LOGON Names Can Disrupt Messenger Service

	Article: Q97491
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Duplicate names registered to the messenger service cause the lengthy error
	message shown below. The process by which duplicate names can occur and
	suggestions for avoiding the problem are discussed after the message.
	
	LAN Man 2.1a, Token Ring, NetBEUI
	
	Sample from LM Error Log:
	
	  
	
	  MESSENGER      3106     01-25-93 05:47pm
	  NET3106: An unexpected NCB was received. The NCB is the data.
	  91 19 3F 08 58 05 27 01 C8 00 2A 20 20 20 20 20   ..?.X.'...*
	  20 20 20 20 20 20 20 20 20 20 41 44 4D 49 4E 20
	  ADMIN
	  20 20 20 20 20 20 20 20 20 03 3C 28 28 00 02 00
	  .<((...
	  00 19 00 00 00 00 00 00 00 00 00 00 31 03 00 00
	  ............1...
	
	  MESSENGER      3106     01-25-93 05:47pm
	  NET3106: An unexpected NCB was received. The NCB is the data.
	  92 02 3F 08 58 05 27 01 C8 00 2A 20 20 20 20 20   ..?.X.'...*
	  20 20 20 20 20 20 20 20 20 20 41 44 4D 49 4E 20
	  ADMIN
	  20 20 20 20 20 20 20 20 20 03 3C 28 28 00 02 00
	  .<((...
	  00 08 00 00 00 00 00 00 00 00 00 00 31 03 00 00
	  ............1...
	
	  (1st error)
	  Byte 1:(NCB CMD)   91 = NCB Listen
	  Byte 2:(RET CODE)  19 = Name Conflict
	
	  (2nd error)
	  Byte 1:  92 = NCB Hangup
	  Byte 2:  08 = Illegal local session Number
	
	MORE INFORMATION
	================
	
	This is caused by two machines starting up with the same "unique" name. Although
	this shouldn't happen, there are certain unusual conditions when it can and
	does.
	
	In this example, the Admin logs in on one machine, replacing the machine name as
	the primary NetBIOS name and making the original machine name secondary.
	Sometime later, ADMIN logs in on the second server. When the standard login
	broadcast goes out to see if there is another system entity logged on as ADMIN,
	the first machine doesn't answer for some reason--maybe it has been disconnected
	momentarily or is using a slow link and doesn't respond in time. The second
	ADMIN thus is configured as the only ADMIN in the system, so it supersedes the
	machine name as the primary NetBIOS name just as the first ADMIN did on its
	machine. Now two machines have ADMIN as their primary NetBIOS name and when
	alerts go out to user ADMIN, messenger generates the long message above
	reporting a duplicate name on the net.
	
	If all the machines could "see" each other all the time, the first Admin to log
	on would be known as Admin and subsequent Admins would use their machine names.
	This would ensure unique NetBIOS names and alleviate the problem. But system
	characteristics such as slow links keep machines from being in constant contact
	and problems such as this one, though rare, can occur.
	
	To fix this, make sure your remote links are always there and up to standards. If
	you logon Admin at several machines in your system, get a different Admin login
	name for each server.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
