---
layout: page
title: "Q121917: CONN: Stuck Handshake File When Postoffice on NTAS 3.1"
permalink: /kb/121/Q121917/
---

## Q121917: CONN: Stuck Handshake File When Postoffice on NTAS 3.1

{% raw %}

	Article: Q121917
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Mail Connection Gateway version 3.2 MACGATE directory is on an
	Microsoft Windows NT Advanced Server (NTAS) version 3.1 volume that is shared to
	the Macintosh via Services For Macintosh (SFM), the "handshake" file used by the
	Connection Gateway to verify that the opposite side of the gateway is still
	operating can become "stuck" in the pctomac subdirectory. As a result, it is not
	deleted by the Microsoft Mail for AppleTalk Networks mail server running the
	Macintosh component of the gateway. Mail will continue to flow from AppleTalk
	Mail to Mail for PC Networks, but will not move from Mail for PC Networks to
	AppleTalk Mail.
	
	CAUSE
	=====
	
	The directory view presented to the Macintosh by SFM does not match the
	directory view seen by MS-DOS or by Windows NT. The handshake file in the
	pctomac directory is not visible to the Macintosh; thus, the Macintosh cannot
	delete it. This causes the PC component to believe the Macintosh has stopped
	running, so it will not put mail into the pctomac directory. It will continue to
	process the mactopc directory; thus, the Macintosh component will continue to
	move messages to the pctomac directory.
	
	RESOLUTION
	==========
	
	Upgrade the NTAS version 3.1 server to NTAS version 3.5. This version of NTAS
	and the corresponding SFM do not display this behavior.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
