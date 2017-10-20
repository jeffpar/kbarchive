---
layout: page
title: "Q87179: PROFS: Command-Line Options to Solve Gateway Problems"
permalink: /kb/087/Q87179/
---

## Q87179: PROFS: Command-Line Options to Solve Gateway Problems

{% raw %}

	Article: Q87179
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A complete listing of command-line options for the gateway program (HostDisp or
	VMGATE) can be obtained by typing the program name followed by a question mark
	(for example, HOSTDISP ?).
	
	MORE INFORMATION
	================
	
	Here are some of the options that are most useful when troubleshooting problems
	with the gateway (listed alphabetically):
	
	  Option   Description
	  ------   -----------
	
	  -Inn     "Items." The maximum number of LAN mail items to queue when
	           checking for mail. Up to two decimal digits can be entered;
	           for example, -i0 to -i99 can be specified.
	
	           Note that HostDisp assumes that the mainframe will process
	           all uploaded LAN items within 30 minutes (see the -W option,
	           below). If MS-GATE's response time is very slow (for
	           example, its priority level has been set to a low value),
	           either reduce the -I parameter and/or increase the -W
	           parameter. Default is 50 items. An -i0 value indicates that
	           you want to receive VM mail only; LAN mail will not be
	           uploaded to the mainframe.
	
	  -Knn     "Klicks." Number of seconds to wait after control is
	           returned to HostDisp from the spawned SEND and RECEIVE
	           programs. Allows time to re-establish internal handshaking
	           between the host session and the PC. Default is 3 seconds.
	           Valid range: 0 to 99.
	
	  -L       "Log." Copy screen messages to the LOG\VMGATE.LOG file in
	           the MS Mail data files. If VMGATE.LOG already exists, new
	           messages will be appended.
	
	  -MS      "Messages Sent." Log SENT message synopsis to the
	           LOG\SENT.LOG file in the MS Mail data files.
	
	  -MR      "Messages Received." Log RECEIVED message synopsis to the
	           LOG\RECV.LOG file in the MS Mail data files.
	
	  -Nnnn    "Next." Time interval between checking for mail. Up to three
	           digits can be entered. The valid range is 0 to 999 minutes;
	           for example, -n0 to -n999 can be specified.
	
	           Default is 5 minutes; -n0 value indicates continuous
	           checking.
	
	  -Tnnnnn  "Terminate." Check for VM host mail nnnnn times, then
	           terminate HostDisp. Range: 0 - 2 to the 31st minus one (a
	           ten-digit number). HostDisp will still terminate when the
	           ESC key is pressed by the operator. Omitting this option
	           means terminate only with operator intervention (pressing
	           the ESC key), or because the -W, -BT, -BD, or -BR option
	           limits have been reached. This option is useful if your site
	           uses an automatic logon/logoff program to initiate/terminate
	           HostDisp.
	
	  -V       "Verbose." Provides many informative messages. This option
	           is useful when learning the behavior of this program. If you
	           have also specified the "-L" option, the messages will also
	           be copied to the LOG\VMGATE.LOG text file. Whenever an error
	           is detected, an appropriate message will be displayed
	           whether this option has been specified or not. This option
	           automatically invokes the "-aB" option.
	
	  -Wnn     "Wait." HostDisp waits for a maximum of 99 minutes. After
	           LAN mail has been uploaded, HostDisp waits until MS-GATE
	           signals that it has distributed all LAN mail. Use this
	           option if it takes longer than 30 minutes to process a
	           Directory Services IMPORT request, or if MS-GATE's priority
	           level is low. This option forces an earlier/later exit.
	           Default is 30 minutes; range is 1 to 99.
	
	Notes:
	
	- If HostDisp terminates, the LAN mail that had just been uploaded will not be
	  deleted from the database and will be moved to the VMGATE\ERR subdirectory.
	
	- If the "-E" option was specified, a diagnostic mail message will be sent to
	  that address.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan command line options
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
