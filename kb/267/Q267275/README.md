---
layout: page
title: "Q267275: SMS: Multiple-Line Comments in Collections Are Not Replicated"
permalink: kb/267/Q267275/
---

## Q267275: SMS: Multiple-Line Comments in Collections Are Not Replicated

	Article: Q267275
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbCollections kbsms200preSP3
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create new collections at a parent site and replicate the collections
	to child sites, you may not be able to view all of the lines in the Comment box
	from the child site.
	
	For example, if a Comment box for a collection at the parent site includes the
	following text
	
	  this is line one (user presses ENTER for the next line)
	  this is line two
	
	the Comment box for the collection only shows the following first line when you
	replicate the collection and view it from a child site:
	
	  this is line one
	
	NOTE: This bug also causes the collection schedule information not to replicate
	on the downstream servers and causes the collection flag to be incorrectly set
	to "0" at the child sites.
	
	WORKAROUND
	==========
	
	To work around this problem, use only single-line entries in the Comment box of
	collection definitions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbCollections kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
