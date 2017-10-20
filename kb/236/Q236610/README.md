---
layout: page
title: "Q236610: DirectPlay 6.1a Launches Stable Multiplayer Game Connections"
permalink: /kb/236/Q236610/
---

## Q236610: DirectPlay 6.1a Launches Stable Multiplayer Game Connections

{% raw %}

	Article: Q236610
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Before the release of DirectPlay 6.1a on Windows NT 4.0 Service Pack 6,
	DirectPlay on Windows NT 4.0 had too many race conditions (one process assuming
	the other process has stopped responding or is still responding when the
	opposite is true), blocked joins, and unexpected disconnects to be considered a
	reliable protocol for networked games.
	
	The following are difficulties experienced with networked (multiplayer) games on
	DirectPlay with Windows NT 4.0 before the release of DirectPlay 6.1a:
	
	- A player cannot join a game that is in session.
	
	- A player's connection to the game quits unexpectedly.
	
	- A player with a serial or modem connection cannot maintain a session for an
	  extended period of time.
	
	- A player's gaming screen freezes during a joint session scenario.
	
	- Certain players in the game cannot move while others are moving.
	
	- The players cannot tell when another player has left the game.
	
	- When multiple players leave a game, DirectPlay shuts down itself and the
	  game.
	
	- When the designated host tries to quit a peer-to-peer session, the game
	  crashes and the host's migration does not work.
	
	- During a guaranteed send (typically because a player unexpectedly quits the
	  game), a large timeout delay occurs.
	
	RESOLUTION
	==========
	
	DirectPlay 6.1a is available in Windows NT 4.0 Service Pack 6 and later. To
	resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Typically, the design of networked (multiplayer) games accommodates Windows NT
	4.0 as well as Windows 9x platforms. It is not uncommon for Windows NT to serve
	as a host or server in client-server games or as a lobby platform. Many games
	were developed to work on Windows NT; thus these games can also participate in
	peer-to-peer sessions with a peer-designated host. Windows NT 4.0 is a
	reasonably common development platform for multiplayer features in games.
	
	DirectPlay is the part of DirectX that interfaces between programs and
	communication services (Internet, modem link, network) to allow game players to
	find game sessions and sites and manage the flow of information between hosts
	and players, regardless of the underlying online service or protocol. Microsoft
	DirectX is a group of technologies designed to enhance running programs with
	numerous multimedia elements (graphics, video, 3-D animation, surround sound);
	it is built directly into Microsoft's operating systems. For example, Windows NT
	4.0 contains the DirectX 2.0 release of Microsoft DirectDraw, Microsoft
	DirectSound, and Microsoft DirectPlay, and it supports DirectX 3.0 functionality
	with the addition of Windows NT 4.0 Service Pack 4.
	
	The successful implementation of DirectPlay 6.1a has involved changes to the
	following files for Windows NT 4.0 SP6:
	
	- dPlay
	
	- dplaypr
	
	- paketize
	
	- api
	
	- apphack
	
	- dxdiag
	
	- comport
	
	- dpmodemx
	
	- pdb
	
	- sym
	
	Even though DirectPlay 6.1a is released in Windows NT 4.0 Service Pack 6, the
	DirectPlay 6.1a files can be installed on any computer running Windows NT 4.0
	Service Pack 3 or later.
	
	REFERENCES
	==========
	
	For more information on DirectX and DirectPlay 6.1a, please visit the following
	Microsoft Web site:
	
	  http://msdn.microsoft.com/directx/downloads.asp
	
	For additional information about modification to DirectPlay 6.1a's interprocess
	communication facilities (IPCs), click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q236614 DirectPlay 6.1a Supports Ripple Launch Technology
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
