---
layout: page
title: "Q260348: PRB: Tracking Tab Is Missing with Customer Post Form"
permalink: /kb/260/Q260348/
---

## Q260348: PRB: Tracking Tab Is Missing with Customer Post Form

	Article: Q260348
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbMsg
	Last Modified: 11-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Routing Wizard sample is included with Microsoft Exchange Server 5.5 SP1. This
	wizard can be used to create routing logic for items posted to a public folder.
	Reviewer approval or rejection information is displayed in a tracking tab of the
	posted message (after the reviewer actions).
	
	If a custom form is used to create the original posted message, a tracking tab
	will not be available. The final approval or rejection information will be
	appended to the body of the item.
	
	CAUSE
	=====
	
	The routing agent created by the Routing Wizard modifies the original message
	posted to the public folder. The MessageClass is changed to IPM.Note, which
	enables Outlook to display the tracking tab. A post that is based on a custom
	form will not be modified by the Routing Wizard agent.
	
	RESOLUTION
	==========
	
	There are two workarounds:
	
	- Use the default post message form built into Outlook to create the items for
	  routing.
	
	- Modify the routing map for your needs.
	
	STATUS
	======
	
	This behavior is by design.
	
	The Routing Wizard provides useful routing logic. It also provides an idea about
	what can be done with Microsoft Exchange Server Routing Objects. However, the
	Routing Wizard is meant as a sample, not as the definitive mechanism to effect
	routing logic. Information on how to modify the routing agent is outside the
	scope of this article. The Microsoft Developer Network (MSDN) is the best source
	of information on that topic.
	
	MORE INFORMATION
	================
	
	This information applies to a public folder with a routing agent installed by
	the Routing Wizard.
	
	The Routing Wizard sample agent processes items posted to the folder where it is
	installed. One or more copies of the item are sent to the reviewers (recipients
	identified in the routing map). The original message itself is changed from a
	post to a message; this is accomplished by changing the MessageClass property
	from IPM.Post to IPM.Note. The IPM.Note class uses the standard message form,
	which has the tracking tab. Post forms do not have the tracking tab.
	
	You can observe this transformation by posting a message to your routing public
	folder. When the routing agent runs (it may take a few minutes), you will see
	that the posted message icon disappears and a new mail item is created.
	
	The tracking tab is actually enabled when the first reviewer either approves or
	rejects the item. If the original posted message was created with a custom form,
	its MessageClass will not be IPM.Post (for instance, it may be
	IPM.Post.MyCustomForm). The routing agent will not change the post to a note;
	this will preserve the custom format of the Post. All other aspects of the
	routing process still occur, and the final results are added to the body of the
	post.
	
	The Routing Wizard sample application illustrates the type of routing tools that
	can be built easily with Microsoft Exchange Routing. With the Routing Wizard,
	you can define and install simple sequential or parallel routing and approval
	logic into Microsoft Exchange Server folders.
	
	REFERENCES
	==========
	
	For additional information, see the Exchange Platform SDK, available in the MSDN
	Library.
	
	Additional query words: Event Scripting Agent, Routing Wizard
	
	======================================================================
	Keywords          : kbMsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
