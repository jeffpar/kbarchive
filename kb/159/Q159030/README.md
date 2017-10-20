---
layout: page
title: "Q159030: Close Combat: Troubleshooting Head to Head Connection Problems"
permalink: /kb/159/Q159030/
---

## Q159030: Close Combat: Troubleshooting Head to Head Connection Problems

{% raw %}

	Article: Q159030
	Product(s): Microsoft Home Games
	Version(s): MACINTOSH:1.0,1.0a
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for the Macintosh, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps necessary to troubleshoot problems you may
	encounter when playing a head-to-head game of Close Combat on the Macintosh.
	
	MORE INFORMATION
	================
	
	If you encounter problems when trying to play a head-to-head game, try the
	following:
	
	1. If you have Close Combat 1.0, upgrade to 1.0a. To determine the version of
	  Close Combat that you have, click About Close Combat on the Apple menu. The
	  version is displayed towards the bottom of the right corner.
	
	  To upgrade to Close Combat version 1.0a, download the update from the Close
	  Combat World Wide Web site. This site is located on the Microsoft games page
	  at:
	
	  http://www.microsoft.com/games
	
	2. If you are using Open Transport 1.1 or MacTCP, upgrade to Open Transport
	  1.1.2. Open Transport 1.1.2 provides many corrections including the ability
	  for Open Transport to be installed on the 52xx, 53xx, 62xx, and 63xx series
	  of Macintoshes. The release of Open Transport 1.1.2 eliminates the need for
	  the old MacTCP network technology.
	
	  The Open Transport 1.1.2 update can be found on Apple's web site at:
	
	  http://www.apple.com
	
	  Apple recommends using Open Transport on System 7.5.3 or later. If you do not
	  have System 7.5.3 and have a previous version of 7.5, the update to 7.5.3 can
	  also be found on Apple's web site.
	
	3. If you are using either MacPPP or FreePPP to establish your Internet
	  connection, set the Flow Control to CTS only and set the idle timeout to none
	  in the appropriate Control Panel.
	
	4. Because both Open Transport and Close Combat are native to the Power
	  Macintosh, they require large amounts of RAM. To decrease the amount of
	  memory that these programs require, turn on Virtual Memory. To turn on
	  Virtual Memory, do the following:
	
	  a. On the Apple menu, click Control Panels, and then click Memory.
	
	  b. Turn Virtual Memory on and set the amount of disk space used for Virtual
	     Memory to the lowest setting allowed.
	
	  NOTE: To provide optimal performance when running your computer with Virtual
	  Memory turned on, it is recommended that you upgrade to System 7.5.5. Earlier
	  versions of the System software may cause performance degradation if Virtual
	  Memory is turned on. These problems were corrected with System 7.5.5. This
	  update is also available on Apple's web site.
	
	Additional query words: 1.00, mac cc modem multi play multiplayer another player a friend multiple multi-player
	
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbCloseCombatMac
	Version           : MACINTOSH:1.0,1.0a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
