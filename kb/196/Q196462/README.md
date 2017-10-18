---
layout: page
title: "Q196462: How RDP Transmits Data in Both LAN and WAN Environments"
permalink: kb/196/Q196462/
---

## Q196462: How RDP Transmits Data in Both LAN and WAN Environments

	Article: Q196462
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RDP uses cached glyphs and bitmaps for transmission across WAN and LAN
	connections and, therefore, does not transfer data in a recognizable form.
	
	MORE INFORMATION
	================
	
	RDP uses a highly efficient encoding algorithm that represent the vast majority
	of Windows graphics operations with a small amount of network traffic. For
	example, most dialog boxes consist of text items, a series of gray, white, and
	so on rectangles, and light and dark shaded lines for a 3-D effect. These are
	not transmitted as comparative deltas from the previous screen, but are encoded
	as pattern blts and cached glyphs. For instance, we can draw the gray dialog box
	background color with "Draw color X at x1,y1,x2,x2". Field compression is always
	enabled such that a second draw with only a change in the x1,y1 position would
	only send an even smaller packet with a single bit representing the fields that
	have not changed, and the minimum possible number of bits to represent the delta
	change in the coordinates. Bulk compression is applied over the final packets
	(when enabled) for an even further improvement.
	
	RDP text is displayed by using glyph caching. Almost immediately, the client
	builds up the required set of glyphs, and the server needs only transmit a short
	hash value to display the text. Bitmap caching works similarly. The light and
	dark gray lines are similar to the patblt in that field compression is highly
	effective. Standard Windows clipping applies such that the RDP driver only
	receives output commands for the areas that are actually visible.
	
	RDP works the same over LAN or WAN, thus the description above holds for both. In
	other words, performance of the protocol does not depend on whether RDP is
	running over LAN or WAN; rather, it depends on what the application is
	displaying. Making a statement about a completely unknown WAN configuration is
	not possible, as each configuration is different. There is a check box for "Low
	Speed Connection" that can be enabled at the client side when making a server
	connection. That check box simply enables further compression on the final
	bitstream; however, it does not change the fundamental RDP algorithm described
	above.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
