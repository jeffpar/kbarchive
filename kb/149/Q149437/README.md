---
layout: page
title: "Q149437: Unconnected Token Ring Adapter Won't Initialize"
permalink: kb/149/Q149437/
---

## Q149437: Unconnected Token Ring Adapter Won't Initialize

	Article: Q149437
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	When you set up Windows NT in a token ring environment, the token ring card
	fails to bind if the card is not currently on a ring or if a hardware
	loopback adapter is not installed. This is indicated by Event Log errors
	about dependency services relating to the adapter card's failure to start.
	
	For a token ring  card to initialize properly, it must either have
	connectivity to a Multiple Access Unit (MAU), a Control Access Unit (CAU),
	or a Lobe Attachment Module (LAM); or it must have a simulated connection,
	such as a hardware loopback adapter, installed. Make sure the computer on
	which you want to install Windows NT either is connected to a correctly
	functioning ring or has a hardware loopback adapter installed.
	
	The components of a correctly functioning ring are interrelated as follows.
	CAU and LAM components can replace a MAU. The CAU adds power and port
	monitoring capability to any connected LAMs. The LAM looks like a MAU but
	has 20 connections instead of 8. The ring-in and ring-out connections
	on the CAU extend the connectivity of token ring networks. You can intermix
	MAUs with CAUs and LAMs but you cannot provide any monitoring capability to
	the MAU ports. One CAU can support up to four LAMs for a total of 80
	connections.
	
	Additional query words: 3.10 token ring loopback loop back MAU
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
