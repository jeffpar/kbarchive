---
layout: page
title: "Q87218: PROFS: Additional Command-Line Options for the Gateway"
permalink: /kb/087/Q87218/
---

## Q87218: PROFS: Additional Command-Line Options for the Gateway

{% raw %}

	Article: Q87218
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Aside from the command-line options that are necessary in most mail
	environments, there are other options that can add functionality and value to
	the gateway. A few of these types of options are as follows:
	
	  Option          Description
	  ------          -----------
	
	  -BD, -BT, -BR   Often used at sites where the mainframe is shut
	                  down for regularly scheduled system maintenance.
	                  This enables the LAN administrator to gracefully
	                  shut down the Gateway PC before the system maintenance
	                  begins, even if it occurs during non-work hours.
	
	  -MR, -MS        Cause the gateway program to write to the SENT.LOG
	                  and RECV.LOG files on the gateway postoffice. This
	                  allows the LAN administrator to track the exchange
	                  of mail with the host.
	
	  -RD, -RE        Allow the LAN administrator to specify whether both
	                  encapsulated and unencapsulated copies of each HUB
	                  mail message are sent. Used properly, these options
	                  can reduce the size of the file being transferred as
	                  well as the transfer time.
	
	  -Snnn           Specifies how long HostDisp (or VMGATE) will wait
	                  when initiating a session with the gateway VM ID.
	                  If no response is received from the VM ID, HostDisp
	                  will end the session. This option should be used if
	                  the host is not always functioning reliably.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan command line options
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
