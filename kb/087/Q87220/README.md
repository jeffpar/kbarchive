---
layout: page
title: "Q87220: PROFS: What Happens in the Event of a Mail Failure?"
permalink: /kb/087/Q87220/
---

## Q87220: PROFS: What Happens in the Event of a Mail Failure?

{% raw %}

	Article: Q87220
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In all cases, any mail that fails to be delivered is either returned to the
	sender or copied to a location where the administrator can retrieve and
	re-submit it.
	
	MORE INFORMATION
	================
	
	When sending mail from the LAN, a Microsoft Mail user can address mail to any
	user on any VM node name. Mail can be addressed incorrectly in any of the
	following ways:
	
	1. If the message is addressed to an invalid node name, it is returned to the
	  originator with an error message. (Note that this is dependent on the Host
	  Access code being at least version 3.1; earlier versions of Host Access send
	  the message to the VM INFORM_ID as an incident report.)
	
	2. If the MS Mail user sends a message addressed to a valid node name, but an
	  invalid user, it is trapped by the remote node's RSCS. The originator will
	  never know that the mail did not reach its intended destination. This
	  behavior, although not ideal, is consistent with the way things work in VM.
	
	3. If a VM user sends mail to an invalid node name, mail is returned to the VM
	  user quickly.
	
	4. If the VM user sends a message to a valid node name, but an invalid user, the
	  situation is the same as in item 2 above.
	
	5. If mail is addressed correctly, but fails in the transfer from LAN to host
	  (or vice versa), the mail is copied into the VMGATE\ERR directory of the mail
	  system database. The LAN administrator is informed of this occurrence and can
	  resubmit the file to the VMGATE directory.
	
	
	Additional query words: 3.00 pcmail profslan mail failure
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
