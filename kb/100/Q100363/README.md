---
layout: page
title: "Q100363: HOWTO: How to Use Network DDE"
permalink: kb/100/Q100363/
---

## Q100363: HOWTO: How to Use Network DDE

	Article: Q100363
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDDE
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Windows for Workgroups, an application can use Dynamic Data Exchange (DDE)
	over a network (NetDDE).
	
	When using normal DDE or DDEML in an application, the various fields were set up
	as follows (using Excel as an example):
	
	 APPLICATION       TOPIC     ITEM
	 Excel             System     Topics
	
	However, to start a DDE conversation over the network, a client application must
	establish the DDE conversation with another machine by specifying the following
	strings for the application name and topic
	
	  application:   \\machine-name\NDDE$
	  topic:           share-name
	
	where the share name is defined in the [DDEShare] section of SYSTEM.INI. The
	default installation of Windows for Workgroups contains the following
	DDEShares:
	
	  [DDEShares]
	  HEARTS$=mshearts,hearts,,15,,0,,0,0,0
	  CLPBK$=clipsrv,system,,31,,0,,0,0,0
	  CHAT$=winchat,chat,,31,,0,,0,0,0
	
	MORE INFORMATION
	================
	
	To illustrate how to use NetDDE, ClipBook will serve as a server example.
	
	The following are specifics about ClipBook:
	
	  Title Bar Caption    = ClipBook Viewer,
	  Executable File Name = Clipbrd.exe,
	  DDE Application Name = clipsrv,
	  DDE Share Name       = CLPBK$
	
	To start a conversation with ClipBook from your application, use the following
	strings:
	
	  APPLICATION             TOPIC        ITEM
	  \\machine-name\NDDE$    CLPBK$     Topics
	
	Under normal DDE, this would be viewed as:
	
	  SERVER NAME       APPLICATION       TOPIC     ITEM
	  \\machine-name    Clipsrv           System     Topics
	
	This will return a list of SHARED "objects" in the ClipBook. Now that you have a
	list of objects, the next step is to query the types of formats available. For
	example, assume that "$Test" was returned as an object. To find a list of
	formats, start a new conversation with ClipBook with the following parameters:
	
	  APPLICATION             TOPIC           ITEM
	  \\machine-name\NDDE$    $Test           FormatList
	
	This will return a list of the formats, each starting with the "&" symbol
	(for example, CF_TEXT will return "&Text").
	
	Using the object name and format type, it is possible to make a connection to the
	server and return the contents of the topic. The last set of parameters is:
	
	  APPLICATION             TOPIC           ITEM
	  \\machine-name\NDDE$    $Test           &Text
	
	If your application wants to share information via NetDDE, use the ClipBook
	program or call one of the NetDDE application programming interfaces (APIs),
	which will create an entry in the [DDEShares] section of SYSTEM.INI. This
	procedure allows other users to access your information.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kbnetwork kbDDE 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
