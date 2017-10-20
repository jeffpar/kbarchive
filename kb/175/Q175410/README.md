---
layout: page
title: "Q175410: XFOR: IMS/IMC Will not Dial an ISP as Specified"
permalink: /kb/175/Q175410/
---

## Q175410: XFOR: IMS/IMC Will not Dial an ISP as Specified

{% raw %}

	Article: Q175410
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server version 5.0 Internet Mail Service (IMS) and the
	Microsoft Exchange Server version 4.0 Internet Mail Connector (IMC) may stop
	periodically when dialing an Internet Service Provider (ISP).
	
	The dial-up schedule is specified in the Dial-up Connections property page in the
	Microsoft Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	Many ISP's require some sort of user input after the initial modem connection
	has been established. Typically this is to select the service type (for example,
	PPP) and to enter the user account details, in other words, the username and
	password. Because this input needs to be automated for the IMS or IMC to connect
	and send or receive mail, a 'post-connect' script is used. This script is
	usually supplied by the ISP, but it is also possible for you to write your own.
	Please refer to the script.doc in the \winnt\system32\ras directory on your
	Windows NT Server for further information on writing these scripts.
	
	Occasionally, the ISP may not respond to the 'post-connect' script and eventually
	the IMS or IMC will disconnect from the ISP leaving the script processor
	running. This causes the Remote Access Service (RAS) port to remain locked open,
	preventing any further connections. The IMS or IMC will appear to not make any
	further attempts to dial the ISP. Stopping and starting the IMS or IMC will
	cause the following event to be logged in the Windows NT Application Log on each
	attempt to dial the ISP:
	
	  Event ID: 4106
	  Source: MSExchangeIMC
	  Category: SMTP Interface Events
	
	  The dial-up connection 'OzEmail' could not be made. The error reported
	  was: [633] The port is already in use or is not configured for Remote
	  Access dial out.
	
	Rebooting the Windows NT Server will free the locked RAS port.
	
	RESOLUTION
	==========
	
	To avoid this situation, a script will need to be written or modified that has
	specific timeout parameters for each 'waitfor' command. The success of each
	'waitfor' command should also be tested before the script proceeds to the next
	command. If the situation arises where the ISP does not respond to the script,
	the script will stop processing after the timeout has been reached and when the
	IMS or IMC disconnects, the RAS port will not remain locked thus allowing the
	IMS or IMC to redial as scheduled.
	
	Here is a sample script with the additional timeout logic added. Please note that
	this script is specific to the OzEmail ISP in Australia and may not work with
	any other ISP. Please contact your ISP for further information as to the script
	requirements.
	
	    ; OzEmail Script for PPP Access
	    ;
	    ; Last revised: October 10 1997
	
	    ; Main entry point to script
	
	    proc main
	
	       waitfor "ervice?" until 90
	       if $SUCCESS then   ;  Checking whether this is successful...
	       transmit "p^M"
	
	       waitfor "sername:" until 60
	       if $SUCCESS then   ;  Checking whether this is successful...
	       transmit $USERID, raw
	       transmit "^M"
	
	       waitfor "assword:" until 60
	       if $SUCCESS then   ;  Checking whether this is successful...
	       transmit $PASSWORD, raw
	       transmit "^M"
	
	       endif
	       endif
	       endif
	
	    endproc
	
	Additional query words: exchange IMC IMS dial RAS locked 633 dun
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
