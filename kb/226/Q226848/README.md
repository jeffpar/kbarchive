---
layout: page
title: "Q226848: SMS: Network Discovery Doesn't Time Out After Failed RPC Call"
permalink: kb/226/Q226848/
---

## Q226848: SMS: Network Discovery Doesn't Time Out After Failed RPC Call

	Article: Q226848
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network Discovery does not time out as expected if a network resource such as a
	Dynamic Host Configuration Protocol (DHCP) server or a workstation does not
	respond to a remote procedure call (RPC). You may see the following lines
	repeatedly in the NetDisc.log:
	
	  ADM: Returning busy from idle status due to outstanding networks in our
	  presence.
	  ADM: Returning busy from idle status due to DHCP thread being busy.
	  DC: Protocol module <AD_ADM.dll> reports it is still busy while checking 
	  idle state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	In configurations earlier than Systems Management Server Service Pack 1, if a
	network resource (such as a DHCP server or a workstation) fails to return an RPC
	call issued from Network Discovery, no discovery data records (DDRs) are
	created. Network Discovery sites for Systems Management Server Service Pack 1
	and later create DDRs for all resources it discovers before the unsuccessful RPC
	call.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
