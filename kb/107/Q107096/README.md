---
layout: page
title: "Q107096: PROFS: File Format for Semi-Auto Address List Request Token"
permalink: /kb/107/Q107096/
---

## Q107096: PROFS: File Format for Semi-Auto Address List Request Token

{% raw %}

	Article: Q107096
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.1,3.2,3.3,3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.1, 3.2, 3.3, 3.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail Gateway to IBM PROFS and OfficeVision, you can make semi-
	automatic address list exchanges that do not require the administrator to start
	them manually.
	
	To import a PROFS address list into MS Mail, run the Microsoft Mail ADMIN.EXE and
	select the GATEWAY, PROFS, and IMPORT menu to generate a TOKEN. This is a
	special message that directs the PROFS Gateway host access component to reply
	with the address list for users on a particular VM node.
	
	EXAMPLE
	-------
	
	Here is an example token that instructs the PROFS gateway to download the address
	list for all TESTNODE users and send the list to the MS Mail postoffice with
	node (postoffice) name PROFS30. The address list is prepared and sent to
	PROFS30, where it is automatically imported:
	
	  Download Profs Names File for: PROFS30
	  TO: *SPECIAL(PROFLIST)
	  FROM: $SPECIAL GATENET/PROFS30
	  DATE: 05-14-93
	  TIME: 09:01
	  SUBJECT: Download Profs Names File for: TESTNODE
	  PRIORITY: 3
	  TEXT: 2
	
	
	Additional query words: 3.10 3.20 3.30 3.40
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS310 kbMailGateIBMPROFS330 kbMailGateIBMPROFS340
	Version           : :3.1,3.2,3.3,3.4
	
	=============================================================================
	

{% endraw %}
