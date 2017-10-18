---
layout: page
title: "Q140815: Emulator Disconnected after FMI Error Code x 0050"
permalink: kb/140/Q140815/
---

## Q140815: Emulator Disconnected after FMI Error Code x 0050

	Article: Q140815
	Product(s): Microsoft SNA Server
	Version(s): winnt:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.0, 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Wall Data 4.1 3270 emulator disconnects if you press the the PF1 function key.
	
	CAUSE
	=====
	
	The Wall Data 4.1 3270 emulator sends FMI STATUS (ACK) messages in response to
	RQE data with random values in the message key and sequence number fields.
	
	Most of the time the SNA Server service ignores these messages. However, if the
	message key is what the SNA Server service is expecting but the sequence number
	is incorrect, then the SNA Server service closes the PLU- SLU connection with
	the emulator.
	
	RESOLUTION
	==========
	
	Microsoft has corrected this problem. The fix causes EventID 61 to be logged the
	first time that the node receives an invalid STATUS ACK from an emulator.
	Further, if a registry entry is set, it does not close the PLU-SLU connection on
	receiving one of the illegal messages which have the correct message key.
	
	This registry entry is located under the HKEY_LOCAL_MACHINE subtree, under the
	following subkey:
	
	  SYSTEM\CurrentControlSet\Services\SnaServr\  Parameters
	
	The entry is:
	
	  Value Name: BADSEQNO
	  Data Type:  REG_SZ
	
	This registry entry is considered turned on if it is set to any value.
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\SYSTEM\SNASERVR.EXE
	  <snaroot>\SYSTEM\TRCSERVR.EXE
	  <snaroot>\SYSTEM\SNAEVENT.DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200NT kbSNAServ210NT kbSNAServ211NT
	Version           : winnt:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
