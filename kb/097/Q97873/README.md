---
layout: page
title: "Q97873: LAN Man NetBEUI Cannot Accommodate More than 256 Sessions"
permalink: kb/097/Q97873/
---

## Q97873: LAN Man NetBEUI Cannot Accommodate More than 256 Sessions

	Article: Q97873
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	You cannot configure a LAN Manager server running NetBEUI (even with multiple
	net cards) to overcome the 256-session limit.
	
	MORE INFORMATION
	================
	
	LAN Manager NetBEUI cannot accommodate more than 256 sessions. That is an
	absolute limit. NetBEUI can distribute up to 256 sessions across multiple
	network adapters, but the total on the network still cannot exceed 256.
	
	LAN Manager can deal with more than 256 sessions if you install multiple protocol
	drivers, each of which can accommodate up to 256 sessions. This requires
	different protocols, however, because NetBEUI will not tolerate multiple
	instances of itself loaded on the same station.
	
	
	If a station is configured with two (or more) net cards, each card must be
	attached to a physically separate network. If there is a path for NetBEUI
	packets between Adapter A and Adapter B, you will receive "Error 52: Duplicate
	Name on Network."
	
	So that means you can do this:
	
	                 __________
	                |  Server  |
	                |__|____|__|
	
	--------------------|    |----------------------
	
	But not this:
	
	                 __________
	                |  Server  |
	                |__|____|__|
	
	--------------------|----|
	
	Nor this:
	
	                 ___________
	                |  Server  |
	                |__|____|__|
	
	------|-------------|    |----------------|-----
	 /---|--\                            /---|--\ 
	 |Bridge|                            |Bridge|
	 \---|--/                            \---|--/ 
	------|-----------------------------------|-----
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
