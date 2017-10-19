---
layout: page
title: "Q118532: SNADS: Attachments Result in Separate Messages"
permalink: /kb/118/Q118532/
---

## Q118532: SNADS: Attachments Result in Separate Messages

	Article: Q118532
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SNADS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The LinkAge or Soft*Switch SNADS Gateway sends each Microsoft Mail attachment as
	a separate message. This can cause multiple messages if you send a Microsoft
	Mail loopback message--one sent through the gateway and routed back to the
	sender, or sent to another Microsoft Mail user on the other end of the SNADS
	Gateway.
	
	If you send a loopback message from the Windows client with two attachments, you
	receive four messages: two with one attachment each, one with the WINMAIL.DAT
	attachment, and the fourth with the message body.
	
	If you send a loopback message with one OLE object, you receive two messages: one
	with the OLE object, the other with the message body.
	
	If you send a loopback message with two OLE objects, you receive two messages:
	one with both OLE objects, the other with the message body.
	
	REFERENCES
	==========
	
	For more information on the Soft*Switch SNADS Microsoft Mail gateway, contact
	Soft*Switch at (215) 640-9600.
	
	For more information on the LinkAge SNADS Microsoft Mail gateway contact LinkAge
	Office Information Solutions, Inc. at (416) 862-7148.
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSNADS210
	Version           : :2.1
	
	=============================================================================
	
