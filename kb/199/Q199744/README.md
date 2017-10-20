---
layout: page
title: "Q199744: XFOR: Meeting Request Behavior on Delegation between Systems"
permalink: /kb/199/Q199744/
---

## Q199744: XFOR: Meeting Request Behavior on Delegation between Systems

{% raw %}

	Article: Q199744
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Exchange Server user delegates a meeting to a Lotus Notes user, Exchange
	Server does not inform the Notes meeting chairperson of this delegation. The
	delegated Notes user receives the original invitation. If the delegated Notes
	user accepts the invitation and the Notes meeting chairperson later sends a
	confirmation message for the invitation, the delegate receives the confirmation
	message as well as a new invitation.
	
	CAUSE
	=====
	
	Notes does not apprise the Notes meeting chairperson of this delegation. Thus,
	it does not send a decline message to the chairperson or inform him or her that
	the delegation has taken place.
	
	Consequently, the Notes meeting chairperson thinks the Exchange Server user is
	still part of the invitee list and leaves the user in the "No Response" field
	instead of moving the user to the "Delegate" field.
	
	In this situation, the delegated Notes user receives the original invitation by
	virtue of the delegation. He or she also receives a new invitation, if he or she
	accepts the invitation and the Notes meeting chairperson later sends a
	confirmation message for the invitation.
	
	The correct behavior is for the delegate to receive only the confirmation
	message.
	
	WORKAROUND
	==========
	
	There are two workarounds to this problem.
	
	- Do not delegate between users on different systems (such as Lotus Notes and
	  Exchange Server).
	
	  -or-
	
	- If the Exchange Server user sends the decline message in the initial stage of
	  the meeting request informing the Notes chairperson of the delegation, the
	  Notes chairperson can move the Exchange Server user to the Delegate field,
	  and a confirmation message would not be sent. The delegated Notes user then
	  receives only a single confirmation message.
	
	MORE INFORMATION
	================
	
	This problem is the side-effect of the behavior mismatch between the Notes and
	Exchange Server delegation strategies. In Notes, "delegate" really means
	"forward the meeting;" in Exchange Server, "delegate" means "allowing access to
	someone else to accept or decline."
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
