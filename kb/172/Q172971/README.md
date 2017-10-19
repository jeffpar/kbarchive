---
layout: page
title: "Q172971: XCLN: Changing the Binding Order Of the Macintosh Client"
permalink: /kb/172/Q172971/
---

## Q172971: XCLN: Changing the Binding Order Of the Macintosh Client

	Article: Q172971
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can change the binding order of the Microsoft Exchange client for Macintosh
	by editing the Exchange Preference file.
	
	MORE INFORMATION
	================
	
	The Exchange Preference file is located in System Folder/Extensions. Copy the
	file for safekeeping by using the Command-D keystroke combination.
	
	WARNING: Using ResEdit incorrectly can cause serious problems that may require
	you to reinstall Microsoft Exchange Client for the Macintosh. Microsoft cannot
	guarantee that problems resulting from the incorrect use of ResEdit can be
	solved. Use ResEdit at your own risk. Make a backup of your file before
	attempting to make changes.
	
	Run ResEdit against the file, and open the STR# (Strings) resource. Open String
	ID 130 "Exchange provider." String 2 is the RPC binding order. Cut and paste to
	put NCACN_IP_TCP (TCP/IP) first in the binding order.
	
	This change can often speed connection to the Exchange Server computer in strict
	TCP/IP environments. Also, by removing NCACN_AT_DSP (AppleTalk) you may prevent
	the Macintosh client from ever using AppleTalk for connecting to the Exchange
	Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
