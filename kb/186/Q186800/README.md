---
layout: page
title: "Q186800: How Bandwidth Throttling Works in IIS 4.0"
permalink: /kb/186/Q186800/
---

## Q186800: How Bandwidth Throttling Works in IIS 4.0

	Article: Q186800
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the bandwidth throttling feature in Internet Information
	Server (IIS) 4.0.
	
	MORE INFORMATION
	================
	
	The throttler checks measured bandwidth versus max bandwidth every 10 seconds,
	not on every request. The throttler works as follows:
	
	1. Every 10 seconds, the throttler:
	
	   - Checks the bandwidth used in the last 60 seconds and compares that to max
	     bandwidth.
	
	   - Sets state to BelowLimit if current usage is less than max.
	
	   - Sets state to EqualToLimit if current usage is about equal to max.
	
	   - Sets state to OverLimit if current usage is greater than max.
	
	2. On every I/O request, the throttler:
	
	   - Checks to see whether the state is BelowLimit, EqualToLimit, or OverLimit.
	
	   - Decides whether to allow the request based on the current state and the
	     type of I/O requested.
	
	  When the state is BelowLimit, the throttler allows all I/O operations. When
	  the state is EqualToLimit, the throttler blocks type V but allows types W, X,
	  Y, and Z. When the state is OverLimit, the throttler rejects type V, blocks
	  types W and X, and allows Y and Z.
	
	I/O operation types are classified according to the following: V is a read, and
	the others are various types of sends. Usually Web server processing includes
	reading the request and sending the response. The throttler is more aggressive
	about stopping reads, because preventing a read causes fewer responses to be
	sent in the future.
	
	On each I/O, the throttler does not attempt to check whether that operation
	exceeds the bandwidth limit. Rather, all that is checked is the current state
	(below, equal, or over) and the type of operation. When the state is over, all
	requests of type V are rejected, and all requests of type W and X are blocked
	until the state goes back to equal or below.
	
	Note that the current state only changes every 10 seconds, when bandwidth usage
	is checked. On a short time scale (for example, 5 seconds), bandwidth limit may
	be exceeded, but on a longer scale (for example, 1 to 2 minutes), bandwidth
	should always be near or below the limit.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
