---
layout: page
title: "Q103886: OSI Model: Standard Data Flow Architecture"
permalink: kb/103/Q103886/
---

## Q103886: OSI Model: Standard Data Flow Architecture

	Article: Q103886
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	STANDARD DATA FLOW ARCHITECTURE
	
	The OSI model presents a standard data flow architecture, with
	protocols specified so that layer N at the destination station
	receives exactly the same object that was sent by layer N at the
	source station.
	
	- The sending process passes data to the application layer which attaches an
	  application header (AH).
	
	- The presentation layer may transform the data in various ways, and possibly
	  add a header to the front, before giving the result to the session layer. The
	  presentation layer aware of which portion of the data given to it by the
	  application layer is AH, if any, and which portion is actual user data. Nor
	  does it need to know.
	
	- This process is repeated until the frame reaches the data link layer, where,
	  in addition to a header, a trailer (DT) is added to aid in frame
	  synchronization. The frame is then passed down to the physical layer, where
	  it is actually transmitted to the receiving station.
	
	- On the receiving station, the various headers (and DT) are stripped off one
	  by one as the message is passed up the layers until it finally reaches the
	  receiving process.
	
	Remember that although the actual data transmission is vertical,
	each layer is programmed as though it were really horizontal. When
	the sending transport layer, for example, gets a message from the
	session layer, it attaches a transport header and sends it to the
	receiving transport layer. From its point of view, the fact that it
	must first hand the message to the network layer on its own machine is
	technically unimportant.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
