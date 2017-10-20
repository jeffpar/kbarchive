---
layout: page
title: "Q166625: Host Print Service Stops Responding After Invalid SCS Code"
permalink: /kb/166/Q166625/
---

## Q166625: Host Print Service Stops Responding After Invalid SCS Code

{% raw %}

	Article: Q166625
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A 3270 print session gets stuck in a spooling state when an invalid SCS control
	code is sent to the host print service. SNA Server Manager is slow to respond to
	requests when this problem occurs.
	
	The Windows NT Application Event Log logs an Event 21, similar to the following:
	
	  
	
	  Event ID: 21
	  Source: SNA Server
	  Description: (1124) Negative Response Sent on Connection <connection
	  name>
	                       (SENSE = 1005)
	
	When you stop the SNA Server host print service, the system returns to its normal
	responsiveness.
	
	CAUSE
	=====
	
	The SNA Server host print service does not correctly reset an error field after
	an invalid SCS control code is received from the host. This causes the print
	service to get into a loop that prevents print jobs from completing and may
	cause the system's responsiveness to slow, especially in SNA Server Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Print service internal traces that are captured when this problem occurs may
	include data similar to the following:
	
	  INTRN SNAP-3270   S3PR1DAT            HPBYTE                  43
	  INTRN SNAP-3270   S3PR1DAT            START OF SHF/SVF/SLD
	  INTRN SNAP-3270   S3PR1DAT            CONTINUE
	  INTRN SNAP-3270   S3PR1DAT            HPORDER                 2
	  INTRN SNAP-3270   S3PR1DAT            PRTDSTRT                2872
	  INTRN SNAP-3270   S3PR1DAT            HPBYTE                  131
	  INTRN SNAP-3270   S3PR1DAT            SHF/SVF/SLD 2ND BYTE    83
	  INTRN SNAP-3270   S3PR1DAT            EXIT
	  INTRN SNAP-3270   S3PRDSCS           SCS DATASTREAM ERROR
	  INTRN SNAP-3270   S3PRDSCS           EXIT
	  INTRN SNAP-3270   S3PRRSCS           ENTRY
	
	
	With the fix applied, the SNA Server host print service correctly handles invalid
	SCS control codes; the print service does not get into the loop that causes it
	to stop responding. The updated print service prints everything contained in the
	print job up to the invalid SCS control code. After the invalid SCS control
	code, the print service notifies the printer that the print job is finished.
	
	Additional query words: LU1 3287
	
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
