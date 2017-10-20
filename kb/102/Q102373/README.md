---
layout: page
title: "Q102373: Token Ring Bridge/Ring Numbering and Routing Avoids Looping"
permalink: /kb/102/Q102373/
---

## Q102373: Token Ring Bridge/Ring Numbering and Routing Avoids Looping

{% raw %}

	Article: Q102373
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	On a token ring topology, all bridges and rings are identified by a unique
	number (4 bits for bridges, 12 bits for rings). Before forwarding a frame, a
	bridge adds its bridge number and the ring number of the next ring to the source
	routing information built up in the media access control header. The first
	bridge to forward also adds the originating ring's number. Other bridges decide
	whether to forward a frame by checking if the ring on the other side is already
	in the source routing information for that field--if it is, they do not forward
	it.
	
	Forwarding is complicated somewhat by a distinction between single- route and
	general (aka all-route) broadcasts. A single-route broadcast is forwarded only
	by bridges that are defined to be in the spanning tree for rings, which can be
	defined manually or automatically by a bridge-to-bridge protocol. General route
	broadcasts are forwarded by all bridges, subject to the restriction defined in
	the first paragraph.
	
	So, if you had three bridges A, B, and C in a ring, two of them would be defined
	as in the spanning tree and the other one wouldn't, and a single route broadcast
	wouldn't loop. A general broadcast would go around in both directions (therefore
	appearing on rings B and C twice) but would not be forwarded back onto A.
	
	All NetBIOS broadcast frames (datagrams, name query, remote adapter status) are
	sent as single-route broadcasts, so they will appear on a given ring only once
	(unless the spanning tree is misconfigured).
	
	REFERENCES
	==========
	
	IBM Token-Ring Network Architecture Reference, IBM part # SC30- 3374-02 39F9354.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
